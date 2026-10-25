import re

jsx_file = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\products\SofaCategory.jsx"

# Generate 52 sofa objects
sofa_items = []
seaters = [1, 2, 3, 4, 5, 6, 7, "L-Shape"]
prices = [299, 499, 699, 899, 1099, 1299, 1499, 1599]

for i in range(1, 53):
    seater_idx = (i - 1) % len(seaters)
    seater_type = seaters[seater_idx]
    price = prices[seater_idx]
    title = f"Premium {seater_type} Seater Sofa" if isinstance(seater_type, int) else f"Premium {seater_type} Sofa"
    
    sofa_items.append(f"""    {{
      id: {9000 + i},
      name: '{title}',
      image: '/images/sofas/sofa-{i}.jpg',
      description: 'Elegant and comfortable sofa for your living space.',
      price: '${price}'
    }}""")

sofas_array_str = "  const allSofas = [\n" + ",\n".join(sofa_items) + "\n  ];\n"

new_content = f"""import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight, Star, ShoppingBag, Eye }} from 'lucide-react';

const SofaCategory = () => {{
{sofas_array_str}
  return (
    <>
      <Helmet>
        <title>Premium Sofas - Zoya Premium Curtains & Furnishing</title>
        <meta name="description" content="Explore our luxurious collection of sofas including sectionals, recliners, and sofa beds." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {{/* Hero Section */}}
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

        {{/* Sofas Grid */}}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {{allSofas.map((sofa) => (
              <div key={{sofa.id}} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-slate-100 flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={{sofa.image}} 
                    alt={{sofa.name}}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#0B1E36] shadow-lg">
                    {{sofa.price}}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-bold text-gray-900 line-clamp-1">{{sofa.name}}</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm flex-grow">
                    {{sofa.description}}
                  </p>
                  
                  <Link 
                    to={{`/sofas/item/${{sofa.id}}`}}
                    className="w-full flex items-center justify-center space-x-2 bg-[#F5F1EA] text-[#0B1E36] font-bold py-3 rounded-xl hover:bg-[#0B1E36] hover:text-white transition-all duration-300 group/btn mt-auto"
                  >
                    <span>View Details</span>
                    <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}}
          </div>
        </div>

        {{/* Custom Order CTA */}}
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
}};

export default SofaCategory;
"""

with open(jsx_file, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated SofaCategory.jsx to display all 52 images")
