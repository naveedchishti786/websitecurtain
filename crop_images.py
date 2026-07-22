from PIL import Image
import os

directory = 'public/images/linen-blackout-curtains'

for filename in os.listdir(directory):
    if filename.endswith(".jpg"):
        filepath = os.path.join(directory, filename)
        img = Image.open(filepath)
        width, height = img.size
        
        # Crop the left 50% of the image
        left = 0
        top = 0
        right = width // 2
        bottom = height
        
        cropped_img = img.crop((left, top, right, bottom))
        cropped_img.save(filepath)
        print(f"Cropped {filename}")
