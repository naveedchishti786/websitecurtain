import fitz
import os

pdf_path = r"C:\Users\DELL\.gemini\antigravity\brain\4ce6365d-c2f0-4e60-856b-b433e75366b0\.user_uploaded\media__1784838494236.pdf"
out_dir = r"c:\Users\DELL\Desktop\websitecurtain\temp_img"

doc = fitz.open(pdf_path)
img_count = 0
for i in range(len(doc)):
    page = doc[i]
    images = page.get_images(full=True)
    for img_idx, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        image_ext = base_image["ext"]
        img_count += 1
        with open(os.path.join(out_dir, f"img_{img_count}.{image_ext}"), "wb") as f:
            f.write(image_bytes)
print(f"Extracted {img_count} images.")
