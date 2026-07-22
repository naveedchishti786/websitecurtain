import re

with open(r'c:\Users\DELL\Desktop\websitecurtain\src\pages\Gallery.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

tv_units_gallery = """    // FURNITURE - TV Units
    ...Array.from({ length: 9 }, (_, i) => ({
      id: 4001 + i,
      category: 'furniture',
      title: `Modern TV Unit ${i + 1}`,
      description: 'Sleek and modern TV unit with storage.',
      image: `/images/tv-units/tv-unit-${i + 1}.jpg`,
      location: 'Dubai',
      year: 2024
    })),

    // BEDS - Only bed furniture"""

content = content.replace("// BEDS - Only bed furniture", tv_units_gallery)

with open(r'c:\Users\DELL\Desktop\websitecurtain\src\pages\Gallery.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Gallery.jsx with TV units.")
