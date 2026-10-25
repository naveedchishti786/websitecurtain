import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Filter, Grid, List, Truck, Shield, RotateCcw, Heart, ArrowRight, Star } from 'lucide-react';

const CarpetCategory = () => {
  const { type } = useParams();
  const [selectedFilter, setSelectedFilter] = useState(type || 'all');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('popular');

  // Comprehensive Carpet Data
  const carpetData = {
    'persian': [
      {
        id: 'c1',
        name: 'Royal Persian Silk Rug',
        type: 'persian',
        price: 'AED 4,999',
        priceNum: 4999,
        image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=800&auto=format&fit=crop',
        rating: 4.9,
        reviews: 124,
        description: 'Authentic hand-knotted Persian silk rug with intricate floral patterns.',
        colors: ['Red/Gold', 'Blue/Cream'],
        material: '100% Silk',
        dimensions: '200cm x 300cm',
        features: ['Hand-Knotted', 'High Density', 'Premium Quality', 'Traditional Design']
      },
      {
        id: 'c2',
        name: 'Classic Persian Wool Carpet',
        type: 'persian',
        price: 'AED 2,499',
        priceNum: 2499,
        image: 'https://images.unsplash.com/photo-1652634213812-f0deeb1de78e?q=80&w=800&auto=format&fit=crop',
        rating: 4.8,
        reviews: 89,
        description: 'Durable and soft wool carpet featuring classic medallion designs.',
        colors: ['Navy/Red', 'Cream/Beige'],
        material: 'Premium Wool',
        dimensions: '250cm x 350cm',
        features: ['Soft Texture', 'Stain Resistant', 'Classic Motif']
      },
      {
        id: 'c8',
        name: 'Vintage Turkish Kilim',
        type: 'persian',
        image: 'https://images.unsplash.com/photo-1720458606063-a1b944884641?q=80&w=800&auto=format&fit=crop',
        rating: 4.9,
        reviews: 65,
        description: 'Authentic flat-woven Turkish Kilim with tribal geometric patterns.',
        colors: ['Terracotta', 'Indigo', 'Mustard'],
        material: '100% Wool',
        dimensions: '180cm x 270cm',
        features: ['Flat Weave', 'Reversible', 'Vintage Wash']
      }
    ],
    'modern': [
      {
        id: 'c3',
        name: 'Abstract Modern Art Carpet',
        type: 'modern',
        price: 'AED 1,299',
        priceNum: 1299,
        image: 'https://images.unsplash.com/photo-1534889156217-d643df14f14a?q=80&w=800&auto=format&fit=crop',
        rating: 4.7,
        reviews: 210,
        description: 'Contemporary abstract design to elevate modern living spaces.',
        colors: ['Grey/Silver', 'Black/Gold', 'Teal'],
        material: 'Polypropylene & Viscose',
        dimensions: '160cm x 230cm',
        features: ['Modern Design', 'Easy Clean', 'Anti-Slip Backing']
      },
      {
        id: 'c4',
        name: 'Minimalist Geometric Rug',
        type: 'modern',
        price: 'AED 899',
        priceNum: 899,
        image: 'https://images.unsplash.com/photo-1599327285939-4ee9088f2b65?q=80&w=800&auto=format&fit=crop',
        rating: 4.6,
        reviews: 156,
        description: 'Clean geometric lines for a minimalist aesthetic.',
        colors: ['Black/White', 'Beige/Grey'],
        material: 'Premium Acrylic',
        dimensions: '200cm x 290cm',
        features: ['Geometric Pattern', 'Minimalist', 'Soft Feel']
      },
      {
        id: 'c9',
        name: 'Shaggy Plush Carpet',
        type: 'modern',
        image: 'https://plus.unsplash.com/premium_photo-1675720238475-4e60bbf8101b?q=80&w=800&auto=format&fit=crop',
        rating: 4.8,
        reviews: 312,
        description: 'Ultra-soft deep pile shaggy rug for maximum comfort.',
        colors: ['Snow White', 'Charcoal', 'Blush Pink'],
        material: 'Premium Microfiber',
        dimensions: '200cm x 290cm',
        features: ['Deep Pile', 'Super Soft', 'Cozy Feel']
      },
      {
        id: 'c10',
        name: 'Moroccan Berber Rug',
        type: 'modern',
        image: 'https://images.unsplash.com/photo-1595595183083-d40937b04cf3?q=80&w=800&auto=format&fit=crop',
        rating: 4.9,
        reviews: 145,
        description: 'Hand-woven Moroccan style rug with classic diamond patterns.',
        colors: ['Cream/Black', 'Beige/Brown'],
        material: 'Wool Blend',
        dimensions: '160cm x 230cm',
        features: ['Hand-Woven', 'Textured', 'Bohemian Style']
      }
    ],
    'office': [
      {
        id: 'c5',
        name: 'Executive Office Carpet Tiles',
        type: 'office',
        price: 'AED 150/sqm',
        priceNum: 150,
        image: 'https://images.unsplash.com/photo-1549637642-90187f64f420?q=80&w=800&auto=format&fit=crop',
        rating: 4.8,
        reviews: 340,
        description: 'Heavy-duty carpet tiles perfect for high-traffic corporate offices.',
        colors: ['Charcoal', 'Navy', 'Grey'],
        material: 'Nylon',
        dimensions: '50cm x 50cm Tiles',
        features: ['Heavy Duty', 'Sound Absorbing', 'Easy Replacement']
      },
      {
        id: 'c6',
        name: 'Premium Boardroom Rug',
        type: 'office',
        price: 'AED 1,899',
        priceNum: 1899,
        image: 'https://images.unsplash.com/photo-1594235046256-90e5572fd5f9?q=80&w=800&auto=format&fit=crop',
        rating: 4.9,
        reviews: 75,
        description: 'Elegant large area rug designed specifically for executive boardrooms.',
        colors: ['Deep Blue', 'Burgundy'],
        material: 'Wool Blend',
        dimensions: '300cm x 400cm',
        features: ['Professional Look', 'Stain Repellent', 'Acoustic Insulation']
      },
      {
        id: 'c11',
        name: 'Commercial Broadloom Carpet',
        type: 'office',
        image: 'https://plus.unsplash.com/premium_photo-1661964459712-483d87fe863b?q=80&w=800&auto=format&fit=crop',
        rating: 4.7,
        reviews: 189,
        description: 'Wall-to-wall commercial broadloom carpet for large office spaces.',
        colors: ['Slate Grey', 'Midnight Blue'],
        material: 'Solution Dyed Nylon',
        dimensions: 'Custom Roll Width',
        features: ['Wall-to-Wall', 'High Durability', 'Low Maintenance']
      }
    ],
    'custom': [
      {
        id: 'c7',
        name: 'Bespoke Custom Carpet',
        type: 'custom',
        price: 'AED 3,000+',
        priceNum: 3000,
        image: 'https://images.unsplash.com/photo-1558944351-3f79926e74ef?q=80&w=800&auto=format&fit=crop',
        rating: 5.0,
        reviews: 42,
        description: 'Fully customizable carpets tailored to your exact room dimensions and design preferences.',
        colors: ['Any Color'],
        material: 'Custom Choice (Silk, Wool, Viscose)',
        dimensions: 'Custom Size',
        features: ['Made to Measure', 'Custom Design', 'Premium Craftsmanship']
      },
      {
        id: 'c12',
        name: 'Natural Jute & Sisal Rug',
        type: 'custom',
        image: 'https://plus.unsplash.com/premium_photo-1675738774551-cf86de1fd242?q=80&w=800&auto=format&fit=crop',
        rating: 4.6,
        reviews: 92,
        description: 'Eco-friendly natural fiber rug custom-sized for organic interiors.',
        colors: ['Natural Tan', 'Bleached', 'Dark Brown'],
        material: '100% Natural Jute & Sisal',
        dimensions: 'Custom Size',
        features: ['Eco-Friendly', 'Textured', 'Durable Binding']
      }
    ]
  };

  // Get all products
  const allProducts = Object.values(carpetData).flat();
  
  // Filter products
  let filteredProducts = selectedFilter === 'all' 
    ? allProducts 
    : carpetData[selectedFilter] || [];

  // Apply sorting
  if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
      <Helmet>
        <title>Premium Carpets & Rugs - Zoya Premium Curtain</title>
        <meta name="description" content="Explore our luxurious collection of carpets and rugs. From authentic Persian to Modern designs and custom wall-to-wall installations. Free delivery across UAE." />
      </Helmet>

      <div className="min-h-screen bg-[#F5F1EA]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 mb-6 bg-[#C8A96A]/20 px-6 py-3 rounded-full border border-[#C8A96A]/40">
              <span className="text-[#C8A96A] font-bold tracking-wider uppercase text-sm">Luxury Collection</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Premium Carpets & Rugs
            </h1>
            <p className="text-xl text-[#E8E2D8] max-w-2xl mx-auto font-medium mb-8">
              Anchor your space with our exquisite collection of hand-crafted rugs, modern carpets, and custom flooring solutions.
            </p>
            <p className="text-[#C8A96A] font-bold text-lg">
              ✓ Free Delivery | ✓ Free Measurement | ✓ Premium Quality
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-[#E8E2D8] sticky top-32">
                <h3 className="text-xl font-black text-[#0B1E36] mb-6 flex items-center space-x-2 pb-4 border-b-2 border-[#F5F1EA]">
                  <Filter className="w-5 h-5 text-[#C8A96A]" />
                  <span>Filters</span>
                </h3>

                {/* Category Filter */}
                <div className="mb-8">
                  <h4 className="font-bold text-[#0B1E36] mb-3 uppercase tracking-wider text-sm">Carpet Style</h4>
                  <div className="space-y-2">
                    {['all', 'persian', 'modern', 'office', 'custom'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setSelectedFilter(filter)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all text-sm font-semibold ${
                          selectedFilter === filter
                            ? 'bg-[#0B1E36] text-[#C8A96A] shadow-md'
                            : 'bg-[#F5F1EA] text-[#2B2B2B] hover:bg-[#C8A96A]/20'
                        }`}
                      >
                        {filter === 'all' 
                          ? 'All Carpets' 
                          : filter.charAt(0).toUpperCase() + filter.slice(1) + ' Carpets'
                        }
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSelectedFilter('all');
                  }}
                  className="w-full bg-[#F5F1EA] hover:bg-[#C8A96A] text-[#0B1E36] py-3 rounded-xl font-black transition-all border-2 border-[#C8A96A]/30 hover:border-[#C8A96A]"
                >
                  Clear Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-4 rounded-2xl shadow-md border-2 border-[#E8E2D8]">
                <div>
                  <p className="text-[#666666] font-semibold">
                    Showing <span className="font-black text-[#0B1E36]">{filteredProducts.length}</span> carpets
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2.5 bg-[#F5F1EA] border-2 border-transparent rounded-xl focus:outline-none focus:border-[#C8A96A] text-sm font-bold text-[#0B1E36] transition-colors flex-1 sm:flex-none"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                  </select>

                  <div className="flex gap-2 bg-[#F5F1EA] p-1.5 rounded-xl">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-[#0B1E36] text-[#C8A96A] shadow-md' : 'text-[#666666] hover:text-[#0B1E36]'}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-[#0B1E36] text-[#C8A96A] shadow-md' : 'text-[#666666] hover:text-[#0B1E36]'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-[#E8E2D8] hover:border-[#C8A96A]/50 flex flex-col">
                      <div className="relative h-56 bg-gradient-to-br from-[#F5F1EA] to-[#E8E2D8] flex items-center justify-center overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-black text-[#0B1E36] leading-tight line-clamp-2">{product.name}</h3>
                        </div>
                        
                        <div className="flex items-center space-x-1 mb-3">
                          <Star className="w-4 h-4 text-[#C8A96A] fill-current" />
                          <span className="text-sm font-bold text-[#2B2B2B]">{product.rating}</span>
                          <span className="text-xs text-[#666666]">({product.reviews})</span>
                        </div>

                        <p className="text-[#666666] text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>

                        <div className="pt-4 border-t-2 border-[#F5F1EA] mt-auto">
                          
                          <a
                            href="tel:+971555124614"
                            className="w-full py-3 bg-[#0B1E36] text-white font-black rounded-xl hover:bg-[#C8A96A] hover:text-[#0B1E36] transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                          >
                            <span>Get Custom Quote</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#E8E2D8] hover:border-[#C8A96A]/50 flex flex-col sm:flex-row overflow-hidden group">
                      <div className="w-full sm:w-48 h-48 sm:h-auto bg-gradient-to-br from-[#F5F1EA] to-[#E8E2D8] flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      
                      <div className="p-6 flex flex-col sm:flex-row w-full gap-6">
                        <div className="flex-grow">
                          <h3 className="text-xl font-black text-[#0B1E36] mb-2">{product.name}</h3>
                          <div className="flex items-center space-x-1 mb-3">
                            <Star className="w-4 h-4 text-[#C8A96A] fill-current" />
                            <span className="text-sm font-bold text-[#2B2B2B]">{product.rating}</span>
                            <span className="text-xs text-[#666666]">({product.reviews} reviews)</span>
                          </div>
                          <p className="text-[#666666] mb-4">{product.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {product.features.map((feature, idx) => (
                              <span key={idx} className="bg-[#F5F1EA] text-[#2B2B2B] text-xs font-bold px-3 py-1 rounded-full border border-[#E8E2D8]">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="sm:w-48 flex flex-col justify-center sm:border-l-2 border-[#F5F1EA] sm:pl-6 pt-4 sm:pt-0 mt-4 sm:mt-0 border-t-2 sm:border-t-0">
                          <a
                            href="tel:+971555124614"
                            className="w-full py-3 bg-[#0B1E36] text-white font-black rounded-xl hover:bg-[#C8A96A] hover:text-[#0B1E36] transition-all duration-300 text-center"
                          >
                            Get Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarpetCategory;
