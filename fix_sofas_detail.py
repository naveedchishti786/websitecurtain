import re

sofa_category_path = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\products\SofaCategory.jsx"
product_detail_path = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\products\ProductDetail.jsx"

# --- 1. Update SofaCategory.jsx ---
with open(sofa_category_path, "r", encoding="utf-8") as f:
    sc_content = f.read()

# Make sure product state is passed in Link
sc_content = sc_content.replace(
    'to={`/sofas/item/${sofa.id}`}',
    'to={`/sofas/item/${sofa.id}`}\n                    state={{ product: sofa }}'
)

# Remove floating price badge
sc_content = re.sub(
    r'<div className="absolute top-4 right-4 bg-white/90.*?</div>',
    '',
    sc_content,
    flags=re.DOTALL
)

# Insert price into the body area
# Look for <h2 className="text-xl font-bold text-gray-900 line-clamp-1">{sofa.name}</h2>
# and add the price below it
price_html = """
                  <div className="mt-2 text-amber-600 font-bold text-lg">
                    {sofa.price}
                  </div>"""

if "text-amber-600" not in sc_content:
    sc_content = sc_content.replace(
        '<h2 className="text-xl font-bold text-gray-900 line-clamp-1">{sofa.name}</h2>',
        '<h2 className="text-xl font-bold text-gray-900 line-clamp-1">{sofa.name}</h2>' + price_html
    )

with open(sofa_category_path, "w", encoding="utf-8") as f:
    f.write(sc_content)


# --- 2. Update ProductDetail.jsx ---
with open(product_detail_path, "r", encoding="utf-8") as f:
    pd_content = f.read()

# Add sofas array to relatedProducts
sofas_related = """    ],
    sofas: [
      { id: 9001, name: 'Premium 1 Seater Sofa', image: '/images/sofas/sofa-1.jpg', type: 'item', productType: 'sofas', price: 'AED 299' },
      { id: 9002, name: 'Premium 2 Seater Sofa', image: '/images/sofas/sofa-2.jpg', type: 'item', productType: 'sofas', price: 'AED 499' },
      { id: 9003, name: 'Premium 3 Seater Sofa', image: '/images/sofas/sofa-3.jpg', type: 'item', productType: 'sofas', price: 'AED 699' },
      { id: 9004, name: 'Premium 4 Seater Sofa', image: '/images/sofas/sofa-4.jpg', type: 'item', productType: 'sofas', price: 'AED 899' }
    ]"""

if "sofas:" not in pd_content:
    pd_content = pd_content.replace("    ]\n  };", sofas_related + "\n  };")

# Update getRelated function
if "const isSofa =" not in pd_content:
    pd_content = pd_content.replace(
        "const isTvUnit = product.type === 'tv-units' || product.name?.toLowerCase().includes('tv unit');",
        "const isTvUnit = product.type === 'tv-units' || product.name?.toLowerCase().includes('tv unit');\n    const isSofa = location.pathname.includes('sofa') || product.name?.toLowerCase().includes('sofa');"
    )

if "else if (isSofa) items = relatedProducts.sofas;" not in pd_content:
    pd_content = pd_content.replace(
        "else if (isBlind) items = relatedProducts.blinds;",
        "else if (isBlind) items = relatedProducts.blinds;\n    else if (isSofa) items = relatedProducts.sofas;"
    )

# Update Link to handle sofas
link_target = """to={`/${item.productType === 'mattress' ? 'mattress' : (item.productType === 'sofas' ? 'sofas' : 'curtains')}/${item.productType === 'mattress' ? item.type : (item.productType === 'sofas' ? item.type : (item.type === 'blinds' ? 'blinds' : 'blackout'))}/${item.id}`}"""
pd_content = re.sub(
    r'to={`/\${item\.productType === \'mattress\' \? \'mattress\' : \'curtains\'}/\${item\.productType === \'mattress\' \? item\.type : \(item\.type === \'blinds\' \? \'blinds\' : \'blackout\'\)}/\${item\.id}`}',
    link_target.replace("$", "\\$"),
    pd_content
)
# Re-replace because the regex replace with \$ gets complicated in python
pd_content = pd_content.replace(
    r"to={`/${item.productType === 'mattress' ? 'mattress' : 'curtains'}/${item.productType === 'mattress' ? item.type : (item.type === 'blinds' ? 'blinds' : 'blackout')}/${item.id}`}",
    link_target
)

with open(product_detail_path, "w", encoding="utf-8") as f:
    f.write(pd_content)

print("Updated successfully")
