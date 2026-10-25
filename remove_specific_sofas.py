import re

jsx_file = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\Gallery.jsx"

with open(jsx_file, "r", encoding="utf-8") as f:
    content = f.read()

ids_to_remove = [9004, 9010, 9023, 9026]

# The block looks like:
#    {
#      id: 9004,
#      category: 'sofas',
#      title: 'Premium 4 Seater Sofa',
#      description: 'Elegant and comfortable sofa for your living space. Price: $899',
#      image: '/images/sofas/sofa-4.jpg',
#      location: 'Sharjah',
#      year: new Date().getFullYear()
#    },

for remove_id in ids_to_remove:
    # Regex to match the entire object
    pattern = r"\s*\{\s*id:\s*" + str(remove_id) + r",\s*category:\s*'sofas'.*?year:\s*new Date\(\)\.getFullYear\(\)\s*\},?"
    content = re.sub(pattern, "", content, flags=re.DOTALL)

with open(jsx_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Removed the 4 specific sofas.")
