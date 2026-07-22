import re

with open(r'c:\Users\DELL\Desktop\websitecurtain\src\pages\products\StorageCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace storageData
new_storage_data = """const storageData = {
    'cabinets': [
"""

for i in range(1, 16):
    new_storage_data += f"""      {{
        id: {i},
        name: 'Premium Cabinet {i}',
        type: 'cabinets',
        price: 'AED {(1000 + i * 100):,}',
        priceNum: {1000 + i * 100},
        image: '/images/cabinets/cabinet-{i}.jpg',
        rating: 4.8,
        reviews: {200 + i * 10},
        description: 'Premium storage cabinet for modern spaces',
        colors: ['White', 'Grey', 'Natural'],
        material: 'MDF',
        dimensions: 'Custom Fit',
        storage: 'Large Capacity',
        features: ['Custom Fit', 'Modern Design', 'Durable', 'Spacious'],
        warranty: '5 Years'
      }},
"""

new_storage_data += """    ]
  };"""

content = re.sub(r'const storageData = \{[\s\S]*?\n  \};', new_storage_data, content)

# 2. Replace filter array
content = re.sub(
    r"\['all', 'wardrobes-sliding', 'wardrobes-walkin', 'wardrobes-builtin', 'cupboards-kitchen', 'cupboards-bedroom', 'cabinets'\]",
    "['all', 'cabinets']",
    content
)

# 3. Replace image renders
content = content.replace(
    """<div className="relative h-48 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center text-6xl overflow-hidden group-hover:scale-110 transition-transform">
                          {product.image}""",
    """<div className="relative h-48 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />"""
)

content = content.replace(
    """<div className="w-40 h-40 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center text-5xl flex-shrink-0">
                          {product.image}
                        </div>""",
    """<div className="w-40 h-40 bg-gradient-to-br from-green-100 to-green-50 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>"""
)

with open(r'c:\Users\DELL\Desktop\websitecurtain\src\pages\products\StorageCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated StorageCategory.jsx")
