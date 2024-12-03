import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown, SlidersHorizontal, Heart, ShoppingCart } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Collections' },
  { id: 'summer', name: 'Summer Collection' },
  { id: 'winter', name: 'Winter Collection' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'formal', name: 'Formal Wear' },
  { id: 'casual', name: 'Casual Wear' },
  { id: 'sportswear', name: 'Sportswear' },
];

const products = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
    category: "summer"
  },
  {
    id: 2,
    name: "Winter Wool Coat",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543",
    category: "winter"
  },
  {
    id: 3,
    name: "Leather Handbag",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    category: "accessories"
  },
  {
    id: 4,
    name: "Business Suit",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    category: "formal"
  },
  {
    id: 5,
    name: "Casual Denim Jacket",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2",
    category: "casual"
  },
  {
    id: 6,
    name: "Sport Running Shoes",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "sportswear"
  },
  {
    id: 7,
    name: "Summer Beach Hat",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
    category: "summer"
  },
  {
    id: 8,
    name: "Winter Scarf Set",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9",
    category: "winter"
  },
  {
    id: 9,
    name: "Designer Watch",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
    category: "accessories"
  },
  {
    id: 10,
    name: "Evening Gown",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1518838439236-2b73ceb4638a",
    category: "formal"
  },
  {
    id: 11,
    name: "Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    category: "casual"
  },
  {
    id: 12,
    name: "Yoga Set",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2",
    category: "sportswear"
  }
];

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-asc', name: 'Price: Low to High' },
  { id: 'price-desc', name: 'Price: High to Low' },
  { id: 'newest', name: 'Newest' }
];

export function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = [...products];

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply price range filter
    filtered = filtered.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured sorting (default order)
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Our Collections</h1>
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`w-full md:w-64 space-y-6 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5" />
                <span className="font-semibold">Filters</span>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-black text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600">Min Price</label>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                      className="w-full"
                    />
                    <span className="text-sm">${priceRange.min}</span>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Max Price</label>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                      className="w-full"
                    />
                    <span className="text-sm">${priceRange.max}</span>
                  </div>
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <h3 className="font-semibold mb-3">Sort By</h3>
                <div className="space-y-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSortBy(option.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        sortBy === option.id
                          ? 'bg-black text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}