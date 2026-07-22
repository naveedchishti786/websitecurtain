import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from 'lucide-react';

const ProductDetail = () => {
  const { type, id } = useParams();
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);

  // Use the product passed in router state, or fallback to default
  const passedProduct = location.state?.product;

  const product = passedProduct || {
    name: 'Premium Blackout Curtains',
    rating: 4.8,
    reviews: 156,
    description: '100% Light Blocking, Thermal Insulated Premium Quality Curtains',
    colors: ['Black', 'Navy', 'Charcoal', 'Dark Gray'],
    sizePrices: {
      '100cm': 250,
      '150cm': 350,
      '200cm': 450,
      '250cm': 550,
      '300cm': 650
    },
    images: [
      '/images/blackout-curtains/blackout-1.jpg',
      '/images/blackout-curtains/blackout-2.jpg',
      '/images/blackout-curtains/blackout-3.jpg',
      '/images/blackout-curtains/blackout-4.jpg'
    ],
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

  // Determine pricing map (blinds use .prices, default curtains use .sizePrices)
  let sizeMap = product.prices || product.sizePrices;
  if (!sizeMap) {
    // If the product has a string price like "AED 250" and no sizes
    const basePrice = parseInt((product.price || '0').replace(/\D/g, '')) || 250;
    sizeMap = { 'Standard': basePrice };
  }

  const sizes = Object.keys(sizeMap);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  // Update selected size if the product changes
  useEffect(() => {
    if (sizes.length > 0) {
      setSelectedSize(sizes[0]);
    }
    setQuantity(1);
  }, [product.name]);

  const unitPrice = sizeMap[selectedSize] || 0;
  const totalPrice = unitPrice * quantity;

  // Setup images array (if product only has one image, duplicate it to fill gallery)
  const productImages = product.images || [product.image, product.image, product.image, product.image].filter(Boolean);
  const fallbackImage = '/images/blackout-curtains/blackout-1.jpg';
  
  const [mainImage, setMainImage] = useState(productImages[0] || fallbackImage);

  useEffect(() => {
    setMainImage(productImages[0] || fallbackImage);
  }, [product.name]);

  const colors = product.colors || ['Customizable'];
  const features = product.features || [
    'Premium Quality Material', 'Durable Construction', 'Easy Maintenance', 'Professional Finish'
  ];
  const specifications = product.specifications || {
    Material: 'Premium Quality',
    Durability: 'Long Lasting',
  };
  const relatedProducts = {
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
    curtains: [
      { id: 101, name: 'Premium Blackout Curtain', price: 'AED 250', image: '/images/blackout-curtains/blackout-1.jpg', type: 'blackout', sizePrices: { '100cm': 250, '150cm': 350, '200cm': 450, '250cm': 550, '300cm': 650 } },
      { id: 301, name: 'Classic White Sheer Curtain', price: 'AED 150', image: '/images/sheer-curtains/sheer-1.jpg', type: 'sheer', sizePrices: { '100cm': 150, '150cm': 200, '200cm': 250, '250cm': 300, '300cm': 350 } },
      { id: 5, name: 'Luxurious Velvet Curtains', price: 'AED 400', image: 'https://images.unsplash.com/photo-1580228771349-4708709ec543?w=800&auto=format&fit=crop&q=60', type: 'velvet', sizePrices: { '100cm': 400, '150cm': 500, '200cm': 600, '250cm': 700, '300cm': 800 } },
      { id: 1101, name: 'Blackout & Sheer Combination', price: 'AED 350', image: '/images/blackout-sheer-curtains/blackout-sheer-1.jpg', type: 'blackout-sheer', sizePrices: { '100cm': 350, '150cm': 450, '200cm': 550, '250cm': 650, '300cm': 750 } }
    ],
    mattresses: [
      { id: 'med-20', name: 'Medical Mattress (20cm)', price: 'AED 455', image: '/images/mattress-collection/mattress-1.jpg', type: 'medical', prices: { '90*200cm': 455, '100*200cm': 470, '120*200cm': 499, '150*200cm': 525, '160*200cm': 540, '180*200cm': 585, '200*200cm': 615 }, productType: 'mattress' },
      { id: 'super-med-pillow', name: 'Super Medical Pillow Top', price: 'AED 609', image: '/images/mattress-collection/mattress-3.jpg', type: 'medical', prices: { '90*200cm': 609, '100*200cm': 669, '120*200cm': 769, '150*200cm': 799, '160*200cm': 849, '180*200cm': 899, '200*200cm': 999 }, productType: 'mattress' },
      { id: 'supreme-silk', name: 'Supreme Silk Pocket Spring', price: 'AED 799', image: '/images/mattress-collection/mattress-5.jpg', type: 'pocket-spring', prices: { '90*200cm': 799, '100*200cm': 839, '120*200cm': 959, '150*200cm': 1089, '160*200cm': 1129, '180*200cm': 1219, '200*200cm': 1319 }, productType: 'mattress' },
      { id: 'velvet-vista', name: 'Velvet Vista Pillow Top', price: 'AED 699', image: '/images/mattress-collection/mattress-7.jpg', type: 'bonnel-spring', prices: { '90*200cm': 699, '100*200cm': 749, '120*200cm': 769, '150*200cm': 849, '160*200cm': 879, '180*200cm': 939, '200*200cm': 999 }, productType: 'mattress' }
    ]
  };

  const getRelated = () => {
    const isBlind = product.type === 'blinds' || product.name?.toLowerCase().includes('blind');
    const isMattress = location.pathname.includes('mattress') || product.name?.toLowerCase().includes('mattress');
    let items;
    if (isMattress) items = relatedProducts.mattresses;
    else if (isBlind) items = relatedProducts.blinds;
    else items = relatedProducts.curtains;
    
    // Filter out the current product itself
    return items.filter(item => item.name !== product.name).slice(0, 4);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="bg-gradient-to-br from-amber-100 to-amber-50 h-96 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
              <img src={mainImage} alt={product.name} className="w-full h-full object-contain" />
            </div>
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((img, idx) => (
                  <div key={idx} onClick={() => setMainImage(img)} className={`bg-gray-100 rounded-lg h-24 cursor-pointer hover:opacity-75 overflow-hidden border-2 ${mainImage === img ? 'border-amber-500' : 'border-transparent'}`}>
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
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
                    className={`w-5 h-5 ${i < Math.floor(product.rating || 5) ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-gray-600">({product.reviews || 120} reviews)</span>
            </div>

            {/* Price */}
            <div className="text-4xl font-bold text-amber-600 mb-6">AED {totalPrice}</div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Select Color</h3>
              <div className="flex flex-wrap gap-3">
                {colors.map((color, idx) => (
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
            {sizes.length > 0 && sizes[0] !== 'Standard' && (
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`p-2 border-2 rounded-lg transition-all font-semibold text-sm ${
                        selectedSize === size
                          ? 'border-amber-500 bg-amber-50 text-amber-700'
                          : 'border-gray-300 hover:border-amber-500 text-gray-700'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

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
              <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-lg font-bold flex items-center justify-center space-x-2 transition-all">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button className="px-6 sm:px-8 border-2 border-gray-300 hover:border-red-500 text-gray-700 py-3 rounded-lg font-bold flex items-center justify-center transition-all">
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
            <p className="text-gray-700 leading-relaxed mb-4">{product.description || 'Experience the perfect blend of style and functionality with our premium selection.'}</p>
            <h3 className="font-bold text-gray-900 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
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
              {Object.entries(specifications).map(([key, value]) => (
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
            {getRelated().map((item) => (
              <Link
                key={item.id}
                to={`/${item.productType === 'mattress' ? 'mattress' : 'curtains'}/${item.productType === 'mattress' ? item.type : (item.type === 'blinds' ? 'blinds' : 'blackout')}/${item.id}`}
                state={{ product: item }}
                className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-all block"
              >
                <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 truncate" title={item.name}>{item.name}</h3>
                <p className="text-amber-600 font-bold">
                  {item.prices ? `AED ${Object.values(item.prices)[0]}` : item.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;