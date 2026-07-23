import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, X, ZoomIn, Grid, Blinds, Sofa, BedDouble, Archive, Home } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Works', icon: <Grid className="w-5 h-5" /> },
    { id: 'curtains', name: 'Curtains', icon: <Blinds className="w-5 h-5" /> },
    { id: 'furniture', name: 'Furniture', icon: <Sofa className="w-5 h-5" /> },
    { id: 'beds', name: 'Beds', icon: <BedDouble className="w-5 h-5" /> },
    { id: 'storage', name: 'Storage', icon: <Archive className="w-5 h-5" /> },
    { id: 'complete', name: 'Complete Rooms', icon: <Home className="w-5 h-5" /> },
  ];

  const galleryItems = [

      {
        id: 201,
        category: 'curtains',
        title: 'Premium Velvet Fabric',
        description: 'Premium Velvet Curtain in Pink',
        image: '/images/velvet-curtains/velvet-1.jpg',
      },
      {
        id: 202,
        category: 'curtains',
        title: 'Premium Velvet Fabric',
        description: 'Premium Velvet Curtain Multiple Colors',
        image: '/images/velvet-curtains/velvet-2.jpg',
      },
      {
        id: 203,
        category: 'curtains',
        title: 'Premium Velvet Fabric',
        description: 'Luxurious Velvet Curtain in Brown',
        image: '/images/velvet-curtains/velvet-3.jpg',
      },
      {
        id: 204,
        category: 'curtains',
        title: 'Velvet Wavy Non-Blackout Curtain',
        description: 'Elegant Velvet Wavy Curtain in Orange',
        image: '/images/velvet-curtains/velvet-4-cropped.jpg',
      },
      {
        id: 205,
        category: 'curtains',
        title: 'Velvet Wavy + Blackout Curtain',
        description: 'Premium Velvet Wavy Curtain in Dark Red',
        image: '/images/velvet-curtains/velvet-5-cropped.jpg',
      },
      {
        id: 206,
        category: 'curtains',
        title: 'Velvet Wavy + Blackout Curtain',
        description: 'Premium Velvet Wavy Curtain in Rose',
        image: '/images/velvet-curtains/velvet-6-cropped.jpg',
      },
      {
        id: 501,
        category: 'curtains',
        title: 'American Style Sheer curtain',
        description: 'American Style Sheer curtain',
        image: '/images/sheer-curtains/1.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 502,
        category: 'curtains',
        title: 'American Style Sheer curtain',
        description: 'American Style Sheer curtain',
        image: '/images/sheer-curtains/2.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 503,
        category: 'curtains',
        title: 'Wavy Style Sheer curtain',
        description: 'Wavy Style Sheer curtain',
        image: '/images/sheer-curtains/3.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 504,
        category: 'curtains',
        title: 'Wavy Style Sheer curtain',
        description: 'Wavy Style Sheer curtain',
        image: '/images/sheer-curtains/4.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 505,
        category: 'curtains',
        title: 'American Style Sable Fabric Sheer curtain',
        description: 'American Style Sable Fabric Sheer curtain',
        image: '/images/sheer-curtains/5.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 506,
        category: 'curtains',
        title: 'American Style Sable Fabric Sheer curtain',
        description: 'American Style Sable Fabric Sheer curtain',
        image: '/images/sheer-curtains/6.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 507,
        category: 'curtains',
        title: 'Wavy Style Sable Fabric Sheer curtain',
        description: 'Wavy Style Sable Fabric Sheer curtain',
        image: '/images/sheer-curtains/7.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 508,
        category: 'curtains',
        title: 'American Style Linen Fabric Sheer curtain',
        description: 'American Style Linen Fabric Sheer curtain',
        image: '/images/sheer-curtains/8.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 509,
        category: 'curtains',
        title: 'American Style Linen Fabric Sheer curtain',
        description: 'American Style Linen Fabric Sheer curtain',
        image: '/images/sheer-curtains/9.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 510,
        category: 'curtains',
        title: 'Wavy Style Linen Fabric Sheer curtain',
        description: 'Wavy Style Linen Fabric Sheer curtain',
        image: '/images/sheer-curtains/10.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 701,
        category: 'curtains',
        title: 'Linen Only Blackout Curtain',
        description: 'Premium linen blackout curtain',
        image: '/images/linen-curtains/1.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 702,
        category: 'curtains',
        title: 'Linen Only Blackout Curtain',
        description: 'Premium linen blackout curtain',
        image: '/images/linen-curtains/2.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 703,
        category: 'curtains',
        title: 'Linen Only Blackout Curtain',
        description: 'Premium linen blackout curtain',
        image: '/images/linen-curtains/3.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 704,
        category: 'curtains',
        title: 'Linen Wavy + Blackout Curtain',
        description: 'Elegant linen wavy and blackout curtain',
        image: '/images/linen-curtains/4.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 705,
        category: 'curtains',
        title: 'Linen Wavy + Blackout Curtain',
        description: 'Elegant linen wavy and blackout curtain',
        image: '/images/linen-curtains/5.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 706,
        category: 'curtains',
        title: 'Linen Wavy + Blackout Curtain',
        description: 'Elegant linen wavy and blackout curtain',
        image: '/images/linen-curtains/6.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 707,
        category: 'curtains',
        title: 'Linen Wavy + Blackout Curtain',
        description: 'Elegant linen wavy and blackout curtain',
        image: '/images/linen-curtains/7.jpeg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 401,
        category: 'curtains',
        title: 'Silk + blackout curtain',
        description: 'Premium Silk and Blackout Curtain',
        image: '/images/silk-blackout-curtains/silk-1.jpg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 402,
        category: 'curtains',
        title: 'Silk + blackout curtain',
        description: 'Premium Silk and Blackout Curtain',
        image: '/images/silk-blackout-curtains/silk-2.jpg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 403,
        category: 'curtains',
        title: 'Silk + blackout curtain',
        description: 'Premium Silk and Blackout Curtain',
        image: '/images/silk-blackout-curtains/silk-3.jpg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 404,
        category: 'curtains',
        title: 'Silk wavy + blackout curtain',
        description: 'Elegant Silk Wavy and Blackout Curtain',
        image: '/images/silk-blackout-curtains/silk-4.jpg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 405,
        category: 'curtains',
        title: 'Silk wavy + blackout curtain',
        description: 'Elegant Silk Wavy and Blackout Curtain',
        image: '/images/silk-blackout-curtains/silk-5.jpg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },
      {
        id: 406,
        category: 'curtains',
        title: 'Silk wavy + blackout curtain',
        description: 'Elegant Silk Wavy and Blackout Curtain',
        image: '/images/silk-blackout-curtains/silk-6.jpg',
        location: 'Sharjah',
        year: new Date().getFullYear()
      },

    // CURTAINS - Different types of curtains
    {
      id: 1,
      category: 'curtains',
      title: 'Modern Velvet Curtains - Forest Green',
      description: 'Elegant velvet curtains with premium lining and modern design',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 2,
      category: 'curtains',
      title: 'Sheer Voile Curtains - Light Filtering',
      description: 'Lightweight sheer curtains perfect for living rooms and bedrooms',
      image: 'https://images.unsplash.com/photo-1509850713511-92e272efd4ab?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 3,
      category: 'curtains',
      title: 'Blackout Curtains - Premium Darkening',
      description: 'High-quality blackout curtains for complete privacy and light control',
      image: 'https://images.unsplash.com/photo-1598632823957-4e51b1b29620?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 4,
      category: 'curtains',
      title: 'Linen Curtains - Natural Elegance',
      description: 'Natural linen curtains with subtle texture and timeless appeal',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 5,
      category: 'curtains',
      title: 'Gold Damask Curtains - Luxury Design',
      description: 'Luxurious damask patterned curtains with gold accents',
      image: 'https://images.unsplash.com/photo-1578500743066-461c8dee6b87?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 6,
      category: 'curtains',
      title: 'Thermal Insulated Curtains',
      description: 'Energy-efficient thermal curtains for temperature control',
      image: 'https://images.unsplash.com/photo-1578500710232-f6399b5509f4?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 7,
      category: 'curtains',
      title: 'Jacquard Pattern Curtains',
      description: 'Beautiful jacquard weave with intricate patterns',
      image: 'https://images.unsplash.com/photo-1585399226117-6bf144ad4a89?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 8,
      category: 'curtains',
      title: 'Silk Blend Curtains - Premium',
      description: 'Luxurious silk blend curtains with elegant drape',
      image: 'https://images.unsplash.com/photo-1578500743066-461c8dee6b87?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    // SHEER CURTAINS
    {
      id: 41,
      category: 'curtains',
      title: 'Classic White Sheer Curtain',
      description: 'Elegant, soft light filtering sheer curtain.',
      image: '/images/sheer-curtains/sheer-1.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 42,
      category: 'curtains',
      title: 'Flowing White Sheer',
      description: 'Smooth flowing fabric with a soft touch.',
      image: '/images/sheer-curtains/sheer-2.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 43,
      category: 'curtains',
      title: 'Pleated White Sheer',
      description: 'Perfect pleats for a modern look.',
      image: '/images/sheer-curtains/sheer-3.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 44,
      category: 'curtains',
      title: 'Luxury Track Sheer',
      description: 'Smooth track system integration.',
      image: '/images/sheer-curtains/sheer-4.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 45,
      category: 'curtains',
      title: 'Grommet Style Sheer',
      description: 'Easy to hang, classic grommets.',
      image: '/images/sheer-curtains/sheer-5.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 46,
      category: 'curtains',
      title: 'Modern Eyelet Sheer',
      description: 'Sleek eyelet rings, minimalist design.',
      image: '/images/sheer-curtains/sheer-6.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 47,
      category: 'curtains',
      title: 'Beige Textured Sheer',
      description: 'Warm beige tones with subtle texture.',
      image: '/images/sheer-curtains/sheer-7.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 48,
      category: 'curtains',
      title: 'Warm Glow Sheer',
      description: 'Filters sunlight beautifully to create a warm glow.',
      image: '/images/sheer-curtains/sheer-8.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 49,
      category: 'curtains',
      title: 'Contemporary Ripple Fold Sheer',
      description: 'Consistent S-Curve ripple fold sheer.',
      image: '/images/sheer-curtains/sheer-9.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 50,
      category: 'curtains',
      title: 'Classic Beige Grommet',
      description: 'Warm, inviting sheer fabric in classic beige.',
      image: '/images/sheer-curtains/sheer-10.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 51,
      category: 'curtains',
      title: 'Textured Stripe Sheer',
      description: 'Subtle vertical texture lines for added depth.',
      image: '/images/sheer-curtains/sheer-11.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 52,
      category: 'curtains',
      title: 'Linen Blend Sheer',
      description: 'Natural linen feel and elegant look.',
      image: '/images/sheer-curtains/sheer-12.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 53,
      category: 'curtains',
      title: 'Linen Grommet Sheer',
      description: 'Rustic charm with a modern grommet top.',
      image: '/images/sheer-curtains/sheer-13.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 54,
      category: 'curtains',
      title: 'Grand Wide Sheer',
      description: 'Perfect for large windows and sliding doors.',
      image: '/images/sheer-curtains/sheer-14.jpg',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },

    // FURNITURE - Different furniture pieces
    {
      id: 9,
      category: 'furniture',
      title: 'Modern Sofa Collection - Gray Upholstery',
      description: 'Contemporary L-shaped sofa with premium fabric and comfort',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 10,
      category: 'furniture',
      title: 'Leather Sofa Set - Executive Style',
      description: 'Premium leather sofa set for modern living rooms',
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 11,
      category: 'furniture',
      title: 'Dining Table Set - Wood Design',
      description: 'Elegant wooden dining table with matching chairs',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 12,
      category: 'furniture',
      title: 'Office Desk Setup - Modern Workspace',
      description: 'Contemporary office furniture with ergonomic design',
      image: 'https://images.unsplash.com/photo-1593642532400-2682a8a0fcc7?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 13,
      category: 'furniture',
      title: 'Accent Chairs Collection',
      description: 'Stylish accent chairs in various colors and designs',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 14,
      category: 'furniture',
      title: 'Coffee Table - Minimalist Design',
      description: 'Modern coffee table with glass and wood combination',
      image: 'https://images.unsplash.com/photo-1532372320572-cda402087165?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 15,
      category: 'furniture',
      title: 'Sectional Sofa - Corner Seating',
      description: 'Large sectional sofa perfect for family gatherings',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 16,
      category: 'furniture',
      title: 'Console Table - Entryway Piece',
      description: 'Stylish console table for hallways and entrances',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },

        // FURNITURE - TV Units
    ...Array.from({ length: 9 }, (_, i) => ({
      id: 4001 + i,
      category: 'furniture',
      title: `Modern TV Unit ${i + 1}`,
      description: 'Sleek and modern TV unit with storage.',
      image: `/images/tv-units/tv-unit-${i + 1}.jpg`,
      location: 'Sharjah',
      year: new Date().getFullYear()
    })),

    // BEDS - Only bed furniture
    {
      id: 17,
      category: 'beds',
      title: 'Luxury King Size Bed - Upholstered',
      description: 'Premium upholstered bed frame with elegant headboard',
      image: 'https://images.unsplash.com/photo-1540932239986-310128078e6f?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 18,
      category: 'beds',
      title: 'Contemporary Platform Bed',
      description: 'Modern platform bed with under-bed storage solution',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 19,
      category: 'beds',
      title: 'Classic Wooden Bed Frame',
      description: 'Timeless wooden bed with intricate carving details',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 20,
      category: 'beds',
      title: 'Modern Metal Frame Bed',
      description: 'Sleek metal bed frame with minimalist aesthetic',
      image: 'https://images.unsplash.com/photo-1512909006412-b0d5482205a1?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 21,
      category: 'beds',
      title: 'Canopy Bed - Luxury Edition',
      description: 'Four-poster canopy bed with premium fabric draping',
      image: 'https://images.unsplash.com/photo-1507840957519-35b9e4072da4?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 22,
      category: 'beds',
      title: 'Queen Size Storage Bed',
      description: 'Spacious queen bed with integrated storage drawers',
      image: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 23,
      category: 'beds',
      title: 'Italian Leather Bed',
      description: 'Premium Italian leather bed with luxury design',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 24,
      category: 'beds',
      title: 'Adjustable Electric Bed',
      description: 'Modern adjustable bed with premium comfort features',
      image: 'https://images.unsplash.com/photo-1604857521033-91d2cdb9bada?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    // SINGLE BEDS
    ...Array.from({ length: 5 }, (_, i) => ({
      id: 2001 + i,
      category: 'beds',
      title: `Single Bed Collection ${i + 1}`,
      description: 'Premium single bed designed for space saving and comfort.',
      image: `/images/beds-collection/bed-${i + 1}.jpg`,
      location: 'Sharjah',
      year: new Date().getFullYear()
    })),
    // DOUBLE BEDS
    ...Array.from({ length: 5 }, (_, i) => ({
      id: 2101 + i,
      category: 'beds',
      title: `Double Bed Collection ${i + 1}`,
      description: 'Luxurious double bed design for ultimate relaxation.',
      image: `/images/beds-collection/bed-${i + 6}.jpg`,
      location: 'Sharjah',
      year: new Date().getFullYear()
    })),
    // QUEEN BEDS
    ...Array.from({ length: 5 }, (_, i) => ({
      id: 2201 + i,
      category: 'beds',
      title: `Queen Bed Collection ${i + 1}`,
      description: 'Elegant queen size bed with sophisticated style.',
      image: `/images/beds-collection/bed-${i + 11}.jpg`,
      location: 'Sharjah',
      year: new Date().getFullYear()
    })),
    // KING BEDS
    ...Array.from({ length: 6 }, (_, i) => ({
      id: 2301 + i,
      category: 'beds',
      title: `King Bed Collection ${i + 1}`,
      description: 'Spacious and comfortable king size bed.',
      image: `/images/beds-collection/bed-${i + 16}.jpg`,
      location: 'Sharjah',
      year: new Date().getFullYear()
    })),
    // SUPER KING BEDS
    ...Array.from({ length: 6 }, (_, i) => ({
      id: 2401 + i,
      category: 'beds',
      title: `Super King Bed Collection ${i + 1}`,
      description: 'Massive super king bed for royal comfort.',
      image: `/images/beds-collection/bed-${i + 22}.jpg`,
      location: 'Sharjah',
      year: new Date().getFullYear()
    })),
    // HYDRAULIC BEDS
    ...Array.from({ length: 5 }, (_, i) => ({
      id: 2501 + i,
      category: 'beds',
      title: `Hydraulic Storage Bed ${i + 1}`,
      description: 'Smart hydraulic lift storage bed for maximum space efficiency.',
      image: `/images/beds-collection/bed-${i + 28}.jpg`,
      location: 'Sharjah',
      year: new Date().getFullYear()
    })),

        // STORAGE - Cabinets
    ...Array.from({ length: 15 }, (_, i) => ({
      id: 3001 + i,
      category: 'storage',
      title: `Premium Storage Cabinet ${i + 1}`,
      description: 'Elegant storage cabinet designed for optimal organization and aesthetics.',
      image: `/images/cabinets/cabinet-${i + 1}.jpg`,
      location: 'Sharjah',
      year: new Date().getFullYear()
    })),

    
    // STORAGE - Dressing with Mirror
    ...Array.from({ length: 15 }, (_, i) => ({
      id: 3101 + i,
      category: 'storage',
      title: `Dressing with Mirror ${i + 1}`,
      description: 'Elegant dressing table with mirror and storage.',
      image: `/images/dressing-mirror/dressing-${i + 1}.jpg`,
      location: 'Sharjah',
      year: new Date().getFullYear()
    })),

    // COMPLETE ROOMS - Full room interiors
    {
      id: 33,
      category: 'complete',
      title: 'Master Bedroom Complete Setup',
      description: 'Full bedroom interior with bed, curtains, wardrobe and furniture',
      image: 'https://images.unsplash.com/photo-1604857521033-91d2cdb9bada?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 34,
      category: 'complete',
      title: 'Living Room Transformation',
      description: 'Complete living room with sofa, curtains, and dining area',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 35,
      category: 'complete',
      title: 'Modern Apartment Interior',
      description: 'Full apartment furnishing with contemporary design throughout',
      image: 'https://images.unsplash.com/photo-1604857521033-91d2cdb9bada?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 36,
      category: 'complete',
      title: 'Luxury Villa Interior Design',
      description: 'Complete villa furnishing with premium materials and design',
      image: 'https://images.unsplash.com/photo-1579848212155-bc2a432e63b7?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 37,
      category: 'complete',
      title: 'Contemporary Home Office',
      description: 'Full office setup with desk, storage, and comfortable seating',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 38,
      category: 'complete',
      title: 'Guest Bedroom Makeover',
      description: 'Complete guest room with bed, curtains, and elegant decor',
      image: 'https://images.unsplash.com/photo-1611269431281-ca522257b269?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 39,
      category: 'complete',
      title: 'Family Room Complete Setup',
      description: 'Spacious family room with multiple seating and entertainment areas',
      image: 'https://images.unsplash.com/photo-1582321905220-4ac41ba338af?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    {
      id: 40,
      category: 'complete',
      title: 'Studio Apartment Design',
      description: 'Smart studio apartment with multipurpose furniture and design',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      location: 'Sharjah',
      year: new Date().getFullYear()
    },
    // BLIND CURTAINS
    ...Array.from({ length: 26 }, (_, i) => ({
      id: 501 + i,
      category: 'curtains',
      title: `Premium Blind Design ${i + 1}`,
      description: 'Elegant window blind design with excellent sun control.',
      image: `/images/blind-curtains/blind-${i + 1}.jpg`,
      location: 'Sharjah',
      year: new Date().getFullYear()
    })),
    // BLACKOUT CURTAINS
    ...Array.from({ length: 25 }, (_, i) => ({
      id: 601 + i,
      category: 'curtains',
      title: `Premium Blackout Design ${i + 1}`,
      description: '100% Light Blocking blackout curtain for complete privacy.',
      image: `/images/blackout-curtains/blackout-${i + 1}.jpg`,
      location: 'Sharjah',
      year: new Date().getFullYear()
    })).filter(item => item.title !== 'Premium Blackout Design 4' && item.title !== 'Premium Blackout Design 5' && item.title !== 'Premium Blackout Design 6'),
    // BLACKOUT & SHEER CURTAINS
    ...Array.from({ length: 18 }, (_, i) => ({
      id: 1601 + i,
      category: 'curtains',
      title: `Blackout & Sheer Combination ${i + 1}`,
      description: 'Perfect combination of light control and elegance.',
      image: `/images/blackout-sheer-curtains/blackout-sheer-${i + 1}.jpg`,
      location: 'Sharjah',
      year: new Date().getFullYear()
    }))
  ];

  // Filter items based on category and search
  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    if (!matchesCategory) return false;
    if (!searchTerm.trim()) return true;

    // Split search into words and check if all words are present
    const searchWords = searchTerm.toLowerCase().split(' ').filter(word => word.length > 0);
    const searchableText = `${item.title} ${item.description} ${item.category}`.toLowerCase();
    
    const matchesSearch = searchWords.every(word => searchableText.includes(word));
    return matchesSearch;
  });

  const ImageModal = ({ image, onClose }) => {
    if (!image) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
        <div className="relative max-w-4xl w-full animate-in zoom-in-95 duration-300">
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white hover:text-[#C8A96A] transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-auto max-h-[70vh] object-contain object-center"
            />
            <div className="p-8 bg-white">
              <h3 className="text-2xl font-black text-[#222222] mb-2">{image.title}</h3>
              <p className="text-[#666666] mb-4 text-lg">{image.description}</p>
              <div className="flex items-center justify-between border-t-2 border-[#E8E2D8] pt-4">
                <div>
                  <p className="text-sm text-[#C8A96A] font-bold uppercase tracking-wider">Location</p>
                  <p className="text-[#222222] font-bold">{image.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[#C8A96A] font-bold uppercase tracking-wider">Completed</p>
                  <p className="text-[#222222] font-bold">{image.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Zoya Premium Curtain & Furnishing</title>
        <meta name="description" content="View our gallery of premium curtains, furniture, beds, wardrobes, and complete home furnishing projects." />
        <meta property="og:title" content="Gallery - Zoya Premium Curtain" />
        <meta property="og:description" content="Explore stunning interior design projects featuring premium curtains and furniture" />
      </Helmet>

      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C8A96A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#0B1E36] rounded-full blur-3xl"></div>
        </div>

        {/* Header Section */}
        <section className="pt-24 pb-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#C8A96A]/15 px-6 py-3 rounded-full border border-[#C8A96A]/30 mb-6">
              <span className="text-sm font-bold text-[#0B1E36] uppercase tracking-widest">
                🎨 Our Works
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-black text-[#222222] mb-6 leading-tight">
              Our Gallery
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-[#666666] max-w-3xl mx-auto font-medium mb-8">
              Explore our portfolio of premium curtains, furniture, beds, wardrobes, and complete home furnishing solutions. 
              Each project represents our commitment to excellence and customer satisfaction.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#C8A96A] pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search by name, category, or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-12 py-4 border-2 border-[#E8E2D8] rounded-2xl focus:border-[#C8A96A] focus:shadow-[0_0_0_4px_rgba(200,169,106,0.1)] focus:outline-none transition-all text-[#222222] placeholder-[#999999] font-semibold text-lg bg-white shadow-sm hover:border-[#C8A96A]/50"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#999999] hover:text-[#222222] transition-colors p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 relative z-10 border-y-2 border-[#E8E2D8] bg-gradient-to-r from-[#F5F1EA]/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Filter className="w-5 h-5 text-[#C8A96A]" />
              <span className="text-sm font-bold text-[#C8A96A] uppercase tracking-widest">Filter by Category</span>
            </div>
            
            <div className="flex overflow-x-auto pb-4 gap-3 mt-4 md:mt-0 scrollbar-hide snap-x">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex-shrink-0 flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 snap-start ${
                    selectedCategory === category.id
                      ? 'bg-[#0B1E36] text-white shadow-lg'
                      : 'bg-[#F5F1EA] text-[#222222] border-2 border-[#E8E2D8] hover:border-[#C8A96A]'
                  }`}
                >
                  <span className="flex items-center justify-center">{category.icon}</span>
                  <span className="text-sm tracking-wide">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Results Count */}
            <p className="text-sm text-[#666666] font-semibold mt-4 md:mt-6">
              Showing <span className="text-[#0B1E36] font-black">{filteredItems.length}</span> result{filteredItems.length !== 1 ? 's' : ''}
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            {filteredItems.length > 0 ? (
              <div className="space-y-20">
                {categories.filter(c => c.id !== 'all').map((category) => {
                  const categoryItems = filteredItems.filter(item => item.category === category.id);
                  if (categoryItems.length === 0) return null;
                  
                  return (
                    <div key={category.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-[#C8A96A]/10 text-[#C8A96A] rounded-2xl shadow-sm border border-[#C8A96A]/20">
                          {category.icon}
                        </div>
                        <h2 className="text-3xl font-black text-[#0B1E36] tracking-tight">{category.name}</h2>
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-[#E8E2D8] to-transparent ml-4"></div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categoryItems.map((item, idx) => (
                          <div
                            key={item.id}
                            className="group cursor-pointer h-full"
                            onClick={() => setSelectedImage(item)}
                            style={{
                              animationDelay: `${idx * 100}ms`
                            }}
                          >
                            {/* Card Container */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full transform group-hover:-translate-y-2 border border-[#E8E2D8] hover:border-[#C8A96A] relative">
                              {/* Image Container */}
                              <div className="relative overflow-hidden bg-[#F5F1EA] aspect-[4/3] w-full shrink-0">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/60 via-[#0B1E36]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                                  <button className="bg-white text-[#0B1E36] p-3 rounded-full hover:bg-[#C8A96A] hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                                    <ZoomIn className="w-6 h-6" />
                                  </button>
                                </div>

                                {/* Category Badge */}
                                <div className="absolute top-4 right-4">
                                  <span className="bg-[#C8A96A]/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-lg group-hover:bg-[#0B1E36] transition-colors">
                                    {categories.find(c => c.id === item.category)?.name}
                                  </span>
                                </div>
                              </div>

                              {/* Content */}
                              <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-black text-[#222222] mb-2 group-hover:text-[#0B1E36] transition-colors line-clamp-2">
                                  {item.title}
                                </h3>
                                
                                <p className="text-[#666666] text-sm mb-4 line-clamp-2 flex-1">
                                  {item.description}
                                </p>

                                {/* Footer Info */}
                                <div className="border-t-2 border-[#E8E2D8] pt-4 flex items-center justify-between">
                                  <div className="flex flex-col">
                                    <span className="text-xs text-[#C8A96A] font-bold uppercase tracking-wider">Location</span>
                                    <span className="text-sm font-bold text-[#222222]">{item.location}</span>
                                  </div>
                                  <div className="text-right flex flex-col">
                                    <span className="text-xs text-[#C8A96A] font-bold uppercase tracking-wider">Year</span>
                                    <span className="text-sm font-bold text-[#222222]">{item.year}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              // No Results State
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-black text-[#222222] mb-2">No Results Found</h3>
                <p className="text-[#666666] font-semibold mb-6">
                  We couldn't find any projects matching your search. Try different keywords or reset filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                  }}
                  className="px-8 py-3 bg-[#0B1E36] text-white font-bold rounded-xl hover:bg-[#173054] transition-all"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-[#0B1E36]/5 to-[#C8A96A]/5 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '40+', label: 'Projects' },
                { number: '8', label: 'Categories' },
                { number: '500+', label: 'Happy Clients' },
                { number: '15+', label: 'Years Experience' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-4xl font-black text-[#C8A96A] mb-2">{stat.number}</p>
                  <p className="text-[#222222] font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative z-10 bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-[#F5F1EA] mb-8 font-semibold">
              Let us help you create a beautiful space. Contact our team for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-white font-black rounded-xl hover:from-[#B8955A] hover:to-[#A8854A] transition-all transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wide"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+971555124614"
                className="px-8 py-4 border-2 border-white text-white font-black rounded-xl hover:bg-white hover:text-[#0B1E36] transition-all uppercase tracking-wide"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Image Modal */}
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      </div>
    </>
  );
};

export default Gallery;