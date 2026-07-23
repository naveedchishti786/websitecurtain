import re

with open('src/pages/products/FurnitureCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Match the tv-units array
pattern = r"('tv-units': \[\s*(?:\{[^}]+\}\s*,?\s*)*\])"

def replace_all_tv_units(match):
    array_content = match.group(1)
    
    # Now within this array, replace every object's price, priceNum
    new_array = re.sub(r"(type: 'tv-units',\s*)(price: 'AED [\d,]+',\s*priceNum: \d+,)", 
                       r"\1price: 'AED 2,000',\n          priceNum: 2000,\n          sizePrices: { '160cm': 2000, '180cm': 2300, '200cm': 2600, '220cm': 2900, '240cm': 3200 },", 
                       array_content)
    return new_array

content = re.sub(pattern, replace_all_tv_units, content)

with open('src/pages/products/FurnitureCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
