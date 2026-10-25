import cv2
import os
import glob
import numpy as np

uploaded_images = [
    r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\.user_uploaded\media__1785440895980.png",
    r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\.user_uploaded\media__1785440935426.png",
    r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\.user_uploaded\media__1785440952854.png",
    r"C:\Users\DELL\.gemini\antigravity\brain\13ffee1e-b79f-4dc5-b698-50155ab2e9ab\.user_uploaded\media__1785441535166.png"
]

sofa_dir = r"c:\Users\DELL\Desktop\websitecurtain\public\images\sofas"
sofa_images = glob.glob(os.path.join(sofa_dir, "*.jpg"))

for up_img_path in uploaded_images:
    up_img = cv2.imread(up_img_path)
    if up_img is None: continue
    
    # Get top 50%
    h, w = up_img.shape[:2]
    crop = up_img[0:int(h*0.5), 0:w]
    
    # Convert crop to grayscale
    crop_gray = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
    
    best_match = None
    best_val = -1
    
    for sf in sofa_images:
        img = cv2.imread(sf)
        if img is None: continue
        
        # Resize sf to match width of crop, since it was probably scaled by CSS object-cover
        scale = w / img.shape[1]
        new_h = int(img.shape[0] * scale)
        if new_h < crop.shape[0]:
            # Crop is taller than resized image? That shouldn't happen for object-cover,
            # but if it does, resize to match height instead
            scale = crop.shape[0] / img.shape[0]
            new_w = int(img.shape[1] * scale)
            img_resized = cv2.resize(img, (new_w, crop.shape[0]))
        else:
            img_resized = cv2.resize(img, (w, new_h))
            
        img_gray = cv2.cvtColor(img_resized, cv2.COLOR_BGR2GRAY)
        
        res = cv2.matchTemplate(img_gray, crop_gray, cv2.TM_CCOEFF_NORMED)
        min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)
        
        if max_val > best_val:
            best_val = max_val
            best_match = sf
            
    print(f"Uploaded: {os.path.basename(up_img_path)} -> Match: {os.path.basename(best_match)} (Score: {best_val:.4f})")
