import fitz
import os
import io
from PIL import Image

pdf_path = r"C:\Users\DELL\.gemini\antigravity\brain\5b8ac2b5-7855-4d49-866a-da0113a2533f\.user_uploaded\media__1784761473584.pdf"
output_dir = r"public\images\sheer-curtains-final"
os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
count = 1

for page_index in range(len(doc)):
    page = doc[page_index]
    largest_img = None
    max_area = 0
    
    for img in page.get_images(full=True):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        try:
            pil_img = Image.open(io.BytesIO(image_bytes))
            area = pil_img.size[0] * pil_img.size[1]
            if area > max_area:
                max_area = area
                largest_img = image_bytes
        except:
            pass
            
    if largest_img:
        with open(os.path.join(output_dir, f"sheer-{count}.jpg"), "wb") as f:
            f.write(largest_img)
        count += 1

print(f"Extracted {count-1} images sequentially.")
