import re

# 1. Update ProductDetail.jsx
with open('src/pages/products/ProductDetail.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

tv_units_data = """
    tvUnits: [
      { id: 25, name: 'Modern TV Unit 1', price: 'AED 2,000', image: '/images/tv-units/tv-unit-1.jpg', type: 'tv-units' },
      { id: 26, name: 'Modern TV Unit 2', price: 'AED 2,000', image: '/images/tv-units/tv-unit-2.jpg', type: 'tv-units' },
      { id: 27, name: 'Modern TV Unit 3', price: 'AED 2,000', image: '/images/tv-units/tv-unit-3.jpg', type: 'tv-units' },
      { id: 28, name: 'Modern TV Unit 4', price: 'AED 2,000', image: '/images/tv-units/tv-unit-4.jpg', type: 'tv-units' },
      { id: 29, name: 'Modern TV Unit 5', price: 'AED 2,000', image: '/images/tv-units/tv-unit-5.jpg', type: 'tv-units' },
      { id: 30, name: 'Modern TV Unit 6', price: 'AED 2,000', image: '/images/tv-units/tv-unit-6.jpg', type: 'tv-units' }
    ],
"""

content = content.replace("mattresses: [", tv_units_data + "    mattresses: [")

get_related_old = """
    const isBlind = product.type === 'blinds' || product.name?.toLowerCase().includes('blind');
    const isMattress = location.pathname.includes('mattress') || product.name?.toLowerCase().includes('mattress');
    let items;
    if (isMattress) items = relatedProducts.mattresses;
    else if (isBlind) items = relatedProducts.blinds;
    else items = relatedProducts.curtains;
"""

get_related_new = """
    const isBlind = product.type === 'blinds' || product.name?.toLowerCase().includes('blind');
    const isMattress = location.pathname.includes('mattress') || product.name?.toLowerCase().includes('mattress');
    const isTvUnit = product.type === 'tv-units' || product.name?.toLowerCase().includes('tv unit');
    let items;
    if (isMattress) items = relatedProducts.mattresses;
    else if (isTvUnit) items = relatedProducts.tvUnits;
    else if (isBlind) items = relatedProducts.blinds;
    else items = relatedProducts.curtains;
"""

content = content.replace(get_related_old.strip(), get_related_new.strip())

with open('src/pages/products/ProductDetail.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

# 2. Update FurnitureCategory.jsx to add `images`
with open('src/pages/products/FurnitureCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

def add_images(match):
    img = match.group(0)
    images_str = ",\n          images: ['" + match.group(1) + "', '/images/tv-units/tv-unit-2.jpg', '/images/tv-units/tv-unit-3.jpg', '/images/tv-units/tv-unit-4.jpg']"
    if 'tv-unit-2' in match.group(1):
        images_str = ",\n          images: ['" + match.group(1) + "', '/images/tv-units/tv-unit-1.jpg', '/images/tv-units/tv-unit-3.jpg', '/images/tv-units/tv-unit-4.jpg']"
    if 'tv-unit-3' in match.group(1):
        images_str = ",\n          images: ['" + match.group(1) + "', '/images/tv-units/tv-unit-1.jpg', '/images/tv-units/tv-unit-2.jpg', '/images/tv-units/tv-unit-4.jpg']"
    if 'tv-unit-4' in match.group(1):
        images_str = ",\n          images: ['" + match.group(1) + "', '/images/tv-units/tv-unit-1.jpg', '/images/tv-units/tv-unit-2.jpg', '/images/tv-units/tv-unit-3.jpg']"
        
    return img + images_str

content = re.sub(r"image: '(/images/tv-units/tv-unit-\d+\.jpg)'", add_images, content)

with open('src/pages/products/FurnitureCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

