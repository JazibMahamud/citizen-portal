import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import Layout from '@/components/Layout';
import { 
  User, 
  Shield, 
  Edit, 
  Download, 
  Eye,
  Lock,
  Bell,
  CreditCard,
  FileText,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Save,
  X
} from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  
  const userProfile = {
  
    name: 'Md. Jazib Mahamud Mahi ',
    nid: '000001796340513 ',
    phone: '+8801796340513 ',
    email: 'jazibmahamudmahi@gmail.com ',
    address: 'Majpara, Jamnogor,Bagatipara, Natore ',
    dateOfBirth: '01-01-2005 ',
    gender: 'Male',
    bloodGroup: 'O+',
    occupation: 'Student',
    emergencyContact: '+8801740980362 ',
    memberSince: '2023-03-15 ',
    verificationStatus: 'Verified ',
    lastLogin: '2025-01-28 10:30 AM '
  };

  const securitySettings = [
    { id: 'tfa', name: 'Two-Factor Authentication', enabled: true, description: 'SMS verification for login' },
    { id: 'email', name: 'Email Notifications', enabled: true, description: 'Service updates and alerts' },
    { id: 'login', name: 'Login Alerts', enabled: false, description: 'Notify on new device login' },
    { id: 'sharing', name: 'Data Sharing', enabled: false, description: 'Share data with partner agencies' }
  ];

  const serviceHistory = [
    {
      id: 'SH001',
      service: 'Birth Certificate Correction',
      date: '2025-01-15',
      status: 'Completed',
      amount: 500,
      certificate: true
    },
    {
      id: 'SH002',
      service: 'Passport Renewal Application',
      date: '2025-01-20',
      status: 'In Progress',
      amount: 3000,
      certificate: false
    },
    {
      id: 'SH003',
      service: 'Property Tax Payment',
      date: '2025-01-22',
      status: 'Completed',
      amount: 15000,
      certificate: true
    }
  ];

  const documents = [
    { name: 'National ID Card', type: 'PDF', size: '2.3 MB', uploaded: '2023-03-15', verified: true },
    { name: 'Birth Certificate', type: 'PDF', size: '1.8 MB', uploaded: '2025-01-15', verified: true },
    { name: 'Passport Copy', type: 'PDF', size: '3.1 MB', uploaded: '2025-01-20', verified: false },
    { name: 'Utility Bill', type: 'PDF', size: '1.2 MB', uploaded: '2025-01-22', verified: true }
  ];

  return (
    <Layout showSidebar>
      <div className="p-6 space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">JM</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
                  <p className="text-gray-600">NID: {userProfile.nid}</p>
                  <p className="text-sm text-gray-500">Member since {userProfile.memberSince}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge className="bg-green-100 text-green-800">
                      <Shield className="h-3 w-3 mr-1" />
                      {userProfile.verificationStatus}
                    </Badge>
                    <Badge variant="outline">
                      Last login: {userProfile.lastLogin}
                    </Badge>
                  </div>
                </div>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? <X className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="history">Service History</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          {/* Personal Information */}
          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Manage your personal details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      value={userProfile.name} 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nid">National ID</Label>
                    <Input 
                      id="nid" 
                      value={userProfile.nid} 
                      disabled
                      className="bg-gray-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      value={userProfile.phone} 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      value={userProfile.email} 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input 
                      id="dob" 
                      value={userProfile.dateOfBirth} 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="blood">Blood Group</Label>
                    <Input 
                      id="blood" 
                      value={userProfile.bloodGroup} 
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input 
                    id="address" 
                    value={userProfile.address} 
                    disabled={!isEditing}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="occupation">Occupation</Label>
                    <Input 
                      id="occupation" 
                      value={userProfile.occupation} 
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergency">Emergency Contact</Label>
                    <Input 
                      id="emergency" 
                      value={userProfile.emergencyContact} 
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                {isEditing && (
                  <div className="flex space-x-2">
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security and privacy preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {securitySettings.map((setting) => (
                    <div key={setting.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{setting.name}</h4>
                        <p className="text-sm text-gray-600">{setting.description}</p>
                      </div>
                      <Switch defaultChecked={setting.enabled} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>Update your account password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current">Current Password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new">New Password</Label>
                    <Input id="new" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm">Confirm New Password</Label>
                    <Input id="confirm" type="password" />
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Lock className="h-4 w-4 mr-2" />
                    Update Password
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Service History */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Service History</CardTitle>
                <CardDescription>Your past transactions and service requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {serviceHistory.map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          service.status === 'Completed' ? 'bg-green-100' : 'bg-yellow-100'
                        }`}>
                          {service.status === 'Completed' ? 
                            <CheckCircle className="h-5 w-5 text-green-600" /> :
                            <AlertTriangle className="h-5 w-5 text-yellow-600" />
                          }
                        </div>
                        <div>
                          <h4 className="font-medium">{service.service}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{service.date}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <CreditCard className="h-3 w-3" />
                              <span>৳{service.amount.toLocaleString()}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={service.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {service.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        {service.certificate && (
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents */}
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Document Vault</CardTitle>
                <CardDescription>Manage your uploaded documents and certificates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{doc.name}</h4>
                          <p className="text-sm text-gray-600">
                            {doc.type} • {doc.size} • Uploaded {doc.uploaded}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={doc.verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {doc.verified ? 'Verified' : 'Pending'}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Upload New Document
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}