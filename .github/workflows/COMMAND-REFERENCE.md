💻 COMMAND REFERENCE: All Commands You Need
This guide contains every command you'll need for deploying Foodlify.

🚀 Complete Command Sequence
1. Project Setup Commands
# Navigate to project directory
cd /path/to/your/foodlify-project

# Install dependencies
npm install

# Run code quality check
npm run lint

# Build the application
npm run build
2. Git & Github Command
# Initialize git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Foodlify restaurant management system"

# Add remote repository (replace with your GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/foodlify.git

# Set main branch and push
git branch -M main
git push -u origin main

# Check git status
git status

# View commit history
git log --oneline

# Pull latest changes
git pull origin main

# Push new changes
git push origin main
3. Generate Secrets & Keys
# Generate NextAuth secret (macOS/Linux)
openssl rand -base64 32

# Generate NextAuth secret (Windows - PowerShell)
[Convert]::ToBase64String((1..32 | ForEach-Object {Get-Random -Minimum 0 -Maximum 256}))

# Generate random string alternative
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
4. Development Commands
# Start development server
npm run dev

# Start development server on specific port
npm run dev -- -p 3001

# Run type checking
npm run type-check

# Run linting
npm run lint

# Fix linting issues automatically
npm run lint -- --fix

# Build for production
npm run build

# Start production server locally
npm start

# Export static files (if needed)
npm run export
5. Database Commands
# Push database schema to database
npm run db:push

# Generate Prisma client
npm run db:generate

# View database
npm run db:studio

# Reset database (WARNING: deletes all data)
npm run db:reset

# Seed database with test data
npm run db:seed
6. Testing Command
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- login.test.ts

# Run e2e tests
npm run test:e2e
🔧 Environment Setup Commands
Linux/macOS
# Install Node.js (using nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# Install Yarn (alternative to npm)
npm install -g yarn

# Verify installations
node --version
npm --version
yarn --version
Windows
# Install Node.js using Chocolatey
choco install nodejs

# Or download from https://nodejs.org

# Verify installations
node --version
npm --version
🌐 DNS Testing Commands
Check DNS Propagation
# Check A record
nslookup your-domain.tk

# Check CNAME record
nslookup www.your-domain.tk

# Check DNS propagation (Linux/macOS)
dig your-domain.tk

# Check DNS propagation (cross-platform)
curl -s https://dnschecker.org/your-domain.tk
SSL Certificate Testing
# Check SSL certificate
openssl s_client -connect your-domain.tk:443 -servername your-domain.tk

# Check SSL certificate details
curl -vI https://your-domain.tk

# Check SSL using online tool
curl -s https://www.ssllabs.com/ssltest/analyze.html?d=your-domain.tk
🚀 Deployment Commands
Vercel CLI Commands
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod

# Link to existing project
vercel link

# Pull environment variables
vercel env pull

# Set environment variable
vercel env add NEXTAUTH_URL

# Remove deployment
vercel remove [deployment-id]
Netlify CLI Commands
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy to Netlify
netlify deploy

# Deploy to production
netlify deploy --prod

# Link to existing site
netlify link

# List sites
netlify sites:list
🔍 Debugging Commands
Check Application Status
# Check if port is available
lsof -i :3000

# Kill process on port (macOS/Linux)
kill -9 $(lsof -ti:3000)

# Kill process on port (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Check system resources
top  # macOS/Linux
tasklist  # Windows
Network Testing
# Test connectivity
ping your-domain.tk

# Test HTTP connection
curl -I http://your-domain.tk

# Test HTTPS connection
curl -I https://your-domain.tk

# Trace route
traceroute your-domain.tk  # macOS/Linux
tracert your-domain.tk     # Windows
Log Analysis
# View Vercel logs
vercel logs

# View real-time logs
vercel logs --follow

# Filter logs
vercel logs --grep "error"

# View build logs
vercel logs build
📱 Mobile Testing Commands
iOS Simulator (macOS)
# Start iOS Simulator
open -a Simulator

# Install on simulator (if using Expo)
expo install

# Run on simulator
npm run ios
Android Emulator
# Start Android Emulator
emulator -avd <avd_name>

# Run on emulator
npm run android

# Install ADB (Android Debug Bridge)
# Download from https://developer.android.com/studio/command-line/adb

# Check connected devices
adb devices

# Install APK
adb install app-release.apk
🔄 Maintenance Commands
Update Dependencies
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm update package-name

# Update global packages
npm update -g

# Audit for security vulnerabilities
npm audit

# Fix security issues
npm audit fix
Cleanup Command
# Clean npm cache
npm cache clean --force

# Clean node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clean build artifacts
rm -rf .next out dist

# Clean git repository
git clean -fd
📊 Monitoring Commands
Application Monitoring
# Check application health
curl https://your-domain.tk/api/health

# Monitor response time
curl -o /dev/null -s -w "%{time_total}\n" https://your-domain.tk

# Check headers
curl -I https://your-domain.tk

# Monitor with continuous requests
while true; do curl -s https://your-domain.tk/api/health | head -n 1; sleep 5; done
Log Monitoring
# Monitor Vercel logs in real-time
vercel logs --follow

# Monitor specific function
vercel logs --grep "NEXTAUTH"

# Monitor errors
vercel logs --grep "error" --follow

# Export logs
vercel logs > logs.txt
🎯 Quick Reference Cheat Sheet
Essential Commands
# Start development
npm run dev

# Build and deploy
npm run build
git add .
git commit -m "Update"
git push

# Check status
npm run lint
npm run build

# Generate secret
openssl rand -base64 32
DNS Setup
# A Record: @ → 76.76.21.21
# CNAME: www → cname.vercel-dns.com
Environment Variable
NEXTAUTH_URL=https://your-domain.tk
NEXTAUTH_SECRET=your-generated-secret
DATABASE_URL=file:./dev.db
Test Credentials
# Admin
Email: admin@foodlify.com
Pass: admin123

# Manager  
Email: manager@restaurant.com
Pass: manager123

# Staff
Email: staff@restaurant.com
Pass: staff123
🚀 Emergency Commands
If Deployment Fails
# Check build locally
npm run build

# Check linting
npm run lint

# Check types
npm run type-check

# Clean and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
If Domain Not Working
# Check DNS
nslookup your-domain.tk
dig your-domain.tk

# Check propagation
curl dnschecker.org/your-domain.tk

# Test connectivity
ping your-domain.tk
curl -I https://your-domain.tk
If Authentication Fail
# Check environment variables
vercel env ls

# Regenerate secret
openssl rand -base64 32

# Update and redeploy
vercel env add NEXTAUTH_SECRET
vercel --prod
🎉 Success!
Save this guide for quick reference. You now have all the commands needed to deploy, maintain, and troubleshoot your Foodlify application!

Your application will be live at:
🌐 www.myfoodlify.ga
