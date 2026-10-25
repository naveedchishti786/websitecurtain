import os
import glob
from PIL import Image

uploaded_images = [
    r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\.user_uploaded\media__1785440895980.png",
    r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\.user_uploaded\media__1785440935426.png",
    r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\.user_uploaded\media__1785440952854.png",
    r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\.user_uploaded\media__1785441535166.png"
]

sofa_dir = r"c:\Users\DELL\Desktop\websitecurtain\public\images\sofas"
sofa_images = glob.glob(os.path.join(sofa_dir, "*.jpg"))

def get_avg_color(img):
    img = img.resize((50, 50))
    pixels = list(img.getdata())
    r = sum(p[0] for p in pixels) / len(pixels)
    g = sum(p[1] for p in pixels) / len(pixels)
    b = sum(p[2] for p in pixels) / len(pixels)
    return r, g, b

sofa_colors = {}
for sf in sofa_images:
    try:
        img = Image.open(sf).convert("RGB")
        sofa_colors[sf] = get_avg_color(img)
    except:
        pass

for up_img_path in uploaded_images:
    try:
        up_img = Image.open(up_img_path).convert("RGB")
        w, h = up_img.size
        # The sofa image is in the top 50% of the screenshot
        crop = up_img.crop((0, 0, w, int(h * 0.5)))
        up_color = get_avg_color(crop)
        
        best_match = None
        best_diff = 1e9
        
        for sf, sf_color in sofa_colors.items():
            diff = (up_color[0] - sf_color[0])**2 + (up_color[1] - sf_color[1])**2 + (up_color[2] - sf_color[2])**2
            if diff < best_diff:
                best_diff = diff
                best_match = sf
                
        print(f"Uploaded: {os.path.basename(up_img_path)} -> Match: {os.path.basename(best_match)} (Diff: {best_diff:.2f})")
    except Exception as e:
        print(f"Error on {up_img_path}: {e}")
