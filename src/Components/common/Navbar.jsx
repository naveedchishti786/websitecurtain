import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, Mail, Clock, Sparkles, Home, ShoppingBag, Users, Phone as PhoneIcon, MessageCircle, Blinds, Sofa, Armchair, BedDouble, BedSingle, Archive, Gem, Wrench, Image as ImageIcon, FileText, Info, Send, Layers } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const mainNav = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { 
      name: 'Curtains', 
      path: '/curtains',
      icon: <Blinds className="w-5 h-5" />,
      dropdown: true,
      items: [
        { name: 'Blackout Curtains', path: '/curtains/blackout', icon: <Blinds className="w-5 h-5" />, description: 'Total Darkness' },
        { name: 'Sheer Curtains', path: '/curtains/sheer', icon: <Blinds className="w-5 h-5" />, description: 'Light Filtering' },
        { name: 'Motorized Curtains', path: '/curtains/motorized', icon: <Blinds className="w-5 h-5" />, description: 'Smart Control' },
        { name: 'Velvet Curtains', path: '/curtains/velvet', icon: <Blinds className="w-5 h-5" />, description: 'Luxury Texture' },
        { name: 'Blinds', path: '/curtains/blinds', icon: <Blinds className="w-5 h-5" />, description: 'Roller & Venetian' },
      ]
    },
    { 
      name: 'Home Furnishings', 
      path: '/collections',
      icon: <Sofa className="w-5 h-5" />,
      dropdown: true,
      items: [
        { name: 'Sofas', path: '/sofas', icon: <Sofa className="w-5 h-5" />, description: 'Luxury Sofas' },
        { name: 'Furniture', path: '/furniture', icon: <Armchair className="w-5 h-5" />, description: 'Modern Furniture' },
        { name: 'Beds', path: '/beds', icon: <BedDouble className="w-5 h-5" />, description: 'Luxury Beds' },
        { name: 'Mattress', path: '/mattress', icon: <BedSingle className="w-5 h-5" />, description: 'Comfort Mattress' },
        { name: 'Storage', path: '/storage', icon: <Archive className="w-5 h-5" />, description: 'Smart Storage' },
        { name: 'Accessories', path: '/accessories', icon: <Gem className="w-5 h-5" />, description: 'Home Accessories' },
        { name: 'Carpets & Rugs', path: '/carpets', icon: <Layers className="w-5 h-5" />, description: 'Premium Carpets' },
      ]
    },
    { name: 'Services', path: '/services', icon: <Wrench className="w-5 h-5" /> },
    { name: 'Gallery', path: '/gallery', icon: <ImageIcon className="w-5 h-5" /> },
    { name: 'Blog', path: '/blog', icon: <FileText className="w-5 h-5" /> },
    { name: 'About', path: '/about', icon: <Info className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <Send className="w-5 h-5" /> },
  ];

  const isActive = (path) => location.pathname === path;
  
  const handleDropdownToggle = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const Logo = () => (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <div className="relative w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center bg-[#0B1E36] rounded-xl shadow-md border border-[#C8A96A]/20 transition-transform duration-300 group-hover:scale-105">
        <img src="/logo.svg" alt="Zoya Premium Curtain Logo" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
        
        {/* Sparkle Accent */}
        <div className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#C8A96A] rounded-full shadow-lg animate-pulse border-2 border-white"></div>
      </div>

      {/* Text - UPDATED */}
      <div className="block">
        <h1 className="text-xl sm:text-2xl font-black text-[#0B1E36] tracking-tight leading-none">
          ZOYA
        </h1>
        <p className="text-[10px] sm:text-xs text-[#C8A96A] font-bold tracking-wider uppercase">
          Premium Curtain
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-white shadow-xl sticky top-0 z-50 border-b-2 border-[#F5F1EA] backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group flex-shrink-0 hover:opacity-90 transition-opacity"
            >
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              {mainNav.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        className={`px-3 py-2 font-bold text-sm flex items-center space-x-1 transition-all duration-300 relative group/btn ${
                          location.pathname.startsWith(item.path) && item.path !== '/'
                            ? 'text-[#C8A96A]'
                            : 'text-[#2B2B2B] hover:text-[#C8A96A]'
                        }`}
                        onMouseEnter={() => setOpenDropdown(item.name)}
                      >
                        <span className="flex items-center">{item.name}</span>
                        <span className="flex items-center pt-[1px]"><ChevronDown className="w-4 h-4 transition-all duration-300 group-hover/btn:rotate-180" /></span>
                        
                        {/* Underline Animation */}
                        <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C8A96A] to-[#B8955A] rounded-full transition-all duration-300 ${location.pathname.startsWith(item.path) && item.path !== '/' ? 'w-full' : 'w-0 group-hover/btn:w-full'}`}></span>
                      </button>

                      {/* Dropdown Menu */}
                      <div
                        className="absolute left-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-3 border-t-4 border-[#C8A96A] overflow-hidden group-hover:translate-y-0 translate-y-2"
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {/* Header with Gradient */}
                        <div className="bg-gradient-to-r from-[#0B1E36] to-[#173054] px-6 py-4 text-white">
                          <h3 className="text-lg font-bold flex items-center space-x-2">
                            <span className="text-2xl">{item.icon}</span>
                            <span>{item.name}</span>
                          </h3>
                          <p className="text-sm text-[#C8A96A] mt-1 font-semibold">Explore our premium collection</p>
                        </div>

                        {/* Items Grid */}
                        <div className="px-2 py-3">
                          <Link
                            to={item.path}
                            className="flex items-center space-x-3 px-4 py-3 text-[#0B1E36] bg-gradient-to-r from-[#F5F1EA] to-transparent hover:from-[#C8A96A]/15 hover:to-transparent transition-all text-sm font-bold border-b-2 border-[#C8A96A]/20 rounded-lg mb-2 group/link"
                          >
                            <span className="text-2xl bg-gradient-to-br from-[#C8A96A] to-[#B8955A] bg-clip-text text-transparent group-hover/link:scale-110 transition-transform">{item.icon}</span>
                            <div className="flex-1">
                              <span className="block">View All {item.name}</span>
                              <span className="text-xs text-[#C8A96A] font-semibold">Complete collection</span>
                            </div>
                            <span className="text-[#C8A96A] group-hover/link:translate-x-1 transition-transform">→</span>
                          </Link>

                          {/* Category Items */}
                          <div className="grid grid-cols-2 gap-2">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="flex flex-col items-start space-y-1 px-4 py-3 text-[#2B2B2B] hover:bg-[#F5F1EA] hover:text-[#0B1E36] transition-all text-sm font-semibold rounded-lg group/item border border-transparent hover:border-[#C8A96A]/30"
                              >
                                <span className="text-2xl group-hover/item:scale-110 transition-transform">{subItem.icon}</span>
                                <span>{subItem.name}</span>
                                <span className="text-xs text-[#C8A96A] font-normal">{subItem.description}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Footer CTA */}
                        <div className="bg-gradient-to-r from-[#F5F1EA] to-transparent px-6 py-3 border-t border-[#C8A96A]/20">
                          <Link 
                            to="/collections"
                            className="flex items-center justify-between text-sm font-bold text-[#0B1E36] hover:text-[#C8A96A] transition-colors group/cta"
                          >
                            <span>Browse all items</span>
                            <span className="group-hover/cta:translate-x-1 transition-transform">→</span>
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-3 py-2 font-bold text-sm flex items-center transition-all duration-300 relative group/link ${
                        isActive(item.path)
                          ? 'text-[#C8A96A]'
                          : 'text-[#2B2B2B] hover:text-[#C8A96A]'
                      }`}
                    >
                      <span>{item.name}</span>
                      
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#C8A96A] to-[#B8955A] rounded-full transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - CTA & Mobile Menu */}
            <div className="flex items-center space-x-3 xl:space-x-4">
              <a
                href="tel:+971555124614"
                className="hidden sm:flex bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-white px-6 py-3 rounded-xl font-bold hover:from-[#B8955A] hover:to-[#A8854A] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#C8A96A]/30 items-center space-x-2.5 text-sm group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="hidden md:inline">Call Now</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-3 rounded-xl hover:bg-[#F5F1EA] text-[#0B1E36] transition-all border-2 border-transparent hover:border-[#C8A96A]"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="xl:hidden pb-6 space-y-2 bg-gradient-to-b from-[#F5F1EA]/80 to-[#F5F1EA]/40 rounded-2xl p-4 mb-4 backdrop-blur-sm border border-[#C8A96A]/20 animate-in fade-in slide-in-from-top-2 duration-300">
              {mainNav.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="w-full text-left px-4 py-3 rounded-xl text-[#2B2B2B] hover:bg-white hover:shadow-sm flex justify-between items-center font-bold text-sm hover:text-[#0B1E36] transition-all border-2 border-transparent hover:border-[#C8A96A]/30"
                      >
                        <span className="flex items-center space-x-2">
                          <span className="text-xl">{item.icon}</span>
                          <span>{item.name}</span>
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 transition-all duration-300 text-[#C8A96A] ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>

                      {/* Mobile Dropdown */}
                      {openDropdown === item.name && (
                        <div className="ml-4 mt-2 mb-2 bg-white rounded-xl border-l-4 border-[#C8A96A] shadow-lg space-y-1 overflow-hidden animate-in fade-in slide-in-from-top duration-200">
                          {/* Header */}
                          <div className="bg-gradient-to-r from-[#0B1E36] to-[#173054] px-4 py-3 text-white">
                            <p className="text-sm font-bold flex items-center space-x-2">
                              <span className="text-lg">{item.icon}</span>
                              <span>{item.name}</span>
                            </p>
                          </div>

                          {/* View All */}
                          <Link
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-3 px-4 py-3 text-[#0B1E36] hover:bg-[#F5F1EA] text-sm font-bold bg-gradient-to-r from-[#F5F1EA] to-transparent transition-all border-b border-[#C8A96A]/20"
                          >
                            <span className="text-lg">{item.icon}</span>
                            <span>All {item.name}</span>
                            <span className="ml-auto text-[#C8A96A]">→</span>
                          </Link>

                          {/* Items */}
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-3 px-4 py-3 text-[#2B2B2B] hover:text-[#0B1E36] hover:bg-[#F5F1EA] text-sm font-semibold transition-all"
                            >
                              <span className="text-lg">{subItem.icon}</span>
                              <div>
                                <p>{subItem.name}</p>
                                <p className="text-xs text-[#C8A96A]">{subItem.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-bold text-sm transition-all border-2 ${
                        isActive(item.path)
                          ? 'bg-[#0B1E36] text-white shadow-lg border-[#C8A96A]'
                          : 'text-[#2B2B2B] hover:bg-white hover:shadow-sm hover:text-[#0B1E36] border-transparent hover:border-[#C8A96A]/30'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Contact Section */}
              <div className="mt-6 pt-4 border-t-2 border-[#C8A96A]/30 space-y-3">
                <a
                  href="tel:+971555124614"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-white px-4 py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href="mailto:info@zoyacurtains.ae"
                  className="flex items-center justify-center space-x-2 bg-white text-[#0B1E36] px-4 py-3 rounded-xl font-bold text-sm border-2 border-[#0B1E36] hover:bg-[#F5F1EA] transition-all"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://wa.me/971555124614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-[#25D366] text-white px-4 py-3 rounded-xl font-bold text-sm hover:bg-[#1f9e4f] transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;