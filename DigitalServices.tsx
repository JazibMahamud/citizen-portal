import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Layout from '@/components/Layout';
import { 
  Smartphone,
  Wifi,
  QrCode,
  MapPin,
  Truck,
  Zap,
  Droplets,
  Recycle,
  TreePine,
  Camera,
  Shield,
  Clock,
  Star,
  CheckCircle,
  AlertCircle,
  Calendar,
  Users,
  Building2,
  Car,
  Plane
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  title_bn: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  status: string;
  usage: number;
  rating: number;
  features: string[];
}

export default function DigitalServices() {
  const smartCityServices: Service[] = [
    {
      id: 'smart-parking',
      title: 'Smart Parking System',
      title_bn: 'স্মার্ট পার্কিং সিস্টেম',
      description: 'Find and reserve parking spots in real-time across Dhaka city',
      icon: Car,
      status: 'active',
      usage: 89,
      rating: 4.8,
      features: ['Real-time availability', 'Mobile payment', 'Navigation assist']
    },
    {
      id: 'traffic-ai',
      title: 'AI Traffic Management',
      title_bn: 'এআই ট্রাফিক ব্যবস্থাপনা',
      description: 'Get AI-powered traffic updates and optimal route suggestions',
      icon: MapPin,
      status: 'active',
      usage: 95,
      rating: 4.9,
      features: ['Live traffic data', 'Route optimization', 'Accident alerts']
    },
    {
      id: 'waste-tracking',
      title: 'Waste Collection Tracker',
      title_bn: 'বর্জ্য সংগ্রহ ট্র্যাকার',
      description: 'Track waste collection schedules and report issues',
      icon: Recycle,
      status: 'active',
      usage: 76,
      rating: 4.5,
      features: ['Collection schedule', 'Issue reporting', 'Recycling tips']
    },
    {
      id: 'air-quality',
      title: 'Air Quality Monitor',
      title_bn: 'বায়ুর গুণমান মনিটর',
      description: 'Real-time air quality index and health recommendations',
      icon: TreePine,
      status: 'active',
      usage: 82,
      rating: 4.7,
      features: ['AQI monitoring', 'Health alerts', 'Pollution sources']
    }
  ];

  const utilityServices: Service[] = [
    {
      id: 'smart-meter',
      title: 'Smart Utility Meter',
      title_bn: 'স্মার্ট ইউটিলিটি মিটার',
      description: 'Monitor electricity, gas, and water consumption in real-time',
      icon: Zap,
      status: 'active',
      usage: 91,
      rating: 4.6,
      features: ['Real-time usage', 'Bill prediction', 'Energy saving tips']
    },
    {
      id: 'water-quality',
      title: 'Water Quality Checker',
      title_bn: 'পানির গুণমান পরীক্ষক',
      description: 'Check water quality reports and request testing',
      icon: Droplets,
      status: 'active',
      usage: 73,
      rating: 4.4,
      features: ['Quality reports', 'Test requests', 'Safety alerts']
    },
    {
      id: 'outage-tracker',
      title: 'Power Outage Tracker',
      title_bn: 'বিদ্যুৎ বিভ্রাট ট্র্যাকার',
      description: 'Report outages and track restoration progress',
      icon: AlertCircle,
      status: 'active',
      usage: 68,
      rating: 4.2,
      features: ['Outage reporting', 'Restoration updates', 'Planned maintenance']
    }
  ];

  const emergencyServices: Service[] = [
    {
      id: 'panic-button',
      title: 'Emergency Panic Button',
      title_bn: 'জরুরি প্যানিক বোতাম',
      description: 'One-tap emergency alert to authorities and contacts',
      icon: Shield,
      status: 'active',
      usage: 100,
      rating: 5.0,
      features: ['Instant alerts', 'GPS location', 'Auto-call emergency']
    },
    {
      id: 'disaster-alert',
      title: 'Disaster Early Warning',
      title_bn: 'দুর্যোগ পূর্ব সতর্কতা',
      description: 'Receive early warnings for natural disasters',
      icon: AlertCircle,
      status: 'active',
      usage: 87,
      rating: 4.8,
      features: ['Weather alerts', 'Evacuation routes', 'Safety instructions']
    },
    {
      id: 'crowd-monitor',
      title: 'Crowd Density Monitor',
      title_bn: 'জনসমাগম ঘনত্ব মনিটর',
      description: 'Check crowd levels at public places and events',
      icon: Users,
      status: 'active',
      usage: 64,
      rating: 4.3,
      features: ['Live crowd data', 'Safety recommendations', 'Alternative locations']
    }
  ];

  const innovativeServices: Service[] = [
    {
      id: 'ar-navigation',
      title: 'AR City Navigation',
      title_bn: 'এআর শহর নেভিগেশন',
      description: 'Augmented reality navigation for government buildings',
      icon: Camera,
      status: 'beta',
      usage: 45,
      rating: 4.1,
      features: ['AR directions', 'Building info', 'Service locations']
    },
    {
      id: 'voice-assistant',
      title: 'Bangla Voice Assistant',
      title_bn: 'বাংলা ভয়েস সহায়ক',
      description: 'Voice-controlled access to government services',
      icon: Smartphone,
      status: 'beta',
      usage: 38,
      rating: 4.0,
      features: ['Voice commands', 'Bangla support', 'Service guidance']
    },
    {
      id: 'blockchain-verify',
      title: 'Blockchain Document Verify',
      title_bn: 'ব্লকচেইন ডকুমেন্ট যাচাই',
      description: 'Tamper-proof document verification using blockchain',
      icon: QrCode,
      status: 'pilot',
      usage: 22,
      rating: 4.2,
      features: ['Instant verification', 'Fraud prevention', 'QR scanning']
    },
    {
      id: 'drone-delivery',
      title: 'Drone Document Delivery',
      title_bn: 'ড্রোন ডকুমেন্ট ডেলিভারি',
      description: 'Fast document delivery via drone in select areas',
      icon: Plane,
      status: 'pilot',
      usage: 15,
      rating: 4.5,
      features: ['Same-day delivery', 'GPS tracking', 'Secure transport']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'beta': return 'bg-blue-100 text-blue-800';
      case 'pilot': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const ServiceCard = ({ service }: { service: Service }) => {
    const Icon = service.icon;
    return (
      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="text-green-600 font-medium">
                  {service.title_bn}
                </CardDescription>
              </div>
            </div>
            <Badge className={getStatusColor(service.status)}>
              {service.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{service.description}</p>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Usage Rate</span>
              <span className="text-sm font-medium">{service.usage}%</span>
            </div>
            <Progress value={service.usage} className="h-2" />
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">User Rating</span>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{service.rating}</span>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features</h4>
            <div className="flex flex-wrap gap-1">
              {service.features.map((feature: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex space-x-2">
            <Button className="flex-1" size="sm">
              {service.status === 'active' ? 'Use Service' : 'Join Beta'}
            </Button>
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Layout showSidebar>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Digital Bangladesh Services</h1>
          <p className="text-gray-600">ডিজিটাল বাংলাদেশ সেবা - Next Generation Citizen Services</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Badge className="bg-green-100 text-green-800">
              <CheckCircle className="h-3 w-3 mr-1" />
              25+ Active Services
            </Badge>
            <Badge className="bg-blue-100 text-blue-800">
              <Clock className="h-3 w-3 mr-1" />
              5+ Beta Services
            </Badge>
            <Badge className="bg-purple-100 text-purple-800">
              <Star className="h-3 w-3 mr-1" />
              4.6 Avg Rating
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">2.5M+</p>
              <p className="text-sm text-gray-600">Active Users</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Smartphone className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">98.5%</p>
              <p className="text-sm text-gray-600">Uptime</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">1.2s</p>
              <p className="text-sm text-gray-600">Avg Response</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Building2 className="h-6 w-6 text-orange-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">64</p>
              <p className="text-sm text-gray-600">Districts Covered</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="smart-city" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="smart-city">Smart City</TabsTrigger>
            <TabsTrigger value="utilities">Utilities</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
            <TabsTrigger value="innovative">Innovation Lab</TabsTrigger>
          </TabsList>

          <TabsContent value="smart-city">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {smartCityServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="utilities">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {utilityServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="emergency">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="innovative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {innovativeServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Innovation Showcase */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-purple-600" />
              <span>Innovation Showcase</span>
            </CardTitle>
            <CardDescription>
              Cutting-edge services being developed for Bangladesh's digital future
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4">
                <QrCode className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-medium">Blockchain Integration</h4>
                <p className="text-sm text-gray-600">Secure, tamper-proof records</p>
              </div>
              <div className="text-center p-4">
                <Camera className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-medium">AR/VR Services</h4>
                <p className="text-sm text-gray-600">Immersive government interaction</p>
              </div>
              <div className="text-center p-4">
                <Wifi className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-medium">IoT Integration</h4>
                <p className="text-sm text-gray-600">Smart city infrastructure</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}