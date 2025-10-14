'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, School, ShoppingCart, Coffee, TrendingUp } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

// Mock neighborhoods data
const neighborhoods = [
  {
    id: '1',
    name: 'Downtown District',
    city: 'New York',
    state: 'NY',
    description: 'Vibrant urban living with world-class dining and entertainment',
    highlights: ['Walkable', 'Public Transit', 'Nightlife', 'Restaurants'],
    averagePrice: 850000,
    images: ['/placeholder-neighborhood.jpg'],
    schools: [
      { name: 'Central Elementary', type: 'elementary' as const, rating: 9 },
      { name: 'Downtown High School', type: 'high' as const, rating: 8 },
    ],
  },
  {
    id: '2',
    name: 'Suburban Oaks',
    city: 'Austin',
    state: 'TX',
    description: 'Family-friendly community with excellent schools and parks',
    highlights: ['Family-Friendly', 'Parks', 'Safe', 'Good Schools'],
    averagePrice: 425000,
    images: ['/placeholder-neighborhood.jpg'],
    schools: [
      { name: 'Oakwood Elementary', type: 'elementary' as const, rating: 10 },
      { name: 'Suburban Middle School', type: 'middle' as const, rating: 9 },
    ],
  },
  {
    id: '3',
    name: 'Beachside Haven',
    city: 'Miami',
    state: 'FL',
    description: 'Coastal paradise with stunning ocean views and beach access',
    highlights: ['Beach Access', 'Ocean Views', 'Resort Living', 'Water Sports'],
    averagePrice: 1200000,
    images: ['/placeholder-neighborhood.jpg'],
    schools: [
      { name: 'Coastal Academy', type: 'elementary' as const, rating: 8 },
    ],
  },
];

export default function NeighborhoodsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Explore Neighborhoods
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-2xl mx-auto">
            Discover the perfect community for your lifestyle
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {neighborhoods.map((neighborhood) => (
            <Card key={neighborhood.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={neighborhood.images[0]}
                  alt={neighborhood.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{neighborhood.name}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {neighborhood.city}, {neighborhood.state}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Avg. Price</p>
                    <p className="text-xl font-bold text-blue-600">
                      {formatCurrency(neighborhood.averagePrice)}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600">{neighborhood.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {neighborhood.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Schools */}
                {neighborhood.schools.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <School className="h-4 w-4 mr-2" />
                      Nearby Schools
                    </h4>
                    <div className="space-y-2">
                      {neighborhood.schools.map((school, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-gray-600">{school.name}</span>
                          <span className="font-semibold">
                            Rating: {school.rating}/10
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Amenities Icons */}
                <div className="flex items-center gap-4 pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-600">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Shopping
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Coffee className="h-4 w-4 mr-1" />
                    Dining
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    Growing
                  </div>
                </div>

                <Link href={`/neighborhoods/${neighborhood.id}`}>
                  <Button className="w-full">
                    Explore Neighborhood
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
