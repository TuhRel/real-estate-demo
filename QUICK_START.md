# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key
STRIPE_SECRET_KEY=sk_test_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_secret

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Step 3: Firebase Setup (5 minutes)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Follow the wizard (you can disable Google Analytics for now)
4. Once created, click the web icon (</>) to add a web app
5. Copy the config values to your `.env.local`

**Enable Services:**
- Click "Authentication" → "Get Started" → Enable "Email/Password" and "Google"
- Click "Firestore Database" → "Create Database" → Start in test mode
- Click "Storage" → "Get Started" → Start in test mode

### Step 4: Stripe Setup (3 minutes)

1. Go to [Stripe Dashboard](https://dashboard.stripe.com/register)
2. Create an account (or login)
3. Get your API keys from "Developers" → "API keys"
4. Copy the publishable and secret keys to `.env.local`
5. For webhooks (optional for now):
   - Go to "Developers" → "Webhooks"
   - Add endpoint: `http://localhost:3000/api/webhooks/stripe`
   - Select events: `payment_intent.succeeded`, `payment_intent.payment_failed`

### Step 5: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser!

## 📝 What You Get

### Pages Available:
- **Homepage** (`/`) - Hero section, featured properties, mortgage calculator
- **Properties** (`/properties`) - Browse all listings with filters
- **Property Detail** (`/properties/[id]`) - Individual property pages
- **Login** (`/login`) - User authentication
- **Sign Up** (`/signup`) - User registration
- **Dashboard** (`/dashboard`) - Client portal (requires login)
- **Contact** (`/contact`) - Contact form
- **Blog** (`/blog`) - Market insights and articles
- **Neighborhoods** (`/neighborhoods`) - Area guides

### Features Working Out of the Box:
- ✅ User authentication (Email/Password & Google)
- ✅ Property browsing and search
- ✅ Mortgage calculator
- ✅ Contact forms
- ✅ Responsive design
- ✅ AI Chatbot
- ✅ Client dashboard
- ✅ Invoice generator

### Features Requiring Configuration:
- ⚙️ Stripe payments (needs API keys)
- ⚙️ Email notifications (needs SMTP setup)
- ⚙️ Property data (needs Firebase data)

## 🎨 Customization

### Change Colors
Edit `app/globals.css` and modify the CSS variables:
```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Blue - change this */
  /* ... other colors */
}
```

### Add Your Logo
Replace the text logo in `components/Navbar.tsx` with your image:
```tsx
<Image src="/your-logo.png" alt="Logo" width={150} height={40} />
```

### Update Company Info
Edit `components/Footer.tsx` to update:
- Company name
- Address
- Phone number
- Email
- Social media links

## 📊 Add Sample Data

### Add a Property to Firestore

1. Go to Firebase Console → Firestore Database
2. Click "Start Collection"
3. Collection ID: `properties`
4. Add a document with these fields:

```json
{
  "title": "Beautiful Family Home",
  "description": "Spacious 4-bedroom home in quiet neighborhood",
  "price": 450000,
  "address": "123 Main Street",
  "city": "Austin",
  "state": "TX",
  "zipCode": "78701",
  "propertyType": "house",
  "status": "available",
  "bedrooms": 4,
  "bathrooms": 3,
  "squareFeet": 2500,
  "images": ["https://via.placeholder.com/800x600"],
  "amenities": ["Garage", "Backyard", "Updated Kitchen"],
  "features": ["Hardwood Floors", "New Roof"],
  "agentId": "your-user-id",
  "createdAt": "2024-01-15T00:00:00.000Z",
  "updatedAt": "2024-01-15T00:00:00.000Z",
  "views": 0,
  "saves": 0
}
```

## 🔧 Common Issues

### "Firebase not configured"
- Make sure all Firebase env variables are set in `.env.local`
- Restart the dev server after adding env variables

### "Stripe error"
- Verify your Stripe keys are correct
- Make sure you're using test mode keys (start with `pk_test_` and `sk_test_`)

### Images not showing
- Add placeholder images to `/public` folder
- Or use external URLs like `https://via.placeholder.com/800x600`

### Authentication not working
- Enable Email/Password and Google auth in Firebase Console
- For Google auth, add your domain to authorized domains

## 🚀 Next Steps

1. **Add Real Property Data** - Add properties to Firestore
2. **Upload Images** - Use Firebase Storage for property images
3. **Configure Email** - Set up SMTP for notifications
4. **Customize Design** - Update colors, fonts, and branding
5. **Add Content** - Write blog posts and neighborhood guides
6. **Test Payments** - Use Stripe test cards to test payments
7. **Deploy** - Deploy to Vercel or your preferred platform

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)

## 💡 Tips

- Use Stripe test cards: `4242 4242 4242 4242` (any future date, any CVC)
- Firebase test mode expires after 30 days - set up security rules
- Keep your `.env.local` file secure and never commit it to git
- Test on mobile devices - the site is fully responsive

## 🆘 Need Help?

- Check `ENV_SETUP.md` for detailed environment setup
- Review `README.md` for full documentation
- Check Firebase and Stripe dashboards for errors
- Ensure all dependencies are installed: `npm install`

---

Happy building! 🏡
