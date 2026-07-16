import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Server } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zoya Premium Curtain</title>
        <meta name="description" content="Read our privacy policy to understand how Zoya Premium Curtain protects and handles your personal information." />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 mb-6 bg-[#C8A96A]/20 px-6 py-3 rounded-full border border-[#C8A96A]/40">
            <Shield className="w-5 h-5 text-[#C8A96A]" />
            <span className="text-[#C8A96A] text-sm font-bold uppercase tracking-wider">Legal Information</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Privacy Policy
          </h1>

          <p className="text-xl text-[#F5F1EA] font-medium">
            Your privacy is critically important to us. Learn how we collect, use, and protect your data.
          </p>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="prose prose-lg max-w-none prose-headings:text-[#0B1E36] prose-a:text-[#C8A96A] hover:prose-a:text-[#0B1E36]">
            
            <p className="text-gray-600 font-medium mb-8">
              <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
            </p>

            <div className="bg-[#F5F1EA] rounded-2xl p-8 mb-10 border border-[#E8E2D8]">
              <h2 className="text-2xl font-black text-[#0B1E36] mb-4 flex items-center space-x-3">
                <Lock className="w-6 h-6 text-[#C8A96A]" />
                <span>1. Information We Collect</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Zoya Premium Curtain, we collect information to provide better services to all our users. The types of personal information we collect include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Contact information (such as name, email address, phone number, and physical address).</li>
                <li>Details of your home furnishing inquiries and preferences.</li>
                <li>Measurement details and room dimensions shared during consultation.</li>
                <li>Billing and payment information for completed purchases.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-black text-[#0B1E36] mb-4 flex items-center space-x-3">
                <Eye className="w-6 h-6 text-[#C8A96A]" />
                <span>2. How We Use Your Information</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information we collect is used in the following ways:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>To provide, operate, and maintain our website and services.</li>
                <li>To fulfill requests for home measurements, installations, and product deliveries.</li>
                <li>To communicate with you regarding your orders, appointments, or customer service inquiries.</li>
                <li>To improve our website layout, offerings, and user experience.</li>
              </ul>
            </div>

            <div className="bg-[#F5F1EA] rounded-2xl p-8 mb-10 border border-[#E8E2D8]">
              <h2 className="text-2xl font-black text-[#0B1E36] mb-4 flex items-center space-x-3">
                <Server className="w-6 h-6 text-[#C8A96A]" />
                <span>3. Data Security & Storage</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our Site.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-black text-[#0B1E36] mb-4">4. Sharing Your Personal Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or rent users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-black text-[#0B1E36] mb-4">5. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-gradient-to-r from-[#0B1E36] to-[#173054] rounded-xl text-white">
                <p className="font-bold text-lg mb-1">Zoya Premium Curtain</p>
                <p className="text-[#C8A96A] mb-2">Dubai, UAE</p>
                <p>Phone: <a href="tel:+971555124614" className="text-white hover:text-[#C8A96A]">+971 55 512 4614</a></p>
                <p>Email: <a href="mailto:info@zoyacurtains.ae" className="text-white hover:text-[#C8A96A]">info@zoyacurtains.ae</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
