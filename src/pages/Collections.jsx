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
      featured: 'Blackout • Velvet & blackout • Silk & blackout • Custom',
      path: '/curtains',
      products: [
        { name: 'Blackout Curtains', count: '7 types' },
        { name: 'Sheer Curtains', count: '6 types' },
        { name: 'Velvet & blackout', count: '6 types' },
        { name: 'Silk & blackout', count: '6 types' },
        { name: 'Linen & blackout', count: '6 types' },
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
            <div className="flex overflow-x-auto pb-4 gap-3 scrollbar-hide snap-x">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex-shrink-0 flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 snap-start ${
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
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {filteredCollections.map((collection, idx) => (
                <div 
                  key={collection.id} 
                  className="group break-inside-avoid relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border-2 border-[#E8E2D8] hover:border-[#C8A96A] transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
                  style={{ animation: `fadeIn 0.5s ease-in-out ${idx * 100}ms both` }}
                >
                  {/* Card Header & Background */}
                  <div className={`relative h-[300px] flex flex-col justify-end p-8 text-white overflow-hidden bg-gradient-to-br ${collection.bgGradient}`}>
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={collection.image} 
                        alt={collection.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 mix-blend-overlay"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-[#0B1E36] to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300`}></div>
                    </div>

                    {/* Header Content */}
                    <div className="relative z-10 flex flex-col items-start transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-4xl mb-3 p-3 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 text-white">
                        {collection.icon}
                      </div>
                      <h2 className="text-3xl font-black mb-2 drop-shadow-md tracking-tight">
                        {collection.name}
                      </h2>
                      <p className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-md">
                        {collection.description}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8 flex-1 bg-white">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-black text-[#C8A96A] bg-[#C8A96A]/10 px-4 py-1.5 rounded-full uppercase tracking-wider">
                        {collection.items} Products
                      </span>
                    </div>

                    <div className="space-y-3 mb-8">
                      {collection.products.slice(0, 4).map((product, pIdx) => (
                        <div key={pIdx} className="flex items-center justify-between group/item">
                          <div className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96A]/50 group-hover/item:bg-[#C8A96A] group-hover/item:scale-150 transition-all"></div>
                            <span className="font-bold text-[#444444] group-hover/item:text-[#0B1E36] transition-colors">{product.name}</span>
                          </div>
                          <span className="text-xs font-bold text-[#999999] bg-gray-100 px-2 py-1 rounded-md">{product.count}</span>
                        </div>
                      ))}
                      {collection.products.length > 4 && (
                        <div className="text-sm font-bold text-[#C8A96A] pl-4 italic">
                          + {collection.products.length - 4} more categories
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <Link 
                      to={collection.path} 
                      className="w-full flex items-center justify-center space-x-2 py-4 bg-[#F5F1EA] group-hover:bg-[#0B1E36] text-[#0B1E36] group-hover:text-white font-black rounded-xl transition-all duration-300"
                    >
                      <span className="uppercase tracking-wider text-sm">Explore Collection</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
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