import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function HowItWorksPage() {
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
              <Link href="/how-it-works" className="text-black font-medium">How it Works</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-black font-medium">Pricing</Link>
              <Link href="/about" className="text-gray-700 hover:text-black font-medium">About</Link>
            </nav>
            
            {/* CTA Button */}
            <Link href="/login">
              <Button className="bg-black text-white hover:bg-gray-800">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              How Foodlify Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Getting started with Foodlify is simple. Follow these easy steps to begin your culinary journey
            </p>
            <Link href="/register">
              <Button size="lg" className="px-12 py-4 bg-black text-white hover:bg-gray-800 text-lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <Card className="border-0 shadow-sm text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <CardTitle className="text-xl">Create Your Account</CardTitle>
                  <CardDescription>
                    Sign up for free and set up your profile with your food preferences and dietary needs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Quick registration</li>
                    <li>• Profile customization</li>
                    <li>• Dietary preferences</li>
                    <li>• Allergy information</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="border-0 shadow-sm text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <CardTitle className="text-xl">Explore & Discover</CardTitle>
                  <CardDescription>
                    Browse through thousands of recipes, discover new restaurants, and get personalized recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Recipe search</li>
                    <li>• Restaurant finder</li>
                    <li>• Personalized suggestions</li>
                    <li>• Save favorites</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="border-0 shadow-sm text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <CardTitle className="text-xl">Plan & Organize</CardTitle>
                  <CardDescription>
                    Create meal plans, generate shopping lists, and organize your culinary activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Weekly meal planning</li>
                    <li>• Smart grocery lists</li>
                    <li>• Calendar integration</li>
                    <li>• Budget tracking</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="border-0 shadow-sm text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <CardTitle className="text-xl">Cook & Share</CardTitle>
                  <CardDescription>
                    Follow step-by-step cooking instructions and share your culinary creations with the community
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Interactive cooking mode</li>
                    <li>• Share your recipes</li>
                    <li>• Rate and review</li>
                    <li>• Connect with others</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Breakdown */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">
                Key Features at a Glance
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to make your cooking experience extraordinary
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-black mb-6">Smart Technology</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-black">AI-Powered Recommendations</h4>
                      <p className="text-gray-600">Our intelligent algorithm learns your preferences and suggests recipes you'll love</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-black">Voice-Controlled Cooking</h4>
                      <p className="text-gray-600">Hands-free cooking with voice commands and step-by-step audio guidance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-black">Real-Time Collaboration</h4>
                      <p className="text-gray-600">Cook together with friends and family through shared cooking sessions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black mb-6">Community Driven</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-black">User-Generated Content</h4>
                      <p className="text-gray-600">Share your own recipes and discover creations from home cooks worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-black">Reviews & Ratings</h4>
                      <p className="text-gray-600">Honest feedback from real users to help you choose the best recipes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-black">Cooking Challenges</h4>
                      <p className="text-gray-600">Participate in weekly challenges and win exciting prizes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-6">
              Ready to Start Your Culinary Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of satisfied users who have transformed their cooking experience with Foodlify
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="px-12 py-4 bg-black text-white hover:bg-gray-800 text-lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="px-12 py-4 border-2 border-black text-black hover:bg-gray-100 text-lg">
                  View All Features
                </Button>
              </Link>
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
  );
}
