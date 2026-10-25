import os
import glob
from PIL import Image, ImageDraw, ImageFont

sofa_dir = r"c:\Users\DELL\Desktop\websitecurtain\public\images\sofas"
sofa_images = glob.glob(os.path.join(sofa_dir, "*.jpg"))

# Sort by number
def get_num(path):
    name = os.path.basename(path)
    # sofa-12.jpg -> 12
    num = int(name.split('-')[1].split('.')[0])
    return num

sofa_images.sort(key=get_num)

# Grid dimensions
cols = 8
rows = (len(sofa_images) + cols - 1) // cols

img_w = 300
img_h = 300

grid_w = cols * img_w
grid_h = rows * img_h

grid_img = Image.new('RGB', (grid_w, grid_h), color=(255, 255, 255))

for idx, img_path in enumerate(sofa_images):
    num = get_num(img_path)
    try:
        img = Image.open(img_path)
        img = img.resize((img_w, img_h))
        
        # Add label
        draw = ImageDraw.Draw(img)
        draw.rectangle([(0, 0), (80, 40)], fill=(0,0,0))
        draw.text((10, 10), f"ID: {num}", fill=(255,255,255))
        
        r = idx // cols
        c = idx % cols
        grid_img.paste(img, (c * img_w, r * img_h))
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

out_path = r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\sofas_grid.jpg"
grid_img.save(out_path)
print(f"Grid saved to {out_path}")
