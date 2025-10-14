import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';
import MortgageCalculator from '@/components/MortgageCalculator';
import { Property } from '@/types';
import { ArrowRight, Home as HomeIcon, DollarSign, Users, Award } from 'lucide-react';

// Mock data - Replace with actual Firebase data
const featuredProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    description: 'Stunning modern villa with panoramic ocean views',
    price: 1250000,
    address: '123 Ocean Drive',
    city: 'Miami',
    state: 'FL',
    zipCode: '33139',
    propertyType: 'house',
    status: 'available',
    bedrooms: 5,
    bathrooms: 4,
    squareFeet: 4500,
    lotSize: 8000,
    yearBuilt: 2022,
    images: ['/placeholder-property.jpg'],
    amenities: ['Pool', 'Gym', 'Smart Home'],
    features: ['Ocean View', 'Gourmet Kitchen'],
    agentId: 'agent1',
    createdAt: new Date(),
    updatedAt: new Date(),
    views: 150,
    saves: 25,
  },
  {
    id: '2',
    title: 'Downtown Penthouse',
    description: 'Elegant penthouse in the heart of the city',
    price: 850000,
    address: '456 City Center',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    propertyType: 'apartment',
    status: 'available',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 2200,
    yearBuilt: 2020,
    images: ['/placeholder-property.jpg'],
    amenities: ['Concierge', 'Rooftop Deck'],
    features: ['City Views', 'High Ceilings'],
    agentId: 'agent1',
    createdAt: new Date(),
    updatedAt: new Date(),
    views: 200,
    saves: 40,
  },
  {
    id: '3',
    title: 'Suburban Family Home',
    description: 'Perfect family home in quiet neighborhood',
    price: 425000,
    address: '789 Maple Street',
    city: 'Austin',
    state: 'TX',
    zipCode: '78701',
    propertyType: 'house',
    status: 'available',
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3200,
    lotSize: 6000,
    yearBuilt: 2018,
    images: ['/placeholder-property.jpg'],
    amenities: ['Backyard', 'Garage'],
    features: ['Updated Kitchen', 'Hardwood Floors'],
    agentId: 'agent1',
    createdAt: new Date(),
    updatedAt: new Date(),
    views: 120,
    saves: 18,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Dream Home
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Discover the perfect property from our extensive collection
            </p>
          </div>
          <SearchBar />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
              <p className="text-gray-600 mt-2">Handpicked properties just for you</p>
            </div>
            <Link href="/properties">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Elite Estates</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service and expertise to help you find your perfect home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">Thousands of properties to choose from</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing and great deals</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Agents</h3>
              <p className="text-gray-600">Professional and experienced team</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
              <p className="text-gray-600">Award-winning customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculate Your Mortgage</h2>
            <p className="text-gray-600">
              Get an estimate of your monthly payments
            </p>
          </div>
          <MortgageCalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied clients who found their perfect property with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties">
              <Button size="lg" variant="secondary">
                Browse Properties
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                Contact an Agent
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
