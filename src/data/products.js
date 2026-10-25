export const categories = {
  curtains: {
    id: 'curtains',
    name: 'Curtains',
    description: 'Premium quality curtains with professional fitting services',
    image: '/images/curtains/category.jpg'
  },
  furniture: {
    id: 'furniture',
    name: 'Furniture',
    description: 'Quality furniture including beds, sofas, and more',
    image: '/images/furniture/category.jpg'
  },
  mattress: {
    id: 'mattress',
    name: 'Mattress & Bedding',
    description: 'Comfortable mattresses, pillows, and blankets',
    image: '/images/mattress/category.jpg'
  },
  pillows: {
    id: 'pillows',
    name: 'Pillows & Neck Care',
    description: 'Cervical orthopedic memory foam pillows for healthy sleep',
    image: '/images/pillows/pillow-8006-pair.png'
  }
};

export const products = {
  curtains: [
    {
      id: 1,
      name: "Luxury Velvet Curtains",
      description: "Premium velvet curtains with blackout lining",
      price: 2999,
      image: "/images/curtains/velvet.jpg",
      features: ["Blackout", "Thermal Insulated", "Machine Washable"],
      category: "curtains"
    },
    {
      id: 2,
      name: "Sheer Elegance Curtains",
      description: "Light filtering sheer curtains for elegant look",
      price: 1499,
      image: "/images/curtains/sheer.jpg",
      features: ["Light Filtering", "Easy Care", "Multiple Colors"],
      category: "curtains"
    },
    {
      id: 3,
      name: "American Style Sable Fabric Sheer curtain",
      description: "Luxurious Sable fabric sheer with classic American design.",
      price: 580,
      image: "/images/sheer-curtains/sheer-.jpg?v=2",
      features: ["Sable Fabric", "Classic American Design", "Available in Natural & Beige", "Rating: 4.9"],
      colors: ["Natural", "Beige"],
      rating: 4.9,
      category: "curtains"
    },
    // Add more curtain products
  ],
  furniture: [
    {
      id: 11,
      name: "Modern L-Shape Sofa",
      description: "Contemporary L-shape sofa with premium fabric",
      price: 45999,
      image: "/images/furniture/sofa.jpg",
      features: ["7 Seater", "Washable Covers", "5 Year Warranty"],
      category: "furniture"
    },
    {
      id: 12,
      name: "King Size Bed",
      description: "Elegant king size bed with storage",
      price: 35999,
      image: "/images/furniture/bed.jpg",
      features: ["Storage", "Solid Wood", "Premium Finish"],
      category: "furniture"
    },
    // Add more furniture products
  ],
  mattress: [
    {
      id: 21,
      name: "Orthopedic Mattress",
      description: "Memory foam orthopedic mattress",
      price: 18999,
      image: "/images/mattress/ortho.jpg",
      features: ["Memory Foam", "10 Year Warranty", "Anti-Dust Mite"],
      category: "mattress"
    },
    {
      id: 22,
      name: "Premium Pillow Set",
      description: "Set of 2 premium fiber pillows",
      price: 1299,
      image: "/images/mattress/pillow.jpg",
      features: ["Soft & Fluffy", "Washable", "Hypoallergenic"],
      category: "mattress"
    },
    // Add more mattress/bedding products
  ],
  pillows: [
    {
      id: 31,
      name: "Cervical Neck Care Pillow (Model 8006)",
      description: "The balance between softness and support. Eco-friendly comfort memory foam pillow core.",
      price: 60,
      image: "/images/pillows/pillow-8006-studio-pro.jpg",
      features: ["Model 8006", "SIZE: 60*35*9/11cm", "Eco-friendly comfort pillow core", "Healthy sleep resources", "Dual Height 9/11cm"],
      category: "pillows",
      rating: 4.9
    },
    {
      id: 32,
      name: "4D Skin-Friendly Contour Memory Pillow",
      description: "Italian PostureCare Technology with water ripple memory foam core and cooling ice-silk fabric.",
      price: 89,
      image: "/images/pillows/pillow-4d-studio-pro.jpg",
      features: ["Italian PostureCare Technology", "SIZE: 60*35*9/11cm", "Ice Silk & Water Ripple Design", "Cool Gel Honeycomb Insert", "Non-Allergenic & Odourless"],
      category: "pillows",
      rating: 5.0
    }
  ]
};

export const services = [
  {
    id: 1,
    title: "Curtain Fitting",
    description: "Professional curtain installation and fitting services",
    icon: "🪟",
    features: ["Free Measurement", "Expert Installation", "1 Year Service Warranty"]
  },
  {
    id: 2,
    title: "Custom Curtains",
    description: "Made-to-measure curtains tailored to your needs",
    icon: "✂️",
    features: ["Custom Sizes", "Fabric Selection", "Design Consultation"]
  },
  {
    id: 3,
    title: "Furniture Assembly",
    description: "Professional furniture assembly and setup",
    icon: "🛋️",
    features: ["Quick Assembly", "Placement Service", "Quality Check"]
  },
  {
    id: 4,
    title: "Free Home Consultation",
    description: "Visit our experts for personalized advice",
    icon: "🏠",
    features: ["Design Ideas", "Space Planning", "Budget Consultation"]
  }
];
