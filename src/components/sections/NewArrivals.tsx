import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Casual Linen Shirt",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Shirts"
  },
  {
    id: 2,
    name: "Summer Dress",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Dresses"
  },
  {
    id: 3,
    name: "Classic Denim",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Jeans"
  },
  {
    id: 4,
    name: "Leather Jacket",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Outerwear"
  }
];

export function NewArrivals() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">New Arrivals</h2>
        <p className="text-gray-600 text-center mb-12">Discover our latest collection</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <h3 className="font-semibold mb-1">{product.name}</h3>
                <p className="text-lg font-bold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}