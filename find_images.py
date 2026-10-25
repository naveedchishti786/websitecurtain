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

def find_match(template_path):
    # Load template
    template = cv2.imread(template_path, cv2.IMREAD_COLOR)
    if template is None:
        print(f"Could not read {template_path}")
        return None
    
    # Template might be larger than some images due to screenshot scaling.
    # We will resize the template to various scales and check for match.
    # Alternatively, just use ORB/SIFT feature matching which is scale invariant.
    
    orb = cv2.ORB_create()
    kp1, des1 = orb.detectAndCompute(template, None)
    
    if des1 is None:
        return None

    best_match_count = 0
    best_match_file = None
    
    bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
    
    for sofa_file in sofa_images:
        img = cv2.imread(sofa_file, cv2.IMREAD_COLOR)
        if img is None: continue
        
        kp2, des2 = orb.detectAndCompute(img, None)
        if des2 is None: continue
        
        matches = bf.match(des1, des2)
        
        if len(matches) > best_match_count:
            best_match_count = len(matches)
            best_match_file = sofa_file
            
    return best_match_file, best_match_count

for u in uploaded_images:
    match_file, count = find_match(u)
    print(f"Uploaded: {os.path.basename(u)} -> Best match: {os.path.basename(match_file)} (score: {count})")
