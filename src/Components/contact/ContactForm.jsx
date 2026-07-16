import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600">
                We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a service</option>
                  <option value="curtains">Curtains & Fitting</option>
                  <option value="furniture">Furniture</option>
                  <option value="mattress">Mattress & Bedding</option>
                  <option value="consultation">Free Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary text-lg py-4">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">info@premiumcurtains.com</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-bold text-gray-800 mb-2">Address</h3>
            <p className="text-gray-600">123 Main Street, City</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;