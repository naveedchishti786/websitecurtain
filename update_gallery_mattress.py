import re

path = r'src\pages\Gallery.jsx'

with open(path, 'r', encoding='utf8') as f:
    content = f.read()

# Add 'mattresses' to categories
old_categories = r"{ id: 'beds', name: 'Beds', icon: <BedDouble className=\"w-5 h-5\" /> },"
new_categories = r"""{ id: 'beds', name: 'Beds', icon: <BedDouble className="w-5 h-5" /> },
    { id: 'mattresses', name: 'Mattresses', icon: <BedDouble className="w-5 h-5" /> },"""
content = content.replace(old_categories, new_categories)

# Add mattress items to galleryItems
mattresses_data = """
    // MATTRESSES
    {
      id: 3001,
      category: 'mattresses',
      title: 'Medical Mattress',
      description: 'Advanced medical mattress for optimal spinal alignment.',
      image: '/images/mattress-collection/mattress-1.jpg',
      location: 'Dubai',
      year: 2024
    },
    {
      id: 3002,
      category: 'mattresses',
      title: 'Super Medical Mattress',
      description: 'Super medical mattress for enhanced orthopedic support.',
      image: '/images/mattress-collection/mattress-2.jpg',
      location: 'Dubai',
      year: 2024
    },
    {
      id: 3003,
      category: 'mattresses',
      title: 'Super Medical Orthopedic Mattress',
      description: 'Luxury orthopedic super medical mattress.',
      image: '/images/mattress-collection/mattress-3.jpg',
      location: 'Dubai',
      year: 2024
    },
    {
      id: 3004,
      category: 'mattresses',
      title: 'Prime Sleep Mattress',
      description: 'Prime sleep mattress for everyday comfort.',
      image: '/images/mattress-collection/mattress-4.jpg',
      location: 'Dubai',
      year: 2024
    },
    {
      id: 3005,
      category: 'mattresses',
      title: 'Supreme Silk Pocket Spring Mattress',
      description: 'Supreme silk fabric with premium pocket springs.',
      image: '/images/mattress-collection/mattress-5.jpg',
      location: 'Dubai',
      year: 2024
    },
    {
      id: 3006,
      category: 'mattresses',
      title: 'Euro Heaven Pocket Spring Mattress',
      description: 'Euro-top heaven pocket spring for luxurious sleep.',
      image: '/images/mattress-collection/mattress-6.jpg',
      location: 'Dubai',
      year: 2024
    },
    {
      id: 3007,
      category: 'mattresses',
      title: 'Velvet Vista Bonnel Spring Mattress',
      description: 'Velvet vista bonnel spring mattress with multi-layer comfort.',
      image: '/images/mattress-collection/mattress-7.jpg',
      location: 'Dubai',
      year: 2024
    },
    {
      id: 3008,
      category: 'mattresses',
      title: 'Sound Sleep Pocket Spring Mattress',
      description: 'Sound sleep pocket spring mattress for uninterrupted rest.',
      image: '/images/mattress-collection/mattress-8.jpg',
      location: 'Dubai',
      year: 2024
    },

    // COMPLETE ROOMS
"""

# replace "    // COMPLETE ROOMS" with the mattresses_data
content = content.replace("    // COMPLETE ROOMS\n", mattresses_data)

with open(path, 'w', encoding='utf8') as f:
    f.write(content)

print("Gallery.jsx updated successfully.")
