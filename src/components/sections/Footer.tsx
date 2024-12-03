import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-900 text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm">Discover the latest trends in fashion and explore our exclusive collections.</p>
          </div>
          
          <div>
            <h3 className="text-gray-900 text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Sale</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Size Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-900 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gray-900 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gray-900 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gray-900 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-center">
          <p>&copy; 2024 CaffeineCoders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}