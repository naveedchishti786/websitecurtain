import re
import random

jsx_file = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\products\CurtainCategory.jsx"

with open(jsx_file, "r", encoding="utf-8") as f:
    content = f.read()

# Generate 20 new custom curtain objects
new_curtains = []

images = [
    f"/images/blackout-curtains/blackout-{i}.jpg" for i in range(1, 16)
] + [
    f"/images/velvet-curtains/velvet-{i}.jpg" for i in range(1, 7)
]

for i in range(1, 21):
    img = images[i % len(images)]
    rating = round(random.uniform(4.5, 5.0), 1)
    reviews = random.randint(50, 300)
    
    item = f"""      {{
        id: 110{i},
        name: 'Custom Made Curtains',
        type: 'custom',
        price: 'AED 300+',
        sizePrices: {{ '100cm': 300, '150cm': 450, '200cm': 600, '250cm': 750, '300cm': 900 }},
        image: '{img}',
        rating: {rating},
        reviews: {reviews},
        description: 'Tailored to Your Specifications',
        colors: ['Any Color Available']
      }},"""
    new_curtains.append(item)

curtains_str = "\n".join(new_curtains)

# Find the insertion point in the custom array
# It looks like:
#     custom: [
#       {
#         id: 11,
#         name: 'Custom Made Curtains',

# Let's insert after id: 11 object.
insertion_pattern = r"(id:\s*11,\s*name:\s*'Custom Made Curtains'.*?colors:\s*\['Any Color Available'\]\s*\n\s*\},)"
content = re.sub(insertion_pattern, r"\g<1>\n" + curtains_str, content, flags=re.DOTALL)

with open(jsx_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully added 20 custom made curtains!")
