import re

with open(r'c:\Users\DELL\Desktop\websitecurtain\src\pages\products\StorageCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add dressing-mirror to storageData
dressing_data = ",\n    'dressing-mirror': [\n"
for i in range(1, 16):
    dressing_data += f"""      {{
        id: {100 + i},
        name: 'Dressing with Mirror {i}',
        type: 'dressing-mirror',
        price: 'AED {(800 + i * 50):,}',
        priceNum: {800 + i * 50},
        image: '/images/dressing-mirror/dressing-{i}.jpg',
        rating: 4.9,
        reviews: {150 + i * 5},
        description: 'Elegant dressing table with mirror and storage',
        colors: ['White', 'Gold', 'Natural'],
        material: 'MDF + Glass',
        dimensions: 'Standard',
        storage: 'Medium Capacity',
        features: ['Mirror Included', 'Elegant Design', 'Storage Drawers'],
        warranty: '5 Years'
      }},
"""
dressing_data += "    ]\n  };"

# Replace the closing of storageData
content = content.replace("    ]\n  };", dressing_data)

# Update filter options to include 'dressing-mirror'
content = content.replace(
    "['all', 'cabinets']",
    "['all', 'cabinets', 'dressing-mirror']"
)

with open(r'c:\Users\DELL\Desktop\websitecurtain\src\pages\products\StorageCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated StorageCategory.jsx with dressing-mirror items.")
