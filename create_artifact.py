import os
import shutil
import glob

src_dir = r"c:\Users\DELL\Desktop\websitecurtain\public\images\sofas"
dest_dir = r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\sofa_images"

os.makedirs(dest_dir, exist_ok=True)

md_content = "# Sofa Image Review\n\nPlease let me know the numbers of the 4 images you want removed (e.g. `sofa-10.jpg`).\n\n"

for i in range(1, 53):
    img_name = f"sofa-{i}.jpg"
    src_file = os.path.join(src_dir, img_name)
    dest_file = os.path.join(dest_dir, img_name)
    
    if os.path.exists(src_file):
        shutil.copy2(src_file, dest_file)
        # Using relative path from the conversation dir for the artifact
        md_content += f"## {img_name}\n"
        md_content += f"![{img_name}](file:///C:/Users/DELL/.gemini/antigravity/brain/13ffee1e-b79f-4dc5-b698-50155ab2e9ab/sofa_images/{img_name})\n\n"

with open(r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\sofa_review.md", "w") as f:
    f.write(md_content)

print("Created artifact and copied images.")
