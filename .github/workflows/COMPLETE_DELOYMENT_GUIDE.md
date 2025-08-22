🚀 COMPLETE DEPLOYMENT GUIDE: Foodlify to your-domain.tk
Table of Contents
Get Your Free Domain
Set Up GitHub Repository
Deploy to Vercel
Configure Custom Domain
Set Up Environment Variables
Test Your Application
Troubleshooting
🎯 Prerequisites
Before you start, make sure you have:

A computer with internet access
A GitHub account (create one at github.com if you don't have it)
A Vercel account (create one at vercel.com if you don't have it)
About 30 minutes of time
Step 1: Get Your Free Domain
1.1 Go to Freenom
Open your web browser and go to https://www.freenom.com
Click on "Services" in the top menu, then select "Register a New Domain"
1.2 Search for Available Domain
In the search box, type: your-domain (or any name you prefer)
Click "Check Availability"
You'll see available extensions like .tk, .ml, .ga, .cf
Choose one (I recommend .tk as it's the most popular)
Click "Checkout"
1.3 Complete Registration
On the checkout page:
Select "12 Months" for the free period
Click "Continue"
Fill in your details:
Email: Use a real email address (you'll need to verify it)
Password: Create a strong password
First Name, Last Name: Your real name
Address: Your real address (can be your home address)
City, ZIP Code: Your location
Country: Select your country
Complete the CAPTCHA
Click "Complete Order"
Check your email for verification and click the verification link
1.4 Verify Domain Ownership
After verification, go back to Freenom
Click "Services" → "My Domains"
You should see your domain (e.g., your-domain.tk)
Click "Manage Domain" → "Manage Freenom DNS"
🎉 SUCCESS! You now own your-domain.tk for 12 months!

Step 2: Set Up GitHub Repository
2.1 Initialize Git Repository
Open your terminal or command prompt
Navigate to your project directory:
cd /path/to/your/foodlify-project
2.2 Create GitHub Repository
Go to https://github.com
Click the "+" icon in the top-right corner
Select "New repository"
Fill in the details:
Repository name: foodlify (or any name you prefer)
Description: Foodlify - Restaurant Management System
Make it Public (free for public repos)
Don't initialize with README (we already have one)
Click "Create repository"
2.3 Push Your Code to GitHub
Copy the repository URL from GitHub (it looks like https://github.com/yourusername/foodlify.git)
In your terminal, run these commands:
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Foodlify restaurant management system"

# Add remote repository
git remote add origin https://github.com/yourusername/foodlify.git

# Push to GitHub
git branch -M main
git push -u origin main
2.4 Verify GitHub Upload
Go to your GitHub repository page
Refresh the page
You should see all your project files there
🎉 SUCCESS! Your code is now on GitHub!

Step 3: Deploy to Vercel
3.1 Connect GitHub to Vercel
Go to https://vercel.com
Sign in with your GitHub account
Click "New Project"
Under "Import Git Repository", find your foodlify repository
Click "Import"
3.2 Configure Project Settings
Framework Preset: Select "Next.js"
Build Command: Should be npm run build
Output Directory: Should be .next
Install Command: Should be npm install
3.3 Environment Variables (Temporary)
For now, add these environment variables:

Click "Environment Variables"
Add these variables:
Key: NEXTAUTH_URL → Value: https://your-domain.tk
Key: NEXTAUTH_SECRET → Value: your-random-secret-here
Key: DATABASE_URL → Value: file:./dev.db
Click "Add" for each variable
Click "Deploy"
3.4 Wait for Deployment
Vercel will now build and deploy your application
This usually takes 2-5 minutes
You'll see a progress bar and build logs
Once complete, you'll get a temporary Vercel URL (like foodlify-xyz.vercel.app)
🎉 SUCCESS! Your application is deployed to Vercel!

Step 4: Configure Custom Domain
4.1 Add Custom Domain in Vercel
In your Vercel project dashboard, click "Settings"
Click "Domains" in the left menu
Type your domain: your-domain.tk
Click "Add"
Vercel will show you DNS records that need to be configured
4.2 Configure DNS in Freenom
Go back to https://www.freenom.com
Click "Services" → "My Domains"
Click "Manage Domain" next to your-domain.tk
Click "Manage Freenom DNS"
4.3 Add DNS Records
In the DNS management page, add these records:

Record 1 (A Record):

Type: A
Name: @ (leave blank or type @)
Target: 76.76.21.21
TTL: 3600
Click "Save Changes"
Record 2 (CNAME Record):

Type: CNAME
Name: www
Target: cname.vercel-dns.com
TTL: 3600
Click "Save Changes"
4.4 Verify DNS Configuration
Go back to Vercel domains page
Click "Verify" next to your domain
It may take a few minutes to verify
Once verified, Vercel will automatically provision SSL certificate
4.5 Wait for DNS Propagation
DNS changes can take 24-48 hours to fully propagate, but usually work within 1-2 hours.

🎉 SUCCESS! Your custom domain is configured!

Step 5: Set Up Environment Variables
5.1 Generate NextAuth Secret
Open your terminal and run this command to generate a random secret:
openssl rand -base64 32
Copy the generated string (it will look like: abc123def456...)
5.2 Update Environment Variables in Vercel
Go to your Vercel project dashboard
Click "Settings" → "Environment Variables"
Update the variables:
Required Variables:

Key: NEXTAUTH_URL → Value: https://your-domain.tk
Key: NEXTAUTH_SECRET → Value: [paste the generated secret]
Key: DATABASE_URL → Value: file:./dev.db
5.3 Redeploy with New Variables
After updating environment variables, Vercel will automatically redeploy
Wait for the deployment to complete (2-3 minutes)
🎉 SUCCESS! Environment variables are configured!

Step 6: Test Your Application
6.1 Access Your Application
Open your web browser
Go to: https://your-domain.tk
You should see the Foodlify homepage
6.2 Test All Pages
Test these pages to make sure they work:

Homepage: https://your-domain.tk
Features: https://your-domain.tk/features
Pricing: https://your-domain.tk/pricing
About: https://your-domain.tk/about
Contact: https://your-domain.tk/contact
Privacy: https://your-domain.tk/privacy
Terms: https://your-domain.tk/terms
Login: https://your-domain.tk/login
Register: https://your-domain.tk/register
6.3 Test Authentication
Go to https://your-domain.tk/login
Try these test credentials:
Admin Account:

Email: admin@foodlify.com
Password: admin123
Manager Account:

Email: manager@restaurant.com
Password: manager123
Staff Account:

Email: staff@restaurant.com
Password: staff123
6.4 Test Dashboard
After logging in, you should be redirected to the dashboard
Test all dashboard features:
View statistics
Navigate between sections
Test logout functionality
6.5 Test SSL Certificate
Make sure your site loads with https:// (not http://)
Look for the padlock icon in the browser address bar
Click the padlock to verify the certificate is valid
🎉 SUCCESS! Your application is fully deployed and working!

🚀 Alternative: Deploy to Netlify
If you prefer Netlify over Vercel:

1. Push to GitHub (Same as above)
2. Deploy to Netlify
Go to https://netlify.com
Sign up with GitHub
Click "New site from Git"
Select your repository
Configure build settings:
Build command: npm run build
Publish directory: .next
Click "Deploy site"
3. Configure Environment Variables
Go to "Site settings" → "Environment variables"
Add the same variables as Vercel
4. Set Custom Domain
Go to "Domain management" → "Add custom domain"
Add your-domain.tk
Configure DNS records in Freenom:
A Record: @ → 104.198.14.52
CNAME Record: www → your-site-name.netlify.app
🔧 Troubleshooting
Common Issues and Solutions:
1. DNS Not Propagating
Problem: Domain not working after 24 hours
Solution:

Check DNS records at https://dnschecker.org
Wait up to 48 hours for full propagation
Verify DNS records are correct in Freenom
2. Build Errors
Problem: Vercel build fails
Solution:

Check build logs in Vercel dashboard
Run npm run lint locally to check for errors
Ensure all dependencies are in package.json
3. Authentication Not Working
Problem: Login not working
Solution:

Verify NEXTAUTH_URL matches your domain exactly
Ensure NEXTAUTH_SECRET is properly set
Check database connection string
4. SSL Certificate Issues
Problem: HTTPS not working
Solution:

Wait for DNS propagation
Ensure DNS records are correct
Check Vercel domain settings
5. Pages Not Loading
Problem: Some pages return 404
Solution:

Verify all page files exist in src/app/
Check file names are correct (page.tsx)
Ensure proper routing structure
Getting Help:
Vercel Documentation: https://vercel.com/docs
Freenom Support: https://www.freenom.com/support.html
GitHub Support: https://support.github.com
Next.js Documentation: https://nextjs.org/docs
🎯 Final Checklist
Before you finish, verify:

 Domain registered at Freenom
 Code pushed to GitHub
 Application deployed to Vercel/Netlify
 Custom domain configured
 DNS records set correctly
 Environment variables configured
 SSL certificate working
 All pages loading correctly
 Authentication working
 Dashboard functional
 Test credentials working
🎉 Congratulations!
Your Foodlify restaurant management system is now live at https://your-domain.tk !

You now have:

✅ A professional restaurant management system
✅ Free domain for 12 months
✅ Free hosting on Vercel/Netlify
✅ SSL certificate (HTTPS)
✅ Complete user authentication system
✅ Admin, Manager, and Staff roles
✅ Responsive design for all devices
✅ All legal pages (Privacy, Terms, Contact)
Your application is ready for production use! 🚀
