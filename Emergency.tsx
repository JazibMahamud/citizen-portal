import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { 
  Phone, 
  Heart, 
  Shield, 
  Flame, 
  Car, 
  AlertTriangle,
  Clock,
  MapPin,
  FileText,
  Stethoscope,
  Users
} from 'lucide-react';

export default function Emergency() {
  const emergencyContacts = [
    {
      name: 'National Emergency',
      name_bn: 'জাতীয় জরুরি',
      number: '999',
      icon: Phone,
      color: 'red',
      description: 'All emergency services'
    },
    {
      name: 'Police',
      name_bn: 'পুলিশ',
      number: '100',
      icon: Shield,
      color: 'blue',
      description: 'Police emergency'
    },
    {
      name: 'Fire Service',
      name_bn: 'ফায়ার সার্ভিস',
      number: '102',
      icon: Flame,
      color: 'orange',
      description: 'Fire & rescue'
    },
    {
      name: 'Ambulance',
      name_bn: 'অ্যাম্বুলেন্স',
      number: '103',
      icon: Heart,
      color: 'green',
      description: 'Medical emergency'
    },
    {
      name: 'Women & Child Helpline',
      name_bn: 'নারী ও শিশু সহায়তা',
      number: '109',
      icon: Users,
      color: 'purple',
      description: 'Women & child support'
    },
    {
      name: 'Disaster Management',
      name_bn: 'দুর্যোগ ব্যবস্থাপনা',
      number: '1090',
      icon: AlertTriangle,
      color: 'yellow',
      description: 'Natural disaster response'
    }
  ];

  const quickServices = [
    {
      title: 'Online General Diary (GD)',
      title_bn: 'অনলাইন জেনারেল ডায়েরি',
      description: 'File a General Diary online',
      icon: FileText,
      action: 'File GD'
    },
    {
      title: 'Telemedicine',
      title_bn: 'টেলিমেডিসিন',
      description: 'Online medical consultation',
      icon: Stethoscope,
      action: 'Consult Doctor'
    },
    {
      title: 'Emergency Transport',
      title_bn: 'জরুরি পরিবহন',
      description: 'Request emergency transport',
      icon: Car,
      action: 'Request Transport'
    },
    {
      title: 'Hospital Locator',
      title_bn: 'হাসপাতাল খুঁজুন',
      description: 'Find nearest hospitals',
      icon: MapPin,
      action: 'Find Hospitals'
    }
  ];

  const handleEmergencyCall = (number: string, name: string) => {
    alert(`Calling ${name} at ${number}. In a real app, this would initiate a call.`);
  };

  const handleQuickService = (service: string) => {
    alert(`Accessing ${service}. This would redirect to the appropriate service in a real app.`);
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Emergency Alert Banner */}
        <div className="bg-red-600 text-white p-6 rounded-lg">
          <div className="flex items-center space-x-4">
            <AlertTriangle className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">Emergency Services</h1>
              <p className="text-red-100">জরুরি সেবাসমূহ - 24/7 Available</p>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Hotlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        contact.color === 'red' ? 'bg-red-100' :
                        contact.color === 'blue' ? 'bg-blue-100' :
                        contact.color === 'orange' ? 'bg-orange-100' :
                        contact.color === 'green' ? 'bg-green-100' :
                        contact.color === 'purple' ? 'bg-purple-100' :
                        'bg-yellow-100'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          contact.color === 'red' ? 'text-red-600' :
                          contact.color === 'blue' ? 'text-blue-600' :
                          contact.color === 'orange' ? 'text-orange-600' :
                          contact.color === 'green' ? 'text-green-600' :
                          contact.color === 'purple' ? 'text-purple-600' :
                          'text-yellow-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{contact.number}</h3>
                        <p className="text-gray-900 font-medium">{contact.name}</p>
                        <p className="text-green-600 text-sm">{contact.name_bn}</p>
                        <p className="text-gray-600 text-sm">{contact.description}</p>
                      </div>
                    </div>
                    <Button 
                      className={`w-full mt-4 ${
                        contact.color === 'red' ? 'bg-red-600 hover:bg-red-700' :
                        contact.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                        contact.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700' :
                        contact.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                        contact.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                        'bg-yellow-600 hover:bg-yellow-700'
                      }`}
                      onClick={() => handleEmergencyCall(contact.number, contact.name)}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Emergency Services */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Emergency Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription className="text-green-600 font-medium">
                          {service.title_bn}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleQuickService(service.title)}
                    >
                      {service.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Online GD Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>File Online General Diary (GD)</span>
            </CardTitle>
            <CardDescription>
              Submit a General Diary online for non-emergency police matters
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="complainant">Complainant Name</Label>
                <Input id="complainant" placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nid">National ID</Label>
                <Input id="nid" placeholder="Your NID number" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="incident">Incident Details</Label>
              <Textarea 
                id="incident" 
                placeholder="Describe the incident in detail..."
                rows={4}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Incident Location</Label>
                <Input id="location" placeholder="Where did it happen?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="datetime">Date & Time</Label>
                <Input id="datetime" type="datetime-local" />
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-yellow-800">Important Notice</p>
                  <p className="text-yellow-700">
                    This is for non-emergency situations only. For immediate emergencies, please call 999 or 100.
                  </p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <FileText className="h-4 w-4 mr-2" />
              Submit GD
            </Button>
          </CardContent>
        </Card>

        {/* Emergency Tips */}
        <Card className="bg-gray-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <span>Emergency Tips</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">In Case of Fire:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Call 102 immediately</li>
                  <li>• Evacuate the building</li>
                  <li>• Don't use elevators</li>
                  <li>• Stay low to avoid smoke</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Medical Emergency:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Call 103 for ambulance</li>
                  <li>• Keep the person calm</li>
                  <li>• Don't move injured person</li>
                  <li>• Provide first aid if trained</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Natural Disaster:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Call 1090 for assistance</li>
                  <li>• Follow evacuation orders</li>
                  <li>• Stay away from damaged areas</li>
                  <li>• Listen to official updates</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Crime/Security:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Call 100 for police</li>
                  <li>• Don't confront criminals</li>
                  <li>• Note important details</li>
                  <li>• Cooperate with authorities</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}