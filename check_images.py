from PIL import Image
import os
def check_dir(d):
    print(f"\nChecking {d}:")
    if not os.path.exists(d): return
    for f in os.listdir(d):
        if f.endswith('.jpg'):
            try:
                img = Image.open(os.path.join(d, f))
                print(f"{f}: {img.size}")
            except Exception as e:
                print(f"{f}: error {e}")

check_dir('public/images/sheer-curtains')
check_dir('public/images/gallery')
