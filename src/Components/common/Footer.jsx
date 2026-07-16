import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#0B1E36] to-[#162D28] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12 flex items-center justify-center bg-[#0B1E36] rounded-xl shadow-lg border border-[#C8A96A]/20">
                <img src="/logo.svg" alt="Zoya Premium Curtain Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">
                  ZOYA
                </h3>
                <p className="text-xs font-bold text-[#C8A96A] tracking-widest">Premium Curtain</p>
              </div>
            </div>
            
            <p className="text-[#E8E2D8] leading-relaxed font-medium">
              Your trusted source for premium curtains, furniture, and home furnishings. Transform your home with elegance and quality.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3 pt-4">
              <a 
                href="https://www.facebook.com/share/1D72YNPMjf/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#C8A96A]/20 hover:bg-[#C8A96A] text-[#C8A96A] hover:text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/zoyaafrin411?utm_source=qr&igsh=MWo4MjE5M3EzbWl6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#C8A96A]/20 hover:bg-[#C8A96A] text-[#C8A96A] hover:text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/971555124614" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#C8A96A]/20 hover:bg-[#C8A96A] text-[#C8A96A] hover:text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-black text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-1 h-6 bg-[#C8A96A] rounded-full"></span>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  to="/" 
                  className="text-[#E8E2D8] hover:text-[#C8A96A] transition-colors duration-300 font-semibold flex items-center space-x-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#C8A96A] group-hover:w-4 transition-all duration-300"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/collections" 
                  className="text-[#E8E2D8] hover:text-[#C8A96A] transition-colors duration-300 font-semibold flex items-center space-x-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#C8A96A] group-hover:w-4 transition-all duration-300"></span>
                  <span>Collections</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-[#E8E2D8] hover:text-[#C8A96A] transition-colors duration-300 font-semibold flex items-center space-x-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#C8A96A] group-hover:w-4 transition-all duration-300"></span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className="text-[#E8E2D8] hover:text-[#C8A96A] transition-colors duration-300 font-semibold flex items-center space-x-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#C8A96A] group-hover:w-4 transition-all duration-300"></span>
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-[#E8E2D8] hover:text-[#C8A96A] transition-colors duration-300 font-semibold flex items-center space-x-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#C8A96A] group-hover:w-4 transition-all duration-300"></span>
                  <span>About Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-black text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-1 h-6 bg-[#C8A96A] rounded-full"></span>
              <span>Products</span>
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link 
                  to="/curtains" 
                  className="text-[#E8E2D8] hover:text-[#C8A96A] transition-colors duration-300 font-semibold flex items-center space-x-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#C8A96A] group-hover:w-4 transition-all duration-300"></span>
                  <span>Curtains</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/furniture" 
                  className="text-[#E8E2D8] hover:text-[#C8A96A] transition-colors duration-300 font-semibold flex items-center space-x-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#C8A96A] group-hover:w-4 transition-all duration-300"></span>
                  <span>Furniture</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/beds" 
                  className="text-[#E8E2D8] hover:text-[#C8A96A] transition-colors duration-300 font-semibold flex items-center space-x-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#C8A96A] group-hover:w-4 transition-all duration-300"></span>
                  <span>Beds</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/carpets" 
                  className="text-[#E8E2D8] hover:text-[#C8A96A] transition-colors duration-300 font-semibold flex items-center space-x-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#C8A96A] group-hover:w-4 transition-all duration-300"></span>
                  <span>Carpets & Rugs</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/storage" 
                  className="text-[#E8E2D8] hover:text-[#C8A96A] transition-colors duration-300 font-semibold flex items-center space-x-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#C8A96A] group-hover:w-4 transition-all duration-300"></span>
                  <span>Storage</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/mattress" 
                  className="text-[#E8E2D8] hover:text-[#C8A96A] transition-colors duration-300 font-semibold flex items-center space-x-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#C8A96A] group-hover:w-4 transition-all duration-300"></span>
                  <span>Mattress</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-black text-white uppercase tracking-wider flex items-center space-x-2">
              <span className="w-1 h-6 bg-[#C8A96A] rounded-full"></span>
              <span>Contact</span>
            </h4>
            <div className="space-y-3">
              <a 
                href="tel:+971555124614" 
                className="flex items-start space-x-3 group hover:translate-x-1 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#C8A96A]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A96A] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#C8A96A] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#C8A96A] uppercase tracking-wider">Phone</p>
                  <p className="text-[#E8E2D8] font-semibold">+971 55 512 4614</p>
                </div>
              </a>

              <a 
                href="mailto:info@zoyacurtains.ae" 
                className="flex items-start space-x-3 group hover:translate-x-1 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#C8A96A]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8A96A] transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#C8A96A] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#C8A96A] uppercase tracking-wider">Email</p>
                  <p className="text-[#E8E2D8] font-semibold">info@zoyacurtains.ae</p>
                </div>
              </a>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#C8A96A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#C8A96A]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#C8A96A] uppercase tracking-wider">Hours</p>
                  <p className="text-[#E8E2D8] font-semibold">Daily: 9AM - 9PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#C8A96A]/20 my-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Services Info */}
          <div className="text-center md:text-left space-y-2">
            <h5 className="text-sm font-black text-[#C8A96A] uppercase tracking-widest">Free Services</h5>
            <p className="text-[#E8E2D8] text-sm">✓ Measurement & Consultation</p>
            <p className="text-[#E8E2D8] text-sm">✓ Professional Installation</p>
            <p className="text-[#E8E2D8] text-sm">✓ 5-Year Warranty</p>
          </div>

          {/* Warranty Info */}
          <div className="text-center space-y-2">
            <h5 className="text-sm font-black text-[#C8A96A] uppercase tracking-widest">Warranty</h5>
            <p className="text-[#E8E2D8] text-sm">All products come with</p>
            <p className="text-[#C8A96A] text-lg font-black">5-YEAR WARRANTY</p>
          </div>

          {/* Delivery Info */}
          <div className="text-center md:text-right space-y-2">
            <h5 className="text-sm font-black text-[#C8A96A] uppercase tracking-widest">Delivery</h5>
            <p className="text-[#E8E2D8] text-sm">Free Delivery</p>
            <p className="text-[#E8E2D8] text-sm">All UAE Emirates</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#C8A96A]/20 my-8"></div>

        {/* Copyright Section */}
        <div className="text-center space-y-4">
          <p className="text-[#E8E2D8] text-sm font-semibold flex items-center justify-center space-x-2">
            <span>&copy; {currentYear} Zoya Premium Curtain. All rights reserved.</span>
          </p>
          
          <div className="flex justify-center items-center space-x-1 text-sm text-[#E8E2D8]">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#C8A96A] fill-current" />
            <span>for your home</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/privacy" className="text-[#E8E2D8] hover:text-[#C8A96A] transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="text-[#C8A96A]/50">•</span>
            <Link to="/terms" className="text-[#E8E2D8] hover:text-[#C8A96A] transition-colors duration-300">
              Terms & Conditions
            </Link>
            <span className="text-[#C8A96A]/50">•</span>
            <Link to="/contact" className="text-[#E8E2D8] hover:text-[#C8A96A] transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;