import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Layout from '@/components/Layout';
import { 
  MessageCircle, 
  Plus, 
  Search, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Users,
  FileText,
  Send,
  Eye
} from 'lucide-react';

export default function Complaints() {
  const [complaintForm, setComplaintForm] = useState({
    title: '',
    category: '',
    description: '',
    priority: 'medium',
    attachments: []
  });

  const [searchTerm, setSearchTerm] = useState('');

  const complaintCategories = [
    { value: 'utilities', label: 'Utilities (ইউটিলিটি)' },
    { value: 'transport', label: 'Transport (পরিবহন)' },
    { value: 'health', label: 'Health Services (স্বাস্থ্য সেবা)' },
    { value: 'education', label: 'Education (শিক্ষা)' },
    { value: 'corruption', label: 'Corruption (দুর্নীতি)' },
    { value: 'infrastructure', label: 'Infrastructure (অবকাঠামো)' },
    { value: 'other', label: 'Other (অন্যান্য)' }
  ];

  const myComplaints = [
    {
      id: 'C001',
      title: 'Street Light Not Working',
      title_bn: 'রাস্তার বাতি কাজ করছে না',
      category: 'infrastructure',
      status: 'in_progress',
      priority: 'medium',
      date: '2024-01-15',
      department: 'City Corporation',
      description: 'The street light on Main Road has been out for 2 weeks.',
      responses: 2,
      supporters: 5
    },
    {
      id: 'C002',
      title: 'Water Supply Issue',
      title_bn: 'পানি সরবরাহের সমস্যা',
      category: 'utilities',
      status: 'resolved',
      priority: 'high',
      date: '2024-01-10',
      department: 'WASA',
      description: 'No water supply in our area for 3 days.',
      responses: 3,
      supporters: 12
    },
    {
      id: 'C003',
      title: 'Road Repair Needed',
      title_bn: 'রাস্তা মেরামতের প্রয়োজন',
      category: 'infrastructure',
      status: 'under_review',
      priority: 'low',
      date: '2024-01-08',
      department: 'Roads & Highways',
      description: 'Potholes on the main highway causing traffic issues.',
      responses: 1,
      supporters: 8
    }
  ];

  const collectiveComplaints = [
    {
      id: 'CC001',
      title: 'Frequent Power Outages',
      title_bn: 'ঘন ঘন বিদ্যুৎ বিভ্রাট',
      category: 'utilities',
      status: 'in_progress',
      supporters: 45,
      date: '2024-01-12',
      department: 'DESCO',
      description: 'Daily power cuts affecting the entire neighborhood.'
    },
    {
      id: 'CC002',
      title: 'Poor Hospital Service',
      title_bn: 'হাসপাতালের খারাপ সেবা',
      category: 'health',
      status: 'under_review',
      supporters: 23,
      date: '2024-01-14',
      department: 'Ministry of Health',
      description: 'Long waiting times and inadequate medical care.'
    }
  ];

  const handleFormChange = (field: string, value: string) => {
    setComplaintForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmitComplaint = () => {
    console.log('Submitting complaint:', complaintForm);
    alert('Complaint submitted successfully! You will receive a tracking ID shortly.');
    setComplaintForm({
      title: '',
      category: '',
      description: '',
      priority: 'medium',
      attachments: []
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'resolved':
        return <Badge className="bg-green-100 text-green-800">Resolved</Badge>;
      case 'in_progress':
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case 'under_review':
        return <Badge className="bg-yellow-100 text-yellow-800">Under Review</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800">High</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
      case 'low':
        return <Badge className="bg-green-100 text-green-800">Low</Badge>;
      default:
        return <Badge variant="secondary">Normal</Badge>;
    }
  };

  return (
    <Layout showSidebar>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complaint Management</h1>
          <p className="text-gray-600">অভিযোগ ব্যবস্থাপনা</p>
          <p className="text-lg text-green-600 mt-2">File complaints and track their progress</p>
        </div>

        <Tabs defaultValue="file" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="file" className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>File Complaint</span>
            </TabsTrigger>
            <TabsTrigger value="my" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>My Complaints</span>
            </TabsTrigger>
            <TabsTrigger value="collective" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Collective Complaints</span>
            </TabsTrigger>
          </TabsList>

          {/* File New Complaint */}
          <TabsContent value="file">
            <Card>
              <CardHeader>
                <CardTitle>File a New Complaint</CardTitle>
                <CardDescription>
                  Submit your complaint and our AI will route it to the appropriate department
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Complaint Title</Label>
                    <Input
                      id="title"
                      placeholder="Brief description of your complaint"
                      value={complaintForm.title}
                      onChange={(e) => handleFormChange('title', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={complaintForm.category} onValueChange={(value) => handleFormChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select complaint category" />
                      </SelectTrigger>
                      <SelectContent>
                        {complaintCategories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide detailed information about your complaint..."
                    rows={4}
                    value={complaintForm.description}
                    onChange={(e) => handleFormChange('description', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Priority Level</Label>
                  <Select value={complaintForm.priority} onValueChange={(value) => handleFormChange('priority', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Can wait</SelectItem>
                      <SelectItem value="medium">Medium - Normal priority</SelectItem>
                      <SelectItem value="high">High - Urgent attention needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-blue-800">AI-Powered Routing</p>
                      <p className="text-blue-700">
                        Our AI system will analyze your complaint and automatically route it to the appropriate department for faster resolution.
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={handleSubmitComplaint}
                  disabled={!complaintForm.title || !complaintForm.category || !complaintForm.description}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Submit Complaint
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* My Complaints */}
          <TabsContent value="my">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">My Complaints</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search complaints..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {myComplaints.map((complaint) => (
                  <Card key={complaint.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{complaint.title}</h3>
                          <p className="text-green-600 font-medium text-sm">{complaint.title_bn}</p>
                          <p className="text-gray-600 text-sm mt-1">#{complaint.id} • {complaint.date}</p>
                        </div>
                        <div className="flex space-x-2">
                          {getStatusBadge(complaint.status)}
                          {getPriorityBadge(complaint.priority)}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{complaint.description}</p>
                      
                      <div className="flex justify-between items-center text-sm text-gray-600">
                        <div className="flex space-x-4">
                          <span>Department: {complaint.department}</span>
                          <span>Responses: {complaint.responses}</span>
                          <span>Supporters: {complaint.supporters}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Collective Complaints */}
          <TabsContent value="collective">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">Collective Complaints</h2>
                  <p className="text-gray-600">Join existing complaints or support community issues</p>
                </div>
              </div>

              <div className="space-y-4">
                {collectiveComplaints.map((complaint) => (
                  <Card key={complaint.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{complaint.title}</h3>
                          <p className="text-green-600 font-medium text-sm">{complaint.title_bn}</p>
                          <p className="text-gray-600 text-sm mt-1">#{complaint.id} • {complaint.date}</p>
                        </div>
                        <div className="flex space-x-2">
                          {getStatusBadge(complaint.status)}
                          <Badge className="bg-purple-100 text-purple-800">
                            <Users className="h-3 w-3 mr-1" />
                            {complaint.supporters} supporters
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{complaint.description}</p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Department: {complaint.department}</span>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View Details
                          </Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <Plus className="h-4 w-4 mr-1" />
                            Support This
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}