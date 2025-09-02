import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { 
  User, 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  TrendingUp,
  Calendar,
  CreditCard,
  Shield,
  Bell,
  Download,
  Eye
} from 'lucide-react';

export default function Dashboard() {
  const [activeApplications] = useState([
    {
      id: 'APP001',
      service: 'Birth Certificate Correction',
      status: 'Under Review',
      progress: 75,
      submittedDate: '2025-01-15',
      expectedDate: '2025-02-10',
      trackingId: 'BC2025001796'
    },
    {
      id: 'APP002',
      service: 'Passport Renewal',
      status: 'Document Verification',
      progress: 45,
      submittedDate: '2025-01-20',
      expectedDate: '2025-02-25',
      trackingId: 'PP2025001797'
    }
  ]);

  const [recentPayments] = useState([
    {
      id: 'PAY001',
      service: 'Electricity Bill - DESCO',
      amount: 2850,
      date: '2025-01-25',
      status: 'Paid'
    },
    {
      id: 'PAY002',
      service: 'Property Tax - DNCC',
      amount: 15000,
      date: '2025-01-22',
      status: 'Paid'
    }
  ]);

  const [notifications] = useState([
    {
      id: 'NOT001',
      title: 'Tax Return Deadline Reminder',
      message: 'Your income tax return for FY 2024-25 is due by March 31, 2025',
      date: '2025-01-28',
      type: 'warning',
      read: false
    },
    {
      id: 'NOT002',
      title: 'Birth Certificate Ready',
      message: 'Your birth certificate correction is ready for collection',
      date: '2025-01-26',
      type: 'success',
      read: false
    }
  ]);

  const userProfile = {
    name: 'Md. Jazib Mahamud Mahi',
    nid: '000001796340513',
    phone: '+8801796340513',
    email: 'jazibmahamudmahi@gmail.com',
    address: 'Dhaka, Bangladesh',
    memberSince: '2023-03-15',
    verificationStatus: 'Verified'
  };

  const quickStats = [
    { label: 'Active Applications', value: '2', icon: FileText, color: 'blue' },
    { label: 'Completed Services', value: '12', icon: CheckCircle, color: 'green' },
    { label: 'Pending Payments', value: '0', icon: CreditCard, color: 'gray' },
    { label: 'Unread Notices', value: '2', icon: Bell, color: 'orange' }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'under review': return 'bg-blue-100 text-blue-800';
      case 'document verification': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout showSidebar>
      <div className="p-6 space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, {userProfile.name}</h1>
              <p className="text-green-100">NID: {userProfile.nid}</p>
              <p className="text-sm text-white/80 mt-1">Last login: January 28, 2025 at 10:30 AM</p>
            </div>
            <div className="text-right">
              <Badge className="bg-white/20 text-white border-white/30">
                <Shield className="h-3 w-3 mr-1" />
                {userProfile.verificationStatus}
              </Badge>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      stat.color === 'blue' ? 'bg-blue-100' :
                      stat.color === 'green' ? 'bg-green-100' :
                      stat.color === 'orange' ? 'bg-orange-100' : 'bg-gray-100'
                    }`}>
                      <Icon className={`h-6 w-6 ${
                        stat.color === 'blue' ? 'text-blue-600' :
                        stat.color === 'green' ? 'text-green-600' :
                        stat.color === 'orange' ? 'text-orange-600' : 'text-gray-600'
                      }`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Applications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Active Applications</span>
              </CardTitle>
              <CardDescription>Track your ongoing service requests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeApplications.map((app) => (
                <div key={app.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">{app.service}</h4>
                      <p className="text-sm text-gray-600">ID: {app.trackingId}</p>
                    </div>
                    <Badge className={getStatusColor(app.status)}>
                      {app.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{app.progress}%</span>
                    </div>
                    <Progress value={app.progress} className="h-2" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Submitted: {app.submittedDate}</span>
                      <span>Expected: {app.expectedDate}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-3">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" />
                      Download Receipt
                    </Button>
                  </div>
                </div>
              ))}
              
              <Button className="w-full" variant="outline" asChild>
                <Link to="/services">Apply for New Service</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>Your latest transactions and updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">Recent Payments</h4>
                <div className="space-y-3">
                  {recentPayments.map((payment) => (
                    <div key={payment.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{payment.service}</p>
                        <p className="text-xs text-gray-600">{payment.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">৳{payment.amount.toLocaleString()}</p>
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          {payment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button className="w-full" variant="outline" asChild>
                <Link to="/tax-calculator">Calculate Tax & VAT</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Important Notifications</span>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/notices">View All</Link>
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div key={notification.id} className={`p-4 rounded-lg border-l-4 ${
                  notification.type === 'warning' ? 'border-yellow-500 bg-yellow-50' :
                  notification.type === 'success' ? 'border-green-500 bg-green-50' :
                  'border-blue-500 bg-blue-50'
                }`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        {notification.type === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-600" />}
                        {notification.type === 'success' && <CheckCircle className="h-4 w-4 text-green-600" />}
                        <h4 className="font-medium">{notification.title}</h4>
                        {!notification.read && <div className="w-2 h-2 bg-red-500 rounded-full"></div>}
                      </div>
                      <p className="text-sm text-gray-700 mt-1">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-2 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {notification.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used services and tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col" asChild>
                <Link to="/tax-calculator">
                  <CreditCard className="h-6 w-6 mb-2" />
                  <span className="text-sm">Tax Calculator</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col" asChild>
                <Link to="/complaints">
                  <FileText className="h-6 w-6 mb-2" />
                  <span className="text-sm">File Complaint</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col" asChild>
                <Link to="/emergency">
                  <AlertTriangle className="h-6 w-6 mb-2" />
                  <span className="text-sm">Emergency</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex-col" asChild>
                <Link to="/notices">
                  <Bell className="h-6 w-6 mb-2" />
                  <span className="text-sm">Latest Notices</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}