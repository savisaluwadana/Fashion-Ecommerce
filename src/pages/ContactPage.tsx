import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600">We'd love to hear from you. Get in touch with us.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-gray-600">123 Fashion Street</p>
                  <p className="text-gray-600">Paris, France 75001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-600">+1 (234) 567-8900</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-600">contact@luxe.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Opening Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9am - 8pm</p>
                  <p className="text-gray-600">Saturday - Sunday: 10am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="mt-8 h-64 bg-gray-200 rounded-lg">
              {/* Map placeholder - In a real application, you would integrate with a mapping service */}
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
                  alt="Location map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}