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
    'blackout-sheer': Array.from({ length: 18 }, (_, i) => ({
      id: 1101 + i,
      name: `Blackout & Sheer Combination ${i + 1}`,
      type: 'blackout-sheer',
      price: `AED ${350 + (i % 5) * 30}`,
      image: `/images/blackout-sheer-curtains/blackout-sheer-${i + 1}.jpg`,
      rating: Number((4.7 + (i % 4) * 0.1).toFixed(1)),
      description: 'Perfect combination of light control and elegance',
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
    blinds: [
  {
    id: 'roller',
    name: 'Roller Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-1.jpg',
    images: ['/images/blind-curtains/blind-1.jpg', '/images/blind-curtains/blind-2.jpg', '/images/blind-curtains/blind-3.jpg', '/images/blind-curtains/blind-4.jpg'],
    description: 'Classic roller blinds for simple and effective light control.',
    rating: 4.8,
    colors: ['Customizable'],
    prices: {
      '100*100cm': 130, '110*110cm': 160, '120*120cm': 190, '130*130cm': 220, '140*140cm': 260, '150*150cm': 300, '160*160cm': 330, '170*170cm': 375, '180*180cm': 420, '190*190cm': 470, '200*200cm': 520, '210*210cm': 575, '220*220cm': 640, '230*230cm': 700, '240*240cm': 760, '250*250cm': 825, '260*260cm': 900, '270*270cm': 965, '280*280cm': 1035, '290*290cm': 1095, '300*300cm': 1170
    }
  },
  {
    id: 'roman',
    name: 'Roman Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-5.jpg',
    images: ['/images/blind-curtains/blind-5.jpg', '/images/blind-curtains/blind-6.jpg', '/images/blind-curtains/blind-7.jpg', '/images/blind-curtains/blind-8.jpg'],
    description: 'Elegant roman blinds adding a touch of luxury to your windows.',
    rating: 4.9,
    colors: ['Customizable'],
    prices: {
      '100*100cm': 200, '110*110cm': 245, '120*120cm': 290, '130*130cm': 340, '140*140cm': 395, '150*150cm': 450, '160*160cm': 515, '170*170cm': 580, '180*180cm': 650, '190*190cm': 725, '200*200cm': 800, '210*210cm': 885, '220*220cm': 970, '230*230cm': 1060, '240*240cm': 1155, '250*250cm': 1250, '260*260cm': 1355, '270*270cm': 1460, '280*280cm': 1570, '290*290cm': 1685, '300*300cm': 1800
    }
  },
  {
    id: 'sunscreen',
    name: 'Sunscreen Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-9.jpg',
    images: ['/images/blind-curtains/blind-9.jpg', '/images/blind-curtains/blind-10.jpg', '/images/blind-curtains/blind-11.jpg', '/images/blind-curtains/blind-12.jpg'],
    description: 'Perfect for UV protection while maintaining your outside view.',
    rating: 4.7,
    colors: ['Customizable'],
    prices: {
      '100*100cm': 175, '110*110cm': 220, '120*120cm': 255, '130*130cm': 300, '140*140cm': 345, '150*150cm': 400, '160*160cm': 450, '170*170cm': 510, '180*180cm': 570, '190*190cm': 630, '200*200cm': 700, '210*210cm': 775, '220*220cm': 850, '230*230cm': 930, '240*240cm': 1010, '250*250cm': 1100, '260*260cm': 1185, '270*270cm': 1275, '280*280cm': 1375, '290*290cm': 1475, '300*300cm': 1575
    }
  },
  {
    id: 'zebra',
    name: 'Zebra Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-13.jpg',
    images: ['/images/blind-curtains/blind-13.jpg', '/images/blind-curtains/blind-14.jpg', '/images/blind-curtains/blind-15.jpg'],
    description: 'Modern alternating opaque and sheer stripes for flexible light control.',
    rating: 4.8,
    colors: ['Customizable'],
    prices: {
      '100*100cm': 200, '110*110cm': 245, '120*120cm': 290, '130*130cm': 340, '140*140cm': 395, '150*150cm': 450, '160*160cm': 515, '170*170cm': 580, '180*180cm': 650, '190*190cm': 725, '200*200cm': 800, '210*210cm': 885, '220*220cm': 970, '230*230cm': 1060, '240*240cm': 1155, '250*250cm': 1250, '260*260cm': 1355, '270*270cm': 1460, '280*280cm': 1570, '290*290cm': 1685, '300*300cm': 1800
    }
  },
  {
    id: 'aluminium-venetian',
    name: 'Aluminium Venetian Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-16.jpg',
    images: ['/images/blind-curtains/blind-16.jpg', '/images/blind-curtains/blind-17.jpg', '/images/blind-curtains/blind-18.jpg'],
    description: 'Durable and easy-to-clean aluminium venetian blinds.',
    rating: 4.6,
    colors: ['Customizable'],
    prices: {
      '100*100cm': 90, '110*110cm': 110, '120*120cm': 130, '130*130cm': 155, '140*140cm': 180, '150*150cm': 205, '160*160cm': 230, '170*170cm': 260, '180*180cm': 290, '190*190cm': 325, '200*200cm': 360, '210*210cm': 400, '220*220cm': 435, '230*230cm': 480, '240*240cm': 520, '250*250cm': 565, '260*260cm': 610, '270*270cm': 660, '280*280cm': 705, '290*290cm': 760, '300*300cm': 810
    }
  },
  {
    id: 'wooden-venetian',
    name: 'Wooden Venetian Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-19.jpg',
    images: ['/images/blind-curtains/blind-19.jpg', '/images/blind-curtains/blind-20.jpg', '/images/blind-curtains/blind-21.jpg', '/images/blind-curtains/blind-22.jpg'],
    description: 'Warm and natural wooden venetian blinds for a cozy ambiance.',
    rating: 4.9,
    colors: ['Customizable'],
    prices: {
      '100*100cm': 250, '110*110cm': 305, '120*120cm': 360, '130*130cm': 425, '140*140cm': 490, '150*150cm': 565, '160*160cm': 640, '170*170cm': 725, '180*180cm': 810, '190*190cm': 905, '200*200cm': 1000, '210*210cm': 1105, '220*220cm': 1210, '230*230cm': 1325, '240*240cm': 1440, '250*250cm': 1565, '260*260cm': 1690, '270*270cm': 1825, '280*280cm': 1960, '290*290cm': 2105, '300*300cm': 2250
    }
  },
  {
    id: 'vertical',
    name: 'Vertical Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-23.jpg',
    images: ['/images/blind-curtains/blind-23.jpg', '/images/blind-curtains/blind-24.jpg', '/images/blind-curtains/blind-25.jpg', '/images/blind-curtains/blind-26.jpg'],
    description: 'Classic vertical blinds ideal for large windows and sliding doors.',
    rating: 4.5,
    colors: ['Customizable'],
    prices: {
      '100*100cm': 100, '110*110cm': 125, '120*120cm': 145, '130*130cm': 170, '140*140cm': 200, '150*150cm': 225, '160*160cm': 260, '170*170cm': 290, '180*180cm': 325, '190*190cm': 365, '200*200cm': 400, '210*210cm': 445, '220*220cm': 485, '230*230cm': 530, '240*240cm': 580, '250*250cm': 625, '260*260cm': 680, '270*270cm': 730, '280*280cm': 785, '290*290cm': 845, '300*300cm': 900
    }
  }
],
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
          {['all', 'blackout', 'blackout-sheer', 'sheer', 'velvet', 'silk', 'linen', 'motorized', 'blinds', 'custom'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedFilter === filter
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter === 'blackout-sheer' ? 'Blackout & Sheer' : filter.charAt(0).toUpperCase() + filter.slice(1)}
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
                  <span className="text-2xl font-bold text-amber-600">
                    {product.prices ? `AED ${Object.values(product.prices)[0]}` : product.price}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-amber-500 hover:bg-amber-600 text-white p-2.5 rounded-lg transition-all"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <Link
                      to={`/curtains/${product.type}/${product.id}`}
                      state={{ product }}
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