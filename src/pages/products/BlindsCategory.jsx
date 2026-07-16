import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Blinds } from 'lucide-react';

const BlindsCategory = () => {
  const [cart, setCart] = useState([]);

  const blinds = Array.from({ length: 26 }, (_, i) => ({
    id: 401 + i,
    name: `Premium Blind Design ${i + 1}`,
    type: 'blinds',
    price: `AED ${150 + (i % 5) * 20}`,
    image: `/images/blind-curtains/blind-${i + 1}.jpg`,
    rating: Number((4.5 + (i % 6) * 0.1).toFixed(1)),
    description: 'Elegant window blind design with excellent sun control.',
    colors: ['Customizable']
  }));

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Blinds className="w-10 h-10 text-amber-500" />
            Premium Blinds Collection
          </h1>
          <p className="text-gray-300">Discover our exclusive range of high-quality window blinds</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blinds.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              {/* Image */}
              <div className="relative h-56 bg-gray-100 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                  <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>

                <p className="text-sm text-gray-600 mb-3">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-amber-500 fill-amber-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600">({product.rating})</span>
                </div>

                {/* Colors */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Available Colors:</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Button */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-amber-500 hover:bg-amber-600 text-white p-2.5 rounded-lg transition-all"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <Link
                      to={`/blinds/${product.id}`}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-semibold transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Blinds?</h2>
          <p className="text-lg mb-6">Contact our experts for personalized consultation</p>
          <a href="tel:+971555124614" className="bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
            📞 Call Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlindsCategory;
