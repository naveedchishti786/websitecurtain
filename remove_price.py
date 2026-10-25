import re

gallery_file = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\Gallery.jsx"
with open(gallery_file, "r", encoding="utf-8") as f:
    g_content = f.read()

# Pattern for ". Price: $123"
g_content = re.sub(r"\. Price: \$\d+", ".", g_content)

with open(gallery_file, "w", encoding="utf-8") as f:
    f.write(g_content)
print("Removed prices from Gallery.jsx")
