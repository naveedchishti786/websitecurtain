import re
import os

path = r'src\pages\products\MattressCategory.jsx'

with open(path, 'r', encoding='utf8') as f:
    content = f.read()

new_mattress_data = """  const mattressData = {
    medical: [
      {
        id: 101,
        name: 'Medical Mattress',
        type: 'medical',
        price: 'AED 899',
        priceNum: 899,
        image: '/images/mattress-collection/mattress-1.jpg',
        rating: 4.8,
        reviews: 120,
        description: 'Advanced medical mattress for optimal spinal alignment',
        colors: ['White'],
        material: 'High Density Medical Foam',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Firm',
        features: ['Orthopedic Support', 'Breathable Cover', 'Firm Base'],
        benefits: ['Reduces Back Pain', 'Better Posture', 'Durability'],
        warranty: '5 Years'
      },
      {
        id: 102,
        name: 'Super Medical Mattress',
        type: 'medical',
        price: 'AED 1,199',
        priceNum: 1199,
        image: '/images/mattress-collection/mattress-2.jpg',
        rating: 4.9,
        reviews: 210,
        description: 'Super medical mattress for enhanced orthopedic support',
        colors: ['White', 'Navy Border'],
        material: 'Premium Medical Foam',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Extra Firm',
        features: ['Advanced Support', 'Premium Fabric', 'Edge Support'],
        benefits: ['Zero Back Pain', 'Maximum Support', 'Long Lasting'],
        warranty: '5 Years'
      },
      {
        id: 103,
        name: 'Super Medical Orthopedic Mattress',
        type: 'medical',
        price: 'AED 1,299',
        priceNum: 1299,
        image: '/images/mattress-collection/mattress-3.jpg',
        rating: 4.9,
        reviews: 185,
        description: 'Luxury orthopedic super medical mattress',
        colors: ['White', 'Grey Border'],
        material: 'Ultra Medical Foam',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Extra Firm',
        features: ['Luxury Cover', 'Orthopedic Grade', 'Comfort Layer'],
        benefits: ['Therapeutic Sleep', 'Optimal Posture', 'Premium Comfort'],
        warranty: '5 Years'
      }
    ],
    prime: [
      {
        id: 104,
        name: 'Prime Sleep Mattress',
        type: 'prime',
        price: 'AED 799',
        priceNum: 799,
        image: '/images/mattress-collection/mattress-4.jpg',
        rating: 4.7,
        reviews: 95,
        description: 'Prime sleep mattress for everyday comfort',
        colors: ['White'],
        material: 'Comfort Foam + Spring',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Medium',
        features: ['Breathable', 'Ultra Soft', 'Skin-friendly', 'Temperature Regulation'],
        benefits: ['Deep Sleep', 'All-night Comfort', 'Value for Money'],
        warranty: '3 Years'
      }
    ],
    'pocket-spring': [
      {
        id: 105,
        name: 'Supreme Silk Pocket Spring Mattress',
        type: 'pocket-spring',
        price: 'AED 1,599',
        priceNum: 1599,
        image: '/images/mattress-collection/mattress-5.jpg',
        rating: 5.0,
        reviews: 320,
        description: 'Supreme silk fabric with premium pocket springs',
        colors: ['White', 'Navy Border'],
        material: 'Pocket Spring + Silk Fabric',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Medium Firm',
        features: ['Pocket Springs', 'Silk Cover', 'Motion Isolation'],
        benefits: ['Zero Partner Disturbance', 'Luxury Feel', 'Cooling Silk'],
        warranty: '5 Years'
      },
      {
        id: 106,
        name: 'Euro Heaven Pocket Spring Mattress',
        type: 'pocket-spring',
        price: 'AED 1,699',
        priceNum: 1699,
        image: '/images/mattress-collection/mattress-6.jpg',
        rating: 4.9,
        reviews: 280,
        description: 'Euro-top heaven pocket spring for luxurious sleep',
        colors: ['White', 'Grey Cover'],
        material: 'Pocket Spring + Memory Foam',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Medium',
        features: ['Euro Top', 'Pocket Spring', 'Premium Foam Layer'],
        benefits: ['Cloud-like Comfort', 'Body Contouring', 'Durability'],
        warranty: '6 Years'
      },
      {
        id: 108,
        name: 'Sound Sleep Pocket Spring Mattress',
        type: 'pocket-spring',
        price: 'AED 1,499',
        priceNum: 1499,
        image: '/images/mattress-collection/mattress-8.jpg',
        rating: 4.8,
        reviews: 190,
        description: 'Sound sleep pocket spring mattress for uninterrupted rest',
        colors: ['White', 'Dark Blue Border'],
        material: 'Pocket Spring + Comfort Foam',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Medium Firm',
        features: ['Independent Springs', 'Edge Support', 'Soft Cover'],
        benefits: ['Quiet Sleep', 'No Sagging', 'Consistent Support'],
        warranty: '5 Years'
      }
    ],
    'bonnel-spring': [
      {
        id: 107,
        name: 'Velvet Vista Bonnel Spring Mattress',
        type: 'bonnel-spring',
        price: 'AED 1,099',
        priceNum: 1099,
        image: '/images/mattress-collection/mattress-7.jpg',
        rating: 4.7,
        reviews: 150,
        description: 'Velvet vista bonnel spring mattress with multi-layer comfort',
        colors: ['White', 'Black Border'],
        material: 'Bonnel Spring + Natural Latex',
        dimensions: 'Multiple Sizes Available',
        firmness: 'Medium',
        features: ['Soft Foam', 'Natural Latex', 'Memory Gel', 'Pocket Spring (Hybrid)'],
        benefits: ['Balanced Support', 'Temperature Control', 'Traditional Bounciness'],
        warranty: '5 Years'
      }
    ]
  };"""

# Replace mattressData
content = re.sub(r'  const mattressData = \{.*?\n  \};\n', new_mattress_data + '\n', content, flags=re.DOTALL)

# Replace filter array
content = re.sub(r"\['all', 'memory-foam', 'orthopedic', 'spring', 'latex', 'medical', 'toppers'\]", 
                 "['all', 'medical', 'prime', 'pocket-spring', 'bonnel-spring']", content)

# Replace image rendering for Grid mode
old_grid_img = r'<div className="bg-gradient-to-br from-purple-100 to-purple-50 h-48 sm:h-56 flex items-center justify-center text-7xl">\s*\{product.image\}\s*</div>'
new_grid_img = r'''<div className="bg-gradient-to-br from-purple-100 to-purple-50 h-48 sm:h-56 flex items-center justify-center text-7xl relative group overflow-hidden">
                        {product.image.startsWith('/') || product.image.startsWith('http') ? (
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                          <span className="group-hover:scale-110 transition-transform duration-500">{product.image}</span>
                        )}
                      </div>'''
content = re.sub(old_grid_img, new_grid_img, content, flags=re.DOTALL)

# Replace image rendering for List mode
old_list_img = r'<div className="bg-gradient-to-br from-purple-100 to-purple-50 w-full sm:w-48 lg:w-64 h-48 flex-shrink-0 flex items-center justify-center text-6xl">\s*\{product.image\}\s*</div>'
new_list_img = r'''<div className="bg-gradient-to-br from-purple-100 to-purple-50 w-full sm:w-48 lg:w-64 h-48 flex-shrink-0 flex items-center justify-center text-6xl relative group overflow-hidden">
                        {product.image.startsWith('/') || product.image.startsWith('http') ? (
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                          <span className="group-hover:scale-110 transition-transform duration-500">{product.image}</span>
                        )}
                      </div>'''
content = re.sub(old_list_img, new_list_img, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf8') as f:
    f.write(content)

print("MattressCategory updated successfully.")
