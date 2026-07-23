with open('src/pages/products/CurtainCategory.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix blackout array: skip i === 3
old_blackout = """    blackout: Array.from({ length: 25 }, (_, i) => ({
        id: 101 + i,
        name: i === 3 ? 'Premium Velvet Pleated Curtain' : `Premium Blackout Curtain ${i + 1}`,
        type: i === 3 ? 'velvet' : 'blackout',
        price: `AED ${250 + (i % 5) * 20}`,
        sizePrices: i === 3 ? { '100cm': 103, '150cm': 155, '200cm': 206, '250cm': 258, '300cm': 310 } : undefined,
        image: `/images/blackout-curtains/blackout-${i + 1}.jpg`,
        rating: Number((4.5 + (i % 6) * 0.1).toFixed(1)),
        description: '100% Light Blocking, Thermal Insulated',
        colors: ['Customizable']
      })),"""

new_blackout = """    blackout: Array.from({ length: 25 }, (_, i) => ({
        id: 101 + i,
        name: `Premium Blackout Curtain ${i + 1}`,
        type: 'blackout',
        price: `AED ${250 + (i % 5) * 20}`,
        image: `/images/blackout-curtains/blackout-${i + 1}.jpg`,
        rating: Number((4.5 + (i % 6) * 0.1).toFixed(1)),
        description: '100% Light Blocking, Thermal Insulated',
        colors: ['Customizable']
      })).filter((_, i) => i !== 3),"""

content = content.replace(old_blackout, new_blackout)

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
        }"""

content = content.replace("priceNum: 699\n        }\n    ],", "priceNum: 699\n        }" + velvet_addition + "\n    ],")

with open('src/pages/products/CurtainCategory.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
