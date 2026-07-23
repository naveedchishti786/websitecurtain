with open('src/pages/products/CurtainCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace type: 'blackout', with type: i === 3 ? 'velvet' : 'blackout',
old_block = """      blackout: Array.from({ length: 25 }, (_, i) => ({
        id: 101 + i,
        name: i === 3 ? 'Premium Velvet Pleated Curtain' : `Premium Blackout Curtain ${i + 1}`,
        type: 'blackout',"""

new_block = """      blackout: Array.from({ length: 25 }, (_, i) => ({
        id: 101 + i,
        name: i === 3 ? 'Premium Velvet Pleated Curtain' : `Premium Blackout Curtain ${i + 1}`,
        type: i === 3 ? 'velvet' : 'blackout',"""

content = content.replace(old_block, new_block)

old_price = "price: `AED ${250 + (i % 5) * 20}`,"
new_price = "price: `AED ${250 + (i % 5) * 20}`,\n        sizePrices: i === 3 ? { '100cm': 103, '150cm': 155, '200cm': 206, '250cm': 258, '300cm': 310 } : undefined,"

content = content.replace(old_price, new_price, 1)

with open('src/pages/products/CurtainCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
