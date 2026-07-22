import fitz
import os
import io
import pytesseract
from PIL import Image

pdf_path = r"C:\Users\DELL\.gemini\antigravity\brain\5b8ac2b5-7855-4d49-866a-da0113a2533f\.user_uploaded\media__1784761524021.pdf"
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

doc = fitz.open(pdf_path)

for page_index in range(len(doc)):
    page = doc[page_index]
    print(f"--- PAGE {page_index+1} ---")
    pix = page.get_pixmap()
    img_data = pix.tobytes("png")
    img = Image.open(io.BytesIO(img_data))
    
    try:
        text = pytesseract.image_to_string(img)
        print(text.strip())
    except Exception as e:
        print("OCR Failed:", e)
