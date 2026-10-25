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
      price: 'AED {price}',
      rating: 4.8,
      colors: ['Customizable'],
      type: 'item',
      productType: 'sofas'
    }}""")

sofas_array_str = "  const allSofas = [\n" + ",\n".join(sofa_items) + "\n  ];\n"

new_content = f"""import React, {{ useState }} from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ Star, Heart, ShoppingCart, Sofa }} from 'lucide-react';

const SofaCategory = () => {{
{sofas_array_str}

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {{
    setCart([...cart, product]);
    alert(`${{product.name}} added to cart!`);
  }};

  return (
    <>
      <Helmet>
        <title>Premium Sofas - Zoya Premium Curtains & Furnishing</title>
        <meta name="description" content="Explore our luxurious collection of sofas including sectionals, recliners, and sofa beds." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {{/* Hero Section */}}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Sofa className="w-10 h-10 text-amber-500" />
              Premium Sofas Collection
            </h1>
            <p className="text-gray-300">Discover our exclusive range of high-quality sofas</p>
          </div>
        </div>

        {{/* Sofas Grid */}}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {{allSofas.map((product) => (
              <div key={{product.id}} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                {{/* Image Container */}}
                <div className="relative overflow-hidden h-72 bg-[#F5F1EA] group-hover:shadow-inner">
                  <img src={{product.image}} alt={{product.name}} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" />
                  
                  {{/* Overlay Gradient */}}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/90 via-[#0B1E36]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {{/* Overlay Text Content */}}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
                    <span className="text-[#C8A96A] text-xs font-black uppercase tracking-widest mb-1 shadow-sm">
                      Customizable
                    </span>
                    <h4 className="text-white font-bold text-lg leading-tight shadow-sm drop-shadow-md">
                      {{product.name}}
                    </h4>
                  </div>
                </div>

                {{/* Content */}}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-1" title={{product.name}}>{{product.name}}</h3>
                    <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer flex-shrink-0" />
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{{product.description}}</p>

                  {{/* Rating */}}
                  <div className="flex items-center space-x-1 mb-3">
                    {{[...Array(5)].map((_, i) => (
                      <Star
                        key={{i}}
                        className={{`w-4 h-4 ${{
                          i < Math.floor(product.rating)
                            ? 'text-amber-500 fill-amber-500'
                            : 'text-gray-300'
                        }}`}}
                      />
                    ))}}
                    <span className="text-sm text-gray-600">({{product.rating}})</span>
                  </div>

                  {{/* Colors */}}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Available Colors:</p>
                    <div className="flex gap-2 flex-wrap">
                      {{product.colors.map((color, idx) => (
                        <span key={{idx}} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {{color}}
                        </span>
                      ))}}
                    </div>
                  </div>

                  {{/* Price & Button */}}
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-amber-600">
                      {{product.price}}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={{() => handleAddToCart(product)}}
                        className="bg-amber-500 hover:bg-amber-600 text-white p-2.5 rounded-lg transition-all"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                      <Link
                        to={{`/sofas/item/${{product.id}}`}}
                        state={{{{ product }}}}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-semibold transition-all whitespace-nowrap"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}}
          </div>
        </div>

        {{/* CTA Section */}}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Custom Sofas?</h2>
            <p className="text-lg mb-6">Contact our experts for personalized consultation</p>
            <a href="tel:+971555124614" className="bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
              📞 Call Us Now
            </a>
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

print("Updated SofaCategory to exactly match other categories pattern")
