import React from 'react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Redefine Your Style</h1>
          <p className="text-xl md:text-2xl mb-8">Exclusive Collections Tailored for You</p>
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}