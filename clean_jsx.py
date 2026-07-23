import re

with open('src/pages/products/CurtainCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

for i in range(1, 8):
    # Just look for id: 90i, and replace the image path inside that block.
    content = re.sub(rf"(id: 90{i},[\s\S]*?image:\s*'/images/linen-blackout-curtains/)[^']*(')", rf"\g<1>linen-{i}-v2.jpg?v=6\2", content)

with open('src/pages/products/CurtainCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

with open('src/pages/Gallery.jsx', 'r', encoding='utf-8') as f:
    gallery = f.read()
    
# Replace in Gallery
gallery = re.sub(r"'/images/linen-blackout-curtains/linen-(\d+)(?:-v2)?(?:\.jpg[^']*)'", r"'/images/linen-blackout-curtains/linen-\1-v2.jpg?v=6'", gallery)

with open('src/pages/Gallery.jsx', 'w', encoding='utf-8') as f:
    f.write(gallery)
