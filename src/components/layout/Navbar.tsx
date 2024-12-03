import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Menu } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">LUXE</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-gray-600 transition-colors ${location.pathname === '/' ? 'font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/collections" 
              className={`hover:text-gray-600 transition-colors ${location.pathname === '/collections' ? 'font-semibold' : ''}`}
            >
              Collections
            </Link>
            <Link 
              to="/new-arrivals" 
              className={`hover:text-gray-600 transition-colors ${location.pathname === '/new-arrivals' ? 'font-semibold' : ''}`}
            >
              New Arrivals
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-gray-600 transition-colors ${location.pathname === '/about' ? 'font-semibold' : ''}`}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-gray-600 transition-colors ${location.pathname === '/contact' ? 'font-semibold' : ''}`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}