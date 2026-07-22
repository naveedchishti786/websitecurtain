import re

with open(r'c:\Users\DELL\Desktop\websitecurtain\src\pages\Gallery.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace STORAGE dummy items with programmatic cabinets
replacement = """    // STORAGE - Cabinets
    ...Array.from({ length: 15 }, (_, i) => ({
      id: 3001 + i,
      category: 'storage',
      title: `Premium Storage Cabinet ${i + 1}`,
      description: 'Elegant storage cabinet designed for optimal organization and aesthetics.',
      image: `/images/cabinets/cabinet-${i + 1}.jpg`,
      location: 'Dubai',
      year: 2024
    })),

    // COMPLETE ROOMS"""

# Using regex to find the section to replace
# From "// STORAGE" up to "// COMPLETE ROOMS"
pattern = re.compile(r'// STORAGE - Only almari/wardrobes.*?// COMPLETE ROOMS', re.DOTALL)
new_content = pattern.sub(replacement, content)

with open(r'c:\Users\DELL\Desktop\websitecurtain\src\pages\Gallery.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Gallery.jsx with cabinet images.")
