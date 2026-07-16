import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Sparkles, ChevronDown, Star, Eye, Blinds, Sofa, BedDouble, BedSingle, Archive } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&h=900&fit=crop', // Curtains / Blinds
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&h=900&fit=crop', // Furniture / Sofas
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&h=900&fit=crop', // Beds / Mattress
    'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?w=1600&h=900&fit=crop', // Carpets / Luxury Interior
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600&h=900&fit=crop'  // Natural / Minimalist
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { name: 'Curtains', icon: <Blinds className="w-16 h-16" strokeWidth={1.5} />, path: '/curtains', items: '100+ Designs' },
    { name: 'Furniture', icon: <Sofa className="w-16 h-16" strokeWidth={1.5} />, path: '/furniture', items: '250+ Items' },
    { name: 'Beds', icon: <BedDouble className="w-16 h-16" strokeWidth={1.5} />, path: '/beds', items: '50+ Models' },
    { name: 'Mattress', icon: <BedSingle className="w-16 h-16" strokeWidth={1.5} />, path: '/mattress', items: '75+ Options' },
    { name: 'Storage', icon: <Archive className="w-16 h-16" strokeWidth={1.5} />, path: '/storage', items: '120+ Solutions' },
  ];

  const features = [
    { 
      icon: '🏆', 
      title: 'Premium Quality', 
      desc: 'Carefully selected materials and expert craftsmanship ensuring durability',
    },
    { 
      icon: '🚚', 
      title: 'Free Delivery', 
      desc: 'Complimentary fast delivery across all UAE emirates',
    },
    { 
      icon: '✅', 
      title: '5-Year Warranty', 
      desc: 'Comprehensive warranty for complete peace of mind',
    },
    { 
      icon: '👥', 
      title: '24/7 Support', 
      desc: 'Expert customer support team always ready to help',
    },
  ];

  const testimonials = [
    {
      name: 'Fatima Al Mansouri',
      location: 'Dubai',
      text: 'The quality of the curtains exceeded my expectations. The team was very professional and the installation was absolutely perfect!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Ahmed Hassan',
      location: 'Abu Dhabi',
      text: 'Best furniture shopping experience I\'ve had! Great collection, amazing customer service, and stunning results. Highly recommended!',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      location: 'Sharjah',
      text: 'The design consultation was incredibly helpful and detailed. My home looks absolutely stunning now. Worth every penny!',
      rating: 5,
      avatar: '👩‍🦰'
    },
  ];

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full min-h-[70dvh] lg:min-h-[100dvh] bg-black overflow-hidden">
        {/* Background Images Slider */}
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 bg-contain bg-center bg-no-repeat ${
              index === currentImageIndex 
                ? 'opacity-100 z-10 transition-opacity duration-500 ease-in' 
                : 'opacity-0 z-0 transition-opacity duration-[100ms] delay-500 ease-out'
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          ></div>
        ))}

        {/* Natural Overlay - Only for Text Readability (No heavy theme colors) */}
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"></div>
        
        {/* Slider Progress Time Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20 z-30">
          <div 
            key={currentImageIndex}
            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#C8A96A]"
            style={{ animation: 'progress 4s linear forwards' }}
          ></div>
        </div>

        {/* Animated gradient elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A]/10 rounded-full blur-3xl animate-pulse z-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A96A]/10 rounded-full blur-3xl animate-pulse delay-1000 z-20"></div>

        {/* Content */}
        <div className="relative z-30 h-full min-h-[70dvh] lg:min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8 mt-10 lg:mt-0">
            {/* Badge */}
            <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#C8A96A]/25 backdrop-blur-md border border-[#C8A96A]/50 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}>
              <Sparkles className="w-5 h-5 text-[#C8A96A]" />
              <span className="text-[#F5F1EA] font-bold text-sm tracking-widest uppercase">
                ✨ Transform Your Home Today
              </span>
            </div>

            {/* Main Heading */}
            <div className={`space-y-6 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
                Transform Your Home with<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C8A96A] to-[#E8C547] drop-shadow-xl animate-pulse">
                  Zoya Premium Curtain
                </span>
              </h1>

              <p className="text-lg md:text-2xl text-[#F5F1EA] leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-lg">
                Discover our exquisite collection of premium curtains, furniture, and home furnishings. 
                Elevate your space with timeless elegance and sophisticated design.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Primary CTA */}
              <Link
                to="/curtains"
                className="flex items-center justify-center space-x-3 px-8 py-4 md:px-10 md:py-5 bg-[#C8A96A] text-[#2B2B2B] font-black text-lg rounded-xl hover:bg-[#D4AF37] transition-all duration-300 shadow-2xl hover:shadow-[#C8A96A]/80 transform hover:scale-105 group uppercase tracking-wide w-full sm:w-auto"
              >
                <span>Shop Curtains</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA */}
              <a
                href="tel:+971555124614"
                className="flex items-center justify-center space-x-3 px-8 py-4 md:px-10 md:py-5 bg-[#0B1E36] text-white font-black text-lg rounded-xl hover:bg-[#173054] transition-all duration-300 shadow-xl transform hover:scale-105 group uppercase tracking-wide border-none w-full sm:w-auto"
              >
                <span>📞 Get Consultation</span>
                <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Stats Row */}
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 pt-12 border-t-2 border-[#C8A96A]/40 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {[
                { number: '5000+', label: 'Happy Customers', icon: '👥' },
                { number: '500+', label: 'Premium Products', icon: '🎨' },
                { number: '15+', label: 'Years Experience', icon: '🏆' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center space-y-2 group hover:translate-y-2 transition-all duration-300">
                  <div className="text-3xl md:text-4xl drop-shadow-lg">{stat.icon}</div>
                  <p className="text-2xl md:text-3xl font-black text-[#D4AF37] drop-shadow-md">{stat.number}</p>
                  <p className="text-sm md:text-base text-[#F5F1EA] font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <button
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-[#D4AF37] hover:text-[#F5F1EA] transition-colors z-20"
            aria-label="Scroll down"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
      </section>

      {/* ===== CATEGORIES SECTION ===== */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C8A96A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#0B1E36] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#C8A96A] font-bold text-sm tracking-widest uppercase mb-4 inline-block bg-[#C8A96A]/15 px-4 py-2 rounded-full border border-[#C8A96A]/30">
              ✨ Our Collections
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0B1E36] mt-4 mb-6 leading-tight">
              Explore Our Premium Range
            </h2>
            <p className="text-lg text-[#173054] font-semibold max-w-2xl mx-auto mb-6">
              Discover our handpicked selection of finest premium products for your home
            </p>
            
            {/* NEW: View All Collections Link */}
            <Link 
              to="/collections"
              className="inline-flex items-center space-x-2 text-[#C8A96A] hover:text-[#0B1E36] font-bold text-base group transition-all duration-300 bg-[#F5F1EA] hover:bg-[#C8A96A]/10 px-6 py-3 rounded-full border-2 border-[#C8A96A]/30 hover:border-[#C8A96A]"
            >
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>View All Collections</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((cat) => (
              <Link key={cat.name} to={cat.path} className="group h-full">
                <div className="bg-gradient-to-br from-[#F5F1EA] via-[#F5F1EA] to-[#E8DFD5] rounded-2xl p-8 text-center hover:shadow-2xl transition-all transform hover:-translate-y-3 h-full border-2 border-[#C8A96A]/20 hover:border-[#C8A96A]/60 group/card">
                  <div className="flex justify-center mb-4 text-[#0B1E36] group-hover/card:text-[#C8A96A] group-hover/card:scale-110 transition-all duration-300">{cat.icon}</div>
                  <h3 className="text-xl font-black text-[#0B1E36] group-hover/card:text-[#C8A96A] transition-colors">{cat.name}</h3>
                  <p className="text-sm font-semibold text-[#173054] mt-2 mb-3">{cat.items}</p>
                  <p className="text-[#C8A96A] font-bold group-hover/card:translate-x-1 transition-transform flex items-center justify-center space-x-1 uppercase text-xs tracking-wide">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* NEW: Bottom CTA for Collections */}
          <div className="mt-12 text-center">
            <p className="text-[#173054] font-semibold mb-6">
              Can't find what you're looking for? Browse our complete collection!
            </p>
            <Link
              to="/collections"
              className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#0B1E36] to-[#173054] text-white font-black text-base rounded-xl hover:from-[#173054] hover:to-[#0B1E36] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#0B1E36]/30 transform hover:scale-105 group uppercase tracking-wide"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Browse Full Collection</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CURTAIN TYPES SECTION ===== */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#C8A96A] font-bold text-sm tracking-widest uppercase mb-4 inline-block bg-[#C8A96A]/15 px-4 py-2 rounded-full border border-[#C8A96A]/30">
              🪟 Premium Curtains
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0B1E36] mt-4 mb-6 leading-tight">
              Curtains for Every Style
            </h2>
            <p className="text-lg text-[#173054] font-semibold max-w-2xl mx-auto">
              Explore our wide variety of curtain types designed to match any room and preference.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: 'Blackout Curtains', image: '/images/blackout-curtains/blackout-1.jpg', path: '/curtains/blackout' },
              { type: 'Sheer Curtains', image: '/images/sheer-curtains/sheer-1.jpg', path: '/curtains/sheer' },
              { type: 'Blinds', image: '/images/blind-curtains/blind-1.jpg', path: '/curtains/blinds' },
              { type: 'Motorized Curtains', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60', path: '/curtains/motorized' }
            ].map((curtain, idx) => (
              <Link key={idx} to={curtain.path} className="group block h-full">
                <div className="relative rounded-2xl overflow-hidden h-80 shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-[#F5F1EA]">
                  <img src={curtain.image} alt={curtain.type} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-black text-white mb-2">{curtain.type}</h3>
                    <div className="flex items-center text-[#C8A96A] font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                      <span>View Collection</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#F5F1EA] to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0B1E36] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#C8A96A] font-bold text-sm tracking-widest uppercase mb-4 inline-block bg-[#C8A96A]/15 px-4 py-2 rounded-full border border-[#C8A96A]/30">
              Why Choose Zoya
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0B1E36] mt-4">
              Why Choose Zoya Premium?
            </h2>
            <p className="text-lg text-[#173054] font-semibold mt-4 max-w-2xl mx-auto">
              Experience excellence in every aspect of our service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-3 border-t-4 border-[#C8A96A] hover:border-[#0B1E36]"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-black text-[#0B1E36] mb-3 group-hover:text-[#C8A96A] transition-colors">{feature.title}</h3>
                <p className="text-[#173054] leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#C8A96A] font-bold text-sm tracking-widest uppercase mb-4 inline-block bg-[#C8A96A]/15 px-4 py-2 rounded-full border border-[#C8A96A]/30">
              😊 Happy Customers
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0B1E36] mt-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-[#173054] font-semibold mt-4 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their homes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-[#F5F1EA] to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-3 border-2 border-[#C8A96A]/30 hover:border-[#C8A96A]/60"
              >
                {/* Stars */}
                <div className="flex items-center mb-4 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C8A96A] text-[#C8A96A]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#0B1E36] mb-6 leading-relaxed font-semibold relative">
                  <span className="text-5xl text-[#C8A96A]/30 absolute -top-6 -left-2">"</span>
                  {testimonial.text}
                  <span className="text-5xl text-[#C8A96A]/30 absolute -bottom-6 -right-2">"</span>
                </p>

                {/* Customer Info */}
                <div className="pt-6 border-t-2 border-[#C8A96A]/30 flex items-center space-x-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div className="text-left">
                    <p className="font-black text-[#0B1E36]">{testimonial.name}</p>
                    <p className="text-sm text-[#C8A96A] font-bold tracking-wide">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#F5F1EA] to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop"
                  alt="Our Experience"
                  className="w-full h-96 object-contain object-center"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-[#C8A96A] to-[#B8955A] text-white p-8 rounded-2xl shadow-xl">
                <p className="text-5xl font-black">15+</p>
                <p className="text-lg font-bold">Years of Experience</p>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div>
                <span className="text-[#C8A96A] font-bold text-sm tracking-widest uppercase bg-[#C8A96A]/15 px-4 py-2 rounded-full border border-[#C8A96A]/30 inline-block mb-4">
                  🎯 Our Experience
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-[#0B1E36] mt-4 leading-tight">
                  15 Years of Excellence
                </h2>
              </div>

              <p className="text-lg text-[#173054] leading-relaxed font-medium">
                Since our founding, Zoya Premium Curtain has been dedicated to transforming homes with premium quality products and exceptional service. Our expertise spans across curtains, furniture, beds, and complete home furnishing solutions.
              </p>

              <div className="space-y-4">
                {[
                  { number: '5000+', text: 'Happy Customers Served' },
                  { number: '8000+', text: 'Projects Completed Successfully' },
                  { number: '500+', text: 'Premium Products Available' },
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#C8A96A] to-[#B8955A] rounded-lg flex items-center justify-center text-white font-black text-xl group-hover:scale-110 transition-transform">
                      ✓
                    </div>
                    <div>
                      <p className="text-2xl font-black text-[#0B1E36]">{stat.number}</p>
                      <p className="text-[#173054] font-semibold">{stat.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-white font-black rounded-xl hover:from-[#B8955A] hover:to-[#A8854A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 uppercase tracking-wide"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A]/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A96A]/8 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg md:text-xl text-[#F5F1EA] mb-10 leading-relaxed max-w-2xl mx-auto font-semibold">
            Contact our experts for personalized consultation and discover how we can elevate your living space with premium solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+971555124614"
              className="flex items-center justify-center space-x-3 px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-[#C8A96A] via-[#D4AF37] to-[#B8955A] text-white font-black text-lg rounded-xl hover:from-[#B8955A] hover:via-[#C8A96A] hover:to-[#A8854A] transition-all duration-300 shadow-2xl hover:shadow-[#C8A96A]/80 transform hover:scale-105 group uppercase tracking-wide"
            >
              <span>📞 Call Now</span>
              <span>+971 55 512 4614</span>
            </a>
            <Link 
              to="/contact"
              className="px-8 py-4 md:px-10 md:py-5 border-3 border-[#F5F1EA] text-[#F5F1EA] font-black text-lg rounded-xl hover:bg-[#0B1E36]/70 hover:text-[#C8A96A] hover:border-[#C8A96A] transition-all duration-300 backdrop-blur-sm uppercase tracking-wide"
            >
              ✉️ Get Free Consultation
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t-2 border-[#C8A96A]/40 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Free Measurement', value: 'Expert Home Visit', icon: '📏' },
              { label: 'Professional Installation', value: 'Hassle-Free Setup', icon: '🔧' },
              { label: 'Lifetime Support', value: '24/7 Customer Care', icon: '☎️' },
            ].map((item, idx) => (
              <div key={idx} className="text-center group hover:translate-y-2 transition-all">
                <p className="text-3xl mb-2">{item.icon}</p>
                <p className="text-[#C8A96A] font-bold text-sm tracking-widest uppercase mb-2">{item.label}</p>
                <p className="text-[#F5F1EA] text-lg font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER SECTION ===== */}
      <section className="py-16 bg-gradient-to-b from-[#F5F1EA] to-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-black text-[#0B1E36] mb-4">Stay Updated</h3>
          <p className="text-[#173054] font-semibold mb-6">Subscribe to get exclusive offers and latest collections</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-xl border-2 border-[#C8A96A]/50 focus:border-[#C8A96A] outline-none transition-all text-[#2B2B2B] font-semibold placeholder-[#173054]/50"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-white font-black rounded-xl hover:from-[#B8955A] hover:to-[#A8854A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 uppercase tracking-wide"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[#173054] text-sm font-semibold mt-4">
            No spam, just amazing offers and updates from Zoya Premium Curtain
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;