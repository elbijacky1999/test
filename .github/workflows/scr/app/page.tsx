"use client";

import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
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

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            {/* Logo */}
            <div className="relative w-64 h-20 mx-auto mb-12">
              <img
                src="/Logo.svg"
                alt="Foodlify Logo"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Welcome text */}
            <div className="space-y-6 mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
                Welcome to Foodlify
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your ultimate food companion for discovering, organizing, and enjoying amazing culinary experiences.
              </p>
            </div>
            
            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              {user ? (
                <>
                  {(user.role === 'admin' || user.role === 'manager') ? (
                    <Link href="/dashboard">
                      <Button size="lg" className="px-12 py-4 bg-black text-white hover:bg-gray-800 text-lg">
                        Go to Restaurant Admin
                      </Button>
                    </Link>
                  ) : (
                    <Link href="/dashboard">
                      <Button size="lg" className="px-12 py-4 bg-black text-white hover:bg-gray-800 text-lg">
                        Go to Dashboard
                      </Button>
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <Link href="/register">
                    <Button size="lg" className="px-12 py-4 bg-black text-white hover:bg-gray-800 text-lg">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button variant="outline" size="lg" className="px-12 py-4 border-2 border-black text-black hover:bg-gray-100 text-lg">
                      Learn More
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Why Choose Foodlify?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the features that make Foodlify the perfect companion for your culinary journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-black rounded-lg mb-6"></div>
                <h3 className="text-2xl font-semibold text-black mb-4">Discover Recipes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore thousands of curated recipes from around the world, tailored to your taste preferences.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-black rounded-lg mb-6"></div>
                <h3 className="text-2xl font-semibold text-black mb-4">Meal Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Plan your weekly meals with smart suggestions and automated grocery lists.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-black rounded-lg mb-6"></div>
                <h3 className="text-2xl font-semibold text-black mb-4">Community</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with food lovers, share your creations, and get inspired by others.
                </p>
              </div>
            </div>
          </div>
        </section>
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
