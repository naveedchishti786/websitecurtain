import fitz
import os

pdf_path = r"C:\Users\DELL\Desktop\Dressing with Mirror.pdf"
output_dir = "public/images/dressing-mirror"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

print(f"Extracting images from {pdf_path}")
doc = fitz.open(pdf_path)
count = 1
for page_index in range(len(doc)):
    page = doc[page_index]
    pix = page.get_pixmap(dpi=150)
    pix.save(os.path.join(output_dir, f"dressing-{count}.jpg"))
    count += 1
print(f"Extracted {count-1} images from PDF.")
