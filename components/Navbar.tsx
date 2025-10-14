'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Home, Search, User, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // Replace with actual auth state

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Elite Estates</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/properties" className="text-gray-700 hover:text-blue-600 transition">
              Properties
            </Link>
            <Link href="/buy" className="text-gray-700 hover:text-blue-600 transition">
              Buy
            </Link>
            <Link href="/sell" className="text-gray-700 hover:text-blue-600 transition">
              Sell
            </Link>
            <Link href="/neighborhoods" className="text-gray-700 hover:text-blue-600 transition">
              Neighborhoods
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link href="/dashboard">
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user?.photoURL} />
                    <AvatarFallback>{user?.displayName?.[0] || 'U'}</AvatarFallback>
                  </Avatar>
                </Link>
                <Button variant="ghost" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              href="/properties"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Properties
            </Link>
            <Link
              href="/buy"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Buy
            </Link>
            <Link
              href="/sell"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Sell
            </Link>
            <Link
              href="/neighborhoods"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Neighborhoods
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Contact
            </Link>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  Dashboard
                </Link>
                <button className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
