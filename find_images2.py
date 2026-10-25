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

def get_histogram(img):
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    hist = cv2.calcHist([hsv], [0, 1], None, [50, 60], [0, 180, 0, 256])
    cv2.normalize(hist, hist, 0, 1, cv2.NORM_MINMAX)
    return hist

def match_images():
    # Precompute histograms for all 52 sofa images
    sofa_hists = {}
    for sf in sofa_images:
        img = cv2.imread(sf)
        if img is not None:
            sofa_hists[sf] = get_histogram(img)
            
    for up_img_path in uploaded_images:
        up_img = cv2.imread(up_img_path)
        if up_img is None: continue
        
        # Crop top 40% to get just the image part of the card
        h, w = up_img.shape[:2]
        crop = up_img[0:int(h*0.4), 0:w]
        
        up_hist = get_histogram(crop)
        
        scores = []
        for sf, sf_hist in sofa_hists.items():
            score = cv2.compareHist(up_hist, sf_hist, cv2.HISTCMP_CORREL)
            scores.append((score, sf))
            
        scores.sort(reverse=True)
        print(f"Uploaded: {os.path.basename(up_img_path)}")
        for i in range(3):
            print(f"  {i+1}: {os.path.basename(scores[i][1])} (score: {scores[i][0]:.4f})")
            
match_images()
