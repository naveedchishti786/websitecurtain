with open('src/pages/products/CurtainCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the name
content = content.replace("name: 'Velvet + Blackout Curtain',", "name: 'Premium Velvet Pleated Curtain',")
# Replace in description
content = content.replace("Premium Velvet + Blackout Curtain for ultimate luxury and darkness.", "Premium Velvet Pleated Curtain for ultimate luxury and darkness.")

with open('src/pages/products/CurtainCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

# Update Gallery.jsx just in case
with open('src/pages/Gallery.jsx', 'r', encoding='utf-8') as f:
    gallery = f.read()

gallery = gallery.replace("title: 'Velvet + Blackout Curtain',", "title: 'Premium Velvet Pleated Curtain',")

with open('src/pages/Gallery.jsx', 'w', encoding='utf-8') as f:
    f.write(gallery)
