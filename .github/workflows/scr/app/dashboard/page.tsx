"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function DashboardContent() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  // Mock data for the dashboard
  const stats = [
    { label: "Total Orders", value: "1,234", change: "+12%", period: "vs last month" },
    { label: "Revenue", value: "$24,580", change: "+8%", period: "vs last month" },
    { label: "Active Customers", value: "892", change: "+15%", period: "vs last month" },
    { label: "Menu Items", value: "48", change: "+3", period: "new items" },
  ];

  const recentOrders = [
    { id: "#1234", customer: "John Doe", amount: "$45.99", status: "Completed", time: "2 min ago" },
    { id: "#1235", customer: "Jane Smith", amount: "$32.50", status: "Preparing", time: "5 min ago" },
    { id: "#1236", customer: "Mike Johnson", amount: "$67.25", status: "Pending", time: "8 min ago" },
    { id: "#1237", customer: "Sarah Wilson", amount: "$28.75", status: "Completed", time: "12 min ago" },
  ];

  const menuItems = [
    { name: "Margherita Pizza", price: "$12.99", category: "Main Course", popularity: "High" },
    { name: "Caesar Salad", price: "$8.99", category: "Appetizer", popularity: "Medium" },
    { name: "Grilled Salmon", price: "$18.99", category: "Main Course", popularity: "High" },
    { name: "Chocolate Cake", price: "$6.99", category: "Dessert", popularity: "Low" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "Preparing": return "bg-yellow-100 text-yellow-800";
      case "Pending": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPopularityColor = (popularity: string) => {
    switch (popularity) {
      case "High": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleBadgeColor = (role: string | undefined) => {
    if (!role) return "bg-gray-100 text-gray-800";
    
    switch (role) {
      case "admin": return "bg-purple-100 text-purple-800";
      case "manager": return "bg-blue-100 text-blue-800";
      case "staff": return "bg-green-100 text-green-800";
      case "customer": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getAvailableTabs = () => {
    const tabs = ["overview", "orders", "menu", "customers", "analytics"];
    
    // Add admin-only tabs
    if (user?.role === 'admin') {
      tabs.push("admin", "settings", "users");
    } else if (user?.role === 'manager') {
      tabs.push("settings");
    }
    
    return tabs;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
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
                <h1 className="text-xl font-semibold text-black">Foodlify - Restaurant Admin</h1>
                <p className="text-sm text-gray-600">Restaurant Management System</p>
              </div>
            </div>
            
            {/* User Info */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium text-black">{user?.name || 'User'}</p>
                  <Badge className={getRoleBadgeColor(user?.role)}>
                    {user?.role?.toUpperCase() || 'USER'}
                  </Badge>
                </div>
                <p className="text-xs text-gray-600">{user?.email || ''}</p>
              </div>
              <Button variant="outline" onClick={handleLogout} className="border-gray-300">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-black mb-2">
                Welcome back, {user?.name || 'User'}!
              </h2>
              <p className="text-gray-600">
                Here's what's happening with your restaurant today.
              </p>
            </div>
            <div className="text-right">
              <Badge className={getRoleBadgeColor(user?.role)}>
                {user?.role?.toUpperCase() || 'USER'} ACCESS
              </Badge>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {getAvailableTabs().map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 rounded-md text-sm font-medium capitalize ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-black hover:bg-gray-100"
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </nav>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.label}
                </CardTitle>
                <div className="h-4 w-4 text-green-600">↑</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-black">{stat.value}</div>
                <p className="text-xs text-gray-600">
                  <span className="text-green-600">{stat.change}</span> {stat.period}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest orders from your customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-black">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.customer}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-black">{order.amount}</p>
                        <div className="flex items-center space-x-2">
                          <Badge className={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                          <span className="text-xs text-gray-500">{order.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Menu Items */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Menu Items</CardTitle>
                <CardDescription>Your most ordered dishes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {menuItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-black">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-black">{item.price}</p>
                        <Badge className={getPopularityColor(item.popularity)}>
                          {item.popularity}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "orders" && (
          <Card>
            <CardHeader>
              <CardTitle>All Orders</CardTitle>
              <CardDescription>Manage and track all your restaurant orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium text-black">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.customer}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-black">{order.amount}</p>
                      <span className="text-xs text-gray-500">{order.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "menu" && (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Menu Management</CardTitle>
                  <CardDescription>Manage your restaurant's menu items</CardDescription>
                </div>
                <Button>Add New Item</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium text-black">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.category}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-black">{item.price}</p>
                      <Badge className={getPopularityColor(item.popularity)}>
                        {item.popularity}
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="outline">Remove</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "customers" && (
          <Card>
            <CardHeader>
              <CardTitle>Customer Management</CardTitle>
              <CardDescription>Manage your customer database and loyalty programs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">Customer management features coming soon!</p>
                <Button variant="outline">Export Customer List</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "analytics" && (
          <Card>
            <CardHeader>
              <CardTitle>Analytics & Reports</CardTitle>
              <CardDescription>View detailed analytics and generate reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">Advanced analytics features coming soon!</p>
                <Button variant="outline">Generate Report</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Admin-only tabs */}
        {activeTab === "admin" && user?.role === 'admin' && (
          <Card>
            <CardHeader>
              <CardTitle>Admin Panel</CardTitle>
              <CardDescription>System administration and configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-2">User Management</h3>
                  <p className="text-gray-600 mb-4">Manage system users and permissions</p>
                  <Button className="w-full">Manage Users</Button>
                </div>
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-2">System Settings</h3>
                  <p className="text-gray-600 mb-4">Configure system-wide settings</p>
                  <Button variant="outline" className="w-full">Settings</Button>
                </div>
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-2">Audit Logs</h3>
                  <p className="text-gray-600 mb-4">View system activity logs</p>
                  <Button variant="outline" className="w-full">View Logs</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "settings" && (user?.role === 'admin' || user?.role === 'manager') && (
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Configure your restaurant settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-2">Restaurant Information</h3>
                  <p className="text-gray-600 mb-4">Update your restaurant details and contact information</p>
                  <Button variant="outline">Edit Restaurant Info</Button>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-2">Payment Settings</h3>
                  <p className="text-gray-600 mb-4">Configure payment methods and processing</p>
                  <Button variant="outline">Payment Settings</Button>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-black mb-2">Notifications</h3>
                  <p className="text-gray-600 mb-4">Manage notification preferences</p>
                  <Button variant="outline">Notification Settings</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "users" && user?.role === 'admin' && (
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage system users and their permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4">User management features coming soon!</p>
                <Button>Add New User</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
