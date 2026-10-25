import re

jsx_file = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\products\CurtainCategory.jsx"

with open(jsx_file, "r", encoding="utf-8") as f:
    content = f.read()

target = """                  <span className="text-2xl font-bold text-amber-600">
                    {product.prices ? `AED ${Object.values(product.prices)[0]}` : product.price}
                  </span>"""

replacement = """                  <span className="text-2xl font-bold text-amber-600">
                    {product.type === 'custom' ? '' : (product.prices ? `AED ${Object.values(product.prices)[0]}` : product.price)}
                  </span>"""

content = content.replace(target, replacement)

with open(jsx_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Removed price display for custom made curtains.")
