import os
from PIL import Image

src_dir = "temp_img"
dst_dir = r"public\images\silk-blackout-curtains"
os.makedirs(dst_dir, exist_ok=True)

# Map the extracted image order to proper names
# I'll crop the left side of the image based on its height to make it square
for i in range(1, 7):
    src_file = os.path.join(src_dir, f"img_{i}.jpeg")
    dst_file = os.path.join(dst_dir, f"silk-{i}.jpg")
    if os.path.exists(src_file):
        img = Image.open(src_file)
        w, h = img.size
        # Crop to square on the left
        cropped = img.crop((0, 0, h, h))
        cropped.save(dst_file, "JPEG")
        print(f"Cropped {src_file} -> {dst_file}")
