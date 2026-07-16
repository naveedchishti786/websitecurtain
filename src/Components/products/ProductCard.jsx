import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Product Image */}
      <div className="relative overflow-hidden h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Product+Image';
          }}
        />
        <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
          New
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-2 mb-2"
            >
              ✓ {feature}
            </span>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-primary">
              ₹{product.price.toLocaleString()}
            </span>
          </div>
          <Link
            to={`/product/${product.id}`}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;