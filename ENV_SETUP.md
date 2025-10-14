# Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

## Firebase Configuration
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Stripe Configuration
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

## Email Configuration (for notifications)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
EMAIL_FROM=noreply@yourdomain.com
```

## Application URLs
```
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Optional: IDX Integration
```
IDX_API_KEY=your_idx_api_key
IDX_API_URL=your_idx_provider_url
```

## Setup Instructions

1. **Firebase Setup:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Authentication (Email/Password)
   - Create a Firestore Database
   - Enable Storage
   - Copy the config values to your `.env.local`

2. **Stripe Setup:**
   - Go to [Stripe Dashboard](https://dashboard.stripe.com/)
   - Get your API keys from Developers > API keys
   - Set up webhooks pointing to `your-domain/api/webhooks/stripe`

3. **Email Setup:**
   - For Gmail, enable 2FA and create an App Password
   - Use the App Password in SMTP_PASSWORD

4. Copy this file to `.env.local` and fill in your actual values
