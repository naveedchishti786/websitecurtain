import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, Heart, ShoppingCart, Filter, Grid, List, Truck, Shield, RotateCcw, Zap } from 'lucide-react';

const StorageCategory = () => {
  const { type } = useParams();
  const [selectedFilter, setSelectedFilter] = useState(type || 'all');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 8000]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sortBy, setSortBy] = useState('popular');
  const [material, setMaterial] = useState('all');

  // Comprehensive Storage Data
  const storageData = {
    'wardrobes-sliding': [
      {
        id: 1,
        name: 'Luxury Sliding Wardrobe - 3 Door',
        type: 'wardrobes-sliding',
        price: 'AED 3,999',
        priceNum: 3999,
        image: '🚪',
        rating: 4.9,
        reviews: 456,
        description: 'Premium 3-door sliding wardrobe with mirror panels',
        colors: ['White', 'Black', 'Walnut', 'Oak'],
        material: 'MDF + Mirror + Metal Rails',
        dimensions: '180cm x 220cm x 60cm',
        storage: 'Large Capacity - 3 Compartments',
        features: ['Mirror Panels', 'Soft Close Rails', 'Large Storage', 'Modern Design'],
        warranty: '5 Years'
      },
      {
        id: 2,
        name: 'Modern Sliding Wardrobe - 4 Door',
        type: 'wardrobes-sliding',
        price: 'AED 4,999',
        priceNum: 4999,
        image: '🚪',
        rating: 4.9,
        reviews: 523,
        description: 'Contemporary 4-door sliding wardrobe',
        colors: ['White', 'Grey', 'Black', 'Natural Wood'],
        material: 'Engineered Wood + Metal',
        dimensions: '240cm x 220cm x 60cm',
        storage: 'Extra Large - 4 Compartments',
        features: ['4 Sliding Doors', 'LED Lighting', 'Interior Organization', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 3,
        name: 'Sliding Wardrobe with LED - 3 Door',
        type: 'wardrobes-sliding',
        price: 'AED 3,599',
        priceNum: 3599,
        image: '🚪',
        rating: 4.8,
        reviews: 389,
        description: 'Sliding wardrobe with integrated LED lighting',
        colors: ['White', 'Walnut', 'Grey'],
        material: 'MDF + LED + Mirror',
        dimensions: '180cm x 220cm x 58cm',
        storage: 'Large - 3 Compartments',
        features: ['LED Lighting', 'Mirror Door', 'Soft Rails', 'Modern'],
        warranty: '5 Years'
      },
      {
        id: 4,
        name: 'Classic Sliding Wardrobe - Double',
        type: 'wardrobes-sliding',
        price: 'AED 2,499',
        priceNum: 2499,
        image: '🚪',
        rating: 4.7,
        reviews: 267,
        description: 'Traditional sliding wardrobe with 2 doors',
        colors: ['Oak', 'Walnut', 'Natural'],
        material: 'Solid Wood + Metal',
        dimensions: '140cm x 220cm x 58cm',
        storage: 'Medium - 2 Compartments',
        features: ['Solid Wood', 'Durable', 'Classic Design', 'Space Efficient'],
        warranty: '5 Years'
      },
      {
        id: 5,
        name: 'Premium Sliding Wardrobe - Mirror Front',
        type: 'wardrobes-sliding',
        price: 'AED 4,499',
        priceNum: 4499,
        image: '🚪',
        rating: 4.9,
        reviews: 434,
        description: 'Full mirror sliding wardrobe for modern spaces',
        colors: ['White', 'Black', 'Grey'],
        material: 'MDF + Full Mirror',
        dimensions: '200cm x 220cm x 60cm',
        storage: 'Large - 3 Compartments',
        features: ['Full Mirror', 'Space Enhancing', 'Modern', 'Stylish'],
        warranty: '5 Years'
      },
      {
        id: 6,
        name: 'Budget Sliding Wardrobe - 2 Door',
        type: 'wardrobes-sliding',
        price: 'AED 1,799',
        priceNum: 1799,
        image: '🚪',
        rating: 4.6,
        reviews: 178,
        description: 'Affordable sliding wardrobe for small spaces',
        colors: ['White', 'Black', 'Brown'],
        material: 'MDF + Metal',
        dimensions: '120cm x 200cm x 50cm',
        storage: 'Medium - 2 Compartments',
        features: ['Affordable', 'Space Saving', 'Easy Assembly', 'Practical'],
        warranty: '3 Years'
      }
    ],
    'wardrobes-walkin': [
      {
        id: 7,
        name: 'Luxury Walk-In Wardrobe - Large',
        type: 'wardrobes-walkin',
        price: 'AED 6,999',
        priceNum: 6999,
        image: '🚪',
        rating: 4.9,
        reviews: 478,
        description: 'Premium walk-in wardrobe with extensive storage',
        colors: ['White', 'Cream', 'Light Grey', 'Natural'],
        material: 'MDF + Shelving + Rails',
        dimensions: '250cm x 240cm Custom',
        storage: 'Extra Large - Full Organization',
        features: ['Custom Design', 'Multiple Rails', 'Shelving System', 'Lighting'],
        warranty: '5 Years'
      },
      {
        id: 8,
        name: 'Modern Walk-In Wardrobe',
        type: 'wardrobes-walkin',
        price: 'AED 5,499',
        priceNum: 5499,
        image: '🚪',
        rating: 4.8,
        reviews: 412,
        description: 'Contemporary walk-in wardrobe solution',
        colors: ['White', 'Grey', 'Walnut'],
        material: 'Engineered Wood + Metal',
        dimensions: '220cm x 200cm Custom',
        storage: 'Large - Complete Organization',
        features: ['Professional Design', 'Full Rails', 'Smart Storage', 'Modern'],
        warranty: '5 Years'
      },
      {
        id: 9,
        name: 'Elegant Walk-In with Island',
        type: 'wardrobes-walkin',
        price: 'AED 7,499',
        priceNum: 7499,
        image: '🚪',
        rating: 4.9,
        reviews: 534,
        description: 'Walk-in wardrobe with central island',
        colors: ['White', 'Cream', 'Light Oak'],
        material: 'Premium MDF + Island',
        dimensions: '280cm x 260cm Custom',
        storage: 'Maximum - Central Island',
        features: ['Central Island', 'Multiple Rails', 'Drawers', 'Premium'],
        warranty: '5 Years'
      },
      {
        id: 10,
        name: 'Compact Walk-In Wardrobe',
        type: 'wardrobes-walkin',
        price: 'AED 3,999',
        priceNum: 3999,
        image: '🚪',
        rating: 4.7,
        reviews: 289,
        description: 'Space-efficient walk-in wardrobe',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF + Rails',
        dimensions: '180cm x 180cm Custom',
        storage: 'Medium - Smart Organization',
        features: ['Space Saving', 'Smart Layout', 'Functional', 'Affordable'],
        warranty: '5 Years'
      },
      {
        id: 11,
        name: 'Premium Walk-In with Lighting',
        type: 'wardrobes-walkin',
        price: 'AED 6,499',
        priceNum: 6499,
        image: '🚪',
        rating: 4.9,
        reviews: 456,
        description: 'Walk-in wardrobe with premium lighting',
        colors: ['White', 'Beige', 'Champagne'],
        material: 'Premium Materials + LED',
        dimensions: '240cm x 220cm Custom',
        storage: 'Large - With Lighting',
        features: ['LED Lighting', 'Premium Materials', 'Professional', 'Elegant'],
        warranty: '5 Years'
      },
      {
        id: 12,
        name: 'Walk-In Wardrobe Suite',
        type: 'wardrobes-walkin',
        price: 'AED 5,999',
        priceNum: 5999,
        image: '🚪',
        rating: 4.8,
        reviews: 401,
        description: 'Complete walk-in wardrobe suite',
        colors: ['Natural', 'Walnut', 'Oak'],
        material: 'Solid Wood + Metal',
        dimensions: '220cm x 200cm Custom',
        storage: 'Large - Full Suite',
        features: ['Complete Suite', 'Professional Design', 'Premium Wood', 'Timeless'],
        warranty: '5 Years'
      }
    ],
    'wardrobes-builtin': [
      {
        id: 13,
        name: 'Built-In Wardrobe - Floor to Ceiling',
        type: 'wardrobes-builtin',
        price: 'AED 7,999',
        priceNum: 7999,
        image: '🚪',
        rating: 4.9,
        reviews: 512,
        description: 'Custom floor-to-ceiling built-in wardrobe',
        colors: ['White', 'Grey', 'Walnut', 'Natural'],
        material: 'MDF + Customization',
        dimensions: 'Custom - Floor to Ceiling',
        storage: 'Maximum Capacity',
        features: ['Custom Fit', 'Full Height', 'Professional Installation', 'Premium'],
        warranty: '5 Years'
      },
      {
        id: 14,
        name: 'Modern Built-In Wardrobe',
        type: 'wardrobes-builtin',
        price: 'AED 6,499',
        priceNum: 6499,
        image: '🚪',
        rating: 4.8,
        reviews: 445,
        description: 'Contemporary built-in wardrobe design',
        colors: ['White', 'Black', 'Grey', 'Natural'],
        material: 'Engineered Wood',
        dimensions: 'Custom - Wall Fitted',
        storage: 'Large - Custom Fit',
        features: ['Wall Fitted', 'Modern Design', 'Full Organization', 'Professional'],
        warranty: '5 Years'
      },
      {
        id: 15,
        name: 'Premium Built-In with Mirror',
        type: 'wardrobes-builtin',
        price: 'AED 7,499',
        priceNum: 7499,
        image: '🚪',
        rating: 4.9,
        reviews: 489,
        description: 'Built-in wardrobe with integrated mirror',
        colors: ['White', 'Cream', 'Light Grey'],
        material: 'MDF + Mirror',
        dimensions: 'Custom - With Mirror',
        storage: 'Large - Mirrored Doors',
        features: ['Mirror Door', 'Space Enhancing', 'Premium', 'Elegant'],
        warranty: '5 Years'
      },
      {
        id: 16,
        name: 'Corner Built-In Wardrobe',
        type: 'wardrobes-builtin',
        price: 'AED 5,999',
        priceNum: 5999,
        image: '🚪',
        rating: 4.7,
        reviews: 367,
        description: 'Custom corner built-in wardrobe',
        colors: ['White', 'Natural', 'Walnut'],
        material: 'MDF + Custom',
        dimensions: 'Custom - Corner Fit',
        storage: 'Large - Corner Utilization',
        features: ['Corner Design', 'Space Efficient', 'Custom', 'Practical'],
        warranty: '5 Years'
      },
      {
        id: 17,
        name: 'Multi-Section Built-In',
        type: 'wardrobes-builtin',
        price: 'AED 8,499',
        priceNum: 8499,
        image: '🚪',
        rating: 4.9,
        reviews: 534,
        description: 'Built-in with multiple sections and organization',
        colors: ['White', 'Grey', 'Beige'],
        material: 'Premium MDF',
        dimensions: 'Custom - Multi-Section',
        storage: 'Maximum - Multi-Section',
        features: ['Multiple Sections', 'Full Organization', 'Premium', 'Professional'],
        warranty: '5 Years'
      },
      {
        id: 18,
        name: 'Sliding Door Built-In',
        type: 'wardrobes-builtin',
        price: 'AED 6,999',
        priceNum: 6999,
        image: '🚪',
        rating: 4.8,
        reviews: 412,
        description: 'Built-in wardrobe with sliding doors',
        colors: ['White', 'Black', 'Natural'],
        material: 'MDF + Sliding Rails',
        dimensions: 'Custom - Sliding Doors',
        storage: 'Large - Sliding',
        features: ['Sliding Doors', 'Space Saving', 'Modern', 'Premium'],
        warranty: '5 Years'
      }
    ],
    'cupboards-kitchen': [
      {
        id: 19,
        name: 'Modular Kitchen Cupboard - 3 Unit',
        type: 'cupboards-kitchen',
        price: 'AED 2,499',
        priceNum: 2499,
        image: '🗄️',
        rating: 4.8,
        reviews: 389,
        description: 'Modular kitchen cupboard system with 3 units',
        colors: ['White', 'Grey', 'Walnut', 'Natural'],
        material: 'MDF + Handles',
        dimensions: '180cm x 85cm x 60cm',
        storage: 'Large - 3 Units',
        features: ['Modular Design', 'Easy Assembly', 'Durable', 'Affordable'],
        warranty: '3 Years'
      },
      {
        id: 20,
        name: 'Premium Kitchen Cupboard Set',
        type: 'cupboards-kitchen',
        price: 'AED 3,999',
        priceNum: 3999,
        image: '🗄️',
        rating: 4.9,
        reviews: 478,
        description: 'Premium modular kitchen cupboards',
        colors: ['White', 'Black', 'Oak', 'Walnut'],
        material: 'Engineered Wood + Handles',
        dimensions: '240cm x 85cm x 60cm',
        storage: 'Extra Large - 4+ Units',
        features: ['Premium Materials', 'Soft Close', 'Organized', 'Professional'],
        warranty: '5 Years'
      },
      {
        id: 21,
        name: 'Tall Kitchen Cupboard - Single',
        type: 'cupboards-kitchen',
        price: 'AED 1,299',
        priceNum: 1299,
        image: '🗄️',
        rating: 4.6,
        reviews: 234,
        description: 'Tall single kitchen cupboard',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: '60cm x 85cm x 200cm',
        storage: 'Medium - Tall Unit',
        features: ['Space Saving', 'Tall Storage', 'Practical', 'Affordable'],
        warranty: '3 Years'
      },
      {
        id: 22,
        name: 'Corner Kitchen Cupboard',
        type: 'cupboards-kitchen',
        price: 'AED 1,799',
        priceNum: 1799,
        image: '🗄️',
        rating: 4.7,
        reviews: 312,
        description: 'Corner kitchen cupboard for corner spaces',
        colors: ['White', 'Walnut', 'Grey'],
        material: 'MDF + Handles',
        dimensions: '90cm x 90cm x 85cm',
        storage: 'Medium - Corner Fit',
        features: ['Corner Design', 'Space Efficient', 'Organized', 'Functional'],
        warranty: '3 Years'
      },
      {
        id: 23,
        name: 'Modern Kitchen Cupboard - 2 Unit',
        type: 'cupboards-kitchen',
        price: 'AED 1,899',
        priceNum: 1899,
        image: '🗄️',
        rating: 4.8,
        reviews: 345,
        description: 'Modern 2-unit kitchen cupboard',
        colors: ['White', 'Black', 'Grey', 'Natural'],
        material: 'MDF + Modern Handles',
        dimensions: '120cm x 85cm x 60cm',
        storage: 'Medium - 2 Units',
        features: ['Modern Design', 'Easy Assembly', 'Durable', 'Stylish'],
        warranty: '3 Years'
      },
      {
        id: 24,
        name: 'Premium Tall Kitchen Storage',
        type: 'cupboards-kitchen',
        price: 'AED 2,299',
        priceNum: 2299,
        image: '🗄️',
        rating: 4.9,
        reviews: 423,
        description: 'Premium tall kitchen storage cupboard',
        colors: ['White', 'Walnut', 'Oak'],
        material: 'Premium MDF + Soft Close',
        dimensions: '60cm x 85cm x 210cm',
        storage: 'Large - Tall Premium',
        features: ['Premium Materials', 'Soft Close', 'Tall', 'Professional'],
        warranty: '5 Years'
      }
    ],
    'cupboards-bedroom': [
      {
        id: 25,
        name: 'Bedroom Cupboard - Standard',
        type: 'cupboards-bedroom',
        price: 'AED 1,499',
        priceNum: 1499,
        image: '🗄️',
        rating: 4.7,
        reviews: 312,
        description: 'Standard bedroom cupboard for clothing storage',
        colors: ['White', 'Grey', 'Natural', 'Walnut'],
        material: 'MDF',
        dimensions: '100cm x 60cm x 180cm',
        storage: 'Medium',
        features: ['Space Saving', 'Practical', 'Durable', 'Simple Design'],
        warranty: '3 Years'
      },
      {
        id: 26,
        name: 'Premium Bedroom Cupboard',
        type: 'cupboards-bedroom',
        price: 'AED 2,399',
        priceNum: 2399,
        image: '🗄️',
        rating: 4.8,
        reviews: 401,
        description: 'Premium bedroom cupboard with soft close',
        colors: ['White', 'Black', 'Walnut', 'Oak'],
        material: 'Engineered Wood + Soft Close',
        dimensions: '120cm x 65cm x 200cm',
        storage: 'Large',
        features: ['Premium Materials', 'Soft Close', 'Organized', 'Elegant'],
        warranty: '5 Years'
      },
      {
        id: 27,
        name: 'Bedroom Wardrobe Cupboard',
        type: 'cupboards-bedroom',
        price: 'AED 1,999',
        priceNum: 1999,
        image: '🗄️',
        rating: 4.8,
        reviews: 367,
        description: 'Bedroom wardrobe cupboard with multiple compartments',
        colors: ['White', 'Grey', 'Beige'],
        material: 'MDF + Handles',
        dimensions: '110cm x 62cm x 190cm',
        storage: 'Medium - Compartments',
        features: ['Multiple Compartments', 'Organized', 'Practical', 'Modern'],
        warranty: '3 Years'
      },
      {
        id: 28,
        name: 'Corner Bedroom Cupboard',
        type: 'cupboards-bedroom',
        price: 'AED 1,699',
        priceNum: 1699,
        image: '🗄️',
        rating: 4.7,
        reviews: 289,
        description: 'Corner bedroom cupboard for compact rooms',
        colors: ['White', 'Natural', 'Walnut'],
        material: 'MDF',
        dimensions: '80cm x 80cm x 180cm',
        storage: 'Medium - Corner',
        features: ['Corner Design', 'Space Efficient', 'Practical', 'Affordable'],
        warranty: '3 Years'
      },
      {
        id: 29,
        name: 'Luxury Bedroom Cupboard',
        type: 'cupboards-bedroom',
        price: 'AED 3,199',
        priceNum: 3199,
        image: '🗄️',
        rating: 4.9,
        reviews: 478,
        description: 'Luxury bedroom cupboard with mirror and lighting',
        colors: ['White', 'Cream', 'Light Grey'],
        material: 'Premium MDF + Mirror + LED',
        dimensions: '130cm x 70cm x 210cm',
        storage: 'Large - With Mirror & Light',
        features: ['Mirror Door', 'LED Lighting', 'Premium', 'Elegant'],
        warranty: '5 Years'
      },
      {
        id: 30,
        name: 'Sliding Door Bedroom Cupboard',
        type: 'cupboards-bedroom',
        price: 'AED 2,199',
        priceNum: 2199,
        image: '🗄️',
        rating: 4.8,
        reviews: 423,
        description: 'Bedroom cupboard with sliding doors',
        colors: ['White', 'Black', 'Natural'],
        material: 'MDF + Sliding Rails',
        dimensions: '120cm x 65cm x 195cm',
        storage: 'Large - Sliding',
        features: ['Sliding Doors', 'Space Saving', 'Modern', 'Professional'],
        warranty: '3 Years'
      }
    ],
    'cabinets': [
      {
        id: 31,
        name: 'Metal Storage Cabinet - Large',
        type: 'cabinets',
        price: 'AED 1,599',
        priceNum: 1599,
        image: '🗄️',
        rating: 4.7,
        reviews: 289,
        description: 'Heavy-duty metal storage cabinet',
        colors: ['Grey', 'Black', 'White'],
        material: 'Steel + Powder Coat',
        dimensions: '90cm x 45cm x 180cm',
        storage: 'Large - Heavy Duty',
        features: ['Metal Construction', 'Durable', 'Lockable', 'Professional'],
        warranty: '3 Years'
      },
      {
        id: 32,
        name: 'Wooden Storage Cabinet',
        type: 'cabinets',
        price: 'AED 1,299',
        priceNum: 1299,
        image: '🗄️',
        rating: 4.6,
        reviews: 201,
        description: 'Wooden storage cabinet for home use',
        colors: ['Natural', 'Walnut', 'Oak'],
        material: 'Solid Wood',
        dimensions: '80cm x 40cm x 160cm',
        storage: 'Medium',
        features: ['Solid Wood', 'Timeless', 'Durable', 'Elegant'],
        warranty: '5 Years'
      },
      {
        id: 33,
        name: 'Glass Door Cabinet',
        type: 'cabinets',
        price: 'AED 2,199',
        priceNum: 2199,
        image: '🗄️',
        rating: 4.8,
        reviews: 345,
        description: 'Display cabinet with glass doors',
        colors: ['White', 'Black', 'Natural'],
        material: 'MDF + Glass',
        dimensions: '100cm x 50cm x 190cm',
        storage: 'Medium - Display',
        features: ['Glass Doors', 'Display Space', 'Modern', 'Elegant'],
        warranty: '3 Years'
      },
      {
        id: 34,
        name: 'Shelving Storage Cabinet',
        type: 'cabinets',
        price: 'AED 999',
        priceNum: 999,
        image: '🗄️',
        rating: 4.6,
        reviews: 178,
        description: 'Open shelving storage cabinet',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF + Metal Frame',
        dimensions: '80cm x 40cm x 150cm',
        storage: 'Medium - Shelving',
        features: ['Open Shelving', 'Easy Access', 'Space Efficient', 'Affordable'],
        warranty: '2 Years'
      },
      {
        id: 35,
        name: 'Garage Storage Cabinet',
        type: 'cabinets',
        price: 'AED 1,899',
        priceNum: 1899,
        image: '🗄️',
        rating: 4.7,
        reviews: 312,
        description: 'Heavy-duty garage storage cabinet',
        colors: ['Grey', 'Black', 'Yellow'],
        material: 'Steel + Powder Coat',
        dimensions: '100cm x 50cm x 200cm',
        storage: 'Large - Heavy Duty',
        features: ['Heavy Duty', 'Lockable', 'Professional Grade', 'Durable'],
        warranty: '3 Years'
      },
      {
        id: 36,
        name: 'Wall-Mounted Cabinet',
        type: 'cabinets',
        price: 'AED 699',
        priceNum: 699,
        image: '🗄️',
        rating: 4.5,
        reviews: 134,
        description: 'Wall-mounted storage cabinet',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: '60cm x 35cm x 90cm',
        storage: 'Small - Wall Mount',
        features: ['Wall Mounted', 'Space Saving', 'Easy Assembly', 'Affordable'],
        warranty: '2 Years'
      }
    ]
  };

  // Get all products
  const allProducts = Object.values(storageData).flat();
  
  // Filter products
  let filteredProducts = selectedFilter === 'all' 
    ? allProducts 
    : storageData[selectedFilter] || [];

  // Apply price filter
  filteredProducts = filteredProducts.filter(
    product => product.priceNum >= priceRange[0] && product.priceNum <= priceRange[1]
  );

  // Apply material filter
  if (material !== 'all') {
    filteredProducts = filteredProducts.filter(
      product => product.material.includes(material)
    );
  }

  // Apply sorting
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.priceNum - b.priceNum);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.priceNum - a.priceNum);
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = (product) => {
    if (wishlist.find(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const isInWishlist = (productId) => wishlist.some(item => item.id === productId);

  return (
    <>
      <Helmet>
        <title>Premium Storage Solutions - Zoya Premium Furnishing</title>
        <meta name="description" content="Shop our premium collection of storage including sliding wardrobes, walk-in wardrobes, built-in wardrobes, kitchen cupboards, bedroom cupboards, and storage cabinets. Free delivery across UAE." />
        <meta name="keywords" content="storage, wardrobe, cupboard, cabinet, sliding wardrobe, walk-in wardrobe, UAE" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">🗄️ Premium Storage Solutions</h1>
            <p className="text-lg text-gray-300">Organize your space with our stylish and functional storage solutions</p>
            <p className="text-amber-300 font-semibold mt-2">✓ Free Delivery | ✓ Custom Fitting | ✓ Professional Installation | ✓ 5-Year Warranty</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Storage Type</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {['all', 'wardrobes-sliding', 'wardrobes-walkin', 'wardrobes-builtin', 'cupboards-kitchen', 'cupboards-bedroom', 'cabinets'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setSelectedFilter(filter)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all text-sm ${
                          selectedFilter === filter
                            ? 'bg-amber-500 text-white font-bold'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {filter === 'all' 
                          ? 'All Storage' 
                          : filter.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
                        }
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material Filter */}
                <div className="mb-6 pb-6 border-b">
                  <h4 className="font-bold text-gray-900 mb-3">Material</h4>
                  <div className="space-y-2">
                    {['all', 'MDF', 'Wood', 'Steel', 'Glass'].map((mat) => (
                      <button
                        key={mat}
                        onClick={() => setMaterial(mat)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all text-sm ${
                          material === mat
                            ? 'bg-amber-500 text-white font-bold'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {mat === 'all' ? 'All Materials' : mat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6 pb-6 border-b">
                  <h4 className="font-bold text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-700">Min: AED {priceRange[0].toLocaleString()}</label>
                      <input
                        type="range"
                        min="0"
                        max="8000"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full accent-amber-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700">Max: AED {priceRange[1].toLocaleString()}</label>
                      <input
                        type="range"
                        min="0"
                        max="8000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full accent-amber-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-6 pb-6 border-b">
                  <h4 className="font-bold text-gray-900 mb-3">Rating</h4>
                  <div className="space-y-2">
                    {[5, 4, 3].map((rating) => (
                      <button key={rating} className="w-full text-left px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all text-gray-700 text-sm">
                        {'⭐'.repeat(rating)} ({rating}+ stars)
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSelectedFilter('all');
                    setMaterial('all');
                    setPriceRange([0, 8000]);
                  }}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-bold transition-all"
                >
                  Clear All Filters
                </button>

                {/* Benefits */}
                <div className="mt-6 pt-6 border-t space-y-3">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Truck className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold">Free Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Shield className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold">5-Year Warranty</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <RotateCcw className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold">Easy Returns</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold">Installation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-white p-4 rounded-xl shadow">
                <div>
                  <p className="text-gray-700">
                    Showing <span className="font-bold text-amber-600">{filteredProducts.length}</span> storage solutions
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 text-sm"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>

                  {/* View Mode */}
                  <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-amber-500 text-white' : 'text-gray-600'}`}
                      title="Grid View"
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-amber-500 text-white' : 'text-gray-600'}`}
                      title="List View"
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                      >
                        {/* Image */}
                        <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center text-6xl overflow-hidden group-hover:scale-110 transition-transform">
                          {product.image}
                          <button
                            onClick={() => handleAddToWishlist(product)}
                            className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                              isInWishlist(product.id)
                                ? 'bg-red-500 text-white'
                                : 'bg-white text-gray-400 hover:text-red-500'
                            }`}
                          >
                            <Heart className="w-5 h-5" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                          </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>

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
                            <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                          </div>

                          {/* Storage Badge */}
                          <div className="mb-3">
                            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                              {product.storage}
                            </span>
                          </div>

                          {/* Key Features */}
                          <div className="mb-4 pb-4 border-b">
                            <p className="text-xs font-semibold text-gray-700 mb-2">Key Features:</p>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {product.features.slice(0, 2).map((feature, idx) => (
                                <li key={idx}>✓ {feature}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Warranty Badge */}
                          {product.warranty && (
                            <div className="mb-4 bg-blue-50 border border-blue-200 rounded-lg p-2">
                              <p className="text-xs font-semibold text-blue-700">✓ {product.warranty} Warranty</p>
                            </div>
                          )}

                          {/* Price & Button */}
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleAddToCart(product)}
                                className="bg-amber-500 hover:bg-amber-600 text-white p-2.5 rounded-lg transition-all"
                                title="Add to Cart"
                              >
                                <ShoppingCart className="w-5 h-5" />
                              </button>
                              <Link
                                to={`/storage/${product.type}/${product.id}`}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-semibold transition-all text-sm"
                              >
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-12">
                      <p className="text-xl text-gray-600">No storage solutions found matching your filters.</p>
                    </div>
                  )}
                </div>
              ) : (
                // List View
                <div className="space-y-4">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div key={product.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all flex gap-6">
                        <div className="w-40 h-40 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center text-5xl flex-shrink-0">
                          {product.image}
                        </div>

                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mt-1">
                                {product.storage}
                              </span>
                            </div>
                            <button onClick={() => handleAddToWishlist(product)}>
                              <Heart
                                className={`w-6 h-6 ${
                                  isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'
                                }`}
                              />
                            </button>
                          </div>

                          <p className="text-gray-600 mb-3">{product.description}</p>

                          <div className="flex items-center space-x-3 mb-3">
                            <div className="flex">
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
                            </div>
                            <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                          </div>

                          <div className="text-sm text-gray-700 mb-3 space-y-1">
                            <p><strong>Material:</strong> {product.material}</p>
                            <p><strong>Dimensions:</strong> {product.dimensions}</p>
                            {product.warranty && <p><strong>Warranty:</strong> {product.warranty}</p>}
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-amber-600">{product.price}</span>
                            <div className="flex gap-3">
                              <button
                                onClick={() => handleAddToCart(product)}
                                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-bold flex items-center space-x-2 transition-all"
                              >
                                <ShoppingCart className="w-5 h-5" />
                                <span>Add to Cart</span>
                              </button>
                              <Link
                                to={`/storage/${product.type}/${product.id}`}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-bold transition-all"
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-xl text-gray-600">No storage solutions found matching your filters.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Storage Types Section */}
        <div className="bg-green-50 py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Storage Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Sliding Wardrobes</h3>
                <p className="text-gray-600 text-sm">Modern sliding door wardrobes for space-efficient storage</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Walk-In Wardrobes</h3>
                <p className="text-gray-600 text-sm">Custom walk-in solutions for luxury storage</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Built-In Wardrobes</h3>
                <p className="text-gray-600 text-sm">Fitted wardrobes that maximize wall space</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Kitchen Cupboards</h3>
                <p className="text-gray-600 text-sm">Modular kitchen storage solutions</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Bedroom Cupboards</h3>
                <p className="text-gray-600 text-sm">Stylish bedroom storage with organization</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Storage Cabinets</h3>
                <p className="text-gray-600 text-sm">Versatile cabinets for any room</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Truck className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <h3 className="font-bold text-lg mb-2">Free Delivery</h3>
                <p className="text-gray-300 text-sm">Fast delivery across UAE</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <h3 className="font-bold text-lg mb-2">Warranty</h3>
                <p className="text-gray-300 text-sm">5-Year comprehensive warranty</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <h3 className="font-bold text-lg mb-2">Easy Returns</h3>
                <p className="text-gray-300 text-sm">30-day hassle-free returns</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <h3 className="font-bold text-lg mb-2">Installation</h3>
                <p className="text-gray-300 text-sm">Professional installation available</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Custom Storage Solution?</h2>
            <p className="text-lg mb-6">Our design experts can create the perfect storage for your space</p>
            <a href="tel:+971555124614" className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
              📞 Call Now: +971 55 512 4614
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorageCategory;