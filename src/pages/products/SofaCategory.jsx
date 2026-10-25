import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Filter, Grid, List, Truck, Shield, RotateCcw, Heart, ArrowRight, Star } from 'lucide-react';

const SofaCategory = () => {
  const { type } = useParams();
  const [selectedFilter, setSelectedFilter] = useState(type || 'all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');

  // Comprehensive Sofa Data
  const sofaData = {
    'small': [
      {
        id: 's1',
        name: 'Premium 1 Seater Sofa',
        type: 'small',
        price: 'AED 299',
        priceNum: 299,
        image: '/images/sofas/sofa-1.jpg',
        rating: 4.8,
        reviews: 101,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's3',
        name: 'Premium 2 Seater Sofa',
        type: 'small',
        price: 'AED 699',
        priceNum: 699,
        image: '/images/sofas/sofa-3.jpg',
        rating: 4.8,
        reviews: 103,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's9',
        name: 'Premium L-Shape Sofa',
        type: 'small',
        price: 'AED 299',
        priceNum: 299,
        image: '/images/sofas/sofa-9.jpg',
        rating: 4.8,
        reviews: 109,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's11',
        name: 'Premium L-Shape Sofa',
        type: 'small',
        price: 'AED 699',
        priceNum: 699,
        image: '/images/sofas/sofa-11.jpg',
        rating: 4.8,
        reviews: 111,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's17',
        name: 'Premium 2 Seater Sofa',
        type: 'small',
        price: 'AED 299',
        priceNum: 299,
        image: '/images/sofas/sofa-17.jpg',
        rating: 4.8,
        reviews: 117,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's18',
        name: 'Premium 3 Seater Sofa',
        type: 'small',
        price: 'AED 499',
        priceNum: 499,
        image: '/images/sofas/sofa-18.jpg',
        rating: 4.8,
        reviews: 118,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's19',
        name: 'Premium 2 Seater Sofa',
        type: 'small',
        price: 'AED 699',
        priceNum: 699,
        image: '/images/sofas/sofa-19.jpg',
        rating: 4.8,
        reviews: 119,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's25',
        name: 'Premium 3 Seater Sofa',
        type: 'small',
        price: 'AED 299',
        priceNum: 299,
        image: '/images/sofas/sofa-25.jpg',
        rating: 4.8,
        reviews: 125,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's26',
        name: 'Premium L-Shape Sofa',
        type: 'small',
        price: 'AED 499',
        priceNum: 499,
        image: '/images/sofas/sofa-26.jpg',
        rating: 4.8,
        reviews: 126,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's27',
        name: 'Premium L-Shape Sofa',
        type: 'small',
        price: 'AED 699',
        priceNum: 699,
        image: '/images/sofas/sofa-27.jpg',
        rating: 4.8,
        reviews: 127,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's33',
        name: 'Premium 3 Seater Sofa',
        type: 'small',
        price: 'AED 299',
        priceNum: 299,
        image: '/images/sofas/sofa-33.jpg',
        rating: 4.8,
        reviews: 133,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's34',
        name: 'Premium L-Shape Sofa',
        type: 'small',
        price: 'AED 499',
        priceNum: 499,
        image: '/images/sofas/sofa-34.jpg',
        rating: 4.8,
        reviews: 134,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's35',
        name: 'Premium 3 Seater Sofa',
        type: 'small',
        price: 'AED 699',
        priceNum: 699,
        image: '/images/sofas/sofa-35.jpg',
        rating: 4.8,
        reviews: 135,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's41',
        name: 'Premium L-Shape Sofa',
        type: 'small',
        price: 'AED 299',
        priceNum: 299,
        image: '/images/sofas/sofa-41.jpg',
        rating: 4.8,
        reviews: 141,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's42',
        name: 'Premium L-Shape Sofa',
        type: 'small',
        price: 'AED 499',
        priceNum: 499,
        image: '/images/sofas/sofa-42.jpg',
        rating: 4.8,
        reviews: 142,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's43',
        name: 'Premium 3 Seater Sofa',
        type: 'small',
        price: 'AED 699',
        priceNum: 699,
        image: '/images/sofas/sofa-43.jpg',
        rating: 4.8,
        reviews: 143,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's49',
        name: 'Premium 3 Seater Sofa',
        type: 'small',
        price: 'AED 299',
        priceNum: 299,
        image: '/images/sofas/sofa-49.jpg',
        rating: 4.8,
        reviews: 149,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's50',
        name: 'Premium L-Shape Sofa',
        type: 'small',
        price: 'AED 499',
        priceNum: 499,
        image: '/images/sofas/sofa-50.jpg',
        rating: 4.8,
        reviews: 150,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's51',
        name: 'Premium L-Shape Sofa',
        type: 'small',
        price: 'AED 699',
        priceNum: 699,
        image: '/images/sofas/sofa-51.jpg',
        rating: 4.8,
        reviews: 151,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      }
    ],
    'large': [
      {
        id: 's4',
        name: 'Premium 1 Seater Sofa',
        type: 'large',
        price: 'AED 899',
        priceNum: 899,
        image: '/images/sofas/sofa-4.jpg',
        rating: 4.8,
        reviews: 104,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's5',
        name: 'Premium L-Shape Sofa',
        type: 'large',
        price: 'AED 1099',
        priceNum: 1099,
        image: '/images/sofas/sofa-5.jpg',
        rating: 4.8,
        reviews: 105,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's6',
        name: 'Premium L-Shape Sofa',
        type: 'large',
        price: 'AED 1299',
        priceNum: 1299,
        image: '/images/sofas/sofa-6.jpg',
        rating: 4.8,
        reviews: 106,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's13',
        name: 'Premium L-Shape Sofa',
        type: 'large',
        price: 'AED 1099',
        priceNum: 1099,
        image: '/images/sofas/sofa-13.jpg',
        rating: 4.8,
        reviews: 113,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's15',
        name: 'Premium L-Shape Sofa',
        type: 'large',
        price: 'AED 1499',
        priceNum: 1499,
        image: '/images/sofas/sofa-15.jpg',
        rating: 4.8,
        reviews: 115,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's20',
        name: 'Premium 3 Seater Sofa',
        type: 'large',
        price: 'AED 899',
        priceNum: 899,
        image: '/images/sofas/sofa-20.jpg',
        rating: 4.8,
        reviews: 120,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's21',
        name: 'Premium 3 Seater Sofa',
        type: 'large',
        price: 'AED 1099',
        priceNum: 1099,
        image: '/images/sofas/sofa-21.jpg',
        rating: 4.8,
        reviews: 121,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's22',
        name: 'Premium L-Shape Sofa',
        type: 'large',
        price: 'AED 1299',
        priceNum: 1299,
        image: '/images/sofas/sofa-22.jpg',
        rating: 4.8,
        reviews: 122,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's23',
        name: 'Premium 3 Seater Sofa',
        type: 'large',
        price: 'AED 1499',
        priceNum: 1499,
        image: '/images/sofas/sofa-23.jpg',
        rating: 4.8,
        reviews: 123,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's28',
        name: 'Premium L-Shape Sofa',
        type: 'large',
        price: 'AED 899',
        priceNum: 899,
        image: '/images/sofas/sofa-28.jpg',
        rating: 4.8,
        reviews: 128,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's29',
        name: 'Premium 3 Seater Sofa',
        type: 'large',
        price: 'AED 1099',
        priceNum: 1099,
        image: '/images/sofas/sofa-29.jpg',
        rating: 4.8,
        reviews: 129,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's30',
        name: 'Premium 3 Seater Sofa',
        type: 'large',
        price: 'AED 1299',
        priceNum: 1299,
        image: '/images/sofas/sofa-30.jpg',
        rating: 4.8,
        reviews: 130,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's31',
        name: 'Premium 3 Seater Sofa',
        type: 'large',
        price: 'AED 1499',
        priceNum: 1499,
        image: '/images/sofas/sofa-31.jpg',
        rating: 4.8,
        reviews: 131,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's36',
        name: 'Premium 3 Seater Sofa',
        type: 'large',
        price: 'AED 899',
        priceNum: 899,
        image: '/images/sofas/sofa-36.jpg',
        rating: 4.8,
        reviews: 136,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's37',
        name: 'Premium 3 Seater Sofa',
        type: 'large',
        price: 'AED 1099',
        priceNum: 1099,
        image: '/images/sofas/sofa-37.jpg',
        rating: 4.8,
        reviews: 137,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's38',
        name: 'Premium 3 Seater Sofa',
        type: 'large',
        price: 'AED 1299',
        priceNum: 1299,
        image: '/images/sofas/sofa-38.jpg',
        rating: 4.8,
        reviews: 138,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's39',
        name: 'Premium 2 Seater Sofa',
        type: 'large',
        price: 'AED 1499',
        priceNum: 1499,
        image: '/images/sofas/sofa-39.jpg',
        rating: 4.8,
        reviews: 139,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's44',
        name: 'Premium 2 Seater Sofa',
        type: 'large',
        price: 'AED 899',
        priceNum: 899,
        image: '/images/sofas/sofa-44.jpg',
        rating: 4.8,
        reviews: 144,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's45',
        name: 'Premium 3 Seater Sofa',
        type: 'large',
        price: 'AED 1099',
        priceNum: 1099,
        image: '/images/sofas/sofa-45.jpg',
        rating: 4.8,
        reviews: 145,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's46',
        name: 'Premium 3 Seater Sofa',
        type: 'large',
        price: 'AED 1299',
        priceNum: 1299,
        image: '/images/sofas/sofa-46.jpg',
        rating: 4.8,
        reviews: 146,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's47',
        name: 'Premium 3 Seater Sofa',
        type: 'large',
        price: 'AED 1499',
        priceNum: 1499,
        image: '/images/sofas/sofa-47.jpg',
        rating: 4.8,
        reviews: 147,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's52',
        name: 'Premium L-Shape Sofa',
        type: 'large',
        price: 'AED 899',
        priceNum: 899,
        image: '/images/sofas/sofa-52.jpg',
        rating: 4.8,
        reviews: 152,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      }
    ],
    'lshape': [
      {
        id: 's8',
        name: 'Premium L-Shape Sofa',
        type: 'lshape',
        price: 'AED 1599',
        priceNum: 1599,
        image: '/images/sofas/sofa-8.jpg',
        rating: 4.8,
        reviews: 108,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's16',
        name: 'Premium 3 Seater Sofa',
        type: 'lshape',
        price: 'AED 1599',
        priceNum: 1599,
        image: '/images/sofas/sofa-16.jpg',
        rating: 4.8,
        reviews: 116,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's24',
        name: 'Premium 3 Seater Sofa',
        type: 'lshape',
        price: 'AED 1599',
        priceNum: 1599,
        image: '/images/sofas/sofa-24.jpg',
        rating: 4.8,
        reviews: 124,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's32',
        name: 'Premium 2 Seater Sofa',
        type: 'lshape',
        price: 'AED 1599',
        priceNum: 1599,
        image: '/images/sofas/sofa-32.jpg',
        rating: 4.8,
        reviews: 132,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's40',
        name: 'Premium 3 Seater Sofa',
        type: 'lshape',
        price: 'AED 1599',
        priceNum: 1599,
        image: '/images/sofas/sofa-40.jpg',
        rating: 4.8,
        reviews: 140,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      },
      {
        id: 's48',
        name: 'Premium 3 Seater Sofa',
        type: 'lshape',
        price: 'AED 1599',
        priceNum: 1599,
        image: '/images/sofas/sofa-48.jpg',
        rating: 4.8,
        reviews: 148,
        description: 'Elegant and comfortable sofa for your living space.',
        colors: ['Grey', 'Beige', 'Navy'],
        features: ['Premium Fabric', 'Durable Frame', 'Ergonomic']
      }
    ]
  };

  // Get all products
  const allProducts = Object.values(sofaData).flat();
  
  // Filter products
  let filteredProducts = selectedFilter === 'all' 
    ? allProducts 
    : sofaData[selectedFilter] || [];

  // Apply sorting
  if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
      <Helmet>
        <title>Premium Sofas - Zoya Premium Curtains & Furnishing</title>
        <meta name="description" content="Explore our luxurious collection of sofas including sectionals, recliners, and sofa beds." />
      </Helmet>

      <div className="min-h-screen bg-[#F5F1EA]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 mb-6 bg-[#C8A96A]/20 px-6 py-3 rounded-full border border-[#C8A96A]/40">
              <span className="text-[#C8A96A] font-bold tracking-wider uppercase text-sm">Luxury Collection</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Premium Sofas Collection
            </h1>
            <p className="text-xl text-[#E8E2D8] max-w-2xl mx-auto font-medium mb-8">
              Discover unparalleled comfort and style with our handpicked selection of premium sofas, designed to elevate your living space.
            </p>
            <p className="text-[#C8A96A] font-bold text-lg">
              ✓ Free Delivery | ✓ Premium Quality
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-[#E8E2D8] sticky top-32">
                <h3 className="text-xl font-black text-[#0B1E36] mb-6 flex items-center space-x-2 pb-4 border-b-2 border-[#F5F1EA]">
                  <Filter className="w-5 h-5 text-[#C8A96A]" />
                  <span>Filters</span>
                </h3>

                {/* Category Filter */}
                <div className="mb-8">
                  <h4 className="font-bold text-[#0B1E36] mb-3 uppercase tracking-wider text-sm">Sofa Style</h4>
                  <div className="space-y-2">
                    {[
                      { id: 'all', label: 'All Sofas' },
                      { id: 'small', label: '1-3 Seater' },
                      { id: 'large', label: '4-7 Seater' },
                      { id: 'lshape', label: 'L-Shape' }
                    ].map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setSelectedFilter(filter.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all text-sm font-semibold ${
                          selectedFilter === filter.id
                            ? 'bg-[#0B1E36] text-[#C8A96A] shadow-md'
                            : 'bg-[#F5F1EA] text-[#2B2B2B] hover:bg-[#C8A96A]/20'
                        }`}
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button
                  onClick={() => setSelectedFilter('all')}
                  className="w-full bg-[#F5F1EA] hover:bg-[#C8A96A] text-[#0B1E36] py-3 rounded-xl font-black transition-all border-2 border-[#C8A96A]/30 hover:border-[#C8A96A]"
                >
                  Clear Filters
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Top Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-4 rounded-2xl shadow-md border-2 border-[#E8E2D8]">
                <div>
                  <p className="text-[#666666] font-semibold">
                    Showing <span className="font-black text-[#0B1E36]">{filteredProducts.length}</span> sofas
                  </p>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2.5 bg-[#F5F1EA] border-2 border-transparent rounded-xl focus:outline-none focus:border-[#C8A96A] text-sm font-bold text-[#0B1E36] transition-colors flex-1 sm:flex-none"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                  </select>

                  <div className="flex gap-2 bg-[#F5F1EA] p-1.5 rounded-xl">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-[#0B1E36] text-[#C8A96A] shadow-md' : 'text-[#666666] hover:text-[#0B1E36]'}`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-[#0B1E36] text-[#C8A96A] shadow-md' : 'text-[#666666] hover:text-[#0B1E36]'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-[#E8E2D8] hover:border-[#C8A96A]/50 flex flex-col">
                      <div className="relative h-56 bg-gradient-to-br from-[#F5F1EA] to-[#E8E2D8] flex items-center justify-center overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-black text-[#0B1E36] leading-tight line-clamp-2">{product.name}</h3>
                        </div>
                        
                        <div className="flex items-center space-x-1 mb-3">
                          <Star className="w-4 h-4 text-[#C8A96A] fill-current" />
                          <span className="text-sm font-bold text-[#2B2B2B]">{product.rating}</span>
                          <span className="text-xs text-[#666666]">({product.reviews})</span>
                        </div>

                        <p className="text-[#666666] text-sm mb-4 line-clamp-2 flex-grow">{product.description}</p>

                        <div className="pt-4 border-t-2 border-[#F5F1EA] mt-auto">
                          <a
                            href="tel:+971555124614"
                            className="w-full py-3 bg-[#0B1E36] text-white font-black rounded-xl hover:bg-[#C8A96A] hover:text-[#0B1E36] transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                          >
                            <span>Get Custom Quote</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#E8E2D8] hover:border-[#C8A96A]/50 flex flex-col sm:flex-row overflow-hidden group">
                      <div className="w-full sm:w-48 h-48 sm:h-auto bg-gradient-to-br from-[#F5F1EA] to-[#E8E2D8] flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      
                      <div className="p-6 flex flex-col sm:flex-row w-full gap-6">
                        <div className="flex-grow">
                          <h3 className="text-xl font-black text-[#0B1E36] mb-2">{product.name}</h3>
                          <div className="flex items-center space-x-1 mb-3">
                            <Star className="w-4 h-4 text-[#C8A96A] fill-current" />
                            <span className="text-sm font-bold text-[#2B2B2B]">{product.rating}</span>
                            <span className="text-xs text-[#666666]">({product.reviews} reviews)</span>
                          </div>
                          <p className="text-[#666666] mb-4">{product.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {product.features.map((feature, idx) => (
                              <span key={idx} className="bg-[#F5F1EA] text-[#2B2B2B] text-xs font-bold px-3 py-1 rounded-full border border-[#E8E2D8]">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="sm:w-48 flex flex-col justify-center sm:border-l-2 border-[#F5F1EA] sm:pl-6 pt-4 sm:pt-0 mt-4 sm:mt-0 border-t-2 sm:border-t-0">
                          <a
                            href="tel:+971555124614"
                            className="w-full py-3 bg-[#0B1E36] text-white font-black rounded-xl hover:bg-[#C8A96A] hover:text-[#0B1E36] transition-all duration-300 text-center"
                          >
                            Get Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SofaCategory;
