import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function AboutPage() {
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
              <Link href="/about" className="text-black font-medium">About</Link>
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
              About Foodlify
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're passionate about bringing people together through the joy of cooking and sharing amazing food experiences.
            </p>
            <Link href="/register">
              <Button size="lg" className="px-12 py-4 bg-black text-white hover:bg-gray-800 text-lg">
                Join Our Community
              </Button>
            </Link>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-black mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-4">
                  At Foodlify, we believe that cooking should be accessible, enjoyable, and inspiring for everyone. 
                  Our mission is to democratize culinary excellence by providing tools and resources that make 
                  cooking easier, more fun, and more rewarding.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We're building a global community where food lovers can discover, create, and share their 
                  culinary passions while learning from each other and growing together.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Community-Driven</Badge>
                  <Badge variant="secondary">Innovation</Badge>
                  <Badge variant="secondary">Accessibility</Badge>
                  <Badge variant="secondary">Sustainability</Badge>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-black rounded-lg mx-auto mb-4"></div>
                  <p className="text-gray-600">Team photo placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at Foodlify
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    🌱
                  </div>
                  <CardTitle className="text-xl">Sustainability</CardTitle>
                  <CardDescription>
                    We promote sustainable cooking practices and help reduce food waste through smart planning and portion control.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-sm text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    🤝
                  </div>
                  <CardTitle className="text-xl">Community</CardTitle>
                  <CardDescription>
                    We believe in the power of shared experiences and building connections through food.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-sm text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    💡
                  </div>
                  <CardTitle className="text-xl">Innovation</CardTitle>
                  <CardDescription>
                    We're constantly pushing boundaries with new technologies to make cooking more accessible and enjoyable.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The passionate individuals behind Foodlify
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: "Sarah Chen", role: "CEO & Founder", bio: "Food enthusiast with 15+ years in tech" },
                { name: "Marcus Rodriguez", role: "Head Chef", bio: "Professional chef and recipe developer" },
                { name: "Emily Watson", role: "CTO", bio: "Full-stack developer and food tech expert" },
                { name: "David Kim", role: "Community Manager", bio: "Building connections through food" },
              ].map((member, index) => (
                <Card key={index} className="border-0 shadow-sm text-center">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-black mb-2">50K+</div>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-black mb-2">100K+</div>
                <p className="text-gray-600">Recipes</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-black mb-2">25K+</div>
                <p className="text-gray-600">Restaurants</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-black mb-2">150+</div>
                <p className="text-gray-600">Countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">
                Key milestones in Foodlify's story
              </p>
            </div>

            <div className="space-y-8">
              {[
                { year: "2020", title: "The Beginning", description: "Foodlify was founded with a simple idea: make cooking accessible to everyone." },
                { year: "2021", title: "First Launch", description: "Released our beta version with 1,000 recipes and basic meal planning features." },
                { year: "2022", title: "Community Growth", description: "Reached 10,000 active users and launched our mobile app." },
                { year: "2023", title: "Feature Expansion", description: "Added AI-powered recommendations, restaurant discovery, and nutritional tracking." },
                { year: "2024", title: "Global Reach", description: "Expanded to 150+ countries and partnered with renowned chefs worldwide." },
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-black mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-6">
              Join Our Food Revolution
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Be part of a community that's changing how people discover, create, and share food experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="px-12 py-4 bg-black text-white hover:bg-gray-800 text-lg">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="px-12 py-4 border-2 border-black text-black hover:bg-gray-100 text-lg">
                  Contact Us
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
