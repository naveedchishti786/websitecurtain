with open('src/pages/products/CurtainCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the name
content = content.replace("name: 'Premium Velvet Pleated Curtain',", "name: 'Premium Velvet Fabric',")
# Also fix the description if necessary, but the user only asked to replace the name.

with open('src/pages/products/CurtainCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

# Update Gallery.jsx
with open('src/pages/Gallery.jsx', 'r', encoding='utf-8') as f:
    gallery = f.read()

gallery = gallery.replace("title: 'Premium Velvet Pleated Curtain',", "title: 'Premium Velvet Fabric',")

with open('src/pages/Gallery.jsx', 'w', encoding='utf-8') as f:
    f.write(gallery)
