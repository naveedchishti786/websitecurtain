import re

jsx_file = r"c:\Users\DELL\Desktop\websitecurtain\src\pages\products\CurtainCategory.jsx"

with open(jsx_file, "r", encoding="utf-8") as f:
    content = f.read()

target = """                  <span className="text-[#C8A96A] text-xs font-black uppercase tracking-widest mb-1 shadow-sm">
                    Customizable
                  </span>"""

replacement = """                  {product.type !== 'custom' && (
                    <span className="text-[#C8A96A] text-xs font-black uppercase tracking-widest mb-1 shadow-sm">
                      Customizable
                    </span>
                  )}"""

content = content.replace(target, replacement)

with open(jsx_file, "w", encoding="utf-8") as f:
    f.write(content)

print("Removed CUSTOMIZABLE overlay from custom made curtains images.")
