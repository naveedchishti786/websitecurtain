import re

with open(r'c:\Users\DELL\Desktop\websitecurtain\src\pages\products\FurnitureCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace tv-units array
tv_units_data = "'tv-units': [\n"
for i in range(1, 10):
    tv_units_data += f"""      {{
        id: {24 + i},
        name: 'Modern TV Unit {i}',
        type: 'tv-units',
        price: 'AED {(1000 + i * 150):,}',
        priceNum: {1000 + i * 150},
        image: '/images/tv-units/tv-unit-{i}.jpg',
        rating: 4.8,
        reviews: {200 + i * 5},
        description: 'Sleek and modern TV unit with storage.',
        colors: ['Walnut', 'White', 'Black'],
        material: 'MDF + Wood',
        dimensions: 'Custom',
        features: ['Modern Design', 'Storage Shelves', 'Cable Management', 'Durable']
      }},
"""
tv_units_data += "    ],"

content = re.sub(r"'tv-units': \[\s*\{[\s\S]*?\}\s*\],", tv_units_data, content)

# 2. Update the image render logic for grid view
content = content.replace(
    """<div className="relative h-48 bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center text-6xl overflow-hidden group-hover:scale-110 transition-transform">
                          {product.image}""",
    """<div className="relative h-48 bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                          {product.image.startsWith('/') ? (
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-6xl">{product.image}</span>
                          )}"""
)

# 3. Update the image render logic for list view
content = content.replace(
    """<div className="w-40 h-40 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg flex items-center justify-center text-5xl flex-shrink-0">
                          {product.image}""",
    """<div className="w-40 h-40 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          {product.image.startsWith('/') ? (
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-5xl">{product.image}</span>
                          )}"""
)

with open(r'c:\Users\DELL\Desktop\websitecurtain\src\pages\products\FurnitureCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated FurnitureCategory.jsx with TV units.")
