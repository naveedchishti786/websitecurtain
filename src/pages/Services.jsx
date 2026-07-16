import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, CheckCircle, Truck, Wrench, RotateCcw, Shield, Users, Zap } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: '🚚',
      title: 'Free Delivery',
      shortDescription: 'Fast and reliable delivery across UAE',
      description: 'We provide complimentary delivery service for all orders across the UAE. Our professional delivery team ensures your furniture and home furnishings arrive safely and on time.',
      features: [
        'Same-day delivery available',
        'Free shipping nationwide',
        'Real-time tracking',
        'Safe handling guaranteed',
        'Scheduled delivery slots',
        'White-glove service'
      ],
      icon_component: <Truck className="w-16 h-16" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: '🔧',
      title: 'Professional Installation',
      shortDescription: 'Expert assembly and fitting services',
      description: 'Our certified technicians provide professional installation services for all furniture and furnishings. We ensure perfect fitting and assembly with minimal disruption to your home.',
      features: [
        'Expert installation team',
        'Curtain fitting and hemming',
        'Furniture assembly service',
        'Wardrobe and cupboard setup',
        'Wall mounting services',
        'Quality workmanship guaranteed'
      ],
      icon_component: <Wrench className="w-16 h-16" />,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 3,
      icon: '🎯',
      title: 'Custom Design Consultation',
      shortDescription: 'Personalized design for your space',
      description: 'Get professional design advice from our interior experts. We help you choose the perfect products that match your style, space, and budget.',
      features: [
        'Free design consultation',
        'Personalized recommendations',
        'Space planning assistance',
        'Color and style matching',
        'Budget-friendly solutions',
        'Professional designers'
      ],
      icon_component: <Zap className="w-16 h-16" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      icon: '🛡️',
      title: '2-Year Warranty & Support',
      shortDescription: 'Comprehensive warranty coverage',
      description: 'All our products come with comprehensive warranty coverage. We provide free repairs and replacements for manufacturing defects within the warranty period.',
      features: [
        '2-Year comprehensive warranty',
        'Free repairs within warranty',
        'Replacement options available',
        'Quality assurance team',
        'Hassle-free claims process',
        'Extended warranty options'
      ],
      icon_component: <Shield className="w-16 h-16" />,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 5,
      icon: '↩️',
      title: 'Easy Returns & Exchange',
      shortDescription: '30-day hassle-free returns',
      description: 'Not satisfied with your purchase? We offer 30-day hassle-free returns and exchanges. No questions asked, full refund or exchange available.',
      features: [
        '30-day return policy',
        'Free return pickup',
        'Easy exchange process',
        'Full refund guarantee',
        'No restocking fees',
        'Quick processing'
      ],
      icon_component: <RotateCcw className="w-16 h-16" />,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 6,
      icon: '👥',
      title: '24/7 Customer Support',
      shortDescription: 'Always here to help you',
      description: 'Our dedicated customer support team is available round the clock to assist with inquiries, complaints, and after-sales service.',
      features: [
        '24/7 customer service',
        'Phone support available',
        'Email assistance',
        'Live chat support',
        'Multilingual support',
        'Quick response time'
      ],
      icon_component: <Users className="w-16 h-16" />,
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const additionalServices = [
    {
      title: 'Curtain Hemming & Alteration',
      description: 'Professional curtain hemming, length adjustment, and custom tailoring services'
    },
    {
      title: 'Furniture Rearrangement',
      description: 'Help with rearranging furniture for optimal space utilization'
    },
    {
      title: 'Interior Styling',
      description: 'Expert advice on interior styling and decoration coordination'
    },
    {
      title: 'Mattress Inspection',
      description: 'Professional mattress inspection and comfort evaluation service'
    },
    {
      title: 'Wardrobe Organization',
      description: 'Systematic organization of wardrobes and storage spaces'
    },
    {
      title: 'Maintenance Guide',
      description: 'Complete care and maintenance guide for all products'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Services - Zoya Premium Curtains & Furnishing</title>
        <meta name="description" content="Explore our comprehensive services including free delivery, professional installation, design consultation, warranty support, and 24/7 customer service." />
        <meta name="keywords" content="furniture delivery, installation service, design consultation, warranty, customer support, curtain fitting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Professional Services
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Quality services to make your home beautiful and comfortable
            </p>
            <p className="text-amber-300 font-semibold">✓ Free Delivery | ✓ Expert Installation | ✓ 24/7 Support | ✓ Quality Guaranteed</p>
          </div>
        </div>

        {/* Main Services Grid */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                  <div className="flex justify-center mb-4">
                    {service.icon_component}
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.shortDescription}</p>

                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2.5 rounded-lg font-bold transition-all">
                    Learn More
                  </button>

                  {selectedService === service.id && (
                    <div className="mt-6 pt-6 border-t space-y-3 animate-fadeIn">
                      <p className="text-gray-700 text-sm">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg font-bold transition-all">
                        Book This Service
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Process Section */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">How Our Services Work</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Contact Us', description: 'Call or message us to schedule your service' },
                { step: '2', title: 'Consultation', description: 'Our experts discuss your needs and requirements' },
                { step: '3', title: 'Delivery/Installation', description: 'Professional team handles delivery and setup' },
                { step: '4', title: 'Support', description: 'We provide ongoing support and maintenance' }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Additional Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Services?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '✓', title: 'Professional Team', desc: 'Certified and experienced professionals' },
                { icon: '✓', title: 'Quality Assured', desc: 'Highest standards of service quality' },
                { icon: '✓', title: 'Affordable Pricing', desc: 'Competitive rates without compromise' },
                { icon: '✓', title: 'Timely Service', desc: 'Always on time, every time' }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-amber-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Coverage Area */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Service Coverage Area</h2>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-12 text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-amber-400" />
            <h3 className="text-2xl font-bold mb-4">We Deliver & Service Across UAE</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              From Abu Dhabi to Ras Al Khaimah, we provide comprehensive delivery and installation services throughout the United Arab Emirates.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain', 'Al Ain'].map((city, idx) => (
                <div key={idx} className="bg-white/10 rounded-lg p-3">
                  <p className="font-semibold">{city}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact for Services */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Get Our Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Phone className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Available 24/7 for service inquiries</p>
              <a href="tel:+971555124614" className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg font-bold transition-all">
                +971 55 512 4614
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Mail className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send your service request details</p>
              <a href="mailto:info@zoyacurtains.ae" className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg font-bold transition-all">
                info@zoyacurtains.ae
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Clock className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
              <p className="text-gray-600 mb-4">Visit us anytime that suits you</p>
              <p className="font-semibold text-gray-900">
                Daily: 9AM - 9PM
              </p>
            </div>
          </div>
        </section>

        {/* Service Pricing Guide */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Service Pricing Guide</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { service: 'Free Delivery', price: 'FREE', description: 'All orders across UAE' },
                { service: 'Installation (Curtains)', price: 'AED 200+', description: 'Professional hanging and fitting' },
                { service: 'Furniture Assembly', price: 'AED 300+', description: 'Complete assembly service' },
                { service: 'Design Consultation', price: 'FREE', description: 'Expert design advice' },
                { service: 'Curtain Hemming', price: 'AED 150+', description: 'Professional alteration' },
                { service: 'Wardrobe Setup', price: 'AED 500+', description: 'Complete installation' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.service}</h3>
                  <p className="text-3xl font-bold text-amber-600 mb-2">{item.price}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <p className="text-gray-700 font-semibold">
                💡 <strong>Note:</strong> Prices are indicative. For exact quotes, please contact our team.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: 'Is delivery really free?',
                a: 'Yes! We offer completely free delivery on all orders across the UAE. No hidden charges.'
              },
              {
                q: 'How long does installation take?',
                a: 'Installation time varies based on the complexity of the project. Most installations are completed within 1-2 hours.'
              },
              {
                q: 'Can I schedule installation on weekends?',
                a: 'Absolutely! We offer weekend and evening slots to suit your convenience.'
              },
              {
                q: 'What if I need to return after installation?',
                a: 'We offer 30-day hassle-free returns even after installation. Our team will handle removal at no extra cost.'
              },
              {
                q: 'Do you provide warranty service?',
                a: 'Yes! All products come with 2-5 year warranty. We provide free repairs and replacements within the warranty period.'
              },
              {
                q: 'Can you help with interior design?',
                a: 'Of course! Our design experts provide free consultation to help you choose the perfect products for your space.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-500">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Q: {item.q}</h3>
                <p className="text-gray-700">A: {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Our Services?</h2>
            <p className="text-lg mb-8 text-amber-100">Get in touch with our team today for a free consultation</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+971555124614" className="inline-block bg-white text-amber-600 px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg">
                📞 Call Now
              </a>
              <a href="mailto:info@zoyacurtains.ae" className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-8 py-3.5 rounded-lg font-bold transition-all shadow-lg">
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;