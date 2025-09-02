import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  FileText, 
  Phone, 
  Bell,
  User,
  LogOut,
  Menu,
  Calculator,
  MessageCircle,
  CreditCard,
  Smartphone,
  Users
} from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Layout({ children, showSidebar = false }: LayoutProps) {
  const location = useLocation();

  const mainNavigation: NavigationItem[] = [
    { name: 'Services', href: '/services', icon: FileText },
    { name: 'Emergency', href: '/emergency', icon: Phone },
    { name: 'Notices', href: '/notices', icon: Bell },
    { name: 'Community', href: '/citizen-hub', icon: Users },
  ];

  const dashboardNavigation: NavigationItem[] = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'NID Services', href: '/nid-services', icon: CreditCard },
    { name: 'Digital Services', href: '/digital-services', icon: Smartphone },
    { name: 'Community Hub', href: '/citizen-hub', icon: Users },
    { name: 'Tax Calculator', href: '/tax-calculator', icon: Calculator },
    { name: 'Complaints', href: '/complaints', icon: MessageCircle },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  const Navigation = ({ items, mobile = false }: { items: NavigationItem[], mobile?: boolean }) => (
    <nav className={`flex ${mobile ? 'flex-col space-y-2' : 'space-x-6'}`}>
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? 'bg-green-100 text-green-800'
                : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
            }`}
          >
            <Icon className="h-4 w-4" />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">BD</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Citizen Portal</h1>
                <p className="text-xs text-gray-600">নাগরিক সেবা</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <Navigation items={mainNavigation} />
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              </div>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Menu className="h-4 w-4" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <div className="mt-6 space-y-4">
                      <Navigation items={mainNavigation} mobile />
                      <div className="border-t pt-4">
                        <Button className="w-full mb-2" asChild>
                          <Link to="/login">Login</Link>
                        </Button>
                        <Button className="w-full" variant="outline" asChild>
                          <Link to="/dashboard">Dashboard</Link>
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar for Dashboard */}
        {showSidebar && (
          <aside className="hidden lg:block w-64 bg-white shadow-sm min-h-screen">
            <div className="p-6">
              <div className="space-y-1">
                {dashboardNavigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-green-100 text-green-800'
                          : 'text-gray-600 hover:text-green-700 hover:bg-green-50'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Citizen Service Portal</h3>
              <p className="text-gray-300 text-sm">
                Digital Bangladesh Initiative - Transforming governance through technology
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/emergency" className="text-gray-300 hover:text-white">Emergency: 999</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-white">All Services</Link></li>
                <li><Link to="/notices" className="text-gray-300 hover:text-white">Latest Updates</Link></li>
                <li><Link to="/citizen-hub" className="text-gray-300 hover:text-white">Community Hub</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <p className="text-gray-300 text-sm">
                Helpline: 333<br />
                Email: support@gov.bd
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Government of Bangladesh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}