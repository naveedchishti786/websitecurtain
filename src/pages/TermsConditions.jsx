import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, AlertCircle, CheckCircle } from 'lucide-react';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Zoya Premium Curtain</title>
        <meta name="description" content="Terms and Conditions for Zoya Premium Curtain. Read our policies regarding purchases, warranties, and website usage." />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 mb-6 bg-[#C8A96A]/20 px-6 py-3 rounded-full border border-[#C8A96A]/40">
            <FileText className="w-5 h-5 text-[#C8A96A]" />
            <span className="text-[#C8A96A] text-sm font-bold uppercase tracking-wider">Legal Information</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Terms & Conditions
          </h1>

          <p className="text-xl text-[#F5F1EA] font-medium">
            Please read these terms carefully before using our services or purchasing our products.
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

            <div className="mb-10">
              <h2 className="text-2xl font-black text-[#0B1E36] mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use Zoya Premium Curtain's website if you do not agree to take all of the terms and conditions stated on this page.
              </p>
            </div>

            <div className="bg-[#F5F1EA] rounded-2xl p-8 mb-10 border border-[#E8E2D8]">
              <h2 className="text-2xl font-black text-[#0B1E36] mb-4 flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-[#C8A96A]" />
                <span>2. Products, Measurements, and Installations</span>
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We provide free measurement and consultation across all UAE Emirates.</li>
                <li>Custom-made curtains and furniture are tailored to the exact specifications agreed upon during measurement. Once production begins, orders cannot be cancelled or refunded.</li>
                <li>While we strive for color accuracy in our digital catalogs, actual fabric colors may vary slightly due to screen settings and lighting. We highly recommend viewing physical fabric samples during the home consultation.</li>
                <li>Installation dates are scheduled based on mutual agreement and product availability.</li>
              </ul>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-black text-[#0B1E36] mb-4">3. 5-Year Warranty Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We stand behind the quality of our products with a comprehensive 5-Year Warranty:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>The warranty covers manufacturing defects in materials and mechanisms (such as curtain tracks and furniture frames).</li>
                <li>It does not cover normal wear and tear, fading due to direct sunlight exposure, or damage caused by improper cleaning, accidents, or misuse.</li>
                <li>Any third-party modifications to the installed products will void the warranty.</li>
              </ul>
            </div>

            <div className="bg-[#F5F1EA] rounded-2xl p-8 mb-10 border border-[#E8E2D8]">
              <h2 className="text-2xl font-black text-[#0B1E36] mb-4 flex items-center space-x-3">
                <AlertCircle className="w-6 h-6 text-[#C8A96A]" />
                <span>4. Payment Terms</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A minimum advance payment is required to initiate custom production. The remaining balance must be cleared upon successful delivery and installation. We accept various payment methods including cash, bank transfers, and major credit cards.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-black text-[#0B1E36] mb-4">5. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates, and you irrevocably submit to the exclusive jurisdiction of the courts in Dubai, UAE.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
