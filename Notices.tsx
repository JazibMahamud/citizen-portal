import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';
import { 
  Bell, 
  AlertTriangle, 
  Search,
  Download,
  Calendar,
  Building,
  Eye,
  Filter
} from 'lucide-react';

interface Notice {
  id: string;
  title: string;
  title_bn: string;
  description: string;
  department: string;
  date: string;
  priority?: string;
  hasAttachment?: boolean;
  views?: number;
}

export default function Notices() {
  const [searchTerm, setSearchTerm] = useState('');

  const emergencyNotices: Notice[] = [
    {
      id: 'EN001',
      title: 'Dengue Outbreak Alert - Dhaka Division',
      title_bn: 'ডেঙ্গু প্রাদুর্ভাব সতর্কতা - ঢাকা বিভাগ',
      description: 'Increased dengue cases reported. Citizens advised to take preventive measures and eliminate stagnant water.',
      department: 'Ministry of Health',
      date: '2025-01-28',
      priority: 'urgent',
      views: 15420
    },
    {
      id: 'EN002',
      title: 'Traffic Disruption - Dhaka-Chittagong Highway',
      title_bn: 'যানজট - ঢাকা-চট্টগ্রাম মহাসড়ক',
      description: 'Road construction work causing traffic delays. Alternative routes recommended.',
      department: 'Roads & Highways',
      date: '2025-01-27',
      priority: 'high',
      views: 8930
    }
  ];

  const governmentNotices: Notice[] = [
    {
      id: 'GN001',
      title: 'Income Tax Return Filing Extended',
      title_bn: 'আয়কর রিটার্ন জমা দেওয়ার সময় বৃদ্ধি',
      description: 'Deadline for income tax return filing for FY 2024-25 extended to April 15, 2025.',
      department: 'NBR',
      date: '2025-01-26',
      hasAttachment: true,
      views: 45230
    },
    {
      id: 'GN002',
      title: 'New Digital Service Launch',
      title_bn: 'নতুন ডিজিটাল সেবা চালু',
      description: 'Online marriage certificate service now available through citizen portal.',
      department: 'Local Government Division',
      date: '2025-01-25',
      hasAttachment: false,
      views: 12450
    },
    {
      id: 'GN003',
      title: 'Public Holiday - Shaheed Dibosh',
      title_bn: 'সরকারি ছুটি - শহীদ দিবস',
      description: 'February 21, 2025 declared as public holiday for International Mother Language Day.',
      department: 'Cabinet Division',
      date: '2025-01-24',
      hasAttachment: false,
      views: 23100
    }
  ];

  const departmentalUpdates: Notice[] = [
    {
      id: 'DU001',
      title: 'COVID-19 Booster Vaccination Campaign',
      title_bn: 'কোভিড-১৯ বুস্টার টিকাদান কর্মসূচি',
      description: 'Free booster vaccination available at all government health centers from February 1, 2025.',
      department: 'Directorate General of Health Services',
      date: '2025-01-25',
      views: 18750
    },
    {
      id: 'DU002',
      title: 'SSC Examination 2025 Schedule',
      title_bn: 'এসএসসি পরীক্ষা ২০২৫ সময়সূচি',
      description: 'SSC examinations will commence from April 30, 2025. Detailed schedule available online.',
      department: 'Board of Intermediate and Secondary Education',
      date: '2025-01-23',
      views: 67890
    },
    {
      id: 'DU003',
      title: 'Metro Rail Service Expansion',
      title_bn: 'মেট্রো রেল সেবা সম্প্রসারণ',
      description: 'New metro rail stations to open in March 2025, connecting Uttara to Motijheel.',
      department: 'Dhaka Mass Transit Company',
      date: '2025-01-22',
      views: 34560
    }
  ];

  const filteredNotices = (notices: Notice[]) => {
    return notices.filter(notice => 
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.title_bn.includes(searchTerm) ||
      notice.department.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const NoticeCard = ({ notice, showUrgent = false }: { notice: Notice, showUrgent?: boolean }) => (
    <Card className={`hover:shadow-md transition-shadow ${showUrgent && notice.priority === 'urgent' ? 'border-red-200 bg-red-50' : ''}`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 pr-4">{notice.title}</h3>
              {notice.priority && (
                <Badge className={
                  notice.priority === 'urgent' ? 'bg-red-600 text-white' :
                  notice.priority === 'high' ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-white'
                }>
                  {notice.priority}
                </Badge>
              )}
            </div>
            <p className="text-green-600 font-medium text-sm mb-2">{notice.title_bn}</p>
            <p className="text-gray-700 mb-4">{notice.description}</p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="flex items-center space-x-1">
                <Building className="h-4 w-4" />
                <span>{notice.department}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{notice.date}</span>
              </span>
              {notice.views && (
                <span className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{notice.views.toLocaleString()} views</span>
                </span>
              )}
            </div>
            
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">
                <Eye className="h-4 w-4 mr-1" />
                Read Full Notice
              </Button>
              {notice.hasAttachment && (
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-1" />
                  Download PDF
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout showSidebar>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Government Notices</h1>
            <p className="text-gray-600">সরকারি নোটিশ ও আপডেট</p>
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter by Department
          </Button>
        </div>

        {/* Emergency Banner */}
        {emergencyNotices.some(notice => notice.priority === 'urgent') && (
          <div className="bg-red-600 text-white p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6" />
              <div>
                <h2 className="text-lg font-bold">Urgent Alerts Active</h2>
                <p className="text-red-100">Critical information requiring immediate attention</p>
              </div>
            </div>
          </div>
        )}

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search notices by title, department, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <Tabs defaultValue="emergency" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="emergency">Emergency ({emergencyNotices.length})</TabsTrigger>
            <TabsTrigger value="government">Government ({governmentNotices.length})</TabsTrigger>
            <TabsTrigger value="departmental">Departmental ({departmentalUpdates.length})</TabsTrigger>
          </TabsList>

          {/* Emergency Alerts */}
          <TabsContent value="emergency">
            <div className="space-y-4">
              {filteredNotices(emergencyNotices).length > 0 ? (
                filteredNotices(emergencyNotices).map((notice) => (
                  <NoticeCard key={notice.id} notice={notice} showUrgent />
                ))
              ) : (
                <div className="text-center py-12 bg-green-50 rounded-lg border border-green-200">
                  <AlertTriangle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-green-800 mb-2">No Emergency Alerts</h3>
                  <p className="text-green-600">All systems operating normally</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Government Notices */}
          <TabsContent value="government">
            <div className="space-y-4">
              {filteredNotices(governmentNotices).map((notice) => (
                <NoticeCard key={notice.id} notice={notice} />
              ))}
            </div>
          </TabsContent>

          {/* Departmental Updates */}
          <TabsContent value="departmental">
            <div className="space-y-4">
              {filteredNotices(departmentalUpdates).map((notice) => (
                <NoticeCard key={notice.id} notice={notice} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Subscription Card */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-blue-600" />
              <span>Stay Updated</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Get instant notifications for important government announcements and emergency alerts.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Enable Notifications
              </Button>
              <Button variant="outline">
                Subscribe to Email Updates
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}