import fitz
from PIL import Image
import io
import os

pdf_path = r'C:\Users\DELL\.gemini\antigravity\brain\beecddc3-6466-4455-a90a-98edbfce69be\.user_uploaded\media__1784792009988.pdf'
out_dir = r'public\images\linen-blackout-curtains'

doc = fitz.open(pdf_path)
count = 1

for p in range(len(doc)):
    page = doc[p]
    for img_info in page.get_images(full=True):
        xref = img_info[0]
        img_dict = doc.extract_image(xref)
        img = Image.open(io.BytesIO(img_dict['image']))
        w, h = img.size
        # The curtain is on the LEFT. We want a square crop of the LEFT side.
        if w > h:
            cropped = img.crop((0, 0, h, h))
        else:
            cropped = img
            
        out_path = os.path.join(out_dir, f'linen-{count}.jpg')
        cropped.convert('RGB').save(out_path)
        print(f"Saved {out_path} ({w}x{h} -> {cropped.size})")
        count += 1
