import re

jsx_file = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\Gallery.jsx"

with open(jsx_file, "r", encoding="utf-8") as f:
    content = f.read()

# Add the 'sofas' category to the categories array
if "{ id: 'sofas', name: 'Sofas', icon: <Sofa className=\"w-5 h-5\" /> }" not in content:
    cat_str = "    { id: 'complete', name: 'Complete Rooms', icon: <Home className=\"w-5 h-5\" /> },\n    { id: 'sofas', name: 'Sofas', icon: <Sofa className=\"w-5 h-5\" /> },"
    content = content.replace("    { id: 'complete', name: 'Complete Rooms', icon: <Home className=\"w-5 h-5\" /> },", cat_str)

# Update the newly added sofas from 'furniture' to 'sofas'
# The ids are between 9001 and 9052.
def replace_category(match):
    return match.group(0).replace("category: 'furniture'", "category: 'sofas'")

# We can just look for id: 900x and category: 'furniture'
content = re.sub(r'id:\s*90\d{2},\s*category:\s*\'furniture\'', replace_category, content)

with open(jsx_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated Gallery.jsx to include a dedicated Sofas category.")
