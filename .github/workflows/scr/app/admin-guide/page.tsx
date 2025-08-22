"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
                <div className="relative w-32 h-10">
                  <img
                    src="/logo.svg"
                    alt="Foodlify Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
              <div className="ml-4">
                <h1 className="text-xl font-semibold text-black">Admin Guide</h1>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Foodlify Admin System</h1>
          <p className="text-xl text-gray-600">
            Complete guide to accessing and using the Restaurant Admin dashboard
          </p>
        </div>

        <div className="space-y-8">
          {/* User Roles */}
          <Card>
            <CardHeader>
              <CardTitle>User Roles & Access Levels</CardTitle>
              <CardDescription>
                Different user roles have different access levels in the system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Badge className="bg-purple-100 text-purple-800">ADMIN</Badge>
                  <div>
                    <h3 className="font-semibold text-black">System Administrator</h3>
                    <p className="text-gray-600">
                      Full access to all system features including user management, system settings, and admin panel.
                    </p>
                    <div className="mt-2 text-sm text-gray-500">
                      <strong>Login:</strong> admin@foodlify.com / admin123
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Badge className="bg-blue-100 text-blue-800">MANAGER</Badge>
                  <div>
                    <h3 className="font-semibold text-black">Restaurant Manager</h3>
                    <p className="text-gray-600">
                      Access to restaurant management features, settings, and dashboard analytics.
                    </p>
                    <div className="mt-2 text-sm text-gray-500">
                      <strong>Login:</strong> manager@foodlify.com / manager123
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Badge className="bg-green-100 text-green-800">STAFF</Badge>
                  <div>
                    <h3 className="font-semibold text-black">Staff Member</h3>
                    <p className="text-gray-600">
                      Limited access to daily operations and order management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Badge className="bg-gray-100 text-gray-800">CUSTOMER</Badge>
                  <div>
                    <h3 className="font-semibold text-black">Customer</h3>
                    <p className="text-gray-600">
                      Basic access to view orders and profile information.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Access Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>How to Access Restaurant Admin</CardTitle>
              <CardDescription>
                Step-by-step instructions to access the admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-black">Log in with Admin Account</h3>
                    <p className="text-gray-600">
                      Use the admin credentials: admin@foodlify.com / admin123
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-black">Go to Homepage</h3>
                    <p className="text-gray-600">
                      After logging in, you'll be redirected to the homepage
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-black">Click "Go to Restaurant Admin"</h3>
                    <p className="text-gray-600">
                      As an admin or manager, you'll see the "Restaurant Admin" button
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm">4</div>
                  <div>
                    <h3 className="font-semibold text-black">Access Admin Dashboard</h3>
                    <p className="text-gray-600">
                      You'll now see the full "Foodlify - Restaurant Admin" dashboard with admin features
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dashboard Features */}
          <Card>
            <CardHeader>
              <CardTitle>Admin Dashboard Features</CardTitle>
              <CardDescription>
                Overview of features available in the Restaurant Admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">📊 Analytics</h3>
                  <p className="text-gray-600 text-sm">View sales analytics, customer insights, and performance metrics</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">📝 Order Management</h3>
                  <p className="text-gray-600 text-sm">Manage and track all restaurant orders in real-time</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">🍽️ Menu Management</h3>
                  <p className="text-gray-600 text-sm">Add, edit, and remove menu items with pricing</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">👥 Customer Management</h3>
                  <p className="text-gray-600 text-sm">Manage customer database and loyalty programs</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">⚙️ Settings</h3>
                  <p className="text-gray-600 text-sm">Configure restaurant settings and preferences</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-black mb-2">🔧 Admin Panel</h3>
                  <p className="text-gray-600 text-sm">System administration and user management (Admin only)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Access */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Access</CardTitle>
              <CardDescription>
                Quick links to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/login">
                  <Button className="flex-1">Go to Login</Button>
                </Link>
                <Link href="/register">
                  <Button variant="outline" className="flex-1">Register New Account</Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="flex-1">Back to Home</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
