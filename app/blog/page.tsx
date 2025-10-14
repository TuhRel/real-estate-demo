'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

// Mock blog posts
const blogPosts = [
  {
    id: '1',
    title: '10 Tips for First-Time Home Buyers',
    slug: '10-tips-first-time-home-buyers',
    excerpt: 'Essential advice for navigating the home buying process for the first time.',
    coverImage: '/placeholder-blog.jpg',
    author: 'Jane Smith',
    category: 'Buying Guide',
    publishedAt: new Date('2024-01-15'),
    views: 1250,
  },
  {
    id: '2',
    title: 'Real Estate Market Trends 2024',
    slug: 'real-estate-market-trends-2024',
    excerpt: 'Analysis of current market conditions and predictions for the coming year.',
    coverImage: '/placeholder-blog.jpg',
    author: 'John Doe',
    category: 'Market Insights',
    publishedAt: new Date('2024-01-10'),
    views: 2100,
  },
  {
    id: '3',
    title: 'How to Stage Your Home for a Quick Sale',
    slug: 'how-to-stage-home-quick-sale',
    excerpt: 'Professional staging tips to make your property more appealing to buyers.',
    coverImage: '/placeholder-blog.jpg',
    author: 'Sarah Johnson',
    category: 'Selling Tips',
    publishedAt: new Date('2024-01-05'),
    views: 890,
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Market Insights & Blog
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-2xl mx-auto">
            Stay informed with the latest real estate trends, tips, and expert advice
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Button variant="outline" size="sm">All Posts</Button>
          <Button variant="outline" size="sm">Buying Guide</Button>
          <Button variant="outline" size="sm">Selling Tips</Button>
          <Button variant="outline" size="sm">Market Insights</Button>
          <Button variant="outline" size="sm">Investment</Button>
          <Button variant="outline" size="sm">Neighborhood Guides</Button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.publishedAt.toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button variant="link" className="mt-4 p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
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
