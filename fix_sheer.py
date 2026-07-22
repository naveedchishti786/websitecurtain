import fitz
import os
from PIL import Image
import io

pdf_path = r"C:\Users\DELL\.gemini\antigravity\brain\5b8ac2b5-7855-4d49-866a-da0113a2533f\.user_uploaded\media__1784760336906.pdf"
output_dir = r"public\images\sheer-curtains"

doc = fitz.open(pdf_path)
all_images = []

for page_index in range(len(doc)):
    page = doc[page_index]
    for img in page.get_images(full=True):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        try:
            pil_img = Image.open(io.BytesIO(image_bytes))
            area = pil_img.size[0] * pil_img.size[1]
            all_images.append({
                "bytes": image_bytes,
                "area": area
            })
        except:
            pass

# Sort by area descending and take top 14
all_images.sort(key=lambda x: x["area"], reverse=True)
top_14 = all_images[:14]

count = 1
for img_data in top_14:
    with open(os.path.join(output_dir, f"sheer-{count}.jpg"), "wb") as f:
        f.write(img_data["bytes"])
    print(f"Saved sheer-{count}.jpg with area {img_data['area']}")
    count += 1
