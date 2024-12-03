import React from 'react';

const collections = [
  {
    id: 1,
    title: "Summer Collection",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Winter Essentials",
    image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export function Collections() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div 
              key={collection.id}
              className="group relative overflow-hidden rounded-lg aspect-[3/4]"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{collection.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}