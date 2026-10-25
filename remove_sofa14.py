import re

# 1. Update Gallery.jsx
gallery_file = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\Gallery.jsx"
with open(gallery_file, "r", encoding="utf-8") as f:
    g_content = f.read()

# Pattern for Gallery object id: 9014
g_pattern = r"\s*\{\s*id:\s*9014,\s*category:\s*'sofas'.*?year:\s*new Date\(\)\.getFullYear\(\)\s*\},?"
g_content = re.sub(g_pattern, "", g_content, flags=re.DOTALL)

with open(gallery_file, "w", encoding="utf-8") as f:
    f.write(g_content)
print("Removed from Gallery.jsx")

# 2. Update SofaCategory.jsx
sofa_file = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\products\SofaCategory.jsx"
with open(sofa_file, "r", encoding="utf-8") as f:
    s_content = f.read()

# Pattern for SofaCategory object id: 's14'
s_pattern = r"\s*\{\s*id:\s*'s14'.*?features: \['Premium Fabric', 'Durable Frame', 'Ergonomic'\]\s*\},?"
s_content = re.sub(s_pattern, "", s_content, flags=re.DOTALL)

with open(sofa_file, "w", encoding="utf-8") as f:
    f.write(s_content)
print("Removed from SofaCategory.jsx")

