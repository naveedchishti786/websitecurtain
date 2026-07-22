import fitz
import re

# File with the text and prices
pdf_path = r"C:\Users\DELL\.gemini\antigravity\brain\5b8ac2b5-7855-4d49-866a-da0113a2533f\.user_uploaded\media__1784761524021.pdf"

doc = fitz.open(pdf_path)

for page_index in range(len(doc)):
    page = doc[page_index]
    text = page.get_text()
    print(f"--- PAGE {page_index+1} ---")
    print(text)
