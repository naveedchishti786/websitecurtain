import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+971 55 512 4614',
      link: 'tel:+971555124614'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@zoyacurtains.ae',
      link: 'mailto:info@zoyacurtains.ae'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Dubai, UAE',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Daily: 9AM - 9PM',
      link: '#'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Zoya Premium Curtain</title>
        <meta name="description" content="Get in touch with Zoya Premium for premium curtains, furniture, and home furnishing needs. Free consultation available." />
        <meta property="og:title" content="Contact Us - Zoya Premium Curtain" />
        <meta property="og:description" content="Contact Zoya Premium for premium home furnishing solutions" />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] text-white py-20 md:py-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          {/* Breadcrumb */}
          <div className="inline-flex items-center space-x-2 mb-6 bg-[#C8A96A]/20 px-6 py-3 rounded-full border border-[#C8A96A]/40">
            <span className="text-[#F5F1EA] text-sm font-semibold">Home</span>
            <span className="text-[#C8A96A]">/</span>
            <span className="text-[#C8A96A] text-sm font-bold">Contact Us</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Get In Touch
          </h1>

          <p className="text-xl md:text-2xl text-[#F5F1EA] max-w-3xl mx-auto font-medium">
            Have questions about our premium curtains, furniture, or home furnishing solutions? 
            We're here to help and provide personalized service for all your needs.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              { number: '24/7', label: 'Support' },
              { number: '500+', label: 'Products' },
              { number: '5000+', label: 'Happy Clients' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-black text-[#C8A96A] mb-2">{stat.number}</p>
                <p className="text-[#F5F1EA] font-semibold text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT INFORMATION SECTION ===== */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C8A96A] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#222222] mb-6">
              Contact Information
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto font-medium">
              Reach out to us through any of these channels. We're always ready to help!
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <a
                  key={idx}
                  href={info.link}
                  className="group h-full"
                >
                  <div className="bg-[#F5F1EA] rounded-2xl p-8 text-center h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-[#E8E2D8] hover:border-[#C8A96A]">
                    {/* Icon Container */}
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C8A96A] transition-all duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-[#C8A96A] group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-[#222222] mb-2 group-hover:text-[#0B1E36] transition-colors">
                      {info.title}
                    </h3>

                    {/* Content */}
                    <p className="text-[#666666] font-semibold group-hover:text-[#C8A96A] transition-colors duration-300">
                      {info.content}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-[#F5F1EA]/80 to-[#F5F1EA]/40 rounded-2xl p-8 border-2 border-[#E8E2D8]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-black text-[#222222] mb-2">Response Time</h4>
                <p className="text-[#666666] font-semibold">We typically respond within 2 hours during business hours</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-black text-[#222222] mb-2">Free Consultation</h4>
                <p className="text-[#666666] font-semibold">Get expert advice and quotes completely free</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-black text-[#222222] mb-2">Professional Service</h4>
                <p className="text-[#666666] font-semibold">Expert team with 15+ years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#0B1E36] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#222222] mb-4">
              Send us a Message
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto font-medium">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center space-x-4 animate-in fade-in duration-300">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <h4 className="font-black text-green-900 mb-1">Message Sent Successfully!</h4>
                <p className="text-green-700 text-sm">Thank you for contacting us. We'll be in touch shortly.</p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-2xl flex items-center space-x-4 animate-in fade-in duration-300">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div>
                <h4 className="font-black text-red-900 mb-1">Validation Error</h4>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="block text-sm font-black text-[#222222] uppercase tracking-wider">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-6 py-3 bg-[#F8F8F8] border-2 border-[#E5E5E5] rounded-xl focus:border-[#0B1E36] focus:outline-none transition-all duration-300 text-[#222222] font-semibold placeholder-[#999999]"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-sm font-black text-[#222222] uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-6 py-3 bg-[#F8F8F8] border-2 border-[#E5E5E5] rounded-xl focus:border-[#0B1E36] focus:outline-none transition-all duration-300 text-[#222222] font-semibold placeholder-[#999999]"
                />
              </div>
            </div>

            {/* Phone and Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Input */}
              <div className="space-y-2">
                <label className="block text-sm font-black text-[#222222] uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971 55 123 4567"
                  className="w-full px-6 py-3 bg-[#F8F8F8] border-2 border-[#E5E5E5] rounded-xl focus:border-[#0B1E36] focus:outline-none transition-all duration-300 text-[#222222] font-semibold placeholder-[#999999]"
                />
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label className="block text-sm font-black text-[#222222] uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Curtain Inquiry"
                  className="w-full px-6 py-3 bg-[#F8F8F8] border-2 border-[#E5E5E5] rounded-xl focus:border-[#0B1E36] focus:outline-none transition-all duration-300 text-[#222222] font-semibold placeholder-[#999999]"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label className="block text-sm font-black text-[#222222] uppercase tracking-wider">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements, preferences, and any specific details you'd like us to know..."
                rows="6"
                className="w-full px-6 py-4 bg-[#F8F8F8] border-2 border-[#E5E5E5] rounded-xl focus:border-[#0B1E36] focus:outline-none transition-all duration-300 text-[#222222] font-semibold placeholder-[#999999] resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#0B1E36] text-white font-black rounded-xl hover:bg-[#C8A96A] hover:text-[#0B1E36] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 group uppercase tracking-wider"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>Send Message</span>
            </button>

            {/* Form Note */}
            <p className="text-center text-sm text-[#666666] font-semibold">
              * Required fields. We respect your privacy and will never spam you.
            </p>
          </form>
        </div>
      </section>

      {/* ===== MAP SECTION ===== */}
      <section className="py-12 bg-[#F5F1EA] relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl overflow-hidden border-2 border-[#E8E2D8] shadow-2xl">
            <iframe
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.5893370944557!2d55.27082!3d25.19594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6e1a0000001%3A0x1234567890!2sDubai%2C%20UAE!5e0!3m2!1sen!2sae!4v1234567890"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Transform Your Home?
          </h2>

          <p className="text-xl text-[#F5F1EA] mb-10 max-w-2xl mx-auto font-semibold leading-relaxed">
            Our expert team is ready to help you find the perfect curtains, furniture, and furnishing solutions for your space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+971555124614"
              className="px-8 py-4 bg-[#C8A96A] text-[#0B1E36] font-black rounded-xl hover:bg-[#B8955A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 uppercase tracking-wider flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call: +971 55 512 4614</span>
            </a>
            <a
              href="https://wa.me/971555124614"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#C8A96A] text-[#C8A96A] font-black rounded-xl hover:bg-[#C8A96A] hover:text-[#0B1E36] transition-all duration-300 uppercase tracking-wider flex items-center space-x-2"
            >
              <span>💬</span>
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-[#C8A96A]/40 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '📋', title: 'Free Consultation', desc: 'Expert advice at no cost' },
              { icon: '🎨', title: 'Custom Designs', desc: 'Tailored solutions for your space' },
              { icon: '⚡', title: 'Fast Installation', desc: 'Professional setup within days' }
            ].map((item, idx) => (
              <div key={idx} className="text-center group hover:translate-y-2 transition-all duration-300">
                <p className="text-4xl mb-2">{item.icon}</p>
                <h4 className="text-[#C8A96A] font-black mb-1 uppercase tracking-wider text-sm">{item.title}</h4>
                <p className="text-[#F5F1EA] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;