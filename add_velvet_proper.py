import re

with open('src/pages/products/CurtainCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

velvet_addition = """        ,
        {
          id: 104,
          name: 'Premium Velvet Pleated Curtain',
          type: 'velvet',
          image: '/images/blackout-curtains/blackout-4.jpg',
          rating: 4.8,
          reviews: 156,
          description: '100% Light Blocking, Thermal Insulated',
          colors: ['Customizable'],
          sizePrices: { '100cm': 103, '150cm': 155, '200cm': 206, '250cm': 258, '300cm': 310 },
          price: 'AED 310',
          priceNum: 310
        }
    ]
  };"""

# Replace the closing of curtainData
content = re.sub(r'\]\s*\}\s*;\s*const allProducts', velvet_addition + '\n  const allProducts', content)

with open('src/pages/products/CurtainCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
