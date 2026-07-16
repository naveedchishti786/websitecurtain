import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Sparkles, ChevronRight, Blinds, Sofa, Armchair, BedDouble, BedSingle, Archive } from 'lucide-react';

const Collections = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const collections = [
    {
      id: 1,
      name: 'Curtains',
      icon: <Blinds size="1em" />,
      bgGradient: 'from-[#0B1E36] to-[#173054]',
      description: 'Premium curtains for every room and style',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&auto=format&fit=crop&q=60',
      items: 42,
      featured: 'Blackout • Velvet • Silk • Custom',
      path: '/curtains',
      products: [
        { name: 'Blackout Curtains', count: '7 types' },
        { name: 'Sheer Curtains', count: '6 types' },
        { name: 'Velvet Curtains', count: '6 types' },
        { name: 'Silk Curtains', count: '6 types' },
        { name: 'Linen Curtains', count: '6 types' },
        { name: 'Motorized Curtains', count: '6 types' },
      ]
    },
    {
      id: 1.5,
      name: 'Sofas',
      icon: <Sofa size="1em" />,
      bgGradient: 'from-[#C8A96A] to-[#B8955A]',
      description: 'Luxury sofas and comfortable seating',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60',
      items: 24,
      featured: 'Sectional • Recliner • Loveseat',
      path: '/sofas',
      products: [
        { name: 'Sectional Sofas', count: '6 types' },
        { name: 'Recliners', count: '4 types' },
        { name: 'Loveseats', count: '4 types' },
        { name: 'Sofa Beds', count: '4 types' },
        { name: 'Chesterfield', count: '3 types' },
        { name: 'Modern Contemporary', count: '3 types' },
      ]
    },
    {
      id: 2,
      name: 'Furniture',
      icon: <Armchair size="1em" />,
      bgGradient: 'from-[#173054] to-[#0B1E36]',
      description: 'Quality furniture for your living space',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=60',
      items: 36,
      featured: 'Living Room • Dining • Sofa • Office',
      path: '/furniture',
      products: [
        { name: 'Living Room Sets', count: '6 types' },
        { name: 'Dining Tables', count: '6 types' },
        { name: 'Sofa Sets', count: '6 types' },
        { name: 'Coffee Tables', count: '6 types' },
        { name: 'TV Units', count: '6 types' },
        { name: 'Office Furniture', count: '6 types' },
      ]
    },
    {
      id: 3,
      name: 'Beds',
      icon: <BedDouble size="1em" />,
      bgGradient: 'from-[#0B1E36] to-[#C8A96A]',
      description: 'Comfortable beds for better sleep',
      image: 'https://images.unsplash.com/photo-1540932239986-310128078e6f?w=800&auto=format&fit=crop&q=60',
      items: 42,
      featured: 'King • Queen • Single • Storage',
      path: '/beds',
      products: [
        { name: 'King Size Beds', count: '4 types' },
        { name: 'Queen Size Beds', count: '4 types' },
        { name: 'Single Beds', count: '4 types' },
        { name: 'Bunk Beds', count: '4 types' },
        { name: 'Storage Beds', count: '4 types' },
        { name: 'Kids Beds', count: '4 types' },
      ]
    },
    {
      id: 4,
      name: 'Mattress',
      icon: <BedSingle size="1em" />,
      bgGradient: 'from-[#C8A96A] to-[#173054]',
      description: 'Premium mattress for ultimate comfort',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60',
      items: 36,
      featured: 'Memory Foam • Orthopedic • Spring',
      path: '/mattress',
      products: [
        { name: 'Memory Foam', count: '6 types' },
        { name: 'Orthopedic', count: '6 types' },
        { name: 'Spring Mattress', count: '6 types' },
        { name: 'Latex Mattress', count: '6 types' },
        { name: 'Medical Mattress', count: '6 types' },
        { name: 'Mattress Toppers', count: '6 types' },
      ]
    },
    {
      id: 5,
      name: 'Storage',
      icon: <Archive size="1em" />,
      bgGradient: 'from-[#173054] to-[#C8A96A]',
      description: 'Smart storage solutions for your home',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60',
      items: 36,
      featured: 'Wardrobes • Cupboards • Cabinets',
      path: '/storage',
      products: [
        { name: 'Sliding Wardrobes', count: '6 types' },
        { name: 'Walk-in Wardrobes', count: '6 types' },
        { name: 'Built-in Wardrobes', count: '6 types' },
        { name: 'Kitchen Cupboards', count: '6 types' },
        { name: 'Bedroom Cupboards', count: '6 types' },
        { name: 'Storage Cabinets', count: '6 types' },
      ]
    }
  ];

  const filterCategories = [
    { id: 'all', name: 'All Collections', icon: <Sparkles size="1em" /> },
    { id: 'curtains', name: 'Curtains', icon: <Blinds size="1em" /> },
    { id: 'furniture', name: 'Furniture', icon: <Armchair size="1em" /> },
    { id: 'beds', name: 'Beds', icon: <BedDouble size="1em" /> },
  ];

  const filteredCollections = activeFilter === 'all' 
    ? collections 
    : collections.filter(c => c.name.toLowerCase().includes(activeFilter));

  return (
    <>
      <Helmet>
        <title>Collections - Zoya Premium Curtain & Furnishing</title>
        <meta name="description" content="Explore our complete collections of curtains, furniture, beds, mattress, and storage solutions." />
        <meta property="og:title" content="Collections - Zoya Premium Curtain" />
        <meta property="og:description" content="Browse premium curtains, furniture, beds, mattress, and storage collections" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* ===== HERO SECTION ===== */}
        <section className="relative bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] text-white py-20 md:py-32 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            {/* Breadcrumb */}
            <div className="inline-flex items-center space-x-2 mb-6 bg-[#C8A96A]/20 px-6 py-3 rounded-full border border-[#C8A96A]/40">
              <span className="text-[#F5F1EA] text-sm font-semibold">Home</span>
              <span className="text-[#C8A96A]">/</span>
              <span className="text-[#C8A96A] text-sm font-bold">Collections</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Collections
            </h1>

            <p className="text-xl md:text-2xl text-[#F5F1EA] max-w-3xl mx-auto font-medium">
              Discover our premium collections of curtains, furniture, beds, mattress & storage solutions tailored to your lifestyle
            </p>
          </div>
        </section>

        {/* ===== FILTER SECTION ===== */}
        <section className="py-8 bg-white border-b-2 border-[#E8E2D8]">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-sm font-bold text-[#C8A96A] uppercase tracking-widest mb-4">Filter Collections</p>
            <div className="flex flex-wrap gap-3">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === category.id
                      ? 'bg-[#0B1E36] text-white shadow-lg'
                      : 'bg-[#F5F1EA] text-[#222222] border-2 border-[#E8E2D8] hover:border-[#C8A96A] hover:bg-white'
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span className="text-sm">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COLLECTIONS GRID ===== */}
        <section className="py-16 bg-white relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-20 right-20 w-64 h-64 bg-[#C8A96A] rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
              {filteredCollections.map((collection) => (
                <Link key={collection.id} to={collection.path} className="group h-full">
                  <div className={`bg-gradient-to-br ${collection.bgGradient} rounded-2xl p-8 h-full text-white transform group-hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-3 border-2 border-transparent group-hover:border-[#C8A96A]`}>
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {collection.icon}
                    </div>
                    
                    <h2 className="text-2xl font-black mb-2 group-hover:text-[#F5F1EA] transition-colors">
                      {collection.name}
                    </h2>

                    <p className="text-sm text-white/90 mb-4 font-medium">
                      {collection.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t-2 border-white/20">
                      <span className="text-xs font-black bg-white/20 px-3 py-1 rounded-full">
                        {collection.items} Products
                      </span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* ===== DETAILED COLLECTIONS ===== */}
            <div className="space-y-16">
              {filteredCollections.map((collection, idx) => (
                <div 
                  key={collection.id} 
                  className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#E8E2D8] hover:border-[#C8A96A] transition-all duration-300"
                  style={{ animation: `fadeIn 0.5s ease-in-out ${idx * 100}ms both` }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Left - Image & Info */}
                    <div className={`relative p-12 text-white flex flex-col justify-center items-center overflow-hidden min-h-[400px] bg-gradient-to-br ${collection.bgGradient}`}>
                      <div className="absolute inset-0">
                        <img 
                          src={collection.image} 
                          alt={collection.name} 
                          className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${collection.bgGradient} opacity-60 mix-blend-multiply`}></div>
                      </div>

                      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                        <div className="text-7xl filter drop-shadow-lg">
                          {collection.icon}
                        </div>

                        <div>
                          <h2 className="text-4xl font-black mb-3 drop-shadow-lg">
                            {collection.name}
                          </h2>
                          <p className="text-lg text-white/95 mb-6 drop-shadow-md font-medium leading-relaxed">
                            {collection.description}
                          </p>
                        </div>

                        <Link 
                          to={collection.path} 
                          className="bg-white text-[#0B1E36] px-8 py-4 rounded-xl font-black hover:bg-[#F5F1EA] hover:text-[#C8A96A] transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl transform hover:scale-105 uppercase tracking-wider"
                        >
                          <span>Browse All</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right - Products List */}
                    <div className="col-span-2 p-10 bg-white">
                      <h3 className="text-2xl font-black text-[#222222] mb-8 flex items-center space-x-2">
                        <span className="w-1 h-8 bg-[#C8A96A] rounded-full"></span>
                        <span>Available Categories</span>
                      </h3>

                      <div className="grid grid-cols-2 gap-4">
                        {collection.products.map((product, productIdx) => (
                          <div 
                            key={productIdx} 
                            className="flex items-center space-x-3 p-4 bg-[#F5F1EA] rounded-xl hover:bg-[#C8A96A]/10 hover:border-[#C8A96A] border-2 border-[#E8E2D8] transition-all duration-300 group cursor-pointer"
                          >
                            <div className="w-2.5 h-2.5 bg-[#C8A96A] rounded-full group-hover:scale-150 transition-transform"></div>
                            <div>
                              <p className="font-black text-[#222222] text-sm group-hover:text-[#0B1E36] transition-colors">
                                {product.name}
                              </p>
                              <p className="text-xs text-[#666666] font-semibold">
                                {product.count}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Browse Button */}
                      <Link
                        to={collection.path}
                        className="mt-8 inline-flex items-center space-x-2 text-[#0B1E36] hover:text-[#C8A96A] font-black text-sm uppercase tracking-wider group transition-colors"
                      >
                        <span>View All {collection.name}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FEATURES SECTION ===== */}
        <section className="bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] text-white py-16 my-16 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C8A96A] to-transparent"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Truck,
                  title: 'Free Delivery',
                  description: 'Fast delivery across all UAE emirates'
                },
                {
                  icon: Shield,
                  title: '5-Year Warranty',
                  description: 'Comprehensive protection on all products'
                },
                {
                  icon: Star,
                  title: 'Quality Assured',
                  description: 'Premium materials and expert craftsmanship'
                }
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="text-center group hover:translate-y-2 transition-all duration-300">
                    <div className="w-16 h-16 bg-[#C8A96A]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C8A96A] transition-all duration-300">
                      <Icon className="w-8 h-8 text-[#C8A96A] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-black mb-2">{feature.title}</h3>
                    <p className="text-[#F5F1EA] font-medium">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="bg-gradient-to-br from-[#F5F1EA] to-white text-[#222222] py-20 md:py-32 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-20 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-[#C8A96A]/15 px-6 py-3 rounded-full border border-[#C8A96A]/30 mb-6">
              <Sparkles className="w-5 h-5 text-[#C8A96A]" />
              <span className="text-sm font-bold text-[#0B1E36] uppercase tracking-widest">Ready to Shop?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#222222]">
              Find Your Perfect Style
            </h2>

            <p className="text-xl text-[#666666] mb-10 max-w-2xl mx-auto font-semibold leading-relaxed">
              Browse our complete collections and find the perfect curtains, furniture, beds, and storage solutions for your home
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+971555124614" 
                className="px-8 py-4 bg-[#0B1E36] text-white font-black rounded-xl hover:bg-[#C8A96A] hover:text-[#0B1E36] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 uppercase tracking-wider flex items-center space-x-2"
              >
                <span>📞 Call for Assistance</span>
              </a>

              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-[#0B1E36] text-[#0B1E36] font-black rounded-xl hover:bg-[#0B1E36] hover:text-white transition-all duration-300 uppercase tracking-wider flex items-center space-x-2"
              >
                <span>✉️ Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t-2 border-[#E8E2D8] grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🎨', title: 'Expert Consultation', desc: 'Personalized advice for your space' },
                { icon: '⚡', title: 'Quick Installation', desc: 'Professional setup within 48 hours' },
                { icon: '🏆', title: 'Premium Quality', desc: '15+ years of excellence' }
              ].map((item, idx) => (
                <div key={idx} className="text-center group hover:translate-y-2 transition-all duration-300">
                  <p className="text-4xl mb-2">{item.icon}</p>
                  <h4 className="text-[#0B1E36] font-black mb-1 uppercase tracking-wider text-sm">{item.title}</h4>
                  <p className="text-[#666666] text-sm font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Collections;