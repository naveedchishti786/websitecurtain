import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, Heart, ShoppingCart, Filter, Grid, List, Truck, Wrench, Shield, CheckCircle } from 'lucide-react';

const BedsCategory = () => {
  const { type } = useParams();
  const [selectedFilter, setSelectedFilter] = useState(type || 'all');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sortBy, setSortBy] = useState('popular');
  const [firmness, setFirmness] = useState('all');

  const newBedsData = {
    single: Array.from({ length: 5 }, (_, i) => ({
      id: 3001 + i,
      name: `Premium Single Bed ${i + 1}`,
      type: 'single',
      price: `AED ${1200 + i * 50}`,
      priceNum: 1200 + i * 50,
      image: `/images/beds-collection/bed-${i + 1}.jpg`,
      rating: 4.8,
      reviews: 120,
      description: 'Luxurious single bed design',
      colors: ['Customizable'],
      material: 'Premium Materials',
      dimensions: '90cm x 200cm',
      features: ['Premium Finish', 'Comfortable', 'Durable'],
      warranty: '5 Years'
    })),
    double: Array.from({ length: 5 }, (_, i) => ({
      id: 3101 + i,
      name: `Premium Double Bed ${i + 1}`,
      type: 'double',
      price: `AED ${1299 + i * 50}`,
      priceNum: 1299 + i * 50,
      image: `/images/beds-collection/bed-${i + 6}.jpg`,
      rating: 4.8,
      reviews: 120,
      description: 'Luxurious double bed design',
      colors: ['Customizable'],
      material: 'Premium Materials',
      dimensions: '140cm x 200cm',
      features: ['Premium Finish', 'Comfortable', 'Durable'],
      warranty: '5 Years'
    })),
    queen: Array.from({ length: 5 }, (_, i) => ({
      id: 3201 + i,
      name: `Premium Queen Bed ${i + 1}`,
      type: 'queen',
      price: `AED ${1699 + i * 50}`,
      priceNum: 1699 + i * 50,
      image: `/images/beds-collection/bed-${i + 11}.jpg`,
      rating: 4.8,
      reviews: 120,
      description: 'Luxurious queen bed design',
      colors: ['Customizable'],
      material: 'Premium Materials',
      dimensions: '160cm x 200cm',
      features: ['Premium Finish', 'Comfortable', 'Durable'],
      warranty: '5 Years'
    })),
    king: Array.from({ length: 6 }, (_, i) => ({
      id: 3301 + i,
      name: `Premium King Bed ${i + 1}`,
      type: 'king',
      price: `AED ${2099 + i * 50}`,
      priceNum: 2099 + i * 50,
      image: `/images/beds-collection/bed-${i + 16}.jpg`,
      rating: 4.8,
      reviews: 120,
      description: 'Luxurious king bed design',
      colors: ['Customizable'],
      material: 'Premium Materials',
      dimensions: '180cm x 200cm',
      features: ['Premium Finish', 'Comfortable', 'Durable'],
      warranty: '5 Years'
    })),
    'super-king': Array.from({ length: 6 }, (_, i) => ({
      id: 3401 + i,
      name: `Premium Super King Bed ${i + 1}`,
      type: 'super-king',
      price: `AED ${2599 + i * 50}`,
      priceNum: 2599 + i * 50,
      image: `/images/beds-collection/bed-${i + 22}.jpg`,
      rating: 4.8,
      reviews: 120,
      description: 'Luxurious super king bed design',
      colors: ['Customizable'],
      material: 'Premium Materials',
      dimensions: '200cm x 200cm',
      features: ['Premium Finish', 'Comfortable', 'Durable'],
      warranty: '5 Years'
    })),
    hydraulic: Array.from({ length: 5 }, (_, i) => ({
      id: 3501 + i,
      name: `Premium Hydraulic Storage Bed ${i + 1}`,
      type: 'hydraulic',
      price: `AED ${1400 + i * 50}`,
      priceNum: 1400 + i * 50,
      image: `/images/beds-collection/bed-${i + 28}.jpg`,
      rating: 4.9,
      reviews: 150,
      description: 'Luxurious bed with smart hydraulic storage lift mechanism.',
      colors: ['Customizable'],
      material: 'Premium Materials',
      dimensions: 'Multiple Sizes Available',
      features: ['Hydraulic Lift', 'Smart Storage', 'Premium Finish', 'Durable'],
      warranty: '5 Years'
    }))
  };

  // Comprehensive Beds Data - FIXED
  const bedsData = {
    ...newBedsData,
    'king-size': [
      {
        id: 1,
        name: 'Royal King Size Bed - Upholstered',
        type: 'king-size',
        price: 'AED 2,499',
        priceNum: 2499,
        image: '/images/beds-collection/bed-1.jpg',
        rating: 4.9,
        reviews: 234,
        description: 'Premium upholstered king size bed with storage',
        colors: ['Black', 'Grey', 'Beige', 'Brown'],
        material: 'Engineered Wood + Fabric',
        dimensions: '200cm x 180cm x 110cm',
        features: ['Storage Underneath', 'Headboard with Cushions', 'Durable Frame', 'Easy Assembly'],
        warranty: '5 Years'
      },
      {
        id: 2,
        name: 'Modern King Platform Bed',
        type: 'king-size',
        price: 'AED 2,799',
        priceNum: 2799,
        image: '/images/beds-collection/bed-2.jpg',
        rating: 4.8,
        reviews: 189,
        description: 'Contemporary design with low platform style',
        colors: ['Walnut', 'White', 'Black', 'Oak'],
        material: 'Solid Wood',
        dimensions: '200cm x 180cm x 40cm',
        features: ['Minimalist Design', 'Solid Wood Construction', 'No Storage Needed', 'Premium Finish'],
        warranty: '5 Years'
      },
      {
        id: 3,
        name: 'Luxury King Bed with LED',
        type: 'king-size',
        price: 'AED 3,299',
        priceNum: 3299,
        image: '/images/beds-collection/bed-3.jpg',
        rating: 5.0,
        reviews: 312,
        description: 'Premium bed with integrated LED lighting',
        colors: ['Black', 'Grey'],
        material: 'Engineered Wood + Leather',
        dimensions: '200cm x 180cm x 120cm',
        features: ['LED Headboard', 'Leather Upholstery', 'USB Charging', 'Storage Drawers'],
        warranty: '5 Years'
      },
      {
        id: 4,
        name: 'Classic King Bed - Wooden',
        type: 'king-size',
        price: 'AED 1,999',
        priceNum: 1999,
        image: '/images/beds-collection/bed-4.jpg',
        rating: 4.7,
        reviews: 156,
        description: 'Traditional wooden king size bed',
        colors: ['Mahogany', 'Teak', 'Oak'],
        material: 'Solid Hardwood',
        dimensions: '200cm x 180cm x 100cm',
        features: ['Hand-Crafted', 'Traditional Design', 'Sturdy Frame', 'Lifetime Durability'],
        warranty: '5 Years'
      },
      {
        id: 5,
        name: 'Premium King Bed - Mirror Front',
        type: 'king-size',
        price: 'AED 2,999',
        priceNum: 2999,
        image: '/images/beds-collection/bed-5.jpg',
        rating: 4.9,
        reviews: 267,
        description: 'King bed with mirror design headboard',
        colors: ['White', 'Black', 'Grey'],
        material: 'MDF + Mirror',
        dimensions: '200cm x 180cm x 115cm',
        features: ['Mirror Headboard', 'Space Enhancing', 'Modern Design', 'Storage Options'],
        warranty: '5 Years'
      },
      {
        id: 6,
        name: 'Budget King Bed - Value',
        type: 'king-size',
        price: 'AED 1,599',
        priceNum: 1599,
        image: '/images/beds-collection/bed-6.jpg',
        rating: 4.6,
        reviews: 134,
        description: 'Affordable king bed without compromise',
        colors: ['White', 'Black', 'Brown'],
        material: 'MDF + Fabric',
        dimensions: '200cm x 180cm x 90cm',
        features: ['Budget Friendly', 'Good Quality', 'Easy Assembly', 'Practical Design'],
        warranty: '3 Years'
      }
    ],
    'queen-size': [
      {
        id: 7,
        name: 'Premium Queen Upholstered Bed',
        type: 'queen-size',
        price: 'AED 1,899',
        priceNum: 1899,
        image: '/images/beds-collection/bed-7.jpg',
        rating: 4.8,
        reviews: 267,
        description: 'Elegant queen size bed with fabric upholstery',
        colors: ['Grey', 'Beige', 'Charcoal', 'Cream'],
        material: 'Engineered Wood + Fabric',
        dimensions: '160cm x 200cm x 100cm',
        features: ['Cushioned Headboard', 'Storage Space', 'Modern Style', 'Easy Installation'],
        warranty: '5 Years'
      },
      {
        id: 8,
        name: 'Contemporary Queen Platform',
        type: 'queen-size',
        price: 'AED 1,599',
        priceNum: 1599,
        image: '/images/beds-collection/bed-8.jpg',
        rating: 4.7,
        reviews: 198,
        description: 'Sleek modern platform bed in queen size',
        colors: ['White', 'Black', 'Natural Wood'],
        material: 'Solid Wood',
        dimensions: '160cm x 200cm x 35cm',
        features: ['Low Profile', 'Space Saving', 'Minimalist Design', 'Natural Finish'],
        warranty: '5 Years'
      },
      {
        id: 9,
        name: 'Queen Storage Bed',
        type: 'queen-size',
        price: 'AED 1,699',
        priceNum: 1699,
        image: '/images/beds-collection/bed-9.jpg',
        rating: 4.9,
        reviews: 245,
        description: 'Queen bed with integrated storage drawers',
        colors: ['Grey', 'White', 'Brown'],
        material: 'MDF + Fabric',
        dimensions: '160cm x 200cm x 90cm',
        features: ['4 Storage Drawers', 'Soft Closing', 'Easy Assembly', 'Warranty 3 Years'],
        warranty: '5 Years'
      },
      {
        id: 10,
        name: 'Luxury Queen Leather Bed',
        type: 'queen-size',
        price: 'AED 2,299',
        priceNum: 2299,
        image: '/images/beds-collection/bed-10.jpg',
        rating: 4.9,
        reviews: 289,
        description: 'Premium leather queen size bed',
        colors: ['Black', 'White', 'Brown'],
        material: 'Engineered Wood + Real Leather',
        dimensions: '160cm x 200cm x 110cm',
        features: ['Real Leather', 'Padded Headboard', 'Storage Underneath', 'Premium Quality'],
        warranty: '5 Years'
      },
      {
        id: 11,
        name: 'Queen Bed with LED',
        type: 'queen-size',
        price: 'AED 1,999',
        priceNum: 1999,
        image: '/images/beds-collection/bed-11.jpg',
        rating: 4.8,
        reviews: 223,
        description: 'Queen bed with LED lighting system',
        colors: ['Black', 'Grey', 'White'],
        material: 'MDF + Fabric',
        dimensions: '160cm x 200cm x 105cm',
        features: ['LED Lighting', 'Modern Design', 'Storage Options', 'USB Charging'],
        warranty: '3 Years'
      },
      {
        id: 12,
        name: 'Budget Queen Bed',
        type: 'queen-size',
        price: 'AED 1,299',
        priceNum: 1299,
        image: '/images/beds-collection/bed-12.jpg',
        rating: 4.6,
        reviews: 156,
        description: 'Affordable queen bed with good quality',
        colors: ['White', 'Grey', 'Brown'],
        material: 'MDF',
        dimensions: '160cm x 200cm x 80cm',
        features: ['Budget Friendly', 'Easy Assembly', 'Modern Style', 'Practical'],
        warranty: '2 Years'
      }
    ],
    'single': [
      {
        id: 13,
        name: 'Classic Single Bed - Wood',
        type: 'single',
        price: 'AED 1,200',
        priceNum: 1200,
        image: '/images/beds-collection/bed-13.jpg',
        rating: 4.6,
        reviews: 134,
        description: 'Traditional single bed in solid wood',
        colors: ['Oak', 'Walnut', 'Pine'],
        material: 'Solid Wood',
        dimensions: '90cm x 190cm x 80cm',
        features: ['Solid Construction', 'Timeless Design', 'Easy Assembly', 'Budget Friendly'],
        warranty: '3 Years'
      },
      {
        id: 14,
        name: 'Modern Single Platform Bed',
        type: 'single',
        price: 'AED 1,200',
        priceNum: 1200,
        image: '/images/beds-collection/bed-14.jpg',
        rating: 4.7,
        reviews: 167,
        description: 'Contemporary single platform bed',
        colors: ['White', 'Black', 'Grey'],
        material: 'MDF',
        dimensions: '90cm x 190cm x 30cm',
        features: ['Low Profile', 'Modern Design', 'Space Efficient', 'Easy Cleaning'],
        warranty: '2 Years'
      },
      {
        id: 15,
        name: 'Single Storage Bed',
        type: 'single',
        price: 'AED 1,200',
        priceNum: 1200,
        image: '/images/beds-collection/bed-15.jpg',
        rating: 4.8,
        reviews: 201,
        description: 'Single bed with storage drawers underneath',
        colors: ['Grey', 'White', 'Natural'],
        material: 'MDF + Fabric',
        dimensions: '90cm x 190cm x 75cm',
        features: ['3 Storage Drawers', 'Soft Close', 'Safety Rails', 'Eco-Friendly'],
        warranty: '3 Years'
      },
      {
        id: 16,
        name: 'Premium Single Upholstered',
        type: 'single',
        price: 'AED 1,200',
        priceNum: 1200,
        image: '/images/beds-collection/bed-16.jpg',
        rating: 4.9,
        reviews: 223,
        description: 'Luxury single bed with fabric upholstery',
        colors: ['Beige', 'Grey', 'Navy'],
        material: 'Wood + Fabric',
        dimensions: '90cm x 190cm x 95cm',
        features: ['Padded Headboard', 'Premium Fabric', 'Comfortable', 'Designer Look'],
        warranty: '5 Years'
      }
    ],
    'bunk': [
      {
        id: 17,
        name: 'Twin Bunk Bed - Wooden',
        type: 'bunk',
        price: 'AED 1,299',
        priceNum: 1299,
        image: '/images/beds-collection/bed-17.jpg',
        rating: 4.8,
        reviews: 289,
        description: 'Sturdy wooden bunk bed for two',
        colors: ['Natural', 'Walnut', 'Pine'],
        material: 'Solid Wood',
        dimensions: '90cm x 190cm x 165cm',
        features: ['Safety Rails', 'Sturdy Frame', 'Easy Assembly', 'Long Lifespan'],
        warranty: '5 Years'
      },
      {
        id: 18,
        name: 'Modern Metal Bunk Bed',
        type: 'bunk',
        price: 'AED 1,200',
        priceNum: 1200,
        image: '/images/beds-collection/bed-18.jpg',
        rating: 4.7,
        reviews: 178,
        description: 'Sleek metal bunk bed design',
        colors: ['Black', 'White', 'Silver'],
        material: 'Metal Frame',
        dimensions: '90cm x 190cm x 155cm',
        features: ['Lightweight', 'Modern Look', 'Easy Setup', 'Space Saving'],
        warranty: '3 Years'
      },
      {
        id: 19,
        name: 'Bunk Bed with Desk',
        type: 'bunk',
        price: 'AED 1,699',
        priceNum: 1699,
        image: '/images/beds-collection/bed-19.jpg',
        rating: 4.9,
        reviews: 312,
        description: 'Bunk bed with integrated study desk',
        colors: ['Natural Wood', 'White', 'Grey'],
        material: 'Wood + Metal',
        dimensions: '90cm x 190cm + Desk Space',
        features: ['Built-in Desk', 'Storage Shelves', 'Multi-functional', 'Perfect for Kids'],
        warranty: '5 Years'
      },
      {
        id: 20,
        name: 'Premium Bunk Bed Deluxe',
        type: 'bunk',
        price: 'AED 1,999',
        priceNum: 1999,
        image: '/images/beds-collection/bed-20.jpg',
        rating: 5.0,
        reviews: 267,
        description: 'Luxury bunk bed with premium materials',
        colors: ['Black', 'White'],
        material: 'Solid Wood + Metal',
        dimensions: '90cm x 190cm x 175cm',
        features: ['Premium Materials', 'Safety Tested', 'Ladder Included', 'Extended Warranty'],
        warranty: '5 Years'
      }
    ],
    'storage': [
      {
        id: 21,
        name: 'Queen Storage Bed Deluxe',
        type: 'storage',
        price: 'AED 2,199',
        priceNum: 2199,
        image: '/images/beds-collection/bed-21.jpg',
        rating: 4.9,
        reviews: 245,
        description: 'Large queen bed with extensive storage',
        colors: ['Grey', 'Brown', 'White'],
        material: 'Engineered Wood',
        dimensions: '160cm x 200cm x 100cm',
        features: ['4 Large Drawers', 'Under-bed Storage', 'Soft Close', '3 Year Warranty'],
        warranty: '5 Years'
      },
      {
        id: 22,
        name: 'King Storage Bed Premium',
        type: 'storage',
        price: 'AED 2,699',
        priceNum: 2699,
        image: '/images/beds-collection/bed-22.jpg',
        rating: 4.8,
        reviews: 201,
        description: 'King size bed with maximum storage capacity',
        colors: ['Black', 'Beige', 'Grey'],
        material: 'MDF + Fabric',
        dimensions: '200cm x 180cm x 105cm',
        features: ['6 Storage Drawers', 'Deep Storage Space', 'Modern Design', 'Easy Assembly'],
        warranty: '5 Years'
      }
    ],
    'kids': [
      {
        id: 23,
        name: 'Kids Single Bed - Colorful',
        type: 'kids',
        price: 'AED 1,200',
        priceNum: 1200,
        image: '/images/beds-collection/bed-23.jpg',
        rating: 4.8,
        reviews: 234,
        description: 'Fun and colorful bed for children',
        colors: ['Red', 'Blue', 'Green', 'Pink'],
        material: 'MDF + Paint',
        dimensions: '90cm x 190cm x 70cm',
        features: ['Colorful Design', 'Safety Rails', 'Easy Assembly', 'Kid Friendly'],
        warranty: '3 Years'
      },
      {
        id: 24,
        name: 'Kids Character Bed',
        type: 'kids',
        price: 'AED 1,200',
        priceNum: 1200,
        image: '/images/beds-collection/bed-24.jpg',
        rating: 4.9,
        reviews: 312,
        description: 'Themed character bed for kids',
        colors: ['Multi-color'],
        material: 'MDF + Graphics',
        dimensions: '90cm x 190cm x 85cm',
        features: ['Character Theme', 'Exciting Design', 'Storage Drawers', 'Safe Materials'],
        warranty: '3 Years'
      }
    ],
    'frames': [
      {
        id: 25,
        name: 'Adjustable Bed Frame',
        type: 'frames',
        price: 'AED 1,999',
        priceNum: 1999,
        image: '/images/beds-collection/bed-25.jpg',
        rating: 4.8,
        reviews: 201,
        description: 'Electric adjustable bed frame',
        colors: ['Black', 'Grey'],
        material: 'Metal + Motor',
        dimensions: 'Fits Queen/King',
        features: ['Electric Adjustment', 'USB Ports', 'Quiet Motor', 'Remote Control'],
        warranty: '3 Years'
      },
      {
        id: 26,
        name: 'Standard Bed Frame',
        type: 'frames',
        price: 'AED 1,200',
        priceNum: 1200,
        image: '/images/beds-collection/bed-26.jpg',
        rating: 4.6,
        reviews: 167,
        description: 'Simple and sturdy bed frame',
        colors: ['Black', 'Silver', 'White'],
        material: 'Metal',
        dimensions: 'All Sizes Available',
        features: ['Easy Assembly', 'Sturdy Base', 'Universal Fit', 'Budget Friendly'],
        warranty: '2 Years'
      }
    ]
  };

  // Get all products
  const allProducts = Object.values(bedsData).flat();

  // Filter products
  let filteredProducts = selectedFilter === 'all'
    ? allProducts
    : bedsData[selectedFilter] || [];

  // Apply price filter
  filteredProducts = filteredProducts.filter(
    product => product.priceNum >= priceRange[0] && product.priceNum <= priceRange[1]
  );

  // Apply firmness filter
  if (firmness !== 'all') {
    filteredProducts = filteredProducts.filter(
      product => product.firmness && product.firmness.includes(firmness)
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
    alert(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = (product) => {
    alert(`${product.name} added to wishlist!`);
  };

  return (
    <>
      <Helmet>
        <title>Premium Beds & Bed Frames - Zoya Premium Furnishing</title>
        <meta name="description" content="Shop our premium collection of beds including king size, queen size, single beds, bunk beds, and bed frames." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">🛏️ Premium Beds Collection</h1>
            <p className="text-lg text-gray-300">Discover our exclusive range of comfortable and stylish beds</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Filters</h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Bed Type</h4>
                  <div className="space-y-2">
                    {['all', 'single', 'double', 'queen', 'king', 'super-king', 'hydraulic', 'bunk', 'storage', 'kids', 'frames'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setSelectedFilter(filter)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                          selectedFilter === filter
                            ? 'bg-amber-500 text-white font-bold'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {filter === 'all' ? 'All Beds' : filter.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
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
                        max="5000"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700">Max: AED {priceRange[1].toLocaleString()}</label>
                      <input
                        type="range"
                        min="0"
                        max="5000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSelectedFilter('all');
                    setPriceRange([0, 5000]);
                  }}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-bold transition-all"
                >
                  Clear Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-white p-4 rounded-xl shadow">
                <p className="text-gray-700">
                  Showing <span className="font-bold">{filteredProducts.length}</span> beds
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Products Grid */}
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden break-inside-avoid"
                    >
                      <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-6xl relative group">
                        {product.image.startsWith('/') || product.image.startsWith('http') ? (
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                          <span className="group-hover:scale-110 transition-transform duration-500">{product.image}</span>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
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
                          <span className="text-xs text-gray-600">({product.reviews})</span>
                        </div>

                        {/* Colors - FIXED with optional chaining */}
                        {product.colors && product.colors.length > 0 && (
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-gray-700 mb-2">Colors:</p>
                            <div className="flex gap-2 flex-wrap">
                              {product.colors.slice(0, 3).map((color, idx) => (
                                <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                  {color}
                                </span>
                              ))}
                              {product.colors.length > 3 && (
                                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                  +{product.colors.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Price */}
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-amber-500 hover:bg-amber-600 text-white p-2.5 rounded-lg transition-all"
                          >
                            <ShoppingCart className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12">
                    <p className="text-xl text-gray-600">No beds found matching your filters.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BedsCategory;