import React from 'react';
import { Truck, RefreshCw, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $100"
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day return policy"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure checkout"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always here to help"
  }
];

export function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                <feature.icon className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}