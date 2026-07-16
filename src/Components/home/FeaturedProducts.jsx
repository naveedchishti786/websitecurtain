import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { products } from '../../data/products';

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Get featured products from each category
  const getFeaturedProducts = () => {
    if (activeCategory === 'all') {
      return [
        ...products.curtains.slice(0, 2),
        ...products.furniture.slice(0, 2),
        ...products.mattress.slice(0, 2)
      ];
    } else if (activeCategory === 'curtains') {
      return products.curtains.slice(0, 6);
    } else if (activeCategory === 'furniture') {
      return products.furniture.slice(0, 6);
    } else if (activeCategory === 'mattress') {
      return products.mattress.slice(0, 6);
    }
  };

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏠' },
    { id: 'curtains', name: 'Curtains', icon: '🪟' },
    { id: 'furniture', name: 'Furniture', icon: '🛋️' },
    { id: 'mattress', name: 'Bedding', icon: '🛏️' }
  ];

  const featuredProducts = getFeaturedProducts();

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium curtains, furniture, and bedding products
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to={activeCategory === 'all' ? '/curtains' : `/${activeCategory}`}
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All {activeCategory === 'all' ? 'Products' : categories.find(c => c.id === activeCategory)?.name}
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Special Offers Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Special Offer! 🎉
              </h3>
              <p className="text-lg mb-6">
                Get up to 30% off on all curtains and free installation service
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Free Home Consultation
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  Professional Installation
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  1 Year Service Warranty
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Claim Offer Now
              </Link>
            </div>
            <div className="hidden md:block">
              <img
                src="/images/offer-banner.jpg"
                alt="Special Offer"
                className="rounded-lg shadow-2xl"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;