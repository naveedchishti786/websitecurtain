import fitz
import os

pdf_path = "public/images/sheer-curtains/Sheer Curtain.pdf"
output_dir = "public/images/sheer-curtains"

doc = fitz.open(pdf_path)
count = 1
for page_index in range(len(doc)):
    page = doc[page_index]
    pix = page.get_pixmap(dpi=150)
    pix.save(os.path.join(output_dir, f"sheer-{count}.jpg"))
    count += 1
    
print(f"Extracted {count-1} images from PDF.")
