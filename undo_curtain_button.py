import re

jsx_file = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\products\CurtainCategory.jsx"

with open(jsx_file, "r", encoding="utf-8") as f:
    content = f.read()

# Reverse the Price & Button section replacement
replacement_content = """                {/* Price & Button */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    {product.prices ? `AED ${Object.values(product.prices)[0]}` : product.price}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-amber-500 hover:bg-amber-600 text-white p-2.5 rounded-lg transition-all"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <Link
                      to={`/curtains/${product.type}/${product.id}`}
                      state={{ product }}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-semibold transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                </div>"""

target_content = """                {/* Price & Button */}
                <div className="pt-4 border-t-2 border-[#F5F1EA] mt-auto">
                  <a
                    href="tel:+971555124614"
                    className="w-full py-3 bg-[#0B1E36] text-white font-black rounded-xl hover:bg-[#C8A96A] hover:text-[#0B1E36] transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                  >
                    <span>Get Custom Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>"""

content = content.replace(target_content, replacement_content)

with open(jsx_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Undid changes to CurtainCategory.jsx")
