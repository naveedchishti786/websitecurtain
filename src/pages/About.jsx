import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Target, Eye, Heart, Users, Zap, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Zoya Premium - Curtains & Home Furnishing</title>
        <meta name="description" content="Learn about Zoya Premium Curtains & Home Furnishing - your trusted partner for quality curtains, furniture, mattresses, and home decor since 2019." />
        <meta name="keywords" content="about us, curtain company, furniture company, home furnishing, premium products" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F1EA]">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-lg">
              About Zoya Premium
            </h1>
            <p className="text-xl md:text-2xl text-[#F5F1EA] font-semibold drop-shadow-md">
              Your trusted partner in home furnishing since 2019
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-[#0B1E36] mb-6">Our Story</h2>
              <p className="text-[#173054] text-lg leading-relaxed font-semibold">
                Founded in 2019, Zoya Premium Curtains & Home Furnishing began with a simple yet powerful vision: to make premium, high-quality home furnishings accessible to everyone in the UAE.
              </p>
              <p className="text-[#173054] text-lg leading-relaxed font-semibold">
                What started as a small boutique shop has grown into a trusted name in the home furnishing industry, serving thousands of satisfied customers across Dubai, Abu Dhabi, and beyond.
              </p>
              <p className="text-[#173054] text-lg leading-relaxed font-semibold">
                Today, we pride ourselves on offering an extensive collection of premium curtains, furniture, mattresses, and home decor products, backed by excellent customer service and professional installation services.
              </p>
              <p className="text-[#173054] text-lg leading-relaxed font-semibold">
                Our commitment to quality, integrity, and customer satisfaction remains unchanged as we continue to grow and serve more families in making their homes beautiful.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#C8A96A]/20 to-[#F5F1EA] rounded-2xl p-12 flex items-center justify-center text-8xl shadow-xl border-4 border-[#C8A96A]/30">
              🏠
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="bg-[#F5F1EA] py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center text-[#0B1E36] mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Vision */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#C8A96A] transform hover:scale-105 transition-all duration-300 group">
                <Eye className="w-14 h-14 text-[#C8A96A] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black text-[#0B1E36] mb-4">Our Vision</h3>
                <p className="text-[#173054] leading-relaxed font-semibold">
                  To be the leading provider of premium home furnishings in the UAE, recognized for quality, innovation, and customer satisfaction.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#C8A96A] transform hover:scale-105 transition-all duration-300 group">
                <Target className="w-14 h-14 text-[#C8A96A] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black text-[#0B1E36] mb-4">Our Mission</h3>
                <p className="text-[#173054] leading-relaxed font-semibold">
                  To deliver exceptional products and services that exceed customer expectations, transforming houses into beautiful and comfortable homes.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#C8A96A] transform hover:scale-105 transition-all duration-300 group">
                <Heart className="w-14 h-14 text-[#C8A96A] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black text-[#0B1E36] mb-4">Our Values</h3>
                <p className="text-[#173054] leading-relaxed font-semibold">
                  Quality, Integrity, Innovation, Customer-Centric Approach, and Sustainability guide every decision we make.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-4xl md:text-5xl font-black text-center text-[#0B1E36] mb-16">What We Offer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Products */}
            <div className="bg-gradient-to-br from-[#F5F1EA] to-[#E8DFD5] rounded-2xl p-8 shadow-xl border-2 border-[#C8A96A]/30">
              <h3 className="text-2xl font-black text-[#0B1E36] mb-6 flex items-center space-x-3">
                <span className="text-4xl">📦</span>
                <span>Premium Products</span>
              </h3>
              <ul className="space-y-3">
                {[
                  'Blackout, Sheer & Premium Curtains',
                  'Living Room & Dining Furniture',
                  'Comfortable Beds & Bed Frames',
                  'Memory Foam & Orthopedic Mattresses',
                  'Sliding & Built-In Wardrobes',
                  'Kitchen & Bedroom Cupboards',
                  'Storage Cabinets & Solutions',
                  'Home Decor & Accessories'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-[#173054] group">
                    <span className="text-[#C8A96A] font-black text-xl">✓</span>
                    <span className="text-lg font-bold group-hover:text-[#0B1E36] transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="bg-gradient-to-br from-[#F5F1EA] to-[#E8DFD5] rounded-2xl p-8 shadow-xl border-2 border-[#C8A96A]/30">
              <h3 className="text-2xl font-black text-[#0B1E36] mb-6 flex items-center space-x-3">
                <span className="text-4xl">🔧</span>
                <span>Professional Services</span>
              </h3>
              <ul className="space-y-3">
                {[
                  'Free Delivery Across UAE',
                  'Professional Installation Service',
                  'Curtain Fitting & Hemming',
                  'Furniture Assembly & Setup',
                  'Design Consultation & Planning',
                  'Wardrobe & Cupboard Installation',
                  '24/7 Customer Support',
                  'Extended Warranty Options'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-[#173054] group">
                    <span className="text-[#C8A96A] font-black text-xl">✓</span>
                    <span className="text-lg font-bold group-hover:text-[#0B1E36] transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-[#F5F1EA] py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center text-[#0B1E36] mb-16">Why Choose Zoya Premium?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Award className="w-12 h-12" />,
                  title: 'Premium Quality',
                  description: 'All products undergo rigorous quality checks and testing'
                },
                {
                  icon: <Users className="w-12 h-12" />,
                  title: 'Expert Team',
                  description: 'Trained professionals for all services and consultations'
                },
                {
                  icon: <Heart className="w-12 h-12" />,
                  title: 'Customer First',
                  description: 'Your satisfaction is our top priority always'
                },
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: 'Fast Service',
                  description: 'Quick delivery and professional installation available'
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: 'Warranty Support',
                  description: '2-5 year warranty with free repairs included'
                },
                {
                  icon: <TrendingUp className="w-12 h-12" />,
                  title: 'Best Prices',
                  description: 'Competitive pricing without compromising quality'
                },
                {
                  icon: <Target className="w-12 h-12" />,
                  title: 'Customization',
                  description: 'Custom designs and tailored solutions available'
                },
                {
                  icon: <Eye className="w-12 h-12" />,
                  title: 'Transparency',
                  description: 'Honest pricing and clear communication always'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-[#C8A96A] hover:shadow-2xl transition-all duration-300 group">
                  <div className="text-[#C8A96A] mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-lg font-black text-[#0B1E36] mb-2">{item.title}</h3>
                  <p className="text-[#173054] text-sm font-semibold">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-4xl md:text-5xl font-black text-center text-[#0B1E36] mb-16">Meet Our Leadership</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ahmed Al Mansouri',
                role: 'Founder & CEO',
                emoji: '👨‍💼',
                description: 'Visionary leader with 15+ years in home furnishing industry'
              },
              {
                name: 'Fatima Al Zaabi',
                role: 'Product Manager',
                emoji: '👩‍💼',
                description: 'Expert in selecting premium products and quality assurance'
              },
              {
                name: 'Mohammed Al Kaabi',
                role: 'Customer Care Head',
                emoji: '👨‍💼',
                description: 'Dedicated to ensuring customer satisfaction and support'
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-[#C8A96A] transform hover:scale-105 transition-all duration-300 group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{member.emoji}</div>
                <h3 className="text-xl font-black text-[#0B1E36] mb-2">{member.name}</h3>
                <p className="text-[#C8A96A] font-black mb-3 text-sm tracking-wide uppercase">{member.role}</p>
                <p className="text-[#173054] font-semibold">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 drop-shadow-lg">Our Achievements</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { number: '5+', label: 'Years in Business', icon: '📅' },
                { number: '10K+', label: 'Happy Customers', icon: '😊' },
                { number: '1000+', label: 'Products Available', icon: '📦' },
                { number: '100%', label: 'Customer Satisfaction', icon: '⭐' },
                { number: '24/7', label: 'Customer Support', icon: '📞' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center group hover:translate-y-2 transition-all">
                  <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-black mb-2 text-[#D4AF37] drop-shadow-lg">{stat.number}</div>
                  <p className="text-[#F5F1EA] font-bold text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-4xl md:text-5xl font-black text-center text-[#0B1E36] mb-16">Our Commitment</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#F5F1EA] to-[#E8DFD5] rounded-2xl p-8 shadow-xl border-2 border-[#C8A96A]/30 group hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-black text-[#0B1E36] mb-4 flex items-center space-x-2">
                <span className="text-3xl">🌱</span>
                <span>Sustainability</span>
              </h3>
              <p className="text-[#173054] leading-relaxed font-semibold">
                We are committed to sustainable practices and eco-friendly products. We work with suppliers who share our values of environmental responsibility and ethical manufacturing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F5F1EA] to-[#E8DFD5] rounded-2xl p-8 shadow-xl border-2 border-[#C8A96A]/30 group hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-black text-[#0B1E36] mb-4 flex items-center space-x-2">
                <span className="text-3xl">💡</span>
                <span>Innovation</span>
              </h3>
              <p className="text-[#173054] leading-relaxed font-semibold">
                We continuously invest in new technologies and designs to bring the latest trends and innovations in home furnishing to our customers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F5F1EA] to-[#E8DFD5] rounded-2xl p-8 shadow-xl border-2 border-[#C8A96A]/30 group hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-black text-[#0B1E36] mb-4 flex items-center space-x-2">
                <span className="text-3xl">🤝</span>
                <span>Community</span>
              </h3>
              <p className="text-[#173054] leading-relaxed font-semibold">
                We believe in giving back to the community. We support local artisans and participate in various social initiatives to make a positive impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F5F1EA] to-[#E8DFD5] rounded-2xl p-8 shadow-xl border-2 border-[#C8A96A]/30 group hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-black text-[#0B1E36] mb-4 flex items-center space-x-2">
                <span className="text-3xl">👥</span>
                <span>Customer Care</span>
              </h3>
              <p className="text-[#173054] leading-relaxed font-semibold">
                Beyond products, we build relationships. Our after-sales service, maintenance support, and customer care are unmatched in the industry.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="bg-[#F5F1EA] py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-black text-center text-[#0B1E36] mb-16">We Serve All Emirates</h2>

            <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-[#C8A96A]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain', 'Al Ain'].map((city, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-[#F5F1EA] to-[#E8DFD5] rounded-xl p-4 text-center border-l-4 border-[#C8A96A] group hover:shadow-lg transition-all">
                    <p className="font-black text-[#0B1E36] text-lg">{city}</p>
                    <p className="text-sm text-[#C8A96A] font-bold">✓ Available</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-[#0B1E36] font-black text-lg">
                And expanding to cover more areas... Call us for your location!
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-[#0B1E36] to-[#173054] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 drop-shadow-lg">Join Our Happy Customers</h2>
            <p className="text-lg md:text-xl mb-10 text-[#F5F1EA] font-semibold drop-shadow-md">
              Experience the Zoya Premium difference in quality, service, and customer care
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/collections" className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#C8A96A] text-[#0B1E36] px-8 py-4 rounded-xl font-black hover:from-[#C8A96A] hover:to-[#B8955A] transition-all shadow-2xl transform hover:scale-105 text-lg uppercase tracking-wide">
                Shop Now
              </a>
              <a href="tel:+971555124614" className="inline-block bg-[#C8A96A] hover:bg-[#B8955A] text-white px-8 py-4 rounded-xl font-black transition-all shadow-2xl transform hover:scale-105 text-lg uppercase tracking-wide">
                📞 Call Us Today
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;