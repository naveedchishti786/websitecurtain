with open('src/pages/products/CurtainCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_name_line = "name: `Premium Blackout Curtain ${i + 1}`,"
new_name_line = "name: i === 3 ? 'Premium Velvet Pleated Curtain' : `Premium Blackout Curtain ${i + 1}`,"

content = content.replace(old_name_line, new_name_line)

with open('src/pages/products/CurtainCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
