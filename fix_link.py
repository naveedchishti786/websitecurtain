import re

with open('src/pages/products/FurnitureCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace <Link to={`/furniture/${product.type}/${product.id}`} className="...">
# with <Link to={`/furniture/${product.type}/${product.id}`} state={{ product }} className="...">
content = re.sub(r'(<Link\s*\n*\s*to={`/furniture/\$\{product\.type\}/\$\{product\.id\}`\})', r'\1 state={{ product }}', content)

with open('src/pages/products/FurnitureCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
