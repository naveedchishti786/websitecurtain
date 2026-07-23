import re
with open('src/pages/products/CurtainCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()
for i in range(1, 8):
    content = re.sub(rf"(id: 90{i},[\s\S]*?image:\s*'/images/linen-blackout-curtains/linen)[^']*(')", rf"\g<1>-{i}.jpg?v=4\2", content)
with open('src/pages/products/CurtainCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
