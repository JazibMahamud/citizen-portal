import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { 
  Search,
  Zap, 
  Car, 
  FileText, 
  Home, 
  GraduationCap,
  Heart,
  Briefcase,
  CreditCard,
  Shield,
  Plane,
  Building,
  Users,
  Lock,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', name_bn: 'সব সেবা' },
    { id: 'utilities', name: 'Utilities', name_bn: 'ইউটিলিটি' },
    { id: 'transport', name: 'Transport', name_bn: 'পরিবহন' },
    { id: 'certificates', name: 'Certificates', name_bn: 'সার্টিফিকেট' },
    { id: 'tax', name: 'Tax & Finance', name_bn: 'কর ও অর্থ' },
    { id: 'health', name: 'Health', name_bn: 'স্বাস্থ্য' },
    { id: 'education', name: 'Education', name_bn: 'শিক্ষা' }
  ];

  const services = [
    // Utilities
    { 
      id: 1, 
      name: 'Electricity Bill Payment', 
      name_bn: 'বিদ্যুৎ বিল পেমেন্ট',
      category: 'utilities', 
      icon: Zap, 
      description: 'Pay your electricity bills online',
      provider: 'DESCO/BPDB',
      requiresLogin: true
    },
    { 
      id: 2, 
      name: 'Gas Bill Payment', 
      name_bn: 'গ্যাস বিল পেমেন্ট',
      category: 'utilities', 
      icon: Zap, 
      description: 'Pay your gas bills online',
      provider: 'Titas Gas',
      requiresLogin: true
    },
    { 
      id: 3, 
      name: 'Water Bill Payment', 
      name_bn: 'পানির বিল পেমেন্ট',
      category: 'utilities', 
      icon: Zap, 
      description: 'Pay your water bills online',
      provider: 'WASA',
      requiresLogin: true
    },
    
    // Transport
    { 
      id: 4, 
      name: 'Railway Ticket Booking', 
      name_bn: 'রেল টিকিট বুকিং',
      category: 'transport', 
      icon: Car, 
      description: 'Book train tickets online',
      provider: 'Bangladesh Railway',
      requiresLogin: true
    },
    { 
      id: 5, 
      name: 'Driving License', 
      name_bn: 'ড্রাইভিং লাইসেন্স',
      category: 'transport', 
      icon: Car, 
      description: 'Apply for or renew driving license',
      provider: 'BRTA',
      requiresLogin: true
    },
    { 
      id: 6, 
      name: 'Vehicle Registration', 
      name_bn: 'গাড়ি নিবন্ধন',
      category: 'transport', 
      icon: Car, 
      description: 'Register your vehicle',
      provider: 'BRTA',
      requiresLogin: true
    },

    // Certificates
    { 
      id: 7, 
      name: 'Birth Certificate', 
      name_bn: 'জন্ম নিবন্ধন',
      category: 'certificates', 
      icon: FileText, 
      description: 'Apply for birth certificate',
      provider: 'Local Government',
      requiresLogin: true
    },
    { 
      id: 8, 
      name: 'Death Certificate', 
      name_bn: 'মৃত্যু সনদ',
      category: 'certificates', 
      icon: FileText, 
      description: 'Apply for death certificate',
      provider: 'Local Government',
      requiresLogin: true
    },
    { 
      id: 9, 
      name: 'Marriage Certificate', 
      name_bn: 'বিবাহ সনদ',
      category: 'certificates', 
      icon: Users, 
      description: 'Apply for marriage certificate',
      provider: 'Local Government',
      requiresLogin: true
    },

    // Tax & Finance
    { 
      id: 10, 
      name: 'Income Tax Return', 
      name_bn: 'আয়কর রিটার্ন',
      category: 'tax', 
      icon: CreditCard, 
      description: 'File your income tax return',
      provider: 'NBR',
      requiresLogin: true
    },
    { 
      id: 11, 
      name: 'VAT Registration', 
      name_bn: 'ভ্যাট নিবন্ধন',
      category: 'tax', 
      icon: CreditCard, 
      description: 'Register for VAT',
      provider: 'NBR',
      requiresLogin: true
    },
    { 
      id: 12, 
      name: 'Property Tax', 
      name_bn: 'সম্পত্তি কর',
      category: 'tax', 
      icon: Home, 
      description: 'Pay property tax online',
      provider: 'City Corporation',
      requiresLogin: true
    },

    // Health
    { 
      id: 13, 
      name: 'Telemedicine', 
      name_bn: 'টেলিমেডিসিন',
      category: 'health', 
      icon: Heart, 
      description: 'Online medical consultation',
      provider: 'Ministry of Health',
      requiresLogin: true
    },
    { 
      id: 14, 
      name: 'Hospital Appointment', 
      name_bn: 'হাসপাতাল অ্যাপয়েন্টমেন্ট',
      category: 'health', 
      icon: Heart, 
      description: 'Book hospital appointments',
      provider: 'Government Hospitals',
      requiresLogin: true
    },

    // Education
    { 
      id: 15, 
      name: 'Academic Transcript', 
      name_bn: 'একাডেমিক ট্রান্সক্রিপ্ট',
      category: 'education', 
      icon: GraduationCap, 
      description: 'Request academic transcripts',
      provider: 'Education Board',
      requiresLogin: true
    },
    { 
      id: 16, 
      name: 'Scholarship Application', 
      name_bn: 'বৃত্তির আবেদন',
      category: 'education', 
      icon: GraduationCap, 
      description: 'Apply for government scholarships',
      provider: 'Ministry of Education',
      requiresLogin: true
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.name_bn.includes(searchTerm);
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleServiceAccess = (serviceName: string) => {
    alert(`Please log in to access ${serviceName}. Redirecting to login page...`);
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Government Services</h1>
          <p className="text-gray-600">সরকারি সেবাসমূহ</p>
          <p className="text-lg text-green-600 mt-2">Browse all available government services</p>
        </div>

        {/* Login Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <Lock className="h-5 w-5 text-blue-600" />
            <div>
              <p className="font-medium text-blue-800">Login Required</p>
              <p className="text-blue-700 text-sm">
                Please <Link to="/login" className="underline font-medium">log in to your account</Link> to access and use these services.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search services... (সেবা খুঁজুন)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <Icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                        <CardDescription className="text-green-600 font-medium">
                          {service.name_bn}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">
                      <Lock className="h-3 w-3 mr-1" />
                      Login Required
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{service.description}</p>
                  <p className="text-sm text-gray-500 mb-4">Provider: {service.provider}</p>
                  <Button 
                    className="w-full bg-gray-400 hover:bg-gray-500 cursor-not-allowed"
                    onClick={() => handleServiceAccess(service.name)}
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Login to Access
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Service Dictionary (AI Chatbot) */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <span>Service Dictionary (AI Assistant)</span>
            </CardTitle>
            <CardDescription>
              Need help finding the right service? Ask our AI assistant
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Input placeholder="Ask about any government service..." className="flex-1" />
              <Button className="bg-blue-600 hover:bg-blue-700">
                Ask AI
              </Button>
            </div>
            <p className="text-sm text-blue-600 mt-2">
              Example: "How do I apply for a birth certificate?" or "জন্ম নিবন্ধনের জন্য কিভাবে আবেদন করব?"
            </p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-green-50 border border-green-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Access Services?</h3>
          <p className="text-gray-600 mb-6">Log in to your citizen account to access all government services</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link to="/login">
                <ArrowRight className="h-4 w-4 mr-2" />
                Login Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/emergency">
                Emergency Services (No Login Required)
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}