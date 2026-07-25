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
      className={`w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-2xl shadow-[#0B1E36]/20 py-2' 
          : 'bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden xl:flex justify-between items-center">
          {/* Top Info Bar */}
          <div className="hidden xl:flex items-center space-x-4 lg:space-x-6">
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
              <span className="font-bold text-xs xl:text-sm tracking-wide whitespace-nowrap">+971 55 512 4614</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@zoyapremiumcurtains.com"
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
              <span className="font-bold text-xs xl:text-sm tracking-wide whitespace-nowrap">info@zoyapremiumcurtains.com</span>
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
              <span className="font-bold text-xs xl:text-sm tracking-wide whitespace-nowrap">Daily: 9AM - 9PM</span>
            </div>

            {/* Special Offer Badge */}
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-full font-bold text-[10px] xl:text-xs tracking-widest whitespace-nowrap ${
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
              className={`px-5 xl:px-7 py-2.5 rounded-xl font-bold text-xs xl:text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center space-x-2 whitespace-nowrap ${
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

        {/* Mobile Contact Info (Professional & Responsive) */}
        <div className="xl:hidden flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-2">
          {/* Phone */}
          <a
            href="tel:+971555124614"
            className={`flex items-center space-x-1.5 transition-all duration-300 whitespace-nowrap ${
              isScrolled ? 'text-[#2B2B2B]' : 'text-[#F5F1EA]'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-[#C8A96A]" />
            <span className="font-bold text-[12px] tracking-wide">+971 55 512 4614</span>
          </a>

          {/* Time */}
          <div
            className={`flex items-center space-x-1.5 transition-all duration-300 whitespace-nowrap ${
              isScrolled ? 'text-[#2B2B2B]' : 'text-[#F5F1EA]'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-[#C8A96A]" />
            <span className="font-bold text-[12px] tracking-wide">9 AM - 9 PM</span>
          </div>

          {/* Socials Minimal */}
          <div className="flex items-center space-x-3">
            <a
              href="https://wa.me/971555124614"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:scale-110 transition-transform"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/zoyaafrin411?utm_source=qr&igsh=MWo4MjE5M3EzbWl6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] hover:scale-110 transition-transform"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
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
