import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function FeaturesPage() {
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
              <Link href="/features" className="text-black font-medium">Features</Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-black font-medium">How it Works</Link>
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
              Powerful Features for Food Lovers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover everything Foodlify has to offer to enhance your culinary journey
            </p>
            <Link href="/register">
              <Button size="lg" className="px-12 py-4 bg-black text-white hover:bg-gray-800 text-lg">
                Get Started Free
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-black rounded-lg mb-4"></div>
                  <CardTitle className="text-2xl">Recipe Discovery</CardTitle>
                  <CardDescription>
                    Access thousands of curated recipes from professional chefs and home cooks worldwide
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Advanced search and filtering</li>
                    <li>• Personalized recommendations</li>
                    <li>• Dietary preference support</li>
                    <li>• Save favorites to collections</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-black rounded-lg mb-4"></div>
                  <CardTitle className="text-2xl">Smart Meal Planning</CardTitle>
                  <CardDescription>
                    Plan your weekly meals with AI-powered suggestions and automated grocery lists
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Weekly meal calendar</li>
                    <li>• Automatic grocery lists</li>
                    <li>• Nutritional tracking</li>
                    <li>• Leftover management</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-black rounded-lg mb-4"></div>
                  <CardTitle className="text-2xl">Cooking Assistant</CardTitle>
                  <CardDescription>
                    Step-by-step cooking guidance with timers, temperature controls, and helpful tips
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Interactive cooking mode</li>
                    <li>• Voice-guided instructions</li>
                    <li>• Built-in timers and alerts</li>
                    <li>• Substitution suggestions</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-black rounded-lg mb-4"></div>
                  <CardTitle className="text-2xl">Community & Sharing</CardTitle>
                  <CardDescription>
                    Connect with food lovers, share your creations, and get inspired by others
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Share your own recipes</li>
                    <li>• Rate and review dishes</li>
                    <li>• Follow favorite cooks</li>
                    <li>• Join cooking challenges</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 5 */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-black rounded-lg mb-4"></div>
                  <CardTitle className="text-2xl">Restaurant Discovery</CardTitle>
                  <CardDescription>
                    Find and review restaurants, make reservations, and explore local dining scenes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Local restaurant finder</li>
                    <li>• Reviews and ratings</li>
                    <li>• Online reservations</li>
                    <li>• Menu browsing</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Feature 6 */}
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-black rounded-lg mb-4"></div>
                  <CardTitle className="text-2xl">Nutritional Insights</CardTitle>
                  <CardDescription>
                    Track your nutrition, set health goals, and get personalized dietary recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Calorie and macro tracking</li>
                    <li>• Health goal setting</li>
                    <li>• Allergy and dietary alerts</li>
                    <li>• Progress monitoring</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-6">
              Ready to Transform Your Cooking Experience?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of food lovers who are already using Foodlify to discover, create, and share amazing culinary experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="px-12 py-4 bg-black text-white hover:bg-gray-800 text-lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/how-it-works">
                <Button variant="outline" size="lg" className="px-12 py-4 border-2 border-black text-black hover:bg-gray-100 text-lg">
                  Learn More
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
