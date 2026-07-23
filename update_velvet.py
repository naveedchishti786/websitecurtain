import re

with open('src/pages/products/CurtainCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

velvet_data = """    velvet: [
        {
          id: 51,
          name: 'Velvet + Blackout Curtain',
          type: 'velvet',
          image: '/images/velvet-curtains/velvet-1.jpg',
          rating: 4.9,
          reviews: 120,
          description: 'Premium Velvet + Blackout Curtain for ultimate luxury and darkness.',
          colors: ['Pink', 'Customizable'],
          sizePrices: { '100cm': 183, '150cm': 275, '200cm': 366, '250cm': 458, '300cm': 549 },
          price: 'AED 549',
          priceNum: 549
        },
        {
          id: 52,
          name: 'Velvet + Blackout Curtain',
          type: 'velvet',
          image: '/images/velvet-curtains/velvet-2.jpg',
          rating: 4.8,
          reviews: 105,
          description: 'Premium Velvet + Blackout Curtain in various colors.',
          colors: ['Multiple Colors', 'Customizable'],
          sizePrices: { '100cm': 183, '150cm': 275, '200cm': 366, '250cm': 458, '300cm': 549 },
          price: 'AED 549',
          priceNum: 549
        },
        {
          id: 53,
          name: 'Velvet + Blackout Curtain',
          type: 'velvet',
          image: '/images/velvet-curtains/velvet-3.jpg',
          rating: 4.9,
          reviews: 130,
          description: 'Luxurious Velvet + Blackout Curtain.',
          colors: ['Brown', 'Customizable'],
          sizePrices: { '100cm': 183, '150cm': 275, '200cm': 366, '250cm': 458, '300cm': 549 },
          price: 'AED 549',
          priceNum: 549
        },
        {
          id: 54,
          name: 'Velvet Wavy Non-Blackout Curtain',
          type: 'velvet',
          image: '/images/velvet-curtains/velvet-4.jpg',
          rating: 4.7,
          reviews: 90,
          description: 'Elegant Velvet Wavy Non-Blackout Curtain.',
          colors: ['Orange', 'Customizable'],
          sizePrices: { '100cm': 216, '150cm': 325, '200cm': 433, '250cm': 541, '300cm': 649 },
          price: 'AED 649',
          priceNum: 649
        },
        {
          id: 55,
          name: 'Velvet Wavy + Blackout Curtain',
          type: 'velvet',
          image: '/images/velvet-curtains/velvet-5.jpg',
          rating: 4.9,
          reviews: 150,
          description: 'Premium Velvet Wavy + Blackout Curtain.',
          colors: ['Dark Red', 'Customizable'],
          sizePrices: { '100cm': 233, '150cm': 350, '200cm': 466, '250cm': 583, '300cm': 699 },
          price: 'AED 699',
          priceNum: 699
        },
        {
          id: 56,
          name: 'Velvet Wavy + Blackout Curtain',
          type: 'velvet',
          image: '/images/velvet-curtains/velvet-6.jpg',
          rating: 4.8,
          reviews: 110,
          description: 'Premium Velvet Wavy + Blackout Curtain with beautiful drape.',
          colors: ['Rose', 'Customizable'],
          sizePrices: { '100cm': 233, '150cm': 350, '200cm': 466, '250cm': 583, '300cm': 699 },
          price: 'AED 699',
          priceNum: 699
        }
    ],"""

# Replace the velvet array
content = re.sub(r'velvet: \[\s*\{[\s\S]*?type: \'velvet\'[\s\S]*?\}\s*\],', velvet_data, content)

with open('src/pages/products/CurtainCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
