import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, Heart, ShoppingCart, Filter, Grid, List, Truck, Shield, RotateCcw, Zap, Activity } from 'lucide-react';

const MattressCategory = () => {
  const { type } = useParams();
  const [selectedFilter, setSelectedFilter] = useState(type || 'all');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sortBy, setSortBy] = useState('popular');
  const [firmness, setFirmness] = useState('all');

  // Comprehensive Mattress Data
  const mattressData = {
    medical: [
      {
        id: 'med-10',
        name: 'Medical Mattress (10-12cm)',
        type: 'medical',
        image: '/images/mattress-collection/mattress-1.jpg',
        rating: 4.6,
        reviews: 85,
        description: 'Basic medical mattress for firm orthopedic support.',
        colors: ['White'],
        material: 'High Density Medical Foam',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Firm',
        features: ['Orthopedic Support', 'Breathable Cover', 'Firm Base'],
        benefits: ['Reduces Back Pain', 'Better Posture', 'Durability'],
        prices: {
          '90*200cm': 325, '100*200cm': 365, '120*200cm': 395, '150*200cm': 425, '160*200cm': 455, '180*200cm': 485, '200*200cm': 515
        },
        priceNum: 325
      },
      {
        id: 'med-15',
        name: 'Medical Mattress (15cm)',
        type: 'medical',
        image: '/images/mattress-collection/mattress-1.jpg',
        rating: 4.7,
        reviews: 110,
        description: 'Standard medical mattress providing excellent spinal alignment.',
        colors: ['White'],
        material: 'High Density Medical Foam',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Firm',
        features: ['Orthopedic Support', 'Breathable Cover', 'Firm Base'],
        benefits: ['Reduces Back Pain', 'Better Posture', 'Durability'],
        prices: {
          '90*200cm': 365, '100*200cm': 395, '120*200cm': 425, '150*200cm': 455, '160*200cm': 485, '180*200cm': 509, '200*200cm': 545
        },
        priceNum: 365
      },
      {
        id: 'med-20',
        name: 'Medical Mattress (20cm)',
        type: 'medical',
        image: '/images/mattress-collection/mattress-1.jpg',
        rating: 4.8,
        reviews: 145,
        description: 'Advanced thick medical mattress for optimal support and comfort.',
        colors: ['White'],
        material: 'High Density Medical Foam',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Firm',
        features: ['Orthopedic Support', 'Breathable Cover', 'Firm Base'],
        benefits: ['Reduces Back Pain', 'Better Posture', 'Durability'],
        prices: {
          '90*200cm': 455, '100*200cm': 470, '120*200cm': 499, '150*200cm': 525, '160*200cm': 540, '180*200cm': 585, '200*200cm': 615
        },
        priceNum: 455
      },
      {
        id: 'super-med-pillow',
        name: 'Super Medical Mattress Pillow Top (20cm)',
        type: 'medical',
        image: '/images/mattress-collection/mattress-3.jpg',
        rating: 4.9,
        reviews: 210,
        description: 'Premium medical mattress with an integrated pillow top for extra comfort.',
        colors: ['White', 'Navy Border'],
        material: 'Premium Medical Foam',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Medium-Firm',
        features: ['Pillow Top', 'Orthopedic Grade', 'Premium Fabric'],
        benefits: ['Zero Back Pain', 'Maximum Support', 'Long Lasting'],
        prices: {
          '90*200cm': 609, '100*200cm': 669, '120*200cm': 769, '150*200cm': 799, '160*200cm': 849, '180*200cm': 899, '200*200cm': 999
        },
        priceNum: 609
      },
      {
        id: 'super-med-box',
        name: 'Super Medical Mattress Box Top (20cm)',
        type: 'medical',
        image: '/images/mattress-collection/mattress-2.jpg',
        rating: 4.9,
        reviews: 185,
        description: 'Luxury orthopedic super medical mattress with a structured box top.',
        colors: ['White', 'Grey Border'],
        material: 'Ultra Medical Foam',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Medium-Firm',
        features: ['Box Top', 'Orthopedic Grade', 'Comfort Layer'],
        benefits: ['Therapeutic Sleep', 'Optimal Posture', 'Premium Comfort'],
        prices: {
          '90*200cm': 609, '100*200cm': 669, '120*200cm': 769, '150*200cm': 799, '160*200cm': 849, '180*200cm': 899, '200*200cm': 999
        },
        priceNum: 609
      }
    ],
    prime: [
      {
        id: 'prime-bonnell',
        name: 'Prime Mattress Bonnell Spring (23cm)',
        type: 'prime',
        image: '/images/mattress-collection/mattress-4.jpg',
        rating: 4.7,
        reviews: 95,
        description: 'Prime everyday mattress featuring durable bonnell springs.',
        colors: ['White'],
        material: 'Comfort Foam + Spring',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Medium',
        features: ['Breathable', 'Ultra Soft', 'Skin-friendly'],
        benefits: ['Deep Sleep', 'All-night Comfort', 'Value for Money'],
        prices: {
          '90*200cm': 589, '100*200cm': 639, '120*200cm': 659, '150*200cm': 709, '160*200cm': 729, '180*200cm': 769, '200*200cm': 819
        },
        priceNum: 589
      }
    ],
    'pocket-spring': [
      {
        id: 'supreme-silk',
        name: 'Supreme Silk Mattress Pocket Spring (30cm)',
        type: 'pocket-spring',
        image: '/images/mattress-collection/mattress-5.jpg',
        rating: 5.0,
        reviews: 320,
        description: 'Supreme silk fabric with premium pocket springs for ultimate luxury.',
        colors: ['White', 'Navy Border'],
        material: 'Pocket Spring + Silk Fabric',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Medium',
        features: ['Pocket Springs', 'Silk Cover', 'Motion Isolation'],
        benefits: ['Zero Partner Disturbance', 'Luxury Feel', 'Cooling Silk'],
        prices: {
          '90*200cm': 799, '100*200cm': 839, '120*200cm': 959, '150*200cm': 1089, '160*200cm': 1129, '180*200cm': 1219, '200*200cm': 1319
        },
        priceNum: 799
      },
      {
        id: 'euro-heaven',
        name: 'Euro Heaven Mattress Pocket Spring (30cm)',
        type: 'pocket-spring',
        image: '/images/mattress-collection/mattress-6.jpg',
        rating: 4.9,
        reviews: 280,
        description: 'Euro-top heaven pocket spring for a luxurious, cloud-like sleep.',
        colors: ['White', 'Grey Cover'],
        material: 'Pocket Spring + Memory Foam',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Medium-Soft',
        features: ['Euro Top', 'Pocket Spring', 'Premium Foam Layer'],
        benefits: ['Cloud-like Comfort', 'Body Contouring', 'Durability'],
        prices: {
          '90*200cm': 799, '100*200cm': 919, '120*200cm': 949, '150*200cm': 1079, '160*200cm': 1119, '180*200cm': 1219, '200*200cm': 1299
        },
        priceNum: 799
      }
    ],
    'bonnel-spring': [
      {
        id: 'velvet-vista',
        name: 'Velvet Vista Mattress Pillow Top Bonnell Spring (30cm)',
        type: 'bonnel-spring',
        image: '/images/mattress-collection/mattress-7.jpg',
        rating: 4.7,
        reviews: 150,
        description: 'Velvet vista bonnell spring mattress with a plush pillow top.',
        colors: ['White', 'Black Border'],
        material: 'Bonnell Spring + Foam Layer',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Medium',
        features: ['Pillow Top', 'Natural Latex Feel', 'Traditional Bounciness'],
        benefits: ['Balanced Support', 'Temperature Control', 'Premium Feel'],
        prices: {
          '90*200cm': 699, '100*200cm': 749, '120*200cm': 769, '150*200cm': 849, '160*200cm': 879, '180*200cm': 939, '200*200cm': 999
        },
        priceNum: 699
      }
    ]
  };

  // Get all products
  const allProducts = Object.values(mattressData).flat();
  
  // Filter products
  let filteredProducts = selectedFilter === 'all' 
    ? allProducts 
    : mattressData[selectedFilter] || [];

  // Apply price filter
  filteredProducts = filteredProducts.filter(
    product => product.priceNum >= priceRange[0] && product.priceNum <= priceRange[1]
  );

  // Apply firmness filter
  if (firmness !== 'all') {
    filteredProducts = filteredProducts.filter(
      product => product.firmness.includes(firmness)
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
        <title>Premium Mattresses - Zoya Premium Furnishing</title>
        <meta name="description" content="Shop our premium collection of mattresses including memory foam, orthopedic, spring, latex, medical grade, and toppers. Free delivery across UAE." />
        <meta name="keywords" content="mattress, memory foam, orthopedic, spring mattress, latex, medical mattress, UAE" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">🛌 Premium Mattress Collection</h1>
            <p className="text-lg text-gray-300">Discover the perfect mattress for a better sleep</p>
            <div className="flex flex-wrap items-center gap-4 text-amber-300 font-semibold mt-2">
              <span className="flex items-center gap-1"><Truck className="w-4 h-4" /> Free Delivery</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> 10-Year Warranty</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1"><RotateCcw className="w-4 h-4" /> Easy Returns</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1"><Activity className="w-4 h-4" /> Medical Grade Options</span>
            </div>
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
                  <h4 className="font-bold text-gray-900 mb-3">Mattress Type</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {['all', 'medical', 'prime', 'pocket-spring', 'bonnel-spring'].map((filter) => (
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
                          ? 'All Mattresses' 
                          : filter.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
                        }
                      </button>
                    ))}
                  </div>
                </div>

                {/* Firmness Filter */}
                <div className="mb-6 pb-6 border-b">
                  <h4 className="font-bold text-gray-900 mb-3">Firmness Level</h4>
                  <div className="space-y-2">
                    {['all', 'Soft', 'Medium-Soft', 'Medium', 'Medium-Firm', 'Firm'].map((level) => (
                      <button
                        key={level}
                        onClick={() => setFirmness(level)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all text-sm ${
                          firmness === level
                            ? 'bg-amber-500 text-white font-bold'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {level === 'all' ? 'All Firmness' : level}
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
                        className="w-full accent-amber-500"
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
                    setFirmness('all');
                    setPriceRange([0, 5000]);
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
                    <span className="text-sm font-semibold">10-Year Warranty</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <RotateCcw className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold">Easy Returns</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold">Medical Grade</span>
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
                    Showing <span className="font-bold text-amber-600">{filteredProducts.length}</span> mattresses
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
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group break-inside-avoid"
                      >
                        {/* Image */}
                        <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-6xl overflow-hidden group-hover:scale-110 transition-transform">
                          {product.image.startsWith('/') || product.image.startsWith('http') ? (
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          ) : (
                            <span>{product.image}</span>
                          )}
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

                          {/* Firmness Badge */}
                          <div className="mb-3">
                            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                              {product.firmness}
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
                            <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-2">
                              <p className="text-xs font-semibold text-green-700">✓ {product.warranty} Warranty</p>
                            </div>
                          )}

                          {/* Price & Button */}
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-amber-600">
                              {product.prices ? `AED ${Object.values(product.prices)[0]}` : product.price}
                            </span>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleAddToCart(product)}
                                className="bg-amber-500 hover:bg-amber-600 text-white p-2.5 rounded-lg transition-all"
                                title="Add to Cart"
                              >
                                <ShoppingCart className="w-5 h-5" />
                              </button>
                              <Link
                                to={`/mattress/${product.type}/${product.id}`}
                                state={{ product }}
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
                      <p className="text-xl text-gray-600">No mattresses found matching your filters.</p>
                    </div>
                  )}
                </div>
              ) : (
                // List View
                <div className="space-y-4">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div key={product.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all flex gap-6">
                        <div className="w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center text-5xl flex-shrink-0 overflow-hidden">
                          {product.image.startsWith('/') || product.image.startsWith('http') ? (
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          ) : (
                            <span>{product.image}</span>
                          )}
                        </div>

                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mt-1">
                                {product.firmness}
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
                            <span className="text-3xl font-bold text-amber-600">
                              {product.prices ? `AED ${Object.values(product.prices)[0]}` : product.price}
                            </span>
                            <div className="flex gap-3">
                              <button
                                onClick={() => handleAddToCart(product)}
                                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-bold flex items-center space-x-2 transition-all"
                              >
                                <ShoppingCart className="w-5 h-5" />
                                <span>Add to Cart</span>
                              </button>
                              <Link
                                to={`/mattress/${product.type}/${product.id}`}
                                state={{ product }}
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
                      <p className="text-xl text-gray-600">No mattresses found matching your filters.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sleep Guide Section */}
        <div className="bg-blue-50 py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Choose Your Perfect Mattress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Memory Foam</h3>
                <p className="text-gray-600 text-sm">Conforms to your body, perfect for pressure relief</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Orthopedic</h3>
                <p className="text-gray-600 text-sm">Medical grade support for proper alignment</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Spring Mattress</h3>
                <p className="text-gray-600 text-sm">Traditional support with breathable design</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Latex</h3>
                <p className="text-gray-600 text-sm">Natural, eco-friendly, hypoallergenic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Truck className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <h3 className="font-bold text-lg mb-2">Free Delivery</h3>
                <p className="text-gray-300">Fast delivery across UAE</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <h3 className="font-bold text-lg mb-2">Warranty</h3>
                <p className="text-gray-300">Up to 15-Year warranty</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <h3 className="font-bold text-lg mb-2">Easy Returns</h3>
                <p className="text-gray-300">100-day comfort guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Sleep</h2>
            <p className="text-lg mb-6">Our sleep experts can help you choose the right mattress</p>
            <a href="tel:+971555124614" className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
              📞 Call Now: +971 55 512 4614
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MattressCategory;