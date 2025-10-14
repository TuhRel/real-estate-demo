'use client';

import { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import SearchBar from '@/components/SearchBar';
import { Property } from '@/types';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SlidersHorizontal } from 'lucide-react';

// Mock data - Replace with Firebase query
const mockProperties: Property[] = [
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
  // Add more mock properties as needed
];

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  const handleSort = (value: string) => {
    setSortBy(value);
    const sorted = [...properties];
    
    switch (value) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sorted.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        break;
      case 'sqft':
        sorted.sort((a, b) => b.squareFeet - a.squareFeet);
        break;
    }
    
    setProperties(sorted);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Browse Properties</h1>
          <SearchBar />
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <p className="text-gray-600">
              Showing <span className="font-semibold">{properties.length}</span> properties
            </p>
          </div>
          
          <div className="flex gap-4 w-full sm:w-auto">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex-1 sm:flex-none"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
            
            <Select value={sortBy} onValueChange={handleSort}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="sqft">Square Feet</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
