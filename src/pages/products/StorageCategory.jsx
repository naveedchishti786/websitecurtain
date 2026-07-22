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
    'cabinets': [
      {
        id: 1,
        name: 'Premium Cabinet 1',
        type: 'cabinets',
        price: 'AED 1,100',
        priceNum: 1100,
        image: '/images/cabinets/cabinet-1.jpg',
        rating: 4.8,
        reviews: 210,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 2,
        name: 'Premium Cabinet 2',
        type: 'cabinets',
        price: 'AED 1,200',
        priceNum: 1200,
        image: '/images/cabinets/cabinet-2.jpg',
        rating: 4.8,
        reviews: 220,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 3,
        name: 'Premium Cabinet 3',
        type: 'cabinets',
        price: 'AED 1,300',
        priceNum: 1300,
        image: '/images/cabinets/cabinet-3.jpg',
        rating: 4.8,
        reviews: 230,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 4,
        name: 'Premium Cabinet 4',
        type: 'cabinets',
        price: 'AED 1,400',
        priceNum: 1400,
        image: '/images/cabinets/cabinet-4.jpg',
        rating: 4.8,
        reviews: 240,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 5,
        name: 'Premium Cabinet 5',
        type: 'cabinets',
        price: 'AED 1,500',
        priceNum: 1500,
        image: '/images/cabinets/cabinet-5.jpg',
        rating: 4.8,
        reviews: 250,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 6,
        name: 'Premium Cabinet 6',
        type: 'cabinets',
        price: 'AED 1,600',
        priceNum: 1600,
        image: '/images/cabinets/cabinet-6.jpg',
        rating: 4.8,
        reviews: 260,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 7,
        name: 'Premium Cabinet 7',
        type: 'cabinets',
        price: 'AED 1,700',
        priceNum: 1700,
        image: '/images/cabinets/cabinet-7.jpg',
        rating: 4.8,
        reviews: 270,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 8,
        name: 'Premium Cabinet 8',
        type: 'cabinets',
        price: 'AED 1,800',
        priceNum: 1800,
        image: '/images/cabinets/cabinet-8.jpg',
        rating: 4.8,
        reviews: 280,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 9,
        name: 'Premium Cabinet 9',
        type: 'cabinets',
        price: 'AED 1,900',
        priceNum: 1900,
        image: '/images/cabinets/cabinet-9.jpg',
        rating: 4.8,
        reviews: 290,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 10,
        name: 'Premium Cabinet 10',
        type: 'cabinets',
        price: 'AED 2,000',
        priceNum: 2000,
        image: '/images/cabinets/cabinet-10.jpg',
        rating: 4.8,
        reviews: 300,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 11,
        name: 'Premium Cabinet 11',
        type: 'cabinets',
        price: 'AED 2,100',
        priceNum: 2100,
        image: '/images/cabinets/cabinet-11.jpg',
        rating: 4.8,
        reviews: 310,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 12,
        name: 'Premium Cabinet 12',
        type: 'cabinets',
        price: 'AED 2,200',
        priceNum: 2200,
        image: '/images/cabinets/cabinet-12.jpg',
        rating: 4.8,
        reviews: 320,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 13,
        name: 'Premium Cabinet 13',
        type: 'cabinets',
        price: 'AED 2,300',
        priceNum: 2300,
        image: '/images/cabinets/cabinet-13.jpg',
        rating: 4.8,
        reviews: 330,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 14,
        name: 'Premium Cabinet 14',
        type: 'cabinets',
        price: 'AED 2,400',
        priceNum: 2400,
        image: '/images/cabinets/cabinet-14.jpg',
        rating: 4.8,
        reviews: 340,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      },
      {
        id: 15,
        name: 'Premium Cabinet 15',
        type: 'cabinets',
        price: 'AED 2,500',
        priceNum: 2500,
        image: '/images/cabinets/cabinet-15.jpg',
        rating: 4.8,
        reviews: 350,
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      }
    ],
    'dressing-mirror': [
      {
        id: 101,
        name: 'Dressing with Mirror 1',
        type: 'dressing-mirror',
        price: 'AED 850',
        priceNum: 850,
        image: '/images/dressing-mirror/dressing-1.jpg',
        rating: 4.9,
        reviews: 155,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 102,
        name: 'Dressing with Mirror 2',
        type: 'dressing-mirror',
        price: 'AED 900',
        priceNum: 900,
        image: '/images/dressing-mirror/dressing-2.jpg',
        rating: 4.9,
        reviews: 160,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 103,
        name: 'Dressing with Mirror 3',
        type: 'dressing-mirror',
        price: 'AED 950',
        priceNum: 950,
        image: '/images/dressing-mirror/dressing-3.jpg',
        rating: 4.9,
        reviews: 165,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 104,
        name: 'Dressing with Mirror 4',
        type: 'dressing-mirror',
        price: 'AED 1,000',
        priceNum: 1000,
        image: '/images/dressing-mirror/dressing-4.jpg',
        rating: 4.9,
        reviews: 170,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 105,
        name: 'Dressing with Mirror 5',
        type: 'dressing-mirror',
        price: 'AED 1,050',
        priceNum: 1050,
        image: '/images/dressing-mirror/dressing-5.jpg',
        rating: 4.9,
        reviews: 175,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 106,
        name: 'Dressing with Mirror 6',
        type: 'dressing-mirror',
        price: 'AED 1,100',
        priceNum: 1100,
        image: '/images/dressing-mirror/dressing-6.jpg',
        rating: 4.9,
        reviews: 180,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 107,
        name: 'Dressing with Mirror 7',
        type: 'dressing-mirror',
        price: 'AED 1,150',
        priceNum: 1150,
        image: '/images/dressing-mirror/dressing-7.jpg',
        rating: 4.9,
        reviews: 185,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 108,
        name: 'Dressing with Mirror 8',
        type: 'dressing-mirror',
        price: 'AED 1,200',
        priceNum: 1200,
        image: '/images/dressing-mirror/dressing-8.jpg',
        rating: 4.9,
        reviews: 190,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 109,
        name: 'Dressing with Mirror 9',
        type: 'dressing-mirror',
        price: 'AED 1,250',
        priceNum: 1250,
        image: '/images/dressing-mirror/dressing-9.jpg',
        rating: 4.9,
        reviews: 195,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 110,
        name: 'Dressing with Mirror 10',
        type: 'dressing-mirror',
        price: 'AED 1,300',
        priceNum: 1300,
        image: '/images/dressing-mirror/dressing-10.jpg',
        rating: 4.9,
        reviews: 200,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 111,
        name: 'Dressing with Mirror 11',
        type: 'dressing-mirror',
        price: 'AED 1,350',
        priceNum: 1350,
        image: '/images/dressing-mirror/dressing-11.jpg',
        rating: 4.9,
        reviews: 205,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 112,
        name: 'Dressing with Mirror 12',
        type: 'dressing-mirror',
        price: 'AED 1,400',
        priceNum: 1400,
        image: '/images/dressing-mirror/dressing-12.jpg',
        rating: 4.9,
        reviews: 210,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 113,
        name: 'Dressing with Mirror 13',
        type: 'dressing-mirror',
        price: 'AED 1,450',
        priceNum: 1450,
        image: '/images/dressing-mirror/dressing-13.jpg',
        rating: 4.9,
        reviews: 215,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 114,
        name: 'Dressing with Mirror 14',
        type: 'dressing-mirror',
        price: 'AED 1,500',
        priceNum: 1500,
        image: '/images/dressing-mirror/dressing-14.jpg',
        rating: 4.9,
        reviews: 220,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 115,
        name: 'Dressing with Mirror 15',
        type: 'dressing-mirror',
        price: 'AED 1,550',
        priceNum: 1550,
        image: '/images/dressing-mirror/dressing-15.jpg',
        rating: 4.9,
        reviews: 225,
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      },
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
                    {['all', 'cabinets', 'dressing-mirror'].map((filter) => (
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
                        <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
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
                        <div className="w-40 h-40 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
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