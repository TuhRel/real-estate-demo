'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bed, Bath, Maximize, MapPin, Heart, Share2, Calendar, 
  Phone, Mail, Car, Home as HomeIcon, Check 
} from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

// Mock property data - Replace with Firebase fetch
const mockProperty = {
  id: '1',
  title: 'Modern Luxury Villa',
  description: 'Stunning modern villa with panoramic ocean views. This exceptional property features high-end finishes throughout, an open floor plan perfect for entertaining, and floor-to-ceiling windows that showcase breathtaking views. The gourmet kitchen is equipped with top-of-the-line appliances, and the master suite includes a spa-like bathroom and private balcony.',
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
  images: [
    '/placeholder-property.jpg',
    '/placeholder-property.jpg',
    '/placeholder-property.jpg',
    '/placeholder-property.jpg',
  ],
  amenities: ['Pool', 'Gym', 'Smart Home', 'Security System', 'Central AC'],
  features: [
    'Ocean View',
    'Gourmet Kitchen',
    'Hardwood Floors',
    'Walk-in Closets',
    'High Ceilings',
    'Fireplace',
  ],
  agentId: 'agent1',
  agent: {
    name: 'Sarah Johnson',
    phone: '(555) 123-4567',
    email: 'sarah@eliteestates.com',
    photo: '/placeholder-agent.jpg',
  },
  createdAt: new Date(),
  updatedAt: new Date(),
  views: 150,
  saves: 25,
};

export default function PropertyDetailPage() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'I am interested in this property. Please contact me with more information.',
  });

  const property = mockProperty; // Replace with actual data fetch

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit inquiry to Firebase
    console.log('Inquiry submitted:', formData);
    setShowContactForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Main Image */}
            <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src={property.images[selectedImage]}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-44 lg:h-72 rounded-lg overflow-hidden cursor-pointer ${
                    selectedImage === index ? 'ring-4 ring-blue-600' : ''
                  }`}
                >
                  <Image src={image} alt={`View ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>
                      {property.address}, {property.city}, {property.state} {property.zipCode}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsSaved(!isSaved)}
                  >
                    <Heart className={isSaved ? 'fill-red-500 text-red-500' : ''} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-6 text-lg">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 mr-2" />
                  <span className="font-semibold">{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-2" />
                  <span className="font-semibold">{property.bathrooms} Baths</span>
                </div>
                <div className="flex items-center">
                  <Maximize className="h-5 w-5 mr-2" />
                  <span className="font-semibold">{property.squareFeet.toLocaleString()} sqft</span>
                </div>
              </div>

              <div className="mt-4">
                <span className="text-4xl font-bold text-blue-600">
                  {formatCurrency(property.price)}
                </span>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
                <TabsTrigger value="location" className="flex-1">Location</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Property Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">{property.description}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Property Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-600">Property Type</p>
                        <p className="font-semibold capitalize">{property.propertyType}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Year Built</p>
                        <p className="font-semibold">{property.yearBuilt}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Lot Size</p>
                        <p className="font-semibold">{property.lotSize?.toLocaleString()} sqft</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Status</p>
                        <p className="font-semibold capitalize">{property.status}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Amenities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-green-600 mr-2" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-green-600 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="location" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Map integration goes here</p>
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold">{property.address}</p>
                      <p className="text-gray-600">
                        {property.city}, {property.state} {property.zipCode}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={property.agent.photo}
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{property.agent.name}</p>
                    <p className="text-sm text-gray-600">Licensed Agent</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full" onClick={() => setShowContactForm(!showContactForm)}>
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    {property.agent.phone}
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Viewing
                  </Button>
                </div>

                {showContactForm && (
                  <form onSubmit={handleInquiry} className="space-y-4 pt-4 border-t">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Send Inquiry</Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Mortgage Calculator Widget */}
            <Card>
              <CardHeader>
                <CardTitle>Estimate Monthly Payment</CardTitle>
                <CardDescription>Calculate your mortgage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <p className="text-2xl font-bold text-blue-600">
                    {formatCurrency(property.price * 0.004)}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Estimated monthly payment</p>
                  <Button variant="link" className="mt-2">
                    View Full Calculator
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
