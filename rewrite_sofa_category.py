import os

jsx_file = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\products\SofaCategory.jsx"

# Generate the sofa objects
small_sofas = []
large_sofas = []
lshape_sofas = []

seaters = [1, 2, 3, 4, 5, 6, 7, "L-Shape"]
prices = [299, 499, 699, 899, 1099, 1299, 1499, 1599]

for i in range(1, 53):
    seater_idx = (i - 1) % len(seaters)
    seater_type = seaters[seater_idx]
    price = prices[seater_idx]
    
    title = f"Premium {seater_type} Seater Sofa" if isinstance(seater_type, int) else f"Premium {seater_type} Sofa"
    
    if isinstance(seater_type, int) and seater_type <= 3:
        cat = 'small'
    elif isinstance(seater_type, int) and seater_type >= 4:
        cat = 'large'
    else:
        cat = 'lshape'
        
    item = f"""      {{
        id: 's{i}',
        name: '{title}',
        type: '{cat}',
        price: 'AED {price}',
        priceNum: {price},
        image: '/images/sofas/sofa-{i}.jpg',
        rating: 4.8,
        reviews: {100 + i},
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      }}"""
      
    if cat == 'small':
        small_sofas.append(item)
    elif cat == 'large':
        large_sofas.append(item)
    else:
        lshape_sofas.append(item)

sofa_data_js = "{\n    'small': [\n" + ",\n".join(small_sofas) + "\n    ],\n    'large': [\n" + ",\n".join(large_sofas) + "\n    ],\n    'lshape': [\n" + ",\n".join(lshape_sofas) + "\n    ]\n  }"

react_component = f"""import React, {{ useState }} from 'react';
import {{ useParams, Link }} from 'react-router-dom';
import {{ Helmet }} from 'react-helmet-async';
import {{ Filter, Grid, List, Truck, Shield, RotateCcw, Heart, ArrowRight, Star }} from 'lucide-react';

const SofaCategory = () => {{
  const {{ type }} = useParams();
  const [selectedFilter, setSelectedFilter] = useState(type || 'all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');

  // Comprehensive Sofa Data
  const sofaData = {sofa_data_js};

  // Get all products
  const allProducts = Object.values(sofaData).flat();
  
  // Filter products
  let filteredProducts = selectedFilter === 'all' 
    ? allProducts 
    : sofaData[selectedFilter] || [];

  // Apply sorting
  if (sortBy === 'rating') {{
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }}

  return (
    <>
      <Helmet>
        <title>Premium Sofas - Zoya Premium Curtains & Furnishing</title>
        <meta name="description" content="Explore our luxurious collection of sofas including sectionals, recliners, and sofa beds." />
      </Helmet>

      <div className="min-h-screen bg-[#F5F1EA]">
        {{/* Hero Section */}}
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
              Premium Sofas Collection
            </h1>
            <p className="text-xl text-[#E8E2D8] max-w-2xl mx-auto font-medium mb-8">
              Discover unparalleled comfort and style with our handpicked selection of premium sofas, designed to elevate your living space.
            </p>
            <p className="text-[#C8A96A] font-bold text-lg">
              ✓ Free Delivery | ✓ Premium Quality
            </p>
          </div>
        </section>

        {{/* Main Content */}}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {{/* Sidebar - Filters */}}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-[#E8E2D8] sticky top-32">
                <h3 className="text-xl font-black text-[#0B1E36] mb-6 flex items-center space-x-2 pb-4 border-b-2 border-[#F5F1EA]">
                  <Filter className="w-5 h-5 text-[#C8A96A]" />
                  <span>Filters</span>
                </h3>

                {{/* Category Filter */}}
                <div className="mb-8">
                  <h4 className="font-bold text-[#0B1E36] mb-3 uppercase tracking-wider text-sm">Sofa Style</h4>
                  <div className="space-y-2">
                    {{[
                      {{ id: 'all', label: 'All Sofas' }},
                      {{ id: 'small', label: '1-3 Seater' }},
                      {{ id: 'large', label: '4-7 Seater' }},
                      {{ id: 'lshape', label: 'L-Shape' }}
                    ].map((filter) => (
                      <button
                        key={{filter.id}}
                        onClick={{() => setSelectedFilter(filter.id)}}
                        className={{`w-full text-left px-4 py-3 rounded-xl transition-all text-sm font-semibold ${{
                          selectedFilter === filter.id
                            ? 'bg-[#0B1E36] text-[#C8A96A] shadow-md'
                            : 'bg-[#F5F1EA] text-[#2B2B2B] hover:bg-[#C8A96A]/20'
                        }}`}}
                      >
                        {{filter.label}}
                      </button>
                    ))}}
                  </div>
                </div>

                {{/* Clear Filters */}}
                <button
                  onClick={{() => setSelectedFilter('all')}}
                  className="w-full bg-[#F5F1EA] hover:bg-[#C8A96A] text-[#0B1E36] py-3 rounded-xl font-black transition-all border-2 border-[#C8A96A]/30 hover:border-[#C8A96A]"
                >
                  Clear Filters
                </button>
              </div>
            </div>

            {{/* Products Grid */}}
            <div className="lg:col-span-3">
              {{/* Top Bar */}}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-4 rounded-2xl shadow-md border-2 border-[#E8E2D8]">
                <div>
                  <p className="text-[#666666] font-semibold">
                    Showing <span className="font-black text-[#0B1E36]">{{filteredProducts.length}}</span> sofas
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <select
                    value={{sortBy}}
                    onChange={{(e) => setSortBy(e.target.value)}}
                    className="px-4 py-2.5 bg-[#F5F1EA] border-2 border-transparent rounded-xl focus:outline-none focus:border-[#C8A96A] text-sm font-bold text-[#0B1E36] transition-colors flex-1 sm:flex-none"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                  </select>

                  <div className="flex gap-2 bg-[#F5F1EA] p-1.5 rounded-xl">
                    <button
                      onClick={{() => setViewMode('grid')}}
                      className={{`p-2 rounded-lg transition-colors ${{viewMode === 'grid' ? 'bg-[#0B1E36] text-[#C8A96A] shadow-md' : 'text-[#666666] hover:text-[#0B1E36]'}}`}}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={{() => setViewMode('list')}}
                      className={{`p-2 rounded-lg transition-colors ${{viewMode === 'list' ? 'bg-[#0B1E36] text-[#C8A96A] shadow-md' : 'text-[#666666] hover:text-[#0B1E36]'}}`}}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {{/* Products */}}
              {{viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {{filteredProducts.map((product) => (
                    <div key={{product.id}} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-[#E8E2D8] hover:border-[#C8A96A]/50 flex flex-col">
                      <div className="relative h-56 bg-gradient-to-br from-[#F5F1EA] to-[#E8E2D8] flex items-center justify-center overflow-hidden">
                        <img src={{product.image}} alt={{product.name}} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-black text-[#0B1E36] leading-tight line-clamp-2">{{product.name}}</h3>
                        </div>
                        
                        <div className="flex items-center space-x-1 mb-3">
                          <Star className="w-4 h-4 text-[#C8A96A] fill-current" />
                          <span className="text-sm font-bold text-[#2B2B2B]">{{product.rating}}</span>
                          <span className="text-xs text-[#666666]">({{product.reviews}})</span>
                        </div>

                        <p className="text-[#666666] text-sm mb-4 line-clamp-2 flex-grow">{{product.description}}</p>
                        <p className="text-xl font-bold text-[#0B1E36] mb-4">{{product.price}}</p>

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
                  ))}}
                </div>
              ) : (
                <div className="space-y-4">
                  {{filteredProducts.map((product) => (
                    <div key={{product.id}} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#E8E2D8] hover:border-[#C8A96A]/50 flex flex-col sm:flex-row overflow-hidden group">
                      <div className="w-full sm:w-48 h-48 sm:h-auto bg-gradient-to-br from-[#F5F1EA] to-[#E8E2D8] flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img src={{product.image}} alt={{product.name}} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      
                      <div className="p-6 flex flex-col sm:flex-row w-full gap-6">
                        <div className="flex-grow">
                          <h3 className="text-xl font-black text-[#0B1E36] mb-2">{{product.name}}</h3>
                          <div className="flex items-center space-x-1 mb-3">
                            <Star className="w-4 h-4 text-[#C8A96A] fill-current" />
                            <span className="text-sm font-bold text-[#2B2B2B]">{{product.rating}}</span>
                            <span className="text-xs text-[#666666]">({{product.reviews}} reviews)</span>
                          </div>
                          <p className="text-[#666666] mb-4">{{product.description}}</p>
                          <p className="text-xl font-bold text-[#0B1E36] mb-4">{{product.price}}</p>
                          <div className="flex flex-wrap gap-2">
                            {{product.features.map((feature, idx) => (
                              <span key={{idx}} className="bg-[#F5F1EA] text-[#2B2B2B] text-xs font-bold px-3 py-1 rounded-full border border-[#E8E2D8]">
                                {{feature}}
                              </span>
                            ))}}
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
                  ))}}
                </div>
              )}}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}};

export default SofaCategory;
"""

with open(jsx_file, "w", encoding="utf-8") as f:
    f.write(react_component)

print("Updated SofaCategory.jsx to display all 52 images using a grid/list layout.")
