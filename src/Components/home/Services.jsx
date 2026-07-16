import React from 'react';
import { services } from '../../data/products';
import { Sparkles, ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-[#F5F1EA]/30 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C8A96A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0B1E36] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#F5F1EA] px-6 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-[#C8A96A]" />
            <span className="text-sm font-bold text-[#0B1E36] uppercase tracking-wider">
              Professional Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#222222] mb-6 leading-tight">
            Our Premium
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C8A96A] to-[#B8955A]">
              Services
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
            Professional services to make your home beautiful and comfortable with expert installation and maintenance
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white border-2 border-[#E8E2D8] p-8 rounded-2xl hover:border-[#C8A96A] hover:bg-[#F5F1EA] hover:shadow-2xl hover:shadow-[#C8A96A]/10 transition-all duration-500 text-center relative overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#C8A96A]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-[#C8A96A]/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative text-7xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-black text-[#222222] mb-4 group-hover:text-[#0B1E36] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#666666] mb-6 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6 text-left">
                {service.features.map((feature, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start space-x-3 text-sm text-[#222222] group-hover:translate-x-1 transition-transform duration-300"
                    style={{
                      transitionDelay: `${idx * 50}ms`
                    }}
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#C8A96A] to-[#B8955A] flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="flex-1 font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-[#0B1E36] to-[#173054] text-white py-3 px-6 rounded-xl font-bold text-sm hover:from-[#173054] hover:to-[#0B1E36] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#0B1E36]/30 flex items-center justify-center space-x-2 group/btn">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              {/* Hover Glow Effect */}
              <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-tl from-[#C8A96A]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] rounded-2xl p-10 relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <pattern id="service-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="#C8A96A" />
              </pattern>
              <rect width="100" height="100" fill="url(#service-pattern)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Need a Custom Service?
            </h3>
            <p className="text-[#F5F1EA] mb-8 max-w-2xl mx-auto">
              We offer tailored solutions for all your home furnishing needs. Contact us for a free consultation!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-[#222222] px-8 py-4 rounded-xl font-bold hover:from-[#B8955A] hover:to-[#A8854A] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#C8A96A]/30 flex items-center space-x-2 group"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+971555124614"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold border-2 border-white/30 hover:bg-white/20 hover:border-[#C8A96A] transition-all duration-300 flex items-center space-x-2"
              >
                <span>📞</span>
                <span>Call: +971 55 512 4614</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;