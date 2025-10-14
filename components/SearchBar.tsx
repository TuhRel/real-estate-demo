'use client';

import { useState } from 'react';
import { Search, MapPin, DollarSign, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    propertyType: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleSearch = () => {
    // TODO: Implement search functionality
    console.log('Search params:', searchParams);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Location */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="City, State, or ZIP"
            className="pl-10"
            value={searchParams.location}
            onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
          />
        </div>

        {/* Property Type */}
        <Select
          value={searchParams.propertyType}
          onValueChange={(value) => setSearchParams({ ...searchParams, propertyType: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
            <SelectItem value="land">Land</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
          </SelectContent>
        </Select>

        {/* Min Price */}
        <Select
          value={searchParams.minPrice}
          onValueChange={(value) => setSearchParams({ ...searchParams, minPrice: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Min Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">No Min</SelectItem>
            <SelectItem value="100000">$100,000</SelectItem>
            <SelectItem value="200000">$200,000</SelectItem>
            <SelectItem value="300000">$300,000</SelectItem>
            <SelectItem value="400000">$400,000</SelectItem>
            <SelectItem value="500000">$500,000</SelectItem>
            <SelectItem value="750000">$750,000</SelectItem>
            <SelectItem value="1000000">$1,000,000</SelectItem>
          </SelectContent>
        </Select>

        {/* Max Price */}
        <Select
          value={searchParams.maxPrice}
          onValueChange={(value) => setSearchParams({ ...searchParams, maxPrice: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Max Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="999999999">No Max</SelectItem>
            <SelectItem value="200000">$200,000</SelectItem>
            <SelectItem value="300000">$300,000</SelectItem>
            <SelectItem value="400000">$400,000</SelectItem>
            <SelectItem value="500000">$500,000</SelectItem>
            <SelectItem value="750000">$750,000</SelectItem>
            <SelectItem value="1000000">$1,000,000</SelectItem>
            <SelectItem value="2000000">$2,000,000</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Button */}
        <Button onClick={handleSearch} className="w-full">
          <Search className="h-5 w-5 mr-2" />
          Search
        </Button>
      </div>
    </div>
  );
}
