import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import Layout from '@/components/Layout';
import { User, Shield, Phone, Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    nid: '',
    password: '',
    otp: '',
    rememberMe: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setLoginData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = (type: 'user' | 'admin') => {
    // Simulate login process
    console.log(`${type} login attempted with:`, loginData);
    // In a real app, this would make an API call
    alert(`${type === 'user' ? 'User' : 'Admin'} login successful! Redirecting to dashboard...`);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50 py-12">
        <div className="max-w-md mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to access your citizen services</p>
            <p className="text-green-600 font-medium text-sm mt-1">নিরাপদ লগইন সিস্টেম</p>
          </div>

          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="user" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Citizen Login</span>
              </TabsTrigger>
              <TabsTrigger value="admin" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Admin Login</span>
              </TabsTrigger>
            </TabsList>

            {/* Citizen Login */}
            <TabsContent value="user">
              <Card>
                <CardHeader>
                  <CardTitle>Citizen Login</CardTitle>
                  <CardDescription>
                    Use your NID and password to access services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nid">National ID (NID) / Passport</Label>
                    <Input
                      id="nid"
                      type="text"
                      placeholder="Enter your NID or Passport number"
                      value={loginData.nid}
                      onChange={(e) => handleInputChange('nid', e.target.value)}
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="border-green-200 focus:border-green-500 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="otp">2FA Code (Optional)</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="otp"
                        type="text"
                        placeholder="Enter 6-digit code"
                        maxLength={6}
                        value={loginData.otp}
                        onChange={(e) => handleInputChange('otp', e.target.value)}
                        className="border-green-200 focus:border-green-500"
                      />
                      <Button variant="outline" size="sm" className="whitespace-nowrap">
                        <Phone className="h-4 w-4 mr-1" />
                        Send OTP
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={loginData.rememberMe}
                      onCheckedChange={(checked) => handleInputChange('rememberMe', checked as boolean)}
                    />
                    <Label htmlFor="remember" className="text-sm">
                      Remember me for 30 days
                    </Label>
                  </div>

                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => handleLogin('user')}
                  >
                    Sign In as Citizen
                  </Button>

                  <div className="text-center space-y-2">
                    <Link to="/forgot-password" className="text-sm text-green-600 hover:underline">
                      Forgot your password?
                    </Link>
                    <div className="text-sm text-gray-600">
                      Don't have an account?{' '}
                      <Link to="/signup" className="text-green-600 hover:underline">
                        Sign up here
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Admin Login */}
            <TabsContent value="admin">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Login</CardTitle>
                  <CardDescription>
                    Administrative access for government officials
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-id">Admin ID</Label>
                    <Input
                      id="admin-id"
                      type="text"
                      placeholder="Enter your admin ID"
                      className="border-red-200 focus:border-red-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="admin-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className="border-red-200 focus:border-red-500 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="admin-otp">2FA Code (Required)</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="admin-otp"
                        type="text"
                        placeholder="Enter 6-digit code"
                        maxLength={6}
                        className="border-red-200 focus:border-red-500"
                      />
                      <Button variant="outline" size="sm" className="whitespace-nowrap border-red-200">
                        <Phone className="h-4 w-4 mr-1" />
                        Send OTP
                      </Button>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700"
                    onClick={() => handleLogin('admin')}
                  >
                    Sign In as Admin
                  </Button>

                  <div className="text-center">
                    <Link to="/admin-support" className="text-sm text-red-600 hover:underline">
                      Need admin support?
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-blue-800">Security Notice</p>
                <p className="text-blue-700">
                  Your data is protected with advanced encryption. Never share your login credentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}