'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bed, Bath, Maximize, MapPin, Heart } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { useState } from 'react';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSaved(!isSaved);
    // TODO: Implement save to Firebase
  };

  return (
    <Link href={`/properties/${property.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={property.images[0] || '/placeholder-property.jpg'}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {property.status === 'available' ? 'For Sale' : property.status}
            </span>
          </div>
          <button
            onClick={handleSave}
            className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition"
          >
            <Heart
              className={`h-5 w-5 ${isSaved ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>
          <div className="absolute bottom-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-lg font-bold">
              {formatCurrency(property.price)}
            </span>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm line-clamp-1">
              {property.address}, {property.city}, {property.state}
            </span>
          </div>

          <div className="flex items-center justify-between text-gray-700">
            <div className="flex items-center space-x-1">
              <Bed className="h-5 w-5" />
              <span className="text-sm font-medium">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath className="h-5 w-5" />
              <span className="text-sm font-medium">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center space-x-1">
              <Maximize className="h-5 w-5" />
              <span className="text-sm font-medium">{property.squareFeet.toLocaleString()} sqft</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button className="w-full" variant="outline">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
