import re

with open('src/pages/Gallery.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

velvet_gallery_data = """
      {
        id: 201,
        category: 'curtains',
        title: 'Velvet + Blackout Curtain',
        description: 'Premium Velvet Curtain in Pink',
        image: '/images/velvet-curtains/velvet-1.jpg',
      },
      {
        id: 202,
        category: 'curtains',
        title: 'Velvet + Blackout Curtain',
        description: 'Premium Velvet Curtain Multiple Colors',
        image: '/images/velvet-curtains/velvet-2.jpg',
      },
      {
        id: 203,
        category: 'curtains',
        title: 'Velvet + Blackout Curtain',
        description: 'Luxurious Velvet Curtain in Brown',
        image: '/images/velvet-curtains/velvet-3.jpg',
      },
      {
        id: 204,
        category: 'curtains',
        title: 'Velvet Wavy Non-Blackout Curtain',
        description: 'Elegant Velvet Wavy Curtain in Orange',
        image: '/images/velvet-curtains/velvet-4.jpg',
      },
      {
        id: 205,
        category: 'curtains',
        title: 'Velvet Wavy + Blackout Curtain',
        description: 'Premium Velvet Wavy Curtain in Dark Red',
        image: '/images/velvet-curtains/velvet-5.jpg',
      },
      {
        id: 206,
        category: 'curtains',
        title: 'Velvet Wavy + Blackout Curtain',
        description: 'Premium Velvet Wavy Curtain in Rose',
        image: '/images/velvet-curtains/velvet-6.jpg',
      },
"""

# Insert right after `const galleryItems = [`
content = content.replace("const galleryItems = [", "const galleryItems = [\n" + velvet_gallery_data)

with open('src/pages/Gallery.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
