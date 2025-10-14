export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: 'house' | 'apartment' | 'condo' | 'townhouse' | 'land' | 'commercial';
  status: 'available' | 'pending' | 'sold' | 'rented';
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  lotSize?: number;
  yearBuilt?: number;
  images: string[];
  amenities: string[];
  features: string[];
  virtualTourUrl?: string;
  videoUrl?: string;
  mlsNumber?: string;
  agentId: string;
  createdAt: Date;
  updatedAt: Date;
  views: number;
  saves: number;
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'client' | 'agent' | 'admin';
  phone?: string;
  createdAt: Date;
  savedListings: string[];
  preferences?: {
    minPrice?: number;
    maxPrice?: number;
    propertyTypes?: string[];
    locations?: string[];
  };
}

export interface Appointment {
  id: string;
  propertyId: string;
  clientId: string;
  agentId: string;
  date: Date;
  time: string;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  type: 'showing' | 'consultation' | 'inspection';
  createdAt: Date;
  updatedAt: Date;
}

export interface Inquiry {
  id: string;
  propertyId?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: 'new' | 'contacted' | 'qualified' | 'closed';
  createdAt: Date;
  assignedTo?: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  agentId: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  dueDate: Date;
  paidDate?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface Payment {
  id: string;
  invoiceId?: string;
  userId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'succeeded' | 'failed' | 'refunded';
  paymentMethod: 'stripe' | 'paypal' | 'ach';
  stripePaymentIntentId?: string;
  createdAt: Date;
  metadata?: Record<string, any>;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  authorId: string;
  category: string;
  tags: string[];
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  views: number;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientPhoto?: string;
  rating: number;
  review: string;
  propertyId?: string;
  featured: boolean;
  approved: boolean;
  createdAt: Date;
}

export interface Neighborhood {
  id: string;
  name: string;
  city: string;
  state: string;
  description: string;
  highlights: string[];
  schools: School[];
  amenities: string[];
  averagePrice: number;
  images: string[];
  mapUrl?: string;
}

export interface School {
  name: string;
  type: 'elementary' | 'middle' | 'high';
  rating?: number;
  distance?: string;
}

export interface Document {
  id: string;
  userId: string;
  name: string;
  type: string;
  url: string;
  size: number;
  uploadedAt: Date;
  category: 'application' | 'id' | 'financial' | 'contract' | 'other';
}
