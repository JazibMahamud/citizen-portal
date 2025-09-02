import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';
import { 
  Users,
  MessageSquare,
  Heart,
  Share2,
  Calendar,
  MapPin,
  Clock,
  Award,
  TrendingUp,
  Eye,
  Plus,
  Filter
} from 'lucide-react';

export default function CitizenHub() {
  const communityPosts = [
    {
      id: 'CP001',
      author: 'Rashida Begum',
      avatar: 'RB',
      location: 'Dhanmondi, Dhaka',
      time: '2 hours ago',
      content: 'The new digital tax payment system saved me 3 hours today! No more long queues. Thank you Digital Bangladesh! 🇧🇩',
      likes: 127,
      comments: 23,
      shares: 8,
      category: 'Success Story'
    },
    {
      id: 'CP002',
      author: 'Karim Ahmed',
      avatar: 'KA',
      location: 'Chittagong',
      time: '5 hours ago',
      content: 'Road construction update needed for Agrabad area. Traffic is getting worse daily. Can authorities please provide timeline?',
      likes: 89,
      comments: 45,
      shares: 12,
      category: 'Infrastructure'
    },
    {
      id: 'CP003',
      author: 'Dr. Fatima Khan',
      avatar: 'FK',
      location: 'Sylhet',
      time: '1 day ago',
      content: 'Organizing free health checkup camp this weekend at Sylhet Medical College. All citizens welcome! Registration through citizen portal.',
      likes: 203,
      comments: 67,
      shares: 34,
      category: 'Health'
    }
  ];

  const citizenInitiatives = [
    {
      id: 'CI001',
      title: 'Clean Dhaka Movement',
      title_bn: 'পরিচ্ছন্ন ঢাকা আন্দোলন',
      description: 'Community-driven initiative to keep Dhaka clean and green',
      organizer: 'Green Bangladesh Foundation',
      participants: 1247,
      location: 'Citywide',
      date: '2025-02-15',
      status: 'ongoing',
      impact: 'Cleaned 45 areas, planted 500 trees'
    },
    {
      id: 'CI002',
      title: 'Digital Literacy for Elderly',
      title_bn: 'বয়স্কদের জন্য ডিজিটাল সাক্ষরতা',
      description: 'Teaching senior citizens to use digital government services',
      organizer: 'Tech for All BD',
      participants: 892,
      location: 'Community Centers',
      date: '2025-02-20',
      status: 'recruiting',
      impact: 'Trained 2000+ seniors in 6 months'
    }
  ];

  const achievements = [
    {
      id: 'A001',
      title: 'Service Champion',
      description: 'Helped 50+ citizens navigate digital services',
      icon: Award,
      earned: '2025-01-20',
      rarity: 'gold'
    },
    {
      id: 'A002',
      title: 'Community Builder',
      description: 'Organized 5 successful community initiatives',
      icon: Users,
      earned: '2025-01-15',
      rarity: 'silver'
    }
  ];

  const upcomingEvents = [
    {
      id: 'E001',
      title: 'Digital Bangladesh Summit 2025',
      title_bn: 'ডিজিটাল বাংলাদেশ সামিট ২০২৫',
      date: '2025-02-28',
      time: '9:00 AM',
      location: 'Bangabandhu International Conference Center',
      attendees: 2500,
      type: 'Conference'
    },
    {
      id: 'E002',
      title: 'Citizen Service Fair',
      title_bn: 'নাগরিক সেবা মেলা',
      date: '2025-03-05',
      time: '10:00 AM',
      location: 'Ramna Park, Dhaka',
      attendees: 1200,
      type: 'Fair'
    }
  ];

  return (
    <Layout showSidebar>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Citizen Community Hub</h1>
          <p className="text-gray-600">নাগরিক কমিউনিটি হাব - Connect, Collaborate, Contribute</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">125K+</p>
              <p className="text-sm text-gray-600">Active Citizens</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">45K+</p>
              <p className="text-sm text-gray-600">Discussions</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">890</p>
              <p className="text-sm text-gray-600">Initiatives</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">92%</p>
              <p className="text-sm text-gray-600">Satisfaction</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="community" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="community">Community Feed</TabsTrigger>
            <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* Community Feed */}
          <TabsContent value="community">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Community Discussions</CardTitle>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Filter className="h-4 w-4 mr-1" />
                      Filter
                    </Button>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-1" />
                      New Post
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {communityPosts.map((post) => (
                    <div key={post.id} className="border rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium text-sm">{post.avatar}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium">{post.author}</h4>
                            <Badge variant="outline" className="text-xs">
                              {post.category}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                            <MapPin className="h-3 w-3" />
                            <span>{post.location}</span>
                            <Clock className="h-3 w-3" />
                            <span>{post.time}</span>
                          </div>
                          <p className="text-gray-800 mb-3">{post.content}</p>
                          <div className="flex items-center space-x-6 text-sm text-gray-600">
                            <button className="flex items-center space-x-1 hover:text-red-600">
                              <Heart className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-blue-600">
                              <MessageSquare className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-green-600">
                              <Share2 className="h-4 w-4" />
                              <span>{post.shares}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Citizen Initiatives */}
          <TabsContent value="initiatives">
            <div className="space-y-4">
              {citizenInitiatives.map((initiative) => (
                <Card key={initiative.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{initiative.title}</CardTitle>
                        <CardDescription className="text-green-600 font-medium">
                          {initiative.title_bn}
                        </CardDescription>
                      </div>
                      <Badge className={
                        initiative.status === 'ongoing' ? 'bg-green-100 text-green-800' :
                        initiative.status === 'recruiting' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }>
                        {initiative.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{initiative.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Organizer</p>
                        <p className="font-medium">{initiative.organizer}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Participants</p>
                        <p className="font-medium">{initiative.participants.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-medium">{initiative.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Date</p>
                        <p className="font-medium">{initiative.date}</p>
                      </div>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg mb-4">
                      <p className="text-sm text-gray-600 mb-1">Impact</p>
                      <p className="text-green-800 font-medium">{initiative.impact}</p>
                    </div>

                    <Button className="w-full">Join Initiative</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events */}
          <TabsContent value="events">
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <Card key={event.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <p className="text-green-600 font-medium">{event.title_bn}</p>
                      </div>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{event.date} at {event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">{event.attendees} attendees</span>
                      </div>
                    </div>

                    <Button className="w-full">Register for Event</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements */}
          <TabsContent value="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <Card key={achievement.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          achievement.rarity === 'gold' ? 'bg-yellow-100' :
                          achievement.rarity === 'silver' ? 'bg-gray-100' : 'bg-orange-100'
                        }`}>
                          <Icon className={`h-6 w-6 ${
                            achievement.rarity === 'gold' ? 'text-yellow-600' :
                            achievement.rarity === 'silver' ? 'text-gray-600' : 'text-orange-600'
                          }`} />
                        </div>
                        <div>
                          <h3 className="font-semibold">{achievement.title}</h3>
                          <p className="text-sm text-gray-600">Earned on {achievement.earned}</p>
                        </div>
                      </div>
                      <p className="text-gray-700">{achievement.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}