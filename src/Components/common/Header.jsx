import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  Phone,
  Mail,
  Clock,
  Sparkles,
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`hidden xl:block w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-2xl shadow-[#0B1E36]/20 py-2' 
          : 'bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Top Info Bar */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Phone */}
            <a
              href="tel:+971555124614"
              className={`flex items-center space-x-2.5 transition-all duration-300 group ${
                isScrolled 
                  ? 'text-[#2B2B2B] hover:text-[#C8A96A]' 
                  : 'text-[#F5F1EA] hover:text-[#C8A96A]'
              }`}
            >
              <div className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'bg-[#F5F1EA] group-hover:bg-[#C8A96A]/20 text-[#2B2B2B] group-hover:text-[#C8A96A]' 
                  : 'bg-[#C8A96A]/20 group-hover:bg-[#C8A96A]/40 text-[#C8A96A]'
              }`}>
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm tracking-wide">+971 55 512 4614</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@zoyacurtains.ae"
              className={`flex items-center space-x-2.5 transition-all duration-300 group ${
                isScrolled 
                  ? 'text-[#2B2B2B] hover:text-[#C8A96A]' 
                  : 'text-[#F5F1EA] hover:text-[#C8A96A]'
              }`}
            >
              <div className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'bg-[#F5F1EA] group-hover:bg-[#C8A96A]/20 text-[#2B2B2B] group-hover:text-[#C8A96A]' 
                  : 'bg-[#C8A96A]/20 group-hover:bg-[#C8A96A]/40 text-[#C8A96A]'
              }`}>
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm tracking-wide">info@zoyacurtains.ae</span>
            </a>

            {/* Working Hours */}
            <div
              className={`flex items-center space-x-2.5 ${
                isScrolled 
                  ? 'text-[#2B2B2B]' 
                  : 'text-[#F5F1EA]'
              }`}
            >
              <div className={`p-2 rounded-lg transition-all ${
                isScrolled 
                  ? 'bg-[#F5F1EA] text-[#2B2B2B]' 
                  : 'bg-[#C8A96A]/20 text-[#C8A96A]'
              }`}>
                <Clock className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm tracking-wide">Daily: 9AM - 9PM</span>
            </div>

            {/* Special Offer Badge */}
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-full font-bold text-xs tracking-widest ${
              isScrolled
                ? 'bg-[#F5F1EA] text-[#C8A96A]'
                : 'bg-[#C8A96A]/20 text-[#C8A96A]'
            }`}>
              <Sparkles className="w-4 h-4" />
              <span>FREE DELIVERY</span>
            </div>
          </div>

          {/* Right Side - Social & CTA */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Social Media Links */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1D72YNPMjf/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  isScrolled 
                    ? 'text-[#2B2B2B] hover:text-white hover:bg-[#1877F2] bg-[#F5F1EA]' 
                    : 'text-[#F5F1EA] hover:text-white hover:bg-[#1877F2] bg-[#1877F2]/20'
                }`}
                title="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/zoyaafrin411?utm_source=qr&igsh=MWo4MjE5M3EzbWl6"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  isScrolled 
                    ? 'text-[#2B2B2B] hover:text-white hover:bg-gradient-to-br hover:from-[#F77737] hover:to-[#FD1D1D] bg-[#F5F1EA]' 
                    : 'text-[#F5F1EA] hover:text-white hover:bg-gradient-to-br hover:from-[#F77737] hover:to-[#FD1D1D] bg-[#F77737]/20'
                }`}
                title="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971555124614"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                  isScrolled 
                    ? 'text-[#2B2B2B] hover:text-white hover:bg-[#25D366] bg-[#F5F1EA]' 
                    : 'text-[#F5F1EA] hover:text-white hover:bg-[#25D366] bg-[#25D366]/20'
                }`}
                title="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>

            {/* Divider */}
            <div className={`hidden md:block h-8 w-px transition-all duration-300 ${
              isScrolled 
                ? 'bg-[#F5F1EA]/30' 
                : 'bg-[#C8A96A]/40'
            }`}></div>

            {/* Get Quote Button */}
            <Link
              to="/contact"
              className={`px-7 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center space-x-2 ${
                isScrolled
                  ? 'bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-white hover:from-[#B8955A] hover:to-[#A8854A] shadow-[#C8A96A]/30 hover:shadow-[#C8A96A]/50'
                  : 'bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-white hover:from-[#B8955A] hover:to-[#A8854A] shadow-lg shadow-[#C8A96A]/50 hover:shadow-[#C8A96A]/70'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              <span>Get Free Quote</span>
            </Link>
          </div>
        </div>

        {/* Mobile Contact Info */}
        <div className="lg:hidden mt-4 space-y-3 pb-2">
          {/* Contact Row */}
          <div className="flex items-center justify-between text-xs flex-wrap gap-3">
            <a
              href="tel:+971555124614"
              className={`flex items-center space-x-2 transition-all duration-300 ${
                isScrolled 
                  ? 'text-[#2B2B2B]' 
                  : 'text-[#F5F1EA]'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-bold">+971 55 512 4614</span>
            </a>

            <div className={`flex items-center space-x-2 transition-all duration-300 ${
              isScrolled 
                ? 'text-[#2B2B2B]' 
                : 'text-[#F5F1EA]'
            }`}>
              <Clock className="w-4 h-4" />
              <span className="font-bold">9AM - 9PM</span>
            </div>
          </div>

          {/* Mobile Social Icons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1D72YNPMjf/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg transition-all duration-300 transform active:scale-95 ${
                  isScrolled 
                    ? 'bg-[#1877F2]/20 text-[#1877F2] hover:bg-[#1877F2]/40' 
                    : 'bg-[#1877F2]/30 text-[#F5F1EA] hover:bg-[#1877F2]/50'
                }`}
              >
                <FaFacebookF className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/zoyaafrin411?utm_source=qr&igsh=MWo4MjE5M3EzbWl6"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg transition-all duration-300 transform active:scale-95 ${
                  isScrolled 
                    ? 'bg-gradient-to-br from-[#F77737]/20 to-[#FD1D1D]/20 text-[#F77737] hover:from-[#F77737]/40 hover:to-[#FD1D1D]/40' 
                    : 'bg-gradient-to-br from-[#F77737]/30 to-[#FD1D1D]/30 text-[#F5F1EA] hover:from-[#F77737]/50 hover:to-[#FD1D1D]/50'
                }`}
              >
                <FaInstagram className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971555124614"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-lg transition-all duration-300 transform active:scale-95 ${
                  isScrolled 
                    ? 'bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/40' 
                    : 'bg-[#25D366]/30 text-[#F5F1EA] hover:bg-[#25D366]/50'
                }`}
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile CTA */}
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-lg font-bold text-xs tracking-wide transition-all duration-300 shadow-lg transform active:scale-95 ${
                isScrolled
                  ? 'bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-white hover:from-[#B8955A] hover:to-[#A8854A]'
                  : 'bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-white hover:from-[#B8955A] hover:to-[#A8854A]'
              }`}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle animated gradient line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C8A96A]/0 via-[#C8A96A]/50 to-[#C8A96A]/0 ${
        isScrolled ? 'opacity-50' : 'opacity-100'
      }`}></div>
    </header>
  );
};

export default Header;