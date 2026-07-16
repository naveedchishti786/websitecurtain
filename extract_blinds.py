import fitz
import os
import glob

output_dir = "public/images/blind-curtains"
pdf_files = glob.glob(os.path.join(output_dir, "*.pdf"))

if not pdf_files:
    print("No PDF files found in " + output_dir)
else:
    pdf_path = pdf_files[0]
    print(f"Extracting images from {pdf_path}")
    doc = fitz.open(pdf_path)
    count = 1
    for page_index in range(len(doc)):
        page = doc[page_index]
        pix = page.get_pixmap(dpi=150)
        pix.save(os.path.join(output_dir, f"blind-{count}.jpg"))
        count += 1
    print(f"Extracted {count-1} images from PDF.")
