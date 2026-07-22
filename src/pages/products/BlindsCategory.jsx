import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Blinds } from 'lucide-react';

const blindTypes = [
  {
    id: 'roller',
    name: 'Roller Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-1.jpg',
    images: ['/images/blind-curtains/blind-1.jpg', '/images/blind-curtains/blind-2.jpg', '/images/blind-curtains/blind-3.jpg', '/images/blind-curtains/blind-4.jpg'],
    description: 'Classic roller blinds for simple and effective light control.',
    rating: 4.8,
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
    prices: {
      '100*100cm': 100, '110*110cm': 125, '120*120cm': 145, '130*130cm': 170, '140*140cm': 200, '150*150cm': 225, '160*160cm': 260, '170*170cm': 290, '180*180cm': 325, '190*190cm': 365, '200*200cm': 400, '210*210cm': 445, '220*220cm': 485, '230*230cm': 530, '240*240cm': 580, '250*250cm': 625, '260*260cm': 680, '270*270cm': 730, '280*280cm': 785, '290*290cm': 845, '300*300cm': 900
    }
  }
];

const ProductCard = ({ product, handleAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState('100*100cm');
  const price = product.prices[selectedSize];

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col">
      {/* Image */}
      <div className="relative h-56 bg-gray-100 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
          <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer shrink-0" />
        </div>

        <p className="text-sm text-gray-600 mb-3 flex-grow">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
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

        {/* Size Selector */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-700 mb-1">Select Size:</label>
          <select 
            value={selectedSize} 
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full p-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 bg-gray-50 focus:ring-amber-500 focus:border-amber-500 transition-colors"
          >
            {Object.keys(product.prices).map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-auto">
          <span className="text-2xl font-bold text-amber-600">AED {price}</span>
          <div className="flex gap-2">
            <button
              onClick={() => handleAddToCart({...product, selectedSize, price})}
              className="bg-amber-500 hover:bg-amber-600 text-white p-2.5 rounded-lg transition-all"
              title="Add to Cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <Link
              to={`/blinds/${product.id}`}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-semibold transition-all"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlindsCategory = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} (${product.selectedSize}) added to cart!`);
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
          {blindTypes.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              handleAddToCart={handleAddToCart} 
            />
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
