import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Tag } from 'lucide-react';

const newArrivals = [
  {
    id: 1,
    name: "Designer Summer Dress",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
    tag: "New Season"
  },
  {
    id: 2,
    name: "Premium Leather Jacket",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    tag: "Limited Edition"
  },
  // Add more products...
];

export function NewArrivalsPage() {
  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">New Arrivals</h1>
          <p className="text-gray-600">Discover our latest collection of trendsetting pieces</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-black text-white">
                    <Tag className="w-4 h-4 mr-1" />
                    {product.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-lg font-bold">${product.price}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}