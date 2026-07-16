import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';

const SofaCategory = () => {
  const sofaTypes = [
    {
      id: 1,
      name: 'Sectional Sofas',
      image: '🛋️',
      description: 'Spacious and comfortable L-shaped or U-shaped sofas perfect for large living rooms.',
      features: ['Modular design', 'Deep seating', 'Premium fabrics']
    },
    {
      id: 2,
      name: 'Recliners',
      image: '💺',
      description: 'Ultimate comfort with adjustable backrests and footrests for relaxation.',
      features: ['Power recline', 'Lumbar support', 'Cup holders']
    },
    {
      id: 3,
      name: 'Loveseats',
      image: '🛋️',
      description: 'Compact two-seater sofas ideal for small spaces or as complementary pieces.',
      features: ['Space-saving', 'Cozy design', 'Versatile styles']
    },
    {
      id: 4,
      name: 'Sofa Beds',
      image: '🛏️',
      description: 'Multi-functional sofas that easily convert into comfortable beds for guests.',
      features: ['Pull-out mechanism', 'Storage options', 'Durable mattress']
    },
    {
      id: 5,
      name: 'Chesterfield',
      image: '🪑',
      description: 'Classic elegance with deep button tufting and rolled arms.',
      features: ['Leather upholstery', 'Timeless design', 'Sturdy build']
    },
    {
      id: 6,
      name: 'Modern Contemporary',
      image: '✨',
      description: 'Sleek lines and minimalist designs for a modern aesthetic.',
      features: ['Clean edges', 'Metal legs', 'Neutral tones']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Premium Sofas - Zoya Premium Curtains & Furnishing</title>
        <meta name="description" content="Explore our luxurious collection of sofas including sectionals, recliners, and sofa beds." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#C8A96A] to-[#B8955A] bg-clip-text text-transparent">
              Premium Sofas Collection
            </h1>
            <p className="text-xl text-[#F5F1EA] max-w-2xl mx-auto font-medium">
              Discover unparalleled comfort and style with our handpicked selection of premium sofas, designed to elevate your living space.
            </p>
          </div>
        </div>

        {/* Sofa Types Grid */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sofaTypes.map((sofa) => (
              <div key={sofa.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-slate-100">
                <div className="h-48 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">
                  {sofa.image}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-2xl font-bold text-gray-900">{sofa.name}</h2>
                    <Star className="w-5 h-5 text-[#C8A96A] fill-current" />
                  </div>
                  
                  <p className="text-gray-600 mb-6 h-16">
                    {sofa.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {sofa.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C8A96A]"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/sofas/${sofa.name.toLowerCase().replace(' ', '-')}`}
                    className="w-full flex items-center justify-center space-x-2 bg-[#F5F1EA] text-[#0B1E36] font-bold py-3 rounded-xl hover:bg-[#0B1E36] hover:text-white transition-all duration-300 group/btn"
                  >
                    <span>View Collection</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Order CTA */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="bg-gradient-to-br from-[#0B1E36] to-[#173054] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIyIiBmaWxsPSIjQzhBOTZBIiAvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNwYXR0ZXJuKSIgLz48L3N2Zz4=')]"></div>
            
            <div className="relative z-10">
              <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-[#C8A96A]" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Find the Perfect Sofa?</h2>
              <p className="text-[#F5F1EA] text-lg mb-8 max-w-2xl mx-auto">
                We offer custom sofa manufacturing tailored to your exact specifications. Choose your fabric, dimensions, and style.
              </p>
              
              <Link 
                to="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-[#C8A96A]/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SofaCategory;
