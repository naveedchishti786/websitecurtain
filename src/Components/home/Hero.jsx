import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Hero carousel images
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=900&fit=crop',
      alt: 'Premium Curtains'
    },
    {
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&h=900&fit=crop',
      alt: 'Luxury Sofas'
    },
    {
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&h=900&fit=crop',
      alt: 'Modern Furniture'
    },
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1500 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-contain object-center"
            />
          </div>
        ))}

        {/* Soft Green Overlay - Primary */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36]/72 via-[#173054]/62 to-[#0B1E36]/58 mix-blend-overlay"></div>

        {/* Secondary Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E36]/30 via-transparent to-[#0B1E36]/70"></div>

        {/* Animated gradient elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A]/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8 w-full">
          {/* Badge */}
          <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#D4AF37]/30 backdrop-blur-md border border-[#D4AF37]/60 transition-all duration-1000 mx-auto ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <Sparkles className="w-5 h-5 text-[#F5F1EA] animate-spin" />
            <span className="text-[#F5F1EA] font-bold text-sm tracking-widest uppercase">
              ✨ Transform Your Space Today
            </span>
          </div>

          {/* Main Heading */}
          <div className={`space-y-6 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Line 1: "Transform Your Home with" */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#F5F1EA] leading-tight tracking-tight drop-shadow-2xl">
                Transform Your Space with
              </h1>
            </div>

            {/* Line 2: "Premium Curtains & Furniture" - Gold Gradient */}
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F5E6D3] via-[#E8C547] to-[#D4AF37] drop-shadow-xl animate-pulse">
                Premium Curtains & Furniture
              </h1>
            </div>

            {/* Description - Warm Beige Color */}
            <p className="text-lg md:text-xl lg:text-2xl text-[#F5F1EA] leading-relaxed max-w-3xl mx-auto font-semibold drop-shadow-lg">
              Quality curtains, furniture, mattresses, and professional fitting services for your dream home
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Primary CTA */}
            <Link
              to="/collections"
              className="flex items-center justify-center space-x-3 px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-[#D4AF37] via-[#E8C547] to-[#C8A96A] text-[#0B1E36] font-black text-lg rounded-xl hover:from-[#C8A96A] hover:via-[#D4AF37] hover:to-[#B8955A] transition-all duration-300 shadow-2xl hover:shadow-[#D4AF37]/80 transform hover:scale-105 group uppercase tracking-wide"
            >
              <span>Browse Collections</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/contact"
              className="flex items-center justify-center space-x-3 px-8 py-4 md:px-10 md:py-5 border-3 border-[#F5F1EA] text-[#F5F1EA] font-black text-lg rounded-xl hover:bg-[#0B1E36]/70 hover:text-[#D4AF37] backdrop-blur-sm transition-all duration-300 group hover:border-[#D4AF37] uppercase tracking-wide"
            >
              <span>Get Free Quote</span>
              <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators - Stats */}
          <div className={`grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t-2 border-[#C8A96A]/40 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { number: '500+', label: 'Happy Customers', icon: '👥' },
              { number: '1000+', label: 'Premium Products', icon: '🎨' },
              { number: '5★', label: 'Rated Service', icon: '⭐' },
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

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? 'bg-[#D4AF37] w-8'
                  : 'bg-[#F5F1EA]/50 hover:bg-[#F5F1EA]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Previous Slide Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-[#D4AF37]/30 hover:bg-[#D4AF37]/60 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hidden md:flex items-center justify-center"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Slide Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-[#D4AF37]/30 hover:bg-[#D4AF37]/60 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hidden md:flex items-center justify-center"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
};

export default Hero;