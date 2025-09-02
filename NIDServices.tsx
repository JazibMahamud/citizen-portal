import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';
import { 
  CreditCard, 
  User, 
  FileText, 
  Car,
  Home,
  GraduationCap,
  Heart,
  Briefcase,
  Phone,
  CheckCircle,
  Clock,
  AlertTriangle,
  Download,
  Eye
} from 'lucide-react';

export default function NIDServices() {
  const userNID = {
    number: '000001796340513',
    name: 'Md. Jazib Mahamud Mahi',
    dateOfBirth: '1995-03-15',
    bloodGroup: 'A+',
    status: 'Active'
  };

  const nidIntegratedServices = [
    {
      id: 'passport',
      title: 'Passport Services',
      title_bn: 'পাসপোর্ট সেবা',
      description: 'Apply for new passport or renew existing one using NID verification',
      icon: FileText,
      status: 'available',
      processingTime: '15-20 days',
      fee: '৳3,000 - ৳6,000'
    },
    {
      id: 'driving',
      title: 'Driving License',
      title_bn: 'ড্রাইভিং লাইসেন্স',
      description: 'Get driving license with automatic NID verification',
      icon: Car,
      status: 'available',
      processingTime: '7-10 days',
      fee: '৳1,500 - ৳2,500'
    },
    {
      id: 'voter',
      title: 'Voter Registration',
      title_bn: 'ভোটার নিবন্ধন',
      description: 'Automatic voter registration using NID data',
      icon: User,
      status: 'completed',
      processingTime: 'Instant',
      fee: 'Free'
    },
    {
      id: 'bank',
      title: 'Bank Account Opening',
      title_bn: 'ব্যাংক অ্যাকাউন্ট খোলা',
      description: 'Open bank account with NID-based KYC verification',
      icon: CreditCard,
      status: 'available',
      processingTime: '1-2 days',
      fee: 'As per bank policy'
    },
    {
      id: 'mobile',
      title: 'Mobile SIM Registration',
      title_bn: 'মোবাইল সিম নিবন্ধন',
      description: 'Register mobile SIM with biometric NID verification',
      icon: Phone,
      status: 'available',
      processingTime: 'Instant',
      fee: 'As per operator'
    },
    {
      id: 'property',
      title: 'Property Registration',
      title_bn: 'সম্পত্তি নিবন্ধন',
      description: 'Register property ownership with NID verification',
      icon: Home,
      status: 'available',
      processingTime: '10-15 days',
      fee: '1-3% of property value'
    },
    {
      id: 'education',
      title: 'Educational Certificates',
      title_bn: 'শিক্ষাগত সনদপত্র',
      description: 'Verify and obtain educational certificates',
      icon: GraduationCap,
      status: 'available',
      processingTime: '5-7 days',
      fee: '৳200 - ৳500'
    },
    {
      id: 'health',
      title: 'Health Insurance',
      title_bn: 'স্বাস্থ্য বীমা',
      description: 'Enroll in government health insurance scheme',
      icon: Heart,
      status: 'available',
      processingTime: '3-5 days',
      fee: '৳500 - ৳2,000/year'
    },
    {
      id: 'business',
      title: 'Business License',
      title_bn: 'ব্যবসায়িক লাইসেন্স',
      description: 'Obtain trade license and business registration',
      icon: Briefcase,
      status: 'available',
      processingTime: '7-14 days',
      fee: '৳1,000 - ৳5,000'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'available':
        return <Clock className="h-4 w-4 text-blue-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'available':
        return <Badge className="bg-blue-100 text-blue-800">Available</Badge>;
      default:
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
    }
  };

  return (
    <Layout showSidebar>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">NID Integrated Services</h1>
          <p className="text-gray-600">এনআইডি সমন্বিত সেবাসমূহ</p>
        </div>

        {/* NID Card Info */}
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-green-600" />
              <span>Your National ID Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600">NID Number</p>
                <p className="font-semibold">{userNID.number}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Full Name</p>
                <p className="font-semibold">{userNID.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Date of Birth</p>
                <p className="font-semibold">{userNID.dateOfBirth}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <Badge className="bg-green-100 text-green-800">{userNID.status}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="services">Available Services</TabsTrigger>
            <TabsTrigger value="status">Service Status</TabsTrigger>
          </TabsList>

          {/* Available Services */}
          <TabsContent value="services">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nidIntegratedServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{service.title}</CardTitle>
                            <CardDescription className="text-green-600 font-medium">
                              {service.title_bn}
                            </CardDescription>
                          </div>
                        </div>
                        {getStatusIcon(service.status)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Processing Time:</span>
                          <span className="font-medium">{service.processingTime}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Fee:</span>
                          <span className="font-medium">{service.fee}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        {getStatusBadge(service.status)}
                      </div>

                      <Button 
                        className="w-full" 
                        disabled={service.status === 'completed'}
                      >
                        {service.status === 'completed' ? 'Already Completed' : 'Apply Now'}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Service Status */}
          <TabsContent value="status">
            <Card>
              <CardHeader>
                <CardTitle>Service Application Status</CardTitle>
                <CardDescription>Track your NID-based service applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Voter Registration</h4>
                        <p className="text-sm text-gray-600">Completed on 2023-03-20</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Passport Renewal</h4>
                        <p className="text-sm text-gray-600">Applied on 2025-01-20</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-blue-100 text-blue-800">Processing</Badge>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        Track
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                        <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Driving License</h4>
                        <p className="text-sm text-gray-600">Document verification pending</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}