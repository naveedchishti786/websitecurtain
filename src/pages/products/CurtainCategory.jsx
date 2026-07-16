import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Blinds } from 'lucide-react';

const CurtainCategory = () => {
  const { type } = useParams();
  const [selectedFilter, setSelectedFilter] = useState(type || 'all');
  const [cart, setCart] = useState([]);

  const curtainData = {
    blackout: Array.from({ length: 25 }, (_, i) => ({
      id: 101 + i,
      name: `Premium Blackout Curtain ${i + 1}`,
      type: 'blackout',
      price: `AED ${250 + (i % 5) * 20}`,
      image: `/images/blackout-curtains/blackout-${i + 1}.jpg`,
      rating: Number((4.5 + (i % 6) * 0.1).toFixed(1)),
      description: '100% Light Blocking, Thermal Insulated',
      colors: ['Customizable']
    })),
    sheer: [
      {
        id: 301,
        name: 'Classic White Sheer Curtain',
        type: 'sheer',
        price: 'AED 150',
        image: '/images/sheer-curtains/sheer-1.jpg',
        rating: 4.8,
        description: 'Elegant, Soft Light Filtering',
        colors: ['White', 'Cream']
      },
      {
        id: 302,
        name: 'Flowing White Sheer',
        type: 'sheer',
        price: 'AED 160',
        image: '/images/sheer-curtains/sheer-2.jpg',
        rating: 4.7,
        description: 'Smooth Flowing Fabric, Soft Touch',
        colors: ['White']
      },
      {
        id: 303,
        name: 'Pleated White Sheer',
        type: 'sheer',
        price: 'AED 175',
        image: '/images/sheer-curtains/sheer-3.jpg',
        rating: 4.9,
        description: 'Perfect Pleats for a Modern Look',
        colors: ['White', 'Off-White']
      },
      {
        id: 304,
        name: 'Luxury Track Sheer',
        type: 'sheer',
        price: 'AED 180',
        image: '/images/sheer-curtains/sheer-4.jpg',
        rating: 4.6,
        description: 'Smooth Track System Integration',
        colors: ['White']
      },
      {
        id: 305,
        name: 'Grommet Style Sheer',
        type: 'sheer',
        price: 'AED 150',
        image: '/images/sheer-curtains/sheer-5.jpg',
        rating: 4.5,
        description: 'Easy to Hang, Classic Grommets',
        colors: ['Cream', 'White']
      },
      {
        id: 306,
        name: 'Modern Eyelet Sheer',
        type: 'sheer',
        price: 'AED 155',
        image: '/images/sheer-curtains/sheer-6.jpg',
        rating: 4.8,
        description: 'Sleek Eyelet Rings, Minimalist',
        colors: ['White', 'Silver']
      },
      {
        id: 307,
        name: 'Beige Textured Sheer',
        type: 'sheer',
        price: 'AED 190',
        image: '/images/sheer-curtains/sheer-7.jpg',
        rating: 4.9,
        description: 'Warm Beige Tones with Texture',
        colors: ['Beige', 'Sand']
      },
      {
        id: 308,
        name: 'Warm Glow Sheer',
        type: 'sheer',
        price: 'AED 185',
        image: '/images/sheer-curtains/sheer-8.jpg',
        rating: 4.7,
        description: 'Filters Sunlight Beautifully',
        colors: ['Cream', 'Beige']
      },
      {
        id: 309,
        name: 'Contemporary Ripple Fold Sheer',
        type: 'sheer',
        price: 'AED 210',
        image: '/images/sheer-curtains/sheer-9.jpg',
        rating: 5.0,
        description: 'Consistent S-Curve Ripple Fold',
        colors: ['Off-White']
      },
      {
        id: 310,
        name: 'Classic Beige Grommet',
        type: 'sheer',
        price: 'AED 160',
        image: '/images/sheer-curtains/sheer-10.jpg',
        rating: 4.6,
        description: 'Warm, Inviting Sheer Fabric',
        colors: ['Beige']
      },
      {
        id: 311,
        name: 'Textured Stripe Sheer',
        type: 'sheer',
        price: 'AED 200',
        image: '/images/sheer-curtains/sheer-11.jpg',
        rating: 4.8,
        description: 'Subtle Vertical Texture Lines',
        colors: ['Cream', 'White']
      },
      {
        id: 312,
        name: 'Linen Blend Sheer',
        type: 'sheer',
        price: 'AED 220',
        image: '/images/sheer-curtains/sheer-12.jpg',
        rating: 4.9,
        description: 'Natural Linen Feel and Look',
        colors: ['Natural', 'Off-White']
      },
      {
        id: 313,
        name: 'Linen Grommet Sheer',
        type: 'sheer',
        price: 'AED 175',
        image: '/images/sheer-curtains/sheer-13.jpg',
        rating: 4.7,
        description: 'Rustic Charm with Grommet Top',
        colors: ['Natural']
      },
      {
        id: 314,
        name: 'Grand Wide Sheer',
        type: 'sheer',
        price: 'AED 250',
        image: '/images/sheer-curtains/sheer-14.jpg',
        rating: 5.0,
        description: 'Perfect for Large Windows & Sliding Doors',
        colors: ['White', 'Cream']
      }
    ],
    velvet: [
      {
        id: 5,
        name: 'Luxurious Velvet Curtains',
        type: 'velvet',
        price: 'AED 400',
        image: 'https://images.unsplash.com/photo-1580228771349-4708709ec543?w=800&auto=format&fit=crop&q=60',
        rating: 4.9,
        description: 'Rich Texture, Premium Feel',
        colors: ['Burgundy', 'Navy', 'Emerald']
      },
      {
        id: 6,
        name: 'Royal Velvet Collection',
        type: 'velvet',
        price: 'AED 450',
        image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?w=800&auto=format&fit=crop&q=60',
        rating: 5.0,
        description: 'Elegant Design, Durable Material',
        colors: ['Deep Red', 'Royal Blue', 'Forest Green']
      },
    ],
    silk: [
      {
        id: 7,
        name: 'Pure Silk Curtains',
        type: 'silk',
        price: 'AED 500',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
        rating: 5.0,
        description: 'Premium Silk, Lustrous Finish',
        colors: ['Gold', 'Silver', 'Champagne']
      },
      {
        id: 8,
        name: 'Silk Blend Premium',
        type: 'silk',
        price: 'AED 550',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=60',
        rating: 4.9,
        description: 'Soft & Elegant, Light Control',
        colors: ['Rose Gold', 'Blush', 'Pearl']
      },
    ],
    linen: [
      {
        id: 9,
        name: 'Natural Linen Curtains',
        type: 'linen',
        price: 'AED 220',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=60',
        rating: 4.7,
        description: 'Eco-Friendly, Natural Texture',
        colors: ['Natural', 'Light Brown', 'Taupe']
      },
    ],
    motorized: [
      {
        id: 10,
        name: 'Smart Motorized Curtains',
        type: 'motorized',
        price: 'AED 800',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60',
        rating: 4.9,
        description: 'App Control, Remote Operation',
        colors: ['Black', 'White', 'Gray']
      },
    ],
    custom: [
      {
        id: 11,
        name: 'Custom Made Curtains',
        type: 'custom',
        price: 'AED 300+',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=60',
        rating: 4.8,
        description: 'Tailored to Your Specifications',
        colors: ['Any Color Available']
      },
    ],
    blinds: Array.from({ length: 26 }, (_, i) => ({
      id: 401 + i,
      name: `Premium Blind Design ${i + 1}`,
      type: 'blinds',
      price: `AED ${150 + (i % 5) * 20}`,
      image: `/images/blind-curtains/blind-${i + 1}.jpg`,
      rating: Number((4.5 + (i % 6) * 0.1).toFixed(1)),
      description: 'Elegant window blind design with excellent sun control.',
      colors: ['Customizable']
    })),
  };

  const allProducts = Object.values(curtainData).flat();
  const filteredProducts = selectedFilter === 'all' 
    ? allProducts 
    : curtainData[selectedFilter] || [];

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
            Premium Curtains Collection
          </h1>
          <p className="text-gray-300">Discover our exclusive range of high-quality curtains</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {['all', 'blackout', 'sheer', 'velvet', 'silk', 'linen', 'motorized', 'blinds', 'custom'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedFilter === filter
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
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
                      to={`/curtains/${product.type}/${product.id}`}
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

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Curtains?</h2>
          <p className="text-lg mb-6">Contact our experts for personalized consultation</p>
          <a href="tel:+971555124614" className="bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
            📞 Call Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CurtainCategory;