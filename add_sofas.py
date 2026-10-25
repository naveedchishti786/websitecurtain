import re
import random

jsx_file = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\Gallery.jsx"

with open(jsx_file, "r", encoding="utf-8") as f:
    content = f.read()

# Generate the sofa objects
sofa_items = []
seaters = [1, 2, 3, 4, 5, 6, 7, "L-Shape"]
prices = [299, 499, 699, 899, 1099, 1299, 1499, 1599]

for i in range(1, 53):
    seater_idx = (i - 1) % len(seaters)
    seater_type = seaters[seater_idx]
    price = prices[seater_idx]
    
    title = f"Premium {seater_type} Seater Sofa" if isinstance(seater_type, int) else f"Premium {seater_type} Sofa"
    
    item = f"""
    {{
      id: {9000 + i},
      category: 'furniture',
      title: '{title}',
      description: 'Elegant and comfortable sofa for your living space. Price: ${price}',
      image: '/images/sofas/sofa-{i}.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    }},"""
    sofa_items.append(item)

sofas_str = "\n    // SOFAS COLLECTION" + "".join(sofa_items)

# Find insertion point. Let's insert before `// BLIND CURTAINS` or at the end of the array.
if "// BLIND CURTAINS" in content:
    content = content.replace("// BLIND CURTAINS", sofas_str + "\n    // BLIND CURTAINS")
else:
    print("Could not find insertion point!")

with open(jsx_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully added 52 sofas to Gallery.jsx")
