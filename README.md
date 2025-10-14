# Elite Estates - Modern Real Estate Website

A comprehensive, modern real estate platform built with Next.js, Firebase, and Stripe. Features property listings, client dashboards, appointment scheduling, payments, and more.

## 🚀 Features

### Core Functionality
- **Dynamic Property Listings** - Browse, search, and filter properties with advanced search capabilities
- **User Authentication** - Secure login/signup with Firebase Auth (Email/Password & Google OAuth)
- **Client Dashboard** - Personalized portal for clients to manage saved properties, appointments, and documents
- **Property Management** - CRUD operations for property listings with image uploads
- **Advanced Search & Filters** - Filter by price, location, property type, size, amenities, and more

### Business Features
- **Appointment Scheduling** - Book property viewings with calendar integration
- **Lead Capture Forms** - Contact forms with automated email notifications
- **Invoicing System** - Generate and manage branded invoices for services
- **Stripe Payment Integration** - Accept payments for services, fees, and deposits
- **Document Management** - Secure upload and storage for applications and contracts

### Content & SEO
- **Blog/Market Insights** - Educational content and market analysis
- **Neighborhood Guides** - Detailed area information with schools, amenities, and pricing
- **Mortgage Calculator** - Interactive calculator for payment estimates
- **Testimonials & Reviews** - Client feedback and ratings
- **SEO-Optimized Pages** - Each listing has its own optimized page for search engines

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + Custom Components
- **Database:** Firebase Firestore
- **Authentication:** Firebase Auth
- **Storage:** Firebase Storage
- **Payments:** Stripe
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod

## 📋 Prerequisites

- Node.js 18+ and npm
- Firebase account and project
- Stripe account
- Email service (Gmail, SendGrid, etc.) for notifications

## 🔧 Installation

1. **Clone the repository**
```bash
cd real-estate-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory. See `ENV_SETUP.md` for detailed instructions.

Required variables:
```env
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

# Email (Optional)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
EMAIL_FROM=

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🗂️ Project Structure

```
real-estate-website/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   ├── contact/          # Contact form handler
│   │   ├── properties/       # Property CRUD operations
│   │   ├── create-payment-intent/  # Stripe payment intent
│   │   └── webhooks/stripe/  # Stripe webhook handler
│   ├── blog/                 # Blog pages
│   ├── contact/              # Contact page
│   ├── dashboard/            # Client dashboard
│   ├── login/                # Login page
│   ├── neighborhoods/        # Neighborhood guides
│   ├── properties/           # Property listings
│   ├── signup/               # Registration page
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/               # React components
│   ├── ui/                   # Reusable UI components
│   ├── Footer.tsx
│   ├── MortgageCalculator.tsx
│   ├── Navbar.tsx
│   ├── PropertyCard.tsx
│   └── SearchBar.tsx
├── lib/                      # Utility functions
│   ├── firebase.ts           # Firebase configuration
│   ├── stripe.ts             # Stripe configuration
│   └── utils.ts              # Helper functions
├── types/                    # TypeScript type definitions
│   └── index.ts
└── public/                   # Static assets
```

## 🔥 Firebase Setup

1. Create a new Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication (Email/Password and Google)
3. Create a Firestore Database
4. Enable Storage
5. Add your Firebase config to `.env.local`

### Firestore Collections Structure

```
users/
  - {userId}
    - displayName, email, role, savedListings, createdAt

properties/
  - {propertyId}
    - title, description, price, address, images, amenities, etc.

appointments/
  - {appointmentId}
    - propertyId, clientId, agentId, date, time, status

inquiries/
  - {inquiryId}
    - name, email, phone, message, status, createdAt

invoices/
  - {invoiceId}
    - clientId, items, total, status, dueDate

payments/
  - {paymentId}
    - userId, amount, status, stripePaymentIntentId
```

## 💳 Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Dashboard
3. Set up a webhook endpoint pointing to `/api/webhooks/stripe`
4. Add webhook secret to `.env.local`

## 📧 Email Notifications

Configure SMTP settings in `.env.local` to enable:
- Contact form confirmations
- Appointment reminders
- Lead notifications
- Invoice delivery

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Self-hosted with Docker

## 📝 Key Features Implementation

### Property Listings
- Properties are stored in Firestore with full CRUD operations
- Images uploaded to Firebase Storage
- Advanced filtering and search
- SEO-optimized individual property pages

### Client Dashboard
- Secure authentication required
- View saved properties
- Manage appointments
- Upload documents
- Track inquiries

### Payments
- Stripe integration for one-time payments
- Support for ACH transfers
- Invoice generation with PDF export
- Payment history tracking

### Appointment Scheduling
- Calendar integration
- Email confirmations
- Automated reminders
- Status tracking (scheduled, confirmed, completed, cancelled)

## 🔒 Security

- Firebase Security Rules configured for data protection
- Authentication required for sensitive operations
- Stripe webhook signature verification
- Input validation with Zod
- XSS protection with React

## 🎨 Customization

- Update colors in `app/globals.css`
- Modify components in `components/`
- Add new pages in `app/`
- Extend types in `types/index.ts`

## 📱 Responsive Design

Fully responsive design optimized for:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
- Check the documentation
- Review `ENV_SETUP.md` for configuration help
- Open an issue on GitHub

## 🎯 Roadmap

- [ ] IDX/MLS Integration
- [ ] AI Chatbot for property Q&A
- [ ] Virtual tour integration
- [ ] Mobile app (React Native)
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Property comparison tool
- [ ] Saved searches with alerts

---

Built with ❤️ using Next.js, Firebase, and Stripe
