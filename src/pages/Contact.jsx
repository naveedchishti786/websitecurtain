import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2, MessageCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields (Name, Email, Message)');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@zoyapremiumcurtains.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: formData.subject.trim() 
            ? `New Website Inquiry: ${formData.subject.trim()} (from ${formData.name.trim()})`
            : `New Website Inquiry from ${formData.name.trim()}`,
          _template: 'table',
          _captcha: 'false',
          'Customer Name': formData.name.trim(),
          'Email Address': formData.email.trim(),
          'Phone Number': formData.phone.trim() || 'Not provided',
          'Subject': formData.subject.trim() || 'General Customer Inquiry',
          'Message': formData.message.trim(),
          _replyto: formData.email.trim()
        })
      });

      const result = await response.json().catch(() => ({ success: true }));

      if (response.ok || result.success === "true" || result.success === true) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError(
        'Unable to send message automatically. Please email us directly at info@zoyapremiumcurtains.com or contact our team on WhatsApp (+971 55 512 4614).'
      );
    } finally {
      setIsSubmitting(false);
    }
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
      content: 'info@zoyapremiumcurtains.com',
      link: 'mailto:info@zoyapremiumcurtains.com'
    },
    {
      icon: MapPin,
      title: 'Showroom Location',
      content: 'ZOYA AFRIN CURTAIN FABRICS TRADING LLC, Al Shuwaiheen, Sharjah, UAE',
      link: 'https://maps.app.goo.gl/py66qExCXesdHqXt8?g_st=awb'
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
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
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

          {/* Email Destination Pill */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#F5F1EA] border border-[#C8A96A]/40 rounded-full text-xs sm:text-sm font-bold text-[#0B1E36]">
              <Mail className="w-4 h-4 text-[#C8A96A]" />
              <span>Inquiries delivered directly to: <strong className="text-[#C8A96A] font-black underline">info@zoyapremiumcurtains.com</strong></span>
            </div>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mb-8 p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-3xl shadow-xl animate-in fade-in duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-md">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-green-950 text-xl mb-1">Message Sent to info@zoyapremiumcurtains.com!</h4>
                  <p className="text-green-800 text-sm font-medium leading-relaxed mb-4">
                    Thank you for contacting Zoya Premium Curtain. Our management team has received your message and will review and reply to your email address shortly.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/971555124614?text=${encodeURIComponent('Hi Zoya! I just submitted an inquiry form on your website regarding curtains/furniture.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp for Faster Reply</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 bg-white border border-green-300 text-green-800 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-green-100 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-8 p-6 bg-red-50 border-2 border-red-200 rounded-2xl flex items-start space-x-4 animate-in fade-in duration-300">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-black text-red-900 mb-1">Notice</h4>
                <p className="text-red-700 text-sm font-medium">{error}</p>
                <div className="mt-3 flex gap-3">
                  <a
                    href="mailto:info@zoyapremiumcurtains.com"
                    className="text-xs font-bold text-[#0B1E36] underline hover:text-[#C8A96A]"
                  >
                    ✉️ Open Email App
                  </a>
                  <a
                    href="https://wa.me/971555124614"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#25D366] underline hover:text-[#128C7E]"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>
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
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-[#0B1E36] text-white font-black rounded-xl hover:bg-[#C8A96A] hover:text-[#0B1E36] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center space-x-2 group uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-[#C8A96A]" />
                  <span>Sending to info@zoyapremiumcurtains.com...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Send Message to info@zoyapremiumcurtains.com</span>
                </>
              )}
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
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <div>
              <span className="text-xs font-bold text-[#C8A96A] uppercase tracking-wider block">Visit Our Showroom</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B1E36]">
                ZOYA AFRIN CURTAIN FABRICS TRADING LLC
              </h2>
              <p className="text-sm text-[#666666] font-medium mt-1">
                Al Shuwaiheen - Hay Al Gharb - Sharjah, United Arab Emirates
              </p>
            </div>
            <a
              href="https://maps.app.goo.gl/py66qExCXesdHqXt8?g_st=awb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-white font-black text-sm rounded-xl hover:from-[#B8955A] hover:to-[#A8854A] transition-all transform hover:scale-105 shadow-lg uppercase tracking-wide flex-shrink-0"
            >
              <MapPin className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border-2 border-[#E8E2D8] shadow-2xl">
            <iframe
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              src="https://maps.google.com/maps?q=ZOYA+AFRIN+CURTAIN+FABRICS+TRADING+LLC+-+Al+Shuwaiheen+-+Hay+Al+Gharb+-+Sharjah&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
