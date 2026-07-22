import fitz
import os

pdf_path = r"C:\Users\DELL\.gemini\antigravity\brain\5b8ac2b5-7855-4d49-866a-da0113a2533f\.user_uploaded\media__1784760336906.pdf"
output_dir = r"public\images\sheer-curtains"

doc = fitz.open(pdf_path)
count = 1
for page_index in range(len(doc)):
    page = doc[page_index]
    for img in page.get_images(full=True):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        
        with open(os.path.join(output_dir, f"sheer-{count}.jpg"), "wb") as f:
            f.write(image_bytes)
        count += 1
        
print(f"Extracted {count-1} images from new sheer PDF.")
