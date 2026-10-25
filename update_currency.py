import re

sofa_category_path = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\products\SofaCategory.jsx"

with open(sofa_category_path, "r", encoding="utf-8") as f:
    sc_content = f.read()

# Replace price: '$xxx' with price: 'AED xxx'
sc_content = re.sub(r"price: '\$(\d+)'", r"price: 'AED \1'", sc_content)

with open(sofa_category_path, "w", encoding="utf-8") as f:
    f.write(sc_content)

print("Updated prices to AED")
