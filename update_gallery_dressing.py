import re

with open(r'c:\Users\DELL\Desktop\websitecurtain\src\pages\Gallery.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add dressing mirror programmatic logic before // COMPLETE ROOMS
dressing_logic = """
    // STORAGE - Dressing with Mirror
    ...Array.from({ length: 15 }, (_, i) => ({
      id: 3101 + i,
      category: 'storage',
      title: `Dressing with Mirror ${i + 1}`,
      description: 'Elegant dressing table with mirror and storage.',
      image: `/images/dressing-mirror/dressing-${i + 1}.jpg`,
      location: 'Dubai',
      year: 2024
    })),

    // COMPLETE ROOMS"""

content = content.replace("// COMPLETE ROOMS", dressing_logic)

with open(r'c:\Users\DELL\Desktop\websitecurtain\src\pages\Gallery.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Gallery.jsx with dressing mirror items.")
