"use client";

import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="border-b border-gray-200">
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
            </div>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/features" className="text-gray-700 hover:text-black font-medium">Features</Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-black font-medium">How it Works</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-black font-medium">Pricing</Link>
              <Link href="/about" className="text-gray-700 hover:text-black font-medium">About</Link>
            </nav>
            
            {/* User Authentication */}
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <div className="text-right hidden sm:block">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-black">{user.name}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        user.role === 'admin' ? 'bg-purple-100 text-purple-800' :
                        user.role === 'manager' ? 'bg-blue-100 text-blue-800' :
                        user.role === 'staff' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {user.role?.toUpperCase() || 'USER'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{user.email}</p>
                  </div>
                  {(user.role === 'admin' || user.role === 'manager') ? (
                    <Link href="/dashboard">
                      <Button className="bg-black text-white hover:bg-gray-800">
                        Restaurant Admin
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/dashboard">
                      <Button className="bg-black text-white hover:bg-gray-800">
                        Dashboard
                      </Button>
                    </Link>
                  )}
                  <Button variant="outline" onClick={handleLogout} className="border-gray-300">
                    Logout
                  </Button>
                </>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link href="/admin-guide">
                    <Button variant="outline" size="sm" className="border-gray-300">
                      Admin Guide
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button className="bg-black text-white hover:bg-gray-800">
                      Sign In
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: December 2024</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                At Foodlify, we collect information to provide better services to our users. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Personal identification information (name, email address)</li>
                <li>Restaurant and business information</li>
                <li>Usage data and analytics</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the collected information for various purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our service</li>
                <li>To monitor the usage of our service</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Data Security</h2>
              <p className="text-gray-600">
                We value your trust in providing us your personal information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Children's Privacy</h2>
              <p className="text-gray-600">
                Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-black mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="relative w-40 h-12 mb-6 md:mb-0">
              <img
                src="/logo.svg"
                alt="Foodlify Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-600 mb-2">© 2024 Foodlify. All rights reserved.</p>
              <div className="flex space-x-6 justify-center md:justify-end">
                <Link href="/privacy" className="text-gray-600 hover:text-black">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-600 hover:text-black">Terms of Service</Link>
                <Link href="/contact" className="text-gray-600 hover:text-black">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
