import os
import glob
from PIL import Image
import imagehash

uploaded_images = [
    r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\.user_uploaded\media__1785440895980.png",
    r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\.user_uploaded\media__1785440935426.png",
    r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\.user_uploaded\media__1785440952854.png",
    r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\.user_uploaded\media__1785441535166.png"
]

sofa_dir = r"c:\Users\DELL\Desktop\websitecurtain\public\images\sofas"
sofa_images = glob.glob(os.path.join(sofa_dir, "*.jpg"))

# Compute pHash for all sofa images
sofa_hashes = {}
for sf in sofa_images:
    try:
        img = Image.open(sf)
        sofa_hashes[sf] = imagehash.phash(img)
    except:
        pass

for up_img_path in uploaded_images:
    try:
        up_img = Image.open(up_img_path)
        # Crop the top 50% to capture just the image part of the card
        w, h = up_img.size
        crop = up_img.crop((0, 0, w, int(h * 0.5)))
        up_hash = imagehash.phash(crop)
        
        best_match = None
        best_diff = 1000
        
        for sf, sf_hash in sofa_hashes.items():
            diff = up_hash - sf_hash
            if diff < best_diff:
                best_diff = diff
                best_match = sf
                
        print(f"Uploaded: {os.path.basename(up_img_path)} -> Match: {os.path.basename(best_match)} (Diff: {best_diff})")
    except Exception as e:
        print(f"Error on {up_img_path}: {e}")
