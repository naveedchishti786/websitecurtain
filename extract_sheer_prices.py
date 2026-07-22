import fitz
import re

# File with the text and prices
pdf_path = r"C:\Users\DELL\.gemini\antigravity\brain\5b8ac2b5-7855-4d49-866a-da0113a2533f\.user_uploaded\media__1784761524021.pdf"

doc = fitz.open(pdf_path)
extracted_data = []

for page_index in range(len(doc)):
    page = doc[page_index]
    text = page.get_text()
    
    # Simple heuristic to grab the name and price
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    
    current_item = {}
    for line in lines:
        if "curtain" in line.lower():
            current_item['name'] = line
        elif "aed" in line.lower():
            match = re.search(r'(\d+)\s*aed', line.lower())
            if match:
                current_item['price'] = int(match.group(1))
                extracted_data.append(current_item)
                current_item = {}

for item in extracted_data:
    print(f"Name: {item.get('name')}, Price: AED {item.get('price')}")
