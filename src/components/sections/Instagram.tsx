import React from 'react';
import { Instagram as InstagramIcon } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export function Instagram() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <InstagramIcon className="w-6 h-6 mr-2" />
          <h2 className="text-2xl font-bold">Follow Us on Instagram</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="relative aspect-square group overflow-hidden">
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}