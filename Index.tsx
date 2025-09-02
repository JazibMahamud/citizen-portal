import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Users,
  CheckCircle,
  Globe,
  Clock
} from 'lucide-react';

export default function Index() {
  const keyFeatures = [
    {
      icon: Shield,
      title: 'Secure Access',
      description: 'End-to-end encrypted citizen data protection'
    },
    {
      icon: Zap,
      title: 'Instant Services',
      description: 'Real-time processing of government applications'
    },
    {
      icon: Globe,
      title: 'Unified Platform',
      description: 'All ministries and departments in one portal'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Access services anytime, anywhere'
    }
  ];

  const quickStats = [
    { number: '50+', label: 'Government Services' },
    { number: '24/7', label: 'Emergency Support' },
    { number: '100%', label: 'Digital Process' },
    { number: '1M+', label: 'Citizens Served' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              এক পোর্টালে সব নাগরিক সেবা
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              One Portal for All Citizen Services
            </p>
            <p className="text-lg mb-12 text-white/90 max-w-3xl mx-auto">
              Experience seamless digital governance with instant access to all government services, 
              emergency support, and real-time updates in one unified platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100" asChild>
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/emergency">Emergency Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for efficiency, designed for citizens, powered by innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-green-700">Essential Services</CardTitle>
                <CardDescription>Birth certificates, tax filing, utility payments</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full group-hover:bg-green-700" asChild>
                  <Link to="/services">Access Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-red-700">Emergency Services</CardTitle>
                <CardDescription>Police, fire, medical emergency hotlines</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-red-600 hover:bg-red-700 group-hover:bg-red-700" asChild>
                  <Link to="/emergency">Emergency</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-blue-700">Tools & Calculators</CardTitle>
                <CardDescription>Tax calculator, VAT calculator, service tracker</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700" asChild>
                  <Link to="/tax-calculator">Calculate</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Highlight */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Digital Bangladesh Initiative
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Transforming citizen experience through technology, transparency, and efficiency. 
              Join millions of citizens already benefiting from our unified digital platform.
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-300" />
                <span>Paperless Process</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-300" />
                <span>Real-time Updates</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-300" />
                <span>Secure & Fast</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Access all government services with a single login
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
            <Link to="/login">
              Login to Portal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}