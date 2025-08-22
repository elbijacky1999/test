#!/bin/bash

# Foodlify Deployment Script
# This script helps deploy the Foodlify application to your-domain.tk

echo "🚀 Starting Foodlify deployment to https://your-domain.tk"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run linting
echo "🔍 Running code quality checks..."
npm run lint

# Build the application
echo "🏗️ Building the application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Instructions for deployment
echo ""
echo "🎯 Deployment Instructions:"
echo "============================"
echo "1. Push your code to GitHub repository"
echo "2. Connect your repository to Vercel or Netlify"
echo "3. Set up custom domain: your-domain.tk"
echo "4. Configure environment variables:"
echo "   - NEXTAUTH_URL: https://your-domain.tk"
echo "   - NEXTAUTH_SECRET: generate a random secret"
echo "   - DATABASE_URL: your database connection string"
echo ""
echo "🌐 Free Domain Setup:"
echo "====================="
echo "1. Go to Freenom (https://www.freenom.com)"
echo "2. Register your-domain.tk (or other free TLD)"
echo "3. Configure DNS settings to point to your hosting provider"
echo ""
echo "🎉 Your Foodlify application is ready for deployment!"
echo "   Access it at: https://your-domain.tk"
