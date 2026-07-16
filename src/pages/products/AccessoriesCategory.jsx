import React from 'react';
import { Helmet } from 'react-helmet-async';

const AccessoriesCategory = () => {
  return (
    <>
      <Helmet>
        <title>Accessories - Zoya Premium Curtains & Furnishing</title>
        <meta name="description" content="Explore our premium collection of home accessories." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-8">Home Accessories</h1>
          <p className="text-gray-600 mb-8">The perfect finishing touches for your beautiful home.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
              <div className="text-4xl mb-4">✨</div>
              <h2 className="text-2xl font-bold mb-2">Decor Items</h2>
              <p className="text-gray-600">Elegant decor pieces to enhance your space.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
              <div className="text-4xl mb-4">🖼️</div>
              <h2 className="text-2xl font-bold mb-2">Wall Art</h2>
              <p className="text-gray-600">Beautiful paintings and wall hangings.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
              <div className="text-4xl mb-4">💡</div>
              <h2 className="text-2xl font-bold mb-2">Lighting</h2>
              <p className="text-gray-600">Stunning lamps and lighting fixtures.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessoriesCategory;
