import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Globe, Leaf } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Quality First",
    description: "We believe in creating pieces that last, using only the finest materials and craftsmanship."
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our customers are at the heart of everything we do, driving our innovations and designs."
  },
  {
    icon: Globe,
    title: "Global Style",
    description: "Drawing inspiration from cultures worldwide to create unique, timeless pieces."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to sustainable practices and reducing our environmental impact."
  }
];

export function AboutUsPage() {
  return (
    <div className="pt-16">
      <div className="relative h-[400px] mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')"
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl">Crafting timeless fashion since 1970</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Founded in 1970, LUXE has been at the forefront of fashion innovation for over five decades. What started as a small boutique in Paris has grown into a global brand, recognized for its commitment to quality and style.
              </p>
              <p className="text-gray-600">
                Our dedication to craftsmanship and attention to detail has earned us a reputation as one of the most respected names in fashion, with a presence in over 50 countries worldwide.
              </p>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
                alt="Our workshop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}