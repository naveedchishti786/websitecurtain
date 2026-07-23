import re

with open('src/pages/products/BedsCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix hydraulic bed starting price
content = re.sub(r'price: `AED \$\{1899 \+ i \* 50\}`', r'price: `AED ${1400 + i * 50}`', content)
content = re.sub(r'priceNum: 1899 \+ i \* 50', r'priceNum: 1400 + i * 50', content)

# Fix single bed starting price (was 899)
content = re.sub(r'price: `AED \$\{899 \+ i \* 50\}`', r'price: `AED ${1200 + i * 50}`', content)
content = re.sub(r'priceNum: 899 \+ i \* 50', r'priceNum: 1200 + i * 50', content)

# Fix any hardcoded prices that are below 1200
def bump_price(match):
    price_num = int(match.group(1))
    if price_num < 1200:
        return f"price: 'AED 1,200',\n        priceNum: 1200"
    return match.group(0)

content = re.sub(r"price: 'AED [0-9,]+',\s*priceNum: (\d+)", bump_price, content)

with open('src/pages/products/BedsCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
