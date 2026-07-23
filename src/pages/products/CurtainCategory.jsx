import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Blinds } from 'lucide-react';

const CurtainCategory = () => {
  const { type } = useParams();
  const [selectedFilter, setSelectedFilter] = useState(type || 'all');
  const [cart, setCart] = useState([]);

  const curtainData = {
    blackout: Array.from({ length: 25 }, (_, i) => ({
      id: 101 + i,
      name: `Premium Blackout Curtain ${i + 1}`,
      type: 'blackout',
      price: `AED ${250 + (i % 5) * 20}`,
      image: `/images/blackout-curtains/blackout-${i + 1}.jpg`,
      rating: Number((4.5 + (i % 6) * 0.1).toFixed(1)),
      description: '100% Light Blocking, Thermal Insulated',
      colors: ['Customizable']
    })).filter(item => item.name !== 'Premium Blackout Curtain 4' && item.name !== 'Premium Blackout Curtain 5' && item.name !== 'Premium Blackout Curtain 6'),
    'blackout-sheer': Array.from({ length: 18 }, (_, i) => ({
      id: 1101 + i,
      name: `Blackout & Sheer Combination ${i + 1}`,
      type: 'blackout-sheer',
      price: `AED ${350 + (i % 5) * 30}`,
      image: `/images/blackout-sheer-curtains/blackout-sheer-${i + 1}.jpg`,
      rating: Number((4.7 + (i % 4) * 0.1).toFixed(1)),
      description: 'Perfect combination of light control and elegance',
      colors: ['Customizable']
    })),
    sheer: [
      {
        id: 301,
        name: 'American Style Sheer curtain',
        type: 'sheer',
        price: 'AED 550',
        sizePrices: { '100cm': 183, '150cm': 275, '200cm': 367, '250cm': 458, '300cm': 550 },
        image: '/images/sheer-curtains/1.jpeg',
        rating: 4.8,
        description: 'Classic American style sheer curtain for elegant living spaces.',
        colors: ['White', 'Off-White']
      },
      {
        id: 302,
        name: 'American Style Sheer curtain',
        type: 'sheer',
        price: 'AED 550',
        sizePrices: { '100cm': 183, '150cm': 275, '200cm': 367, '250cm': 458, '300cm': 550 },
        image: '/images/sheer-curtains/2.jpeg',
        rating: 4.9,
        description: 'Premium light filtering sheer with American aesthetic.',
        colors: ['White', 'Off-White']
      },
      {
        id: 303,
        name: 'Wavy Style Sheer curtain',
        type: 'sheer',
        price: 'AED 650',
        sizePrices: { '100cm': 217, '150cm': 325, '200cm': 433, '250cm': 542, '300cm': 650 },
        image: '/images/sheer-curtains/3.jpeg',
        rating: 4.7,
        description: 'Modern wavy folds that add texture and volume to your room.',
        colors: ['White', 'Cream']
      },
      {
        id: 304,
        name: 'Wavy Style Sheer curtain',
        type: 'sheer',
        price: 'AED 650',
        sizePrices: { '100cm': 217, '150cm': 325, '200cm': 433, '250cm': 542, '300cm': 650 },
        image: '/images/sheer-curtains/4.jpeg',
        rating: 4.8,
        description: 'Beautiful flowing wavy sheer fabric for a contemporary look.',
        colors: ['White', 'Cream']
      },
      {
        id: 305,
        name: 'American Style Sable Fabric Sheer curtain',
        type: 'sheer',
        price: 'AED 580',
        sizePrices: { '100cm': 193, '150cm': 290, '200cm': 387, '250cm': 483, '300cm': 580 },
        image: '/images/sheer-curtains/5.jpeg',
        rating: 4.9,
        description: 'Luxurious Sable fabric sheer with classic American design.',
        colors: ['Natural', 'Beige']
      },
      {
        id: 306,
        name: 'American Style Sable Fabric Sheer curtain',
        type: 'sheer',
        price: 'AED 580',
        sizePrices: { '100cm': 193, '150cm': 290, '200cm': 387, '250cm': 483, '300cm': 580 },
        image: '/images/sheer-curtains/6.jpeg',
        rating: 4.8,
        description: 'High-quality Sable fabric providing a warm glow to your interior.',
        colors: ['Natural', 'Beige']
      },
      {
        id: 307,
        name: 'Wavy Style Sable Fabric Sheer curtain',
        type: 'sheer',
        price: 'AED 680',
        sizePrices: { '100cm': 227, '150cm': 340, '200cm': 453, '250cm': 567, '300cm': 680 },
        image: '/images/sheer-curtains/7.jpeg',
        rating: 5.0,
        description: 'Wavy folds combined with premium Sable fabric for ultimate elegance.',
        colors: ['Natural', 'Beige']
      },
      {
        id: 308,
        name: 'American Style Linen Fabric Sheer curtain',
        type: 'sheer',
        price: 'AED 699',
        sizePrices: { '100cm': 233, '150cm': 350, '200cm': 466, '250cm': 583, '300cm': 699 },
        image: '/images/sheer-curtains/8.jpeg',
        rating: 4.9,
        description: 'Organic linen fabric sheer with a structured American style.',
        colors: ['Linen White', 'Natural']
      },
      {
        id: 309,
        name: 'American Style Linen Fabric Sheer curtain',
        type: 'sheer',
        price: 'AED 699',
        sizePrices: { '100cm': 233, '150cm': 350, '200cm': 466, '250cm': 583, '300cm': 699 },
        image: '/images/sheer-curtains/9.jpeg',
        rating: 4.8,
        description: 'Textured linen sheer that filters light beautifully.',
        colors: ['Linen White', 'Natural']
      },
      {
        id: 310,
        name: 'Wavy Style Linen Fabric Sheer curtain',
        type: 'sheer',
        price: 'AED 749',
        sizePrices: { '100cm': 250, '150cm': 375, '200cm': 499, '250cm': 624, '300cm': 749 },
        image: '/images/sheer-curtains/10.jpeg',
        rating: 5.0,
        description: 'The pinnacle of luxury: wavy folds in pure linen fabric.',
        colors: ['Linen White', 'Natural']
      }
    ],
        velvet: [
        {
          id: 51,
          name: 'Premium Velvet pleated curtain',
          type: 'velvet',
          image: '/images/velvet-curtains/velvet-1.jpg',
          rating: 4.9,
          reviews: 120,
          description: 'Premium Velvet Pleated Curtain for ultimate luxury and darkness.',
          colors: ['Pink', 'Customizable'],
          sizePrices: { '100cm': 183, '150cm': 275, '200cm': 366, '250cm': 458, '300cm': 549 },
          price: 'AED 549',
          priceNum: 549
        },
        {
          id: 52,
          name: 'Premium Velvet Fabric',
          type: 'velvet',
          image: '/images/velvet-curtains/velvet-2.jpg',
          rating: 4.8,
          reviews: 105,
          description: 'Premium Velvet Pleated Curtain for ultimate luxury and darkness.',
          colors: ['Multiple Colors', 'Customizable'],
          sizePrices: { '100cm': 183, '150cm': 275, '200cm': 366, '250cm': 458, '300cm': 549 },
          price: 'AED 549',
          priceNum: 549
        },
        {
          id: 53,
          name: 'Premium Velvet pleated curtain',
          type: 'velvet',
          image: '/images/velvet-curtains/velvet-3.jpg',
          rating: 4.9,
          reviews: 130,
          description: 'Premium Velvet Pleated Curtain for ultimate luxury and darkness.',
          colors: ['Brown', 'Customizable'],
          sizePrices: { '100cm': 183, '150cm': 275, '200cm': 366, '250cm': 458, '300cm': 549 },
          price: 'AED 549',
          priceNum: 549
        },
        {
          id: 54,
          name: 'Velvet Wavy Non-Blackout Curtain',
          type: 'velvet',
          image: '/images/velvet-curtains/velvet-4-cropped.jpg',
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
          image: '/images/velvet-curtains/velvet-5-cropped.jpg',
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
          image: '/images/velvet-curtains/velvet-6-cropped.jpg',
          rating: 4.8,
          reviews: 110,
          description: 'Premium Velvet Wavy + Blackout Curtain with beautiful drape.',
          colors: ['Rose', 'Customizable'],
          sizePrices: { '100cm': 233, '150cm': 350, '200cm': 466, '250cm': 583, '300cm': 699 },
          price: 'AED 699',
          priceNum: 699
        }
    ],

    linen: [
      {
        id: 601,
        name: 'Linen Only Blackout Curtain',
        type: 'linen',
        price: 'AED 549',
        sizePrices: { '100cm': 183, '150cm': 274, '200cm': 366, '250cm': 457, '300cm': 549 },
        image: '/images/linen-curtains/1.jpeg',
        rating: 4.8,
        description: 'Premium linen blackout curtain.',
        colors: ['Linen White', 'Natural']
      },
      {
        id: 602,
        name: 'Linen Only Blackout Curtain',
        type: 'linen',
        price: 'AED 549',
        sizePrices: { '100cm': 183, '150cm': 274, '200cm': 366, '250cm': 457, '300cm': 549 },
        image: '/images/linen-curtains/2.jpeg',
        rating: 4.9,
        description: 'Premium linen blackout curtain.',
        colors: ['Linen White', 'Natural']
      },
      {
        id: 603,
        name: 'Linen Only Blackout Curtain',
        type: 'linen',
        price: 'AED 549',
        sizePrices: { '100cm': 183, '150cm': 274, '200cm': 366, '250cm': 457, '300cm': 549 },
        image: '/images/linen-curtains/3.jpeg',
        rating: 4.8,
        description: 'Premium linen blackout curtain.',
        colors: ['Linen White', 'Natural']
      },
      {
        id: 604,
        name: 'Linen Wavy + Blackout Curtain',
        type: 'linen',
        price: 'AED 699',
        sizePrices: { '100cm': 233, '150cm': 349, '200cm': 466, '250cm': 582, '300cm': 699 },
        image: '/images/linen-curtains/4.jpeg',
        rating: 4.9,
        description: 'Elegant linen wavy and blackout curtain.',
        colors: ['Linen White', 'Natural']
      },
      {
        id: 605,
        name: 'Linen Wavy + Blackout Curtain',
        type: 'linen',
        price: 'AED 699',
        sizePrices: { '100cm': 233, '150cm': 349, '200cm': 466, '250cm': 582, '300cm': 699 },
        image: '/images/linen-curtains/5.jpeg',
        rating: 4.8,
        description: 'Elegant linen wavy and blackout curtain.',
        colors: ['Linen White', 'Natural']
      },
      {
        id: 606,
        name: 'Linen Wavy + Blackout Curtain',
        type: 'linen',
        price: 'AED 699',
        sizePrices: { '100cm': 233, '150cm': 349, '200cm': 466, '250cm': 582, '300cm': 699 },
        image: '/images/linen-curtains/6.jpeg',
        rating: 4.9,
        description: 'Elegant linen wavy and blackout curtain.',
        colors: ['Linen White', 'Natural']
      },
      {
        id: 607,
        name: 'Linen Wavy + Blackout Curtain',
        type: 'linen',
        price: 'AED 699',
        sizePrices: { '100cm': 233, '150cm': 349, '200cm': 466, '250cm': 582, '300cm': 699 },
        image: '/images/linen-curtains/7.jpeg',
        rating: 5.0,
        description: 'Elegant linen wavy and blackout curtain.',
        colors: ['Linen White', 'Natural']
      }
    ],
    silk: [
      {
        id: 401,
        name: 'Silk + blackout curtain',
        type: 'silk',
        price: 'AED 549',
        priceNum: 549,
        sizePrices: { '100cm': 183, '150cm': 275, '200cm': 366, '250cm': 458, '300cm': 549 },
        image: '/images/silk-blackout-curtains/silk-1.jpg',
        rating: 4.8,
        description: 'Premium Silk and Blackout Curtain',
        colors: ['Customizable']
      },
      {
        id: 402,
        name: 'Silk + blackout curtain',
        type: 'silk',
        price: 'AED 599',
        priceNum: 599,
        sizePrices: { '100cm': 200, '150cm': 300, '200cm': 400, '250cm': 500, '300cm': 599 },
        image: '/images/silk-blackout-curtains/silk-2.jpg',
        rating: 4.8,
        description: 'Premium Silk and Blackout Curtain',
        colors: ['Customizable']
      },
      {
        id: 403,
        name: 'Silk + blackout curtain',
        type: 'silk',
        price: 'AED 549',
        priceNum: 549,
        sizePrices: { '100cm': 183, '150cm': 275, '200cm': 366, '250cm': 458, '300cm': 549 },
        image: '/images/silk-blackout-curtains/silk-3.jpg',
        rating: 4.8,
        description: 'Premium Silk and Blackout Curtain',
        colors: ['Customizable']
      },
      {
        id: 404,
        name: 'Silk wavy + blackout curtain',
        type: 'silk',
        price: 'AED 699',
        priceNum: 699,
        sizePrices: { '100cm': 233, '150cm': 350, '200cm': 466, '250cm': 583, '300cm': 699 },
        image: '/images/silk-blackout-curtains/silk-4.jpg',
        rating: 4.9,
        description: 'Elegant Silk Wavy and Blackout Curtain',
        colors: ['Customizable']
      },
      {
        id: 405,
        name: 'Silk wavy + blackout curtain',
        type: 'silk',
        price: 'AED 699',
        priceNum: 699,
        sizePrices: { '100cm': 233, '150cm': 350, '200cm': 466, '250cm': 583, '300cm': 699 },
        image: '/images/silk-blackout-curtains/silk-5.jpg',
        rating: 4.9,
        description: 'Elegant Silk Wavy and Blackout Curtain',
        colors: ['Customizable']
      },
      {
        id: 406,
        name: 'Silk wavy + blackout curtain',
        type: 'silk',
        price: 'AED 699',
        priceNum: 699,
        sizePrices: { '100cm': 233, '150cm': 350, '200cm': 466, '250cm': 583, '300cm': 699 },
        image: '/images/silk-blackout-curtains/silk-6.jpg',
        rating: 4.9,
        description: 'Elegant Silk Wavy and Blackout Curtain',
        colors: ['Customizable']
      }
    ],
    custom: [
      {
        id: 11,
        name: 'Custom Made Curtains',
        type: 'custom',
        price: 'AED 300+',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=60',
        rating: 4.8,
        description: 'Tailored to Your Specifications',
        colors: ['Any Color Available']
      },
    ],
    blinds: [
  {
    id: 'roller',
    name: 'Roller Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-1.jpg',
    images: ['/images/blind-curtains/blind-1.jpg', '/images/blind-curtains/blind-2.jpg', '/images/blind-curtains/blind-3.jpg', '/images/blind-curtains/blind-4.jpg'],
    description: 'Classic roller blinds for simple and effective light control.',
    rating: 4.8,
    colors: ['Customizable'],
    prices: {
      '100*100cm': 130, '110*110cm': 160, '120*120cm': 190, '130*130cm': 220, '140*140cm': 260, '150*150cm': 300, '160*160cm': 330, '170*170cm': 375, '180*180cm': 420, '190*190cm': 470, '200*200cm': 520, '210*210cm': 575, '220*220cm': 640, '230*230cm': 700, '240*240cm': 760, '250*250cm': 825, '260*260cm': 900, '270*270cm': 965, '280*280cm': 1035, '290*290cm': 1095, '300*300cm': 1170
    }
  },
  {
    id: 'roman',
    name: 'Roman Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-5.jpg',
    images: ['/images/blind-curtains/blind-5.jpg', '/images/blind-curtains/blind-6.jpg', '/images/blind-curtains/blind-7.jpg', '/images/blind-curtains/blind-8.jpg'],
    description: 'Elegant roman blinds adding a touch of luxury to your windows.',
    rating: 4.9,
    colors: ['Customizable'],
    prices: {
      '100*100cm': 200, '110*110cm': 245, '120*120cm': 290, '130*130cm': 340, '140*140cm': 395, '150*150cm': 450, '160*160cm': 515, '170*170cm': 580, '180*180cm': 650, '190*190cm': 725, '200*200cm': 800, '210*210cm': 885, '220*220cm': 970, '230*230cm': 1060, '240*240cm': 1155, '250*250cm': 1250, '260*260cm': 1355, '270*270cm': 1460, '280*280cm': 1570, '290*290cm': 1685, '300*300cm': 1800
    }
  },
  {
    id: 'sunscreen',
    name: 'Sunscreen Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-9.jpg',
    images: ['/images/blind-curtains/blind-9.jpg', '/images/blind-curtains/blind-10.jpg', '/images/blind-curtains/blind-11.jpg', '/images/blind-curtains/blind-12.jpg'],
    description: 'Perfect for UV protection while maintaining your outside view.',
    rating: 4.7,
    colors: ['Customizable'],
    prices: {
      '100*100cm': 175, '110*110cm': 220, '120*120cm': 255, '130*130cm': 300, '140*140cm': 345, '150*150cm': 400, '160*160cm': 450, '170*170cm': 510, '180*180cm': 570, '190*190cm': 630, '200*200cm': 700, '210*210cm': 775, '220*220cm': 850, '230*230cm': 930, '240*240cm': 1010, '250*250cm': 1100, '260*260cm': 1185, '270*270cm': 1275, '280*280cm': 1375, '290*290cm': 1475, '300*300cm': 1575
    }
  },
  {
    id: 'zebra',
    name: 'Zebra Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-13.jpg',
    images: ['/images/blind-curtains/blind-13.jpg', '/images/blind-curtains/blind-14.jpg', '/images/blind-curtains/blind-15.jpg'],
    description: 'Modern alternating opaque and sheer stripes for flexible light control.',
    rating: 4.8,
    colors: ['Customizable'],
    prices: {
      '100*100cm': 200, '110*110cm': 245, '120*120cm': 290, '130*130cm': 340, '140*140cm': 395, '150*150cm': 450, '160*160cm': 515, '170*170cm': 580, '180*180cm': 650, '190*190cm': 725, '200*200cm': 800, '210*210cm': 885, '220*220cm': 970, '230*230cm': 1060, '240*240cm': 1155, '250*250cm': 1250, '260*260cm': 1355, '270*270cm': 1460, '280*280cm': 1570, '290*290cm': 1685, '300*300cm': 1800
    }
  },
  {
    id: 'aluminium-venetian',
    name: 'Aluminium Venetian Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-16.jpg',
    images: ['/images/blind-curtains/blind-16.jpg', '/images/blind-curtains/blind-17.jpg', '/images/blind-curtains/blind-18.jpg'],
    description: 'Durable and easy-to-clean aluminium venetian blinds.',
    rating: 4.6,
    colors: ['Customizable'],
    prices: {
      '100*100cm': 90, '110*110cm': 110, '120*120cm': 130, '130*130cm': 155, '140*140cm': 180, '150*150cm': 205, '160*160cm': 230, '170*170cm': 260, '180*180cm': 290, '190*190cm': 325, '200*200cm': 360, '210*210cm': 400, '220*220cm': 435, '230*230cm': 480, '240*240cm': 520, '250*250cm': 565, '260*260cm': 610, '270*270cm': 660, '280*280cm': 705, '290*290cm': 760, '300*300cm': 810
    }
  },
  {
    id: 'wooden-venetian',
    name: 'Wooden Venetian Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-19.jpg',
    images: ['/images/blind-curtains/blind-19.jpg', '/images/blind-curtains/blind-20.jpg', '/images/blind-curtains/blind-21.jpg', '/images/blind-curtains/blind-22.jpg'],
    description: 'Warm and natural wooden venetian blinds for a cozy ambiance.',
    rating: 4.9,
    colors: ['Customizable'],
    prices: {
      '100*100cm': 250, '110*110cm': 305, '120*120cm': 360, '130*130cm': 425, '140*140cm': 490, '150*150cm': 565, '160*160cm': 640, '170*170cm': 725, '180*180cm': 810, '190*190cm': 905, '200*200cm': 1000, '210*210cm': 1105, '220*220cm': 1210, '230*230cm': 1325, '240*240cm': 1440, '250*250cm': 1565, '260*260cm': 1690, '270*270cm': 1825, '280*280cm': 1960, '290*290cm': 2105, '300*300cm': 2250
    }
  },
  {
    id: 'vertical',
    name: 'Vertical Blind',
    type: 'blinds',
    image: '/images/blind-curtains/blind-23.jpg',
    images: ['/images/blind-curtains/blind-23.jpg', '/images/blind-curtains/blind-24.jpg', '/images/blind-curtains/blind-25.jpg', '/images/blind-curtains/blind-26.jpg'],
    description: 'Classic vertical blinds ideal for large windows and sliding doors.',
    rating: 4.5,
    colors: ['Customizable'],
    prices: {
      '100*100cm': 100, '110*110cm': 125, '120*120cm': 145, '130*130cm': 170, '140*140cm': 200, '150*150cm': 225, '160*160cm': 260, '170*170cm': 290, '180*180cm': 325, '190*190cm': 365, '200*200cm': 400, '210*210cm': 445, '220*220cm': 485, '230*230cm': 530, '240*240cm': 580, '250*250cm': 625, '260*260cm': 680, '270*270cm': 730, '280*280cm': 785, '290*290cm': 845, '300*300cm': 900
    }
  }
],
  };

  const allProducts = Object.values(curtainData).flat();
  const filteredProducts = selectedFilter === 'all' 
    ? allProducts 
    : curtainData[selectedFilter] || [];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Blinds className="w-10 h-10 text-amber-500" />
            Premium Curtains Collection
          </h1>
          <p className="text-gray-300">Discover our exclusive range of high-quality curtains</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {['all', 'blackout', 'blackout-sheer', 'sheer', 'velvet', 'silk', 'linen', 'blinds', 'custom'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedFilter === filter
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter === 'blackout-sheer' ? 'Blackout & Sheer' : 
               filter === 'velvet' ? 'Velvet & blackout' :
               filter === 'silk' ? 'Silk & blackout' :
               filter === 'linen' ? 'Linen & blackout' :
               filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              {/* Image Container */}
              <div className="relative overflow-hidden h-72 bg-[#F5F1EA] group-hover:shadow-inner">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/90 via-[#0B1E36]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Overlay Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
                  <span className="text-[#C8A96A] text-xs font-black uppercase tracking-widest mb-1 shadow-sm">
                    Customizable
                  </span>
                  <h4 className="text-white font-bold text-lg leading-tight shadow-sm drop-shadow-md">
                    {product.name}
                  </h4>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                  <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>

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
                  <span className="text-sm text-gray-600">({product.rating})</span>
                </div>

                {/* Colors */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Available Colors:</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.colors.map((color, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Button */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    {product.prices ? `AED ${Object.values(product.prices)[0]}` : product.price}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-amber-500 hover:bg-amber-600 text-white p-2.5 rounded-lg transition-all"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <Link
                      to={`/curtains/${product.type}/${product.id}`}
                      state={{ product }}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-semibold transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Curtains?</h2>
          <p className="text-lg mb-6">Contact our experts for personalized consultation</p>
          <a href="tel:+971555124614" className="bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
            📞 Call Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CurtainCategory;
