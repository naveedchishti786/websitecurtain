import re

sofa_mapping = {
    1: 1,
    3: 2,
    4: 1,
    5: "L-Shape",
    6: "L-Shape",
    8: "L-Shape",
    9: "L-Shape",
    11: "L-Shape",
    13: "L-Shape",
    15: "L-Shape",
    16: 3,
    17: 2,
    18: 3,
    19: 2,
    20: 3,
    21: 3,
    22: "L-Shape",
    23: 3,
    24: 3,
    25: 3,
    26: "L-Shape",
    27: "L-Shape",
    28: "L-Shape",
    29: 3,
    30: 3,
    31: 3,
    32: 2,
    33: 3,
    34: "L-Shape",
    35: 3,
    36: 3,
    37: 3,
    38: 3,
    39: 2,
    40: 3,
    41: "L-Shape",
    42: "L-Shape",
    43: 3,
    44: 2,
    45: 3,
    46: 3,
    47: 3,
    48: 3,
    49: 3,
    50: "L-Shape",
    51: "L-Shape",
    52: "L-Shape"
}

def get_title(num):
    val = sofa_mapping.get(num, 3) # default to 3
    if val == "L-Shape":
        return "Premium L-Shape Sofa"
    else:
        return f"Premium {val} Seater Sofa"

# 1. Update Gallery.jsx
gallery_file = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\Gallery.jsx"
with open(gallery_file, "r", encoding="utf-8") as f:
    g_content = f.read()

for i in range(1, 53):
    if i in [2, 7, 10, 12, 14]:
        continue # removed earlier
    # Find the block for this id
    pattern = r"(id:\s*90" + f"{i:02d}" + r",\s*category:\s*'sofas',\s*title:\s*').*?(')"
    g_content = re.sub(pattern, r"\g<1>" + get_title(i) + r"\g<2>", g_content)

with open(gallery_file, "w", encoding="utf-8") as f:
    f.write(g_content)
print("Updated Gallery.jsx")

# 2. Update SofaCategory.jsx
sofa_file = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\products\SofaCategory.jsx"
with open(sofa_file, "r", encoding="utf-8") as f:
    s_content = f.read()

for i in range(1, 53):
    if i in [2, 7, 10, 12, 14]:
        continue
    # id: 's1', name: 'Premium 1 Seater Sofa'
    pattern = r"(id:\s*'s" + str(i) + r"',\s*name:\s*').*?(')"
    s_content = re.sub(pattern, r"\g<1>" + get_title(i) + r"\g<2>", s_content)

with open(sofa_file, "w", encoding="utf-8") as f:
    f.write(s_content)
print("Updated SofaCategory.jsx")

