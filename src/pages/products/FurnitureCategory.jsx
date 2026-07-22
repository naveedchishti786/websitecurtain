import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, Heart, ShoppingCart, Filter, Grid, List, Truck, Shield, RotateCcw } from 'lucide-react';

const FurnitureCategory = () => {
  const { type } = useParams();
  const [selectedFilter, setSelectedFilter] = useState(type || 'all');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sortBy, setSortBy] = useState('popular');

  // Comprehensive Furniture Data
  const furnitureData = {
    'living-room': [
      {
        id: 1,
        name: 'Luxury Living Room Set - 7 Seater',
        type: 'living-room',
        price: 'AED 4,999',
        priceNum: 4999,
        image: '🛋️',
        rating: 4.9,
        reviews: 345,
        description: 'Premium living room set with sofa, loveseat, and chairs',
        colors: ['Black', 'Grey', 'Beige', 'Cream', 'Navy'],
        material: 'Fabric + Solid Wood Frame',
        dimensions: '300cm x 200cm',
        features: ['7-Seater Configuration', 'Cushioned Comfort', 'Modern Design', 'Easy Assembly'],
        warranty: '3 Years'
      },
      {
        id: 2,
        name: 'Modern Living Room Set - Sectional',
        type: 'living-room',
        price: 'AED 3,999',
        priceNum: 3999,
        image: '🛋️',
        rating: 4.8,
        reviews: 267,
        description: 'Contemporary sectional living room set',
        colors: ['Grey', 'Black', 'Brown', 'White'],
        material: 'Microfiber + Wood',
        dimensions: '280cm x 180cm',
        features: ['Sectional Design', 'Storage Underneath', 'Recliners', 'Stain Resistant']
      },
      {
        id: 3,
        name: 'Classic Living Room Collection',
        type: 'living-room',
        price: 'AED 2,999',
        priceNum: 2999,
        image: '🛋️',
        rating: 4.7,
        reviews: 198,
        description: 'Traditional living room furniture set',
        colors: ['Burgundy', 'Navy', 'Charcoal', 'Brown'],
        material: 'Leather + Wood',
        dimensions: '250cm x 160cm',
        features: ['Leather Upholstery', 'Timeless Design', 'Spacious', 'Durable']
      },
      {
        id: 4,
        name: 'Contemporary Living Room Suite',
        type: 'living-room',
        price: 'AED 5,499',
        priceNum: 5499,
        image: '🛋️',
        rating: 4.9,
        reviews: 312,
        description: 'Ultra-modern living room with smart features',
        colors: ['Black', 'Grey', 'White'],
        material: 'Premium Fabric + Metal',
        dimensions: '320cm x 210cm',
        features: ['USB Charging', 'LED Lighting', 'Electric Recliners', 'Smart Control']
      },
      {
        id: 5,
        name: 'Elegant Living Room Set',
        type: 'living-room',
        price: 'AED 3,599',
        priceNum: 3599,
        image: '🛋️',
        rating: 4.8,
        reviews: 234,
        description: 'Elegant and comfortable living room ensemble',
        colors: ['Beige', 'Cream', 'Light Grey'],
        material: 'Velvet + Wood',
        dimensions: '270cm x 190cm',
        features: ['Velvet Cushions', 'Stylish Design', 'Comfortable', 'Premium Quality']
      },
      {
        id: 6,
        name: 'Minimalist Living Room Set',
        type: 'living-room',
        price: 'AED 2,499',
        priceNum: 2499,
        image: '🛋️',
        rating: 4.6,
        reviews: 167,
        description: 'Simple and sleek living room furniture',
        colors: ['White', 'Grey', 'Black'],
        material: 'Linen + Wood',
        dimensions: '240cm x 150cm',
        features: ['Clean Lines', 'Minimalist Style', 'Space Efficient', 'Affordable']
      }
    ],
    'dining': [
      {
        id: 7,
        name: 'Luxury Dining Set - 8 Seater',
        type: 'dining',
        price: 'AED 3,999',
        priceNum: 3999,
        image: '🪑',
        rating: 4.9,
        reviews: 289,
        description: 'Premium dining table with 8 upholstered chairs',
        colors: ['Walnut', 'Oak', 'Mahogany', 'Natural'],
        material: 'Solid Wood + Marble Top',
        dimensions: '200cm x 100cm',
        features: ['Marble Top', '8 Chairs Included', 'Solid Wood', 'Extendable']
      },
      {
        id: 8,
        name: 'Modern Dining Set - Glass Top',
        type: 'dining',
        price: 'AED 2,999',
        priceNum: 2999,
        image: '🪑',
        rating: 4.8,
        reviews: 234,
        description: 'Contemporary glass top dining set',
        colors: ['Black', 'Chrome', 'Natural'],
        material: 'Glass + Metal Frame',
        dimensions: '180cm x 90cm',
        features: ['Tempered Glass', 'Metal Base', 'Modern Style', '6 Chairs']
      },
      {
        id: 9,
        name: 'Classic Wooden Dining Table',
        type: 'dining',
        price: 'AED 2,499',
        priceNum: 2499,
        image: '🪑',
        rating: 4.7,
        reviews: 201,
        description: 'Traditional wooden dining set',
        colors: ['Teak', 'Walnut', 'Oak'],
        material: 'Solid Hardwood',
        dimensions: '180cm x 90cm',
        features: ['Hand-Crafted', 'Timeless Design', 'Durable', '6-8 Seater']
      },
      {
        id: 10,
        name: 'Contemporary Dining Collection',
        type: 'dining',
        price: 'AED 4,499',
        priceNum: 4499,
        image: '🪑',
        rating: 4.9,
        reviews: 312,
        description: 'Upscale contemporary dining furniture',
        colors: ['Grey', 'White', 'Black'],
        material: 'Wood + Metal + Leather',
        dimensions: '210cm x 110cm',
        features: ['Leather Chairs', 'Modern Design', 'Premium Quality', '8 Seater']
      },
      {
        id: 11,
        name: 'Compact Dining Set - 4 Seater',
        type: 'dining',
        price: 'AED 1,299',
        priceNum: 1299,
        image: '🪑',
        rating: 4.6,
        reviews: 156,
        description: 'Space-saving dining set for small spaces',
        colors: ['Black', 'White', 'Natural'],
        material: 'Wood',
        dimensions: '120cm x 80cm',
        features: ['Space Saving', 'Easy Assembly', 'Modern Design', '4 Chairs']
      },
      {
        id: 12,
        name: 'Round Dining Table Set',
        type: 'dining',
        price: 'AED 2,799',
        priceNum: 2799,
        image: '🪑',
        rating: 4.8,
        reviews: 223,
        description: 'Elegant round dining table with chairs',
        colors: ['Walnut', 'Oak', 'White'],
        material: 'Solid Wood',
        dimensions: 'Diameter 120cm',
        features: ['Round Shape', 'Elegant Design', 'Space Efficient', '6 Chairs']
      }
    ],
    'sofa': [
      {
        id: 13,
        name: 'Premium Leather Sofa',
        type: 'sofa',
        price: 'AED 2,999',
        priceNum: 2999,
        image: '🛋️',
        rating: 4.9,
        reviews: 334,
        description: 'Luxurious genuine leather sofa',
        colors: ['Black', 'Brown', 'White', 'Cognac'],
        material: 'Genuine Leather + Hardwood',
        dimensions: '220cm x 100cm',
        features: ['Genuine Leather', 'Comfortable', 'Durable', 'Premium Feel']
      },
      {
        id: 14,
        name: 'Modern Fabric Sofa',
        type: 'sofa',
        price: 'AED 1,999',
        priceNum: 1999,
        image: '🛋️',
        rating: 4.8,
        reviews: 267,
        description: 'Contemporary fabric upholstered sofa',
        colors: ['Grey', 'Beige', 'Navy', 'Charcoal'],
        material: 'Premium Fabric + Wood',
        dimensions: '200cm x 90cm',
        features: ['Stain Resistant', 'Modern Design', 'Comfortable', 'Easy Clean']
      },
      {
        id: 15,
        name: 'Corner Sofa Set',
        type: 'sofa',
        price: 'AED 2,499',
        priceNum: 2499,
        image: '🛋️',
        rating: 4.8,
        reviews: 289,
        description: 'L-shaped corner sofa for maximum seating',
        colors: ['Grey', 'Black', 'Brown'],
        material: 'Microfiber + Metal',
        dimensions: '250cm x 200cm',
        features: ['L-Shape Design', 'Spacious', 'Storage', 'USB Ports']
      },
      {
        id: 16,
        name: 'Reclining Sofa',
        type: 'sofa',
        price: 'AED 3,499',
        priceNum: 3499,
        image: '🛋️',
        rating: 4.9,
        reviews: 312,
        description: 'Electric reclining sofa with massage',
        colors: ['Black', 'Brown', 'Grey'],
        material: 'Leather + Electric Motor',
        dimensions: '210cm x 110cm',
        features: ['Electric Recliner', 'Massage Function', 'USB Charging', 'Premium Quality']
      },
      {
        id: 17,
        name: 'Sleeper Sofa',
        type: 'sofa',
        price: 'AED 1,799',
        priceNum: 1799,
        image: '🛋️',
        rating: 4.7,
        reviews: 198,
        description: 'Sofa with hidden bed functionality',
        colors: ['Grey', 'Beige', 'Navy'],
        material: 'Fabric + Wood',
        dimensions: '190cm x 95cm',
        features: ['Convertible Bed', 'Storage Drawer', 'Easy Conversion', 'Multi-functional']
      },
      {
        id: 18,
        name: 'Velvet Sofa Collection',
        type: 'sofa',
        price: 'AED 2,699',
        priceNum: 2699,
        image: '🛋️',
        rating: 4.9,
        reviews: 245,
        description: 'Luxurious velvet upholstered sofa',
        colors: ['Burgundy', 'Navy', 'Emerald', 'Rose Gold'],
        material: 'Premium Velvet + Wood',
        dimensions: '210cm x 100cm',
        features: ['Velvet Upholstery', 'Elegant Design', 'Comfortable', 'Stylish']
      }
    ],
    'coffee-tables': [
      {
        id: 19,
        name: 'Modern Glass Coffee Table',
        type: 'coffee-tables',
        price: 'AED 699',
        priceNum: 699,
        image: '🪟',
        rating: 4.7,
        reviews: 178,
        description: 'Sleek glass top coffee table',
        colors: ['Black', 'Chrome', 'Natural'],
        material: 'Tempered Glass + Metal',
        dimensions: '120cm x 60cm x 45cm',
        features: ['Tempered Glass', 'Metal Base', 'Modern Style', 'Easy Clean']
      },
      {
        id: 20,
        name: 'Wooden Coffee Table',
        type: 'coffee-tables',
        price: 'AED 599',
        priceNum: 599,
        image: '🪟',
        rating: 4.6,
        reviews: 134,
        description: 'Classic wooden coffee table',
        colors: ['Walnut', 'Oak', 'Natural'],
        material: 'Solid Wood',
        dimensions: '110cm x 60cm x 45cm',
        features: ['Solid Wood', 'Timeless Design', 'Durable', 'Affordable']
      },
      {
        id: 21,
        name: 'Storage Coffee Table',
        type: 'coffee-tables',
        price: 'AED 799',
        priceNum: 799,
        image: '🪟',
        rating: 4.8,
        reviews: 212,
        description: 'Coffee table with built-in storage',
        colors: ['Grey', 'White', 'Brown'],
        material: 'Wood + Metal',
        dimensions: '100cm x 60cm x 50cm',
        features: ['Storage Drawer', 'Multi-functional', 'Modern Design', 'Space Saving']
      },
      {
        id: 22,
        name: 'Marble Top Coffee Table',
        type: 'coffee-tables',
        price: 'AED 1,299',
        priceNum: 1299,
        image: '🪟',
        rating: 4.9,
        reviews: 267,
        description: 'Elegant marble top coffee table',
        colors: ['White Marble', 'Black Marble', 'Grey Marble'],
        material: 'Marble + Wood',
        dimensions: '130cm x 70cm x 45cm',
        features: ['Marble Top', 'Premium Design', 'Elegant', 'Durable']
      },
      {
        id: 23,
        name: 'Industrial Coffee Table',
        type: 'coffee-tables',
        price: 'AED 899',
        priceNum: 899,
        image: '🪟',
        rating: 4.7,
        reviews: 189,
        description: 'Industrial style coffee table',
        colors: ['Black', 'Natural Wood'],
        material: 'Reclaimed Wood + Metal',
        dimensions: '120cm x 60cm x 45cm',
        features: ['Industrial Style', 'Rustic Design', 'Sturdy', 'Unique']
      },
      {
        id: 24,
        name: 'Minimalist Coffee Table',
        type: 'coffee-tables',
        price: 'AED 499',
        priceNum: 499,
        image: '🪟',
        rating: 4.6,
        reviews: 145,
        description: 'Simple minimalist coffee table',
        colors: ['White', 'Black', 'Grey'],
        material: 'MDF',
        dimensions: '100cm x 50cm x 40cm',
        features: ['Minimalist Design', 'Budget Friendly', 'Easy Assembly', 'Clean Lines']
      }
    ],
    'tv-units': [
      {
        id: 25,
        name: 'Modern TV Unit 1',
        type: 'tv-units',
        price: 'AED 1,150',
        priceNum: 1150,
        image: '/images/tv-units/tv-unit-1.jpg',
        rating: 4.8,
        reviews: 205,
        description: 'Sleek and modern TV unit with storage.',
        colors: ['Walnut', 'White', 'Black'],
        material: 'MDF + Wood',
        dimensions: 'Custom',
        features: ['Modern Design', 'Storage Shelves', 'Cable Management', 'Durable']
      },
      {
        id: 26,
        name: 'Modern TV Unit 2',
        type: 'tv-units',
        price: 'AED 1,300',
        priceNum: 1300,
        image: '/images/tv-units/tv-unit-2.jpg',
        rating: 4.8,
        reviews: 210,
        description: 'Sleek and modern TV unit with storage.',
        colors: ['Walnut', 'White', 'Black'],
        material: 'MDF + Wood',
        dimensions: 'Custom',
        features: ['Modern Design', 'Storage Shelves', 'Cable Management', 'Durable']
      },
      {
        id: 27,
        name: 'Modern TV Unit 3',
        type: 'tv-units',
        price: 'AED 1,450',
        priceNum: 1450,
        image: '/images/tv-units/tv-unit-3.jpg',
        rating: 4.8,
        reviews: 215,
        description: 'Sleek and modern TV unit with storage.',
        colors: ['Walnut', 'White', 'Black'],
        material: 'MDF + Wood',
        dimensions: 'Custom',
        features: ['Modern Design', 'Storage Shelves', 'Cable Management', 'Durable']
      },
      {
        id: 28,
        name: 'Modern TV Unit 4',
        type: 'tv-units',
        price: 'AED 1,600',
        priceNum: 1600,
        image: '/images/tv-units/tv-unit-4.jpg',
        rating: 4.8,
        reviews: 220,
        description: 'Sleek and modern TV unit with storage.',
        colors: ['Walnut', 'White', 'Black'],
        material: 'MDF + Wood',
        dimensions: 'Custom',
        features: ['Modern Design', 'Storage Shelves', 'Cable Management', 'Durable']
      },
      {
        id: 29,
        name: 'Modern TV Unit 5',
        type: 'tv-units',
        price: 'AED 1,750',
        priceNum: 1750,
        image: '/images/tv-units/tv-unit-5.jpg',
        rating: 4.8,
        reviews: 225,
        description: 'Sleek and modern TV unit with storage.',
        colors: ['Walnut', 'White', 'Black'],
        material: 'MDF + Wood',
        dimensions: 'Custom',
        features: ['Modern Design', 'Storage Shelves', 'Cable Management', 'Durable']
      },
      {
        id: 30,
        name: 'Modern TV Unit 6',
        type: 'tv-units',
        price: 'AED 1,900',
        priceNum: 1900,
        image: '/images/tv-units/tv-unit-6.jpg',
        rating: 4.8,
        reviews: 230,
        description: 'Sleek and modern TV unit with storage.',
        colors: ['Walnut', 'White', 'Black'],
        material: 'MDF + Wood',
        dimensions: 'Custom',
        features: ['Modern Design', 'Storage Shelves', 'Cable Management', 'Durable']
      },
      {
        id: 31,
        name: 'Modern TV Unit 7',
        type: 'tv-units',
        price: 'AED 2,050',
        priceNum: 2050,
        image: '/images/tv-units/tv-unit-7.jpg',
        rating: 4.8,
        reviews: 235,
        description: 'Sleek and modern TV unit with storage.',
        colors: ['Walnut', 'White', 'Black'],
        material: 'MDF + Wood',
        dimensions: 'Custom',
        features: ['Modern Design', 'Storage Shelves', 'Cable Management', 'Durable']
      },
      {
        id: 32,
        name: 'Modern TV Unit 8',
        type: 'tv-units',
        price: 'AED 2,200',
        priceNum: 2200,
        image: '/images/tv-units/tv-unit-8.jpg',
        rating: 4.8,
        reviews: 240,
        description: 'Sleek and modern TV unit with storage.',
        colors: ['Walnut', 'White', 'Black'],
        material: 'MDF + Wood',
        dimensions: 'Custom',
        features: ['Modern Design', 'Storage Shelves', 'Cable Management', 'Durable']
      },
      {
        id: 33,
        name: 'Modern TV Unit 9',
        type: 'tv-units',
        price: 'AED 2,350',
        priceNum: 2350,
        image: '/images/tv-units/tv-unit-9.jpg',
        rating: 4.8,
        reviews: 245,
        description: 'Sleek and modern TV unit with storage.',
        colors: ['Walnut', 'White', 'Black'],
        material: 'MDF + Wood',
        dimensions: 'Custom',
        features: ['Modern Design', 'Storage Shelves', 'Cable Management', 'Durable']
      },
    ],
    'office': [
      {
        id: 31,
        name: 'Executive Office Desk',
        type: 'office',
        price: 'AED 2,499',
        priceNum: 2499,
        image: '💼',
        rating: 4.8,
        reviews: 234,
        description: 'Premium executive office desk',
        colors: ['Walnut', 'Black', 'Natural'],
        material: 'Solid Wood + Metal',
        dimensions: '180cm x 90cm x 75cm',
        features: ['Spacious Top', 'Storage Drawers', 'Sturdy Frame', 'Professional Design']
      },
      {
        id: 32,
        name: 'Modern Office Workstation',
        type: 'office',
        price: 'AED 1,799',
        priceNum: 1799,
        image: '💼',
        rating: 4.7,
        reviews: 189,
        description: 'Contemporary office workstation',
        colors: ['White', 'Black', 'Grey'],
        material: 'MDF + Metal',
        dimensions: '160cm x 80cm x 75cm',
        features: ['Cable Management', 'Modern Design', 'Easy Assembly', 'Space Efficient']
      },
      {
        id: 33,
        name: 'Ergonomic Office Chair',
        type: 'office',
        price: 'AED 999',
        priceNum: 999,
        image: '💼',
        rating: 4.9,
        reviews: 312,
        description: 'Comfortable ergonomic office chair',
        colors: ['Black', 'Grey', 'Brown'],
        material: 'Mesh + Metal Base',
        dimensions: 'Height Adjustable',
        features: ['Lumbar Support', 'Height Adjustable', 'Breathable Mesh', 'Swivel Base']
      },
      {
        id: 34,
        name: 'L-Shape Office Desk',
        type: 'office',
        price: 'AED 2,199',
        priceNum: 2199,
        image: '💼',
        rating: 4.8,
        reviews: 267,
        description: 'L-shaped office desk for large space',
        colors: ['Natural', 'Walnut', 'White'],
        material: 'Wood + Metal',
        dimensions: '200cm x 160cm',
        features: ['L-Shape', 'Multiple Storage', 'Spacious', 'Professional']
      },
      {
        id: 35,
        name: 'Compact Office Desk',
        type: 'office',
        price: 'AED 899',
        priceNum: 899,
        image: '💼',
        rating: 4.6,
        reviews: 156,
        description: 'Space-saving compact office desk',
        colors: ['White', 'Black', 'Natural'],
        material: 'MDF',
        dimensions: '120cm x 60cm x 75cm',
        features: ['Compact Size', 'Budget Friendly', 'Easy Assembly', 'Modern Design']
      },
      {
        id: 36,
        name: 'Office Storage Cabinet',
        type: 'office',
        price: 'AED 1,299',
        priceNum: 1299,
        image: '💼',
        rating: 4.7,
        reviews: 201,
        description: 'Professional office storage cabinet',
        colors: ['White', 'Grey', 'Black'],
        material: 'Metal',
        dimensions: '90cm x 45cm x 180cm',
        features: ['Multiple Shelves', 'Lockable', 'Durable', 'Professional Look']
      }
    ]
  };

  // Get all products
  const allProducts = Object.values(furnitureData).flat();
  
  // Filter products
  let filteredProducts = selectedFilter === 'all' 
    ? allProducts 
    : furnitureData[selectedFilter] || [];

  // Apply price filter
  filteredProducts = filteredProducts.filter(
    product => product.priceNum >= priceRange[0] && product.priceNum <= priceRange[1]
  );

  // Apply sorting
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.priceNum - b.priceNum);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.priceNum - a.priceNum);
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = (product) => {
    if (wishlist.find(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const isInWishlist = (productId) => wishlist.some(item => item.id === productId);

  return (
    <>
      <Helmet>
        <title>Premium Furniture - Zoya Premium Furnishing</title>
        <meta name="description" content="Shop our premium collection of furniture including living room sets, dining tables, sofas, TV units, and office furniture. Free delivery across UAE." />
        <meta name="keywords" content="furniture, living room, dining, sofa, TV unit, office furniture, UAE" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">🛋️ Premium Furniture Collection</h1>
            <p className="text-lg text-gray-300">Transform your spaces with our exclusive furniture designs</p>
            <p className="text-amber-300 font-semibold mt-2">✓ Free Delivery | ✓ 2-Year Warranty | ✓ Easy Returns | ✓ Professional Assembly</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </h3>

                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Furniture Type</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {['all', 'living-room', 'dining', 'sofa', 'coffee-tables', 'tv-units', 'office'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setSelectedFilter(filter)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all text-sm ${
                          selectedFilter === filter
                            ? 'bg-amber-500 text-white font-bold'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {filter === 'all' 
                          ? 'All Furniture' 
                          : filter.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
                        }
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6 pb-6 border-b">
                  <h4 className="font-bold text-gray-900 mb-3">Price Range</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-700">Min: AED {priceRange[0].toLocaleString()}</label>
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full accent-amber-500"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-700">Max: AED {priceRange[1].toLocaleString()}</label>
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full accent-amber-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-6 pb-6 border-b">
                  <h4 className="font-bold text-gray-900 mb-3">Rating</h4>
                  <div className="space-y-2">
                    {[5, 4, 3].map((rating) => (
                      <button key={rating} className="w-full text-left px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all text-gray-700 text-sm">
                        {'⭐'.repeat(rating)} ({rating}+ stars)
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => {
                    setSelectedFilter('all');
                    setPriceRange([0, 10000]);
                  }}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-bold transition-all"
                >
                  Clear All Filters
                </button>

                {/* Features */}
                <div className="mt-6 pt-6 border-t space-y-3">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Truck className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold">Free Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Shield className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold">2-Year Warranty</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <RotateCcw className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold">Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 bg-white p-4 rounded-xl shadow">
                <div>
                  <p className="text-gray-700">
                    Showing <span className="font-bold text-amber-600">{filteredProducts.length}</span> products
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 text-sm"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>

                  {/* View Mode */}
                  <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-amber-500 text-white' : 'text-gray-600'}`}
                      title="Grid View"
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-amber-500 text-white' : 'text-gray-600'}`}
                      title="List View"
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products */}
              {viewMode === 'grid' ? (
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group break-inside-avoid"
                      >
                        {/* Image */}
                        <div className="relative h-48 bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                          {product.image.startsWith('/') ? (
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-6xl">{product.image}</span>
                          )}
                          <button
                            onClick={() => handleAddToWishlist(product)}
                            className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                              isInWishlist(product.id)
                                ? 'bg-red-500 text-white'
                                : 'bg-white text-gray-400 hover:text-red-500'
                            }`}
                          >
                            <Heart className="w-5 h-5" fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                          </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>

                          <p className="text-sm text-gray-600 mb-3">{product.description}</p>

                          {/* Rating */}
                          <div className="flex items-center space-x-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating)
                                    ? 'text-amber-500 fill-amber-500'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                          </div>

                          {/* Colors */}
                          <div className="mb-4">
                            <p className="text-xs font-semibold text-gray-700 mb-2">Available Colors:</p>
                            <div className="flex gap-2 flex-wrap">
                              {product.colors.slice(0, 3).map((color, idx) => (
                                <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                  {color}
                                </span>
                              ))}
                              {product.colors.length > 3 && (
                                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                  +{product.colors.length - 3}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Features */}
                          <div className="mb-4">
                            <p className="text-xs font-semibold text-gray-700 mb-2">Key Features:</p>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {product.features.slice(0, 2).map((feature, idx) => (
                                <li key={idx}>✓ {feature}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Warranty */}
                          {product.warranty && (
                            <div className="mb-4 pb-4 border-b">
                              <p className="text-xs font-semibold text-green-600">✓ Warranty: {product.warranty}</p>
                            </div>
                          )}

                          {/* Price & Button */}
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleAddToCart(product)}
                                className="bg-amber-500 hover:bg-amber-600 text-white p-2.5 rounded-lg transition-all"
                                title="Add to Cart"
                              >
                                <ShoppingCart className="w-5 h-5" />
                              </button>
                              <Link
                                to={`/furniture/${product.type}/${product.id}`}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-semibold transition-all text-sm"
                              >
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-12">
                      <p className="text-xl text-gray-600">No furniture found matching your filters.</p>
                    </div>
                  )}
                </div>
              ) : (
                // List View
                <div className="space-y-4">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div key={product.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all flex gap-6">
                        <div className="w-40 h-40 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          {product.image.startsWith('/') ? (
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-5xl">{product.image}</span>
                          )}
                        </div>

                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                            <button onClick={() => handleAddToWishlist(product)}>
                              <Heart
                                className={`w-6 h-6 ${
                                  isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'
                                }`}
                              />
                            </button>
                          </div>

                          <p className="text-gray-600 mb-3">{product.description}</p>

                          <div className="flex items-center space-x-3 mb-3">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(product.rating)
                                      ? 'text-amber-500 fill-amber-500'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                          </div>

                          <div className="text-sm text-gray-700 mb-3 space-y-1">
                            <p><strong>Material:</strong> {product.material}</p>
                            <p><strong>Dimensions:</strong> {product.dimensions}</p>
                            {product.warranty && <p><strong>Warranty:</strong> {product.warranty}</p>}
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-3xl font-bold text-amber-600">{product.price}</span>
                            <div className="flex gap-3">
                              <button
                                onClick={() => handleAddToCart(product)}
                                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-bold flex items-center space-x-2 transition-all"
                              >
                                <ShoppingCart className="w-5 h-5" />
                                <span>Add to Cart</span>
                              </button>
                              <Link
                                to={`/furniture/${product.type}/${product.id}`}
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-bold transition-all"
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-xl text-gray-600">No furniture found matching your filters.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Truck className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <h3 className="font-bold text-lg mb-2">Free Delivery</h3>
                <p className="text-gray-300">Fast delivery across UAE</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <h3 className="font-bold text-lg mb-2">Warranty</h3>
                <p className="text-gray-300">2-Year comprehensive warranty</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <h3 className="font-bold text-lg mb-2">Easy Returns</h3>
                <p className="text-gray-300">30-day hassle-free returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Design Consultation?</h2>
            <p className="text-lg mb-6">Our interior experts are ready to help you create the perfect space</p>
            <a href="tel:+971555124614" className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
              📞 Call Now: +971 55 512 4614
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FurnitureCategory;