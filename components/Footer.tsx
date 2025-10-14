import Link from 'next/link';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">Elite Estates</span>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner in finding the perfect home. We make real estate simple, transparent, and accessible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/properties" className="hover:text-blue-500 transition">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link href="/buy" className="hover:text-blue-500 transition">
                  Buy a Home
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-blue-500 transition">
                  Sell Your Home
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods" className="hover:text-blue-500 transition">
                  Neighborhoods
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-500 transition">
                  Market Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mortgage-calculator" className="hover:text-blue-500 transition">
                  Mortgage Calculator
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-blue-500 transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-500 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-500 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>123 Real Estate Ave, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>info@eliteestates.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Elite Estates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
