import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from 'lucide-react';

const ProductDetail = () => {
  const { type, id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);

  // Sample product data
  const product = {
    name: 'Premium Blackout Curtains',
    price: 'AED 250',
    rating: 4.8,
    reviews: 156,
    description: '100% Light Blocking, Thermal Insulated Premium Quality Curtains',
    colors: ['Black', 'Navy', 'Charcoal', 'Dark Gray'],
    sizes: ['100cm', '150cm', '200cm', '250cm', '300cm'],
    features: [
      '100% Light Blocking Technology',
      'Thermal Insulation',
      'Noise Reduction',
      'Easy Installation',
      'Machine Washable',
      'UV Protection'
    ],
    specifications: {
      Material: '100% Polyester',
      Weight: '500g/m²',
      Care: 'Machine wash 30°C',
      Durability: '5+ Years',
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 h-96 rounded-lg flex items-center justify-center text-8xl mb-6">
              🪟
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((img) => (
                <div key={img} className="bg-gray-100 rounded-lg p-3 text-3xl cursor-pointer hover:bg-gray-200">
                  🪟
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < 4 ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="text-4xl font-bold text-amber-600 mb-6">{product.price}</div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Select Color</h3>
              <div className="grid grid-cols-4 gap-3">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(idx)}
                    className={`p-3 rounded-lg font-semibold transition-all ${
                      selectedColor === idx
                        ? 'bg-amber-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Select Size</h3>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="p-2 border-2 border-gray-300 rounded-lg hover:border-amber-500 transition-all font-semibold"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4 bg-gray-100 w-fit px-4 py-2 rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-xl font-bold">−</button>
                <span className="text-xl font-bold w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-xl font-bold">+</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-bold flex items-center justify-center space-x-2 transition-all">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button className="flex-1 border-2 border-gray-300 hover:border-red-500 text-gray-700 py-3 rounded-lg font-bold flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-6 pt-6 border-t">
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-semibold">Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-semibold">2 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-semibold">Easy Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-semibold">Secure Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Product</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
            <h3 className="font-bold text-gray-900 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h2>
            <div className="space-y-3">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between pb-3 border-b">
                  <span className="font-semibold text-gray-900">{key}</span>
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((product) => (
              <div key={product} className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all">
                <div className="bg-amber-50 h-32 rounded-lg flex items-center justify-center text-4xl mb-3">
                  🪟
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Premium Sheer Curtains</h3>
                <p className="text-amber-600 font-bold">AED 180</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;