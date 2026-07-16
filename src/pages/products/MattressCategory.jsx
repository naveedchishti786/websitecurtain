import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, Heart, ShoppingCart, Filter, Grid, List, Truck, Shield, RotateCcw, Zap } from 'lucide-react';

const MattressCategory = () => {
  const { type } = useParams();
  const [selectedFilter, setSelectedFilter] = useState(type || 'all');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [sortBy, setSortBy] = useState('popular');
  const [firmness, setFirmness] = useState('all');

  // Comprehensive Mattress Data
  const mattressData = {
    'memory-foam': [
      {
        id: 1,
        name: 'Premium Memory Foam Mattress - Queen',
        type: 'memory-foam',
        price: 'AED 1,899',
        priceNum: 1899,
        image: '🛌',
        rating: 4.9,
        reviews: 456,
        description: 'Gel-infused memory foam with orthopedic support',
        colors: ['White', 'Grey', 'Cream'],
        material: 'Memory Foam + Gel',
        dimensions: '160cm x 200cm x 30cm',
        firmness: 'Medium',
        features: ['Gel-Infused', 'Pressure Relief', 'Temperature Control', 'Hypoallergenic'],
        benefits: ['Reduces Body Pressure', 'Perfect Spinal Alignment', 'Motion Isolation', 'Durability 10+ Years'],
        warranty: '10 Years'
      },
      {
        id: 2,
        name: 'Luxury Memory Foam - King Size',
        type: 'memory-foam',
        price: 'AED 2,499',
        priceNum: 2499,
        image: '🛌',
        rating: 4.9,
        reviews: 523,
        description: 'Premium gel memory foam with luxury quilting',
        colors: ['White', 'Grey', 'Beige'],
        material: 'Premium Memory Foam + Gel',
        dimensions: '200cm x 180cm x 32cm',
        firmness: 'Medium-Firm',
        features: ['Premium Gel', 'Luxury Quilting', 'CoolGel Technology', 'Anti-Microbial'],
        benefits: ['Superior Comfort', 'Enhanced Cooling', 'Allergy Protection', 'Extended Lifespan'],
        warranty: '10 Years'
      },
      {
        id: 3,
        name: 'Memory Foam Topper - Thin',
        type: 'memory-foam',
        price: 'AED 599',
        priceNum: 599,
        image: '🛌',
        rating: 4.7,
        reviews: 234,
        description: 'Memory foam mattress topper for existing beds',
        colors: ['White', 'Grey'],
        material: 'Memory Foam',
        dimensions: '160cm x 200cm x 5cm',
        firmness: 'Medium',
        features: ['Easy to Use', 'Removable Cover', 'Breathable', 'Budget Friendly'],
        benefits: ['Instant Comfort', 'Better Sleep', 'Affordable Upgrade', 'Easy Maintenance'],
        warranty: '3 Years'
      },
      {
        id: 4,
        name: 'Ultra-Thick Memory Foam - Single',
        type: 'memory-foam',
        price: 'AED 999',
        priceNum: 999,
        image: '🛌',
        rating: 4.8,
        reviews: 312,
        description: 'Extra thick memory foam for maximum comfort',
        colors: ['White', 'Grey', 'Cream'],
        material: 'Ultra-Thick Memory Foam',
        dimensions: '90cm x 190cm x 35cm',
        firmness: 'Medium-Soft',
        features: ['Ultra-Thick', 'Extra Comfort', 'Pressure Relieving', 'Durable'],
        benefits: ['Luxurious Feel', 'Pain Relief', 'Long Lifespan', 'Value for Money'],
        warranty: '5 Years'
      },
      {
        id: 5,
        name: 'Cool Gel Memory Foam - Twin',
        type: 'memory-foam',
        price: 'AED 1,299',
        priceNum: 1299,
        image: '🛌',
        rating: 4.8,
        reviews: 289,
        description: 'Cooling gel memory foam perfect for hot sleepers',
        colors: ['White', 'Light Blue'],
        material: 'Cooling Gel Memory Foam',
        dimensions: '120cm x 190cm x 28cm',
        firmness: 'Medium',
        features: ['Advanced Cooling', 'Gel Technology', 'Breathable', 'Temperature Regulating'],
        benefits: ['Stay Cool Night', 'Sweat Reduction', 'Better Sleep Quality', 'Comfortable'],
        warranty: '7 Years'
      },
      {
        id: 6,
        name: 'Budget Memory Foam - Double',
        type: 'memory-foam',
        price: 'AED 1,399',
        priceNum: 1399,
        image: '🛌',
        rating: 4.6,
        reviews: 178,
        description: 'Affordable memory foam without compromising quality',
        colors: ['White', 'Grey'],
        material: 'Memory Foam',
        dimensions: '140cm x 190cm x 25cm',
        firmness: 'Medium-Firm',
        features: ['Affordable', 'Good Support', 'Durable', 'Easy Care'],
        benefits: ['Great Value', 'Comfortable Sleep', 'Long Lasting', 'Eco-Friendly'],
        warranty: '5 Years'
      }
    ],
    'orthopedic': [
      {
        id: 7,
        name: 'Orthopedic Medical Mattress - King',
        type: 'orthopedic',
        price: 'AED 2,799',
        priceNum: 2799,
        image: '🛌',
        rating: 4.9,
        reviews: 478,
        description: 'Medically approved orthopedic support mattress',
        colors: ['White', 'Beige', 'Light Grey'],
        material: 'Orthopedic Foam + Medical Grade Spring',
        dimensions: '200cm x 180cm x 32cm',
        firmness: 'Firm',
        features: ['Medical Grade', 'Spinal Support', 'Pressure Point Relief', 'Certified'],
        benefits: ['Back Pain Relief', 'Proper Alignment', 'Medical Support', 'Professional Recommended'],
        warranty: '10 Years'
      },
      {
        id: 8,
        name: 'Orthopedic Back Support - Queen',
        type: 'orthopedic',
        price: 'AED 1,999',
        priceNum: 1999,
        image: '🛌',
        rating: 4.8,
        reviews: 345,
        description: 'Advanced orthopedic design for back pain relief',
        colors: ['White', 'Cream'],
        material: 'Orthopedic Foam + Coil Spring',
        dimensions: '160cm x 200cm x 30cm',
        firmness: 'Firm',
        features: ['Back Support', 'Pain Relief', 'Spinal Alignment', 'Hypoallergenic'],
        benefits: ['Reduced Back Pain', 'Better Posture', 'Comfortable', 'Doctor Recommended'],
        warranty: '8 Years'
      },
      {
        id: 9,
        name: 'Orthopedic Cervical Support Mattress',
        type: 'orthopedic',
        price: 'AED 2,299',
        priceNum: 2299,
        image: '🛌',
        rating: 4.9,
        reviews: 412,
        description: 'Cervical spine support for neck pain relief',
        colors: ['White', 'Grey'],
        material: 'Medical Foam + Support Springs',
        dimensions: '160cm x 200cm x 31cm',
        firmness: 'Medium-Firm',
        features: ['Cervical Support', 'Neck Relief', 'Spinal Alignment', 'Medical Grade'],
        benefits: ['Neck Pain Relief', 'Better Sleep', 'Proper Support', 'Long Lasting'],
        warranty: '10 Years'
      },
      {
        id: 10,
        name: 'Orthopedic Firm Mattress - Single',
        type: 'orthopedic',
        price: 'AED 1,199',
        priceNum: 1199,
        image: '🛌',
        rating: 4.7,
        reviews: 267,
        description: 'Firm orthopedic support for proper alignment',
        colors: ['White', 'Beige'],
        material: 'Firm Orthopedic Foam',
        dimensions: '90cm x 190cm x 28cm',
        firmness: 'Firm',
        features: ['Firm Support', 'Proper Alignment', 'Durable', 'Breathable'],
        benefits: ['Back Support', 'Pain Relief', 'Good Value', 'Comfortable'],
        warranty: '5 Years'
      },
      {
        id: 11,
        name: 'Premium Orthopedic Medical Grade',
        type: 'orthopedic',
        price: 'AED 3,299',
        priceNum: 3299,
        image: '🛌',
        rating: 5.0,
        reviews: 534,
        description: 'Top-of-the-line medical grade orthopedic mattress',
        colors: ['White', 'Light Blue'],
        material: 'Premium Medical Grade Foam + Spring',
        dimensions: '200cm x 180cm x 35cm',
        firmness: 'Firm',
        features: ['Medical Grade', 'Advanced Support', 'Certified', 'Premium Materials'],
        benefits: ['Maximum Support', 'Pain Relief', 'Professional Recommended', 'Best Quality'],
        warranty: '10 Years'
      },
      {
        id: 12,
        name: 'Orthopedic Plus Support Mattress',
        type: 'orthopedic',
        price: 'AED 2,199',
        priceNum: 2199,
        image: '🛌',
        rating: 4.8,
        reviews: 323,
        description: 'Enhanced orthopedic support with comfort layers',
        colors: ['Beige', 'White', 'Grey'],
        material: 'Orthopedic Foam + Comfort Layers',
        dimensions: '160cm x 200cm x 30cm',
        firmness: 'Medium-Firm',
        features: ['Enhanced Support', 'Comfort Layers', 'Breathable', 'Certified'],
        benefits: ['Good Support', 'Comfortable Sleep', 'Long Lasting', 'Value for Money'],
        warranty: '8 Years'
      }
    ],
    'spring': [
      {
        id: 13,
        name: 'Pocket Spring Mattress - Queen',
        type: 'spring',
        price: 'AED 1,699',
        priceNum: 1699,
        image: '🛌',
        rating: 4.8,
        reviews: 389,
        description: 'Advanced pocket spring technology for support',
        colors: ['White', 'Cream', 'Beige'],
        material: 'Pocket Springs + Memory Foam',
        dimensions: '160cm x 200cm x 29cm',
        firmness: 'Medium',
        features: ['Pocket Springs', 'Motion Isolation', 'Pressure Relief', 'Breathable'],
        benefits: ['Individual Support', 'No Partner Disturbance', 'Comfortable', 'Durable'],
        warranty: '7 Years'
      },
      {
        id: 14,
        name: 'Bonnell Spring Mattress - King',
        type: 'spring',
        price: 'AED 1,399',
        priceNum: 1399,
        image: '🛌',
        rating: 4.6,
        reviews: 234,
        description: 'Traditional bonnell spring mattress',
        colors: ['White', 'Grey'],
        material: 'Bonnell Springs + Foam',
        dimensions: '200cm x 180cm x 25cm',
        firmness: 'Medium',
        features: ['Spring Support', 'Affordable', 'Good Support', 'Durable'],
        benefits: ['Budget Friendly', 'Reliable Support', 'Long Lasting', 'Value'],
        warranty: '5 Years'
      },
      {
        id: 15,
        name: 'Luxury Pocket Spring - King',
        type: 'spring',
        price: 'AED 3,199',
        priceNum: 3199,
        image: '🛌',
        rating: 4.9,
        reviews: 456,
        description: 'Premium pocket spring with luxury comfort layers',
        colors: ['White', 'Beige', 'Champagne'],
        material: 'Premium Pocket Springs + Luxury Layers',
        dimensions: '200cm x 180cm x 32cm',
        firmness: 'Medium-Soft',
        features: ['Premium Springs', 'Luxury Padding', 'Motion Isolation', 'Premium Feel'],
        benefits: ['Luxurious Sleep', 'Maximum Comfort', 'Long Lasting', 'Premium Quality'],
        warranty: '10 Years'
      },
      {
        id: 16,
        name: 'Hybrid Spring Mattress',
        type: 'spring',
        price: 'AED 2,199',
        priceNum: 2199,
        image: '🛌',
        rating: 4.8,
        reviews: 367,
        description: 'Hybrid design combining springs and memory foam',
        colors: ['White', 'Grey', 'Cream'],
        material: 'Pocket Springs + Memory Foam + Latex',
        dimensions: '160cm x 200cm x 30cm',
        firmness: 'Medium',
        features: ['Hybrid Design', 'Best of Both', 'Balanced Support', 'Comfortable'],
        benefits: ['Perfect Balance', 'Great Support', 'Comfortable', 'Long Lasting'],
        warranty: '8 Years'
      },
      {
        id: 17,
        name: 'Spring Topper Mattress',
        type: 'spring',
        price: 'AED 699',
        priceNum: 699,
        image: '🛌',
        rating: 4.6,
        reviews: 189,
        description: 'Spring topper for improving existing mattress',
        colors: ['White', 'Cream'],
        material: 'Mini Springs + Padding',
        dimensions: '160cm x 200cm x 8cm',
        firmness: 'Medium',
        features: ['Spring Support', 'Easy to Use', 'Removable Cover', 'Affordable'],
        benefits: ['Instant Upgrade', 'Added Support', 'Affordable', 'Easy Care'],
        warranty: '3 Years'
      },
      {
        id: 18,
        name: 'Professional Spring Mattress',
        type: 'spring',
        price: 'AED 1,799',
        priceNum: 1799,
        image: '🛌',
        rating: 4.7,
        reviews: 278,
        description: 'Professional grade spring mattress',
        colors: ['White', 'Beige'],
        material: 'Professional Springs + Support Foam',
        dimensions: '160cm x 200cm x 28cm',
        firmness: 'Firm',
        features: ['Professional Grade', 'Strong Support', 'Durable', 'Reliable'],
        benefits: ['Strong Support', 'Long Lasting', 'Professional Quality', 'Value'],
        warranty: '7 Years'
      }
    ],
    'latex': [
      {
        id: 19,
        name: 'Natural Latex Mattress - Queen',
        type: 'latex',
        price: 'AED 2,599',
        priceNum: 2599,
        image: '🛌',
        rating: 4.9,
        reviews: 412,
        description: '100% natural latex for eco-conscious sleepers',
        colors: ['Cream', 'White', 'Natural'],
        material: '100% Natural Latex',
        dimensions: '160cm x 200cm x 25cm',
        firmness: 'Medium',
        features: ['100% Natural Latex', 'Eco-Friendly', 'Hypoallergenic', 'Sustainable'],
        benefits: ['Eco-Friendly', 'Natural Sleep', 'Hypoallergenic', 'Comfortable'],
        warranty: '15 Years'
      },
      {
        id: 20,
        name: 'Blended Latex Mattress - King',
        type: 'latex',
        price: 'AED 2,399',
        priceNum: 2399,
        image: '🛌',
        rating: 4.8,
        reviews: 345,
        description: 'High-quality blended latex mattress',
        colors: ['Cream', 'Beige'],
        material: 'Natural & Synthetic Latex Blend',
        dimensions: '200cm x 180cm x 26cm',
        firmness: 'Medium-Firm',
        features: ['Latex Blend', 'Good Support', 'Hypoallergenic', 'Breathable'],
        benefits: ['Good Support', 'Hypoallergenic', 'Durable', 'Affordable'],
        warranty: '12 Years'
      },
      {
        id: 21,
        name: 'Premium Latex with Memory Foam',
        type: 'latex',
        price: 'AED 3,099',
        priceNum: 3099,
        image: '🛌',
        rating: 4.9,
        reviews: 478,
        description: 'Luxury latex combined with memory foam',
        colors: ['White', 'Cream', 'Natural'],
        material: 'Premium Latex + Memory Foam',
        dimensions: '160cm x 200cm x 28cm',
        firmness: 'Medium',
        features: ['Premium Latex', 'Memory Foam Layer', 'Hybrid Comfort', 'Premium Quality'],
        benefits: ['Best of Both', 'Premium Comfort', 'Hypoallergenic', 'Long Lasting'],
        warranty: '15 Years'
      },
      {
        id: 22,
        name: 'Latex Topper - Thin',
        type: 'latex',
        price: 'AED 799',
        priceNum: 799,
        image: '🛌',
        rating: 4.7,
        reviews: 234,
        description: 'Natural latex topper for existing mattress',
        colors: ['Cream', 'Natural'],
        material: 'Natural Latex',
        dimensions: '160cm x 200cm x 5cm',
        firmness: 'Medium',
        features: ['Natural Latex', 'Eco-Friendly', 'Removable Cover', 'Hypoallergenic'],
        benefits: ['Instant Comfort', 'Eco-Friendly', 'Hypoallergenic', 'Removable'],
        warranty: '5 Years'
      },
      {
        id: 23,
        name: 'Luxury Latex Mattress - Single',
        type: 'latex',
        price: 'AED 1,899',
        priceNum: 1899,
        image: '🛌',
        rating: 4.8,
        reviews: 312,
        description: 'Luxury single size latex mattress',
        colors: ['Cream', 'White'],
        material: 'Premium Natural Latex',
        dimensions: '90cm x 190cm x 25cm',
        firmness: 'Medium',
        features: ['Premium Latex', 'Eco-Friendly', 'Comfortable', 'Hypoallergenic'],
        benefits: ['Premium Feel', 'Eco-Conscious', 'Healthy Sleep', 'Durable'],
        warranty: '12 Years'
      },
      {
        id: 24,
        name: 'Eco-Friendly Latex Blend',
        type: 'latex',
        price: 'AED 2,199',
        priceNum: 2199,
        image: '🛌',
        rating: 4.7,
        reviews: 289,
        description: 'Sustainable eco-friendly latex blend',
        colors: ['Natural', 'Cream'],
        material: 'Eco-Friendly Latex Blend',
        dimensions: '160cm x 200cm x 24cm',
        firmness: 'Medium-Soft',
        features: ['Eco-Friendly', 'Sustainable', 'Hypoallergenic', 'Breathable'],
        benefits: ['Sustainable', 'Eco-Conscious', 'Healthy', 'Comfortable'],
        warranty: '10 Years'
      }
    ],
    'medical': [
      {
        id: 25,
        name: 'Hospital Medical Mattress',
        type: 'medical',
        price: 'AED 3,499',
        priceNum: 3499,
        image: '🛌',
        rating: 4.9,
        reviews: 389,
        description: 'Professional hospital grade medical mattress',
        colors: ['White', 'Medical Blue'],
        material: 'Medical Grade Foam + Spring',
        dimensions: '90cm x 190cm x 30cm',
        firmness: 'Firm',
        features: ['Hospital Grade', 'Medical Certified', 'Infection Resistant', 'Easy Clean'],
        benefits: ['Medical Quality', 'Hygienic', 'Professional Care', 'Durable'],
        warranty: '10 Years'
      },
      {
        id: 26,
        name: 'Pressure Relief Medical Mattress',
        type: 'medical',
        price: 'AED 4,199',
        priceNum: 4199,
        image: '🛌',
        rating: 5.0,
        reviews: 456,
        description: 'Advanced pressure relief for medical use',
        colors: ['White', 'Light Blue'],
        material: 'Pressure Relieving Medical Foam',
        dimensions: '90cm x 190cm x 32cm',
        firmness: 'Medium-Firm',
        features: ['Pressure Relief', 'Medical Grade', 'Anti-Decubitus', 'Certified'],
        benefits: ['Pressure Relief', 'Medical Support', 'Healing', 'Professional Quality'],
        warranty: '10 Years'
      },
      {
        id: 27,
        name: 'Anti-Decubitus Medical Mattress',
        type: 'medical',
        price: 'AED 3,899',
        priceNum: 3899,
        image: '🛌',
        rating: 4.9,
        reviews: 423,
        description: 'Specialized anti-decubitus medical mattress',
        colors: ['White', 'Medical Grey'],
        material: 'Anti-Decubitus Medical Foam',
        dimensions: '90cm x 190cm x 30cm',
        firmness: 'Medium',
        features: ['Anti-Decubitus', 'Medical Grade', 'Certified', 'Therapeutic'],
        benefits: ['Medical Support', 'Therapeutic', 'Healing Focused', 'Professional'],
        warranty: '10 Years'
      },
      {
        id: 28,
        name: 'Waterproof Medical Mattress',
        type: 'medical',
        price: 'AED 2,799',
        priceNum: 2799,
        image: '🛌',
        rating: 4.8,
        reviews: 334,
        description: 'Waterproof medical grade mattress',
        colors: ['White', 'Blue'],
        material: 'Waterproof Medical Material',
        dimensions: '90cm x 190cm x 25cm',
        firmness: 'Firm',
        features: ['Waterproof', 'Medical Grade', 'Easy Clean', 'Infection Control'],
        benefits: ['Hygienic', 'Medical Grade', 'Easy Maintenance', 'Professional'],
        warranty: '8 Years'
      },
      {
        id: 29,
        name: 'Post-Surgery Medical Mattress',
        type: 'medical',
        price: 'AED 3,599',
        priceNum: 3599,
        image: '🛌',
        rating: 4.9,
        reviews: 401,
        description: 'Specialized mattress for post-surgery recovery',
        colors: ['White', 'Light Grey'],
        material: 'Medical Recovery Foam',
        dimensions: '90cm x 190cm x 31cm',
        firmness: 'Medium-Soft',
        features: ['Recovery Focused', 'Medical Grade', 'Supportive', 'Therapeutic'],
        benefits: ['Faster Recovery', 'Pain Relief', 'Medical Support', 'Comfortable'],
        warranty: '10 Years'
      },
      {
        id: 30,
        name: 'Intensive Care Medical Mattress',
        type: 'medical',
        price: 'AED 4,499',
        priceNum: 4499,
        image: '🛌',
        rating: 5.0,
        reviews: 478,
        description: 'Premium intensive care medical mattress',
        colors: ['White', 'Medical Blue'],
        material: 'Premium Medical Care Foam',
        dimensions: '90cm x 190cm x 33cm',
        firmness: 'Firm',
        features: ['Intensive Care', 'Premium Medical', 'Advanced Technology', 'Certified'],
        benefits: ['Maximum Support', 'Medical Excellence', 'Professional Care', 'Best Quality'],
        warranty: '10 Years'
      }
    ],
    'toppers': [
      {
        id: 31,
        name: 'Premium Memory Foam Topper - 7cm',
        type: 'toppers',
        price: 'AED 899',
        priceNum: 899,
        image: '🛌',
        rating: 4.8,
        reviews: 367,
        description: 'Thick memory foam topper for maximum comfort',
        colors: ['White', 'Grey', 'Cream'],
        material: 'Premium Memory Foam',
        dimensions: '160cm x 200cm x 7cm',
        firmness: 'Medium',
        features: ['Thick Topper', 'Memory Foam', 'Removable Cover', 'Easy Assembly'],
        benefits: ['Instant Comfort', 'Better Sleep', 'Easy Upgrade', 'Affordable'],
        warranty: '5 Years'
      },
      {
        id: 32,
        name: 'Gel Cooling Topper',
        type: 'toppers',
        price: 'AED 799',
        priceNum: 799,
        image: '🛌',
        rating: 4.7,
        reviews: 289,
        description: 'Cooling gel topper for hot sleepers',
        colors: ['White', 'Light Blue'],
        material: 'Gel Memory Foam',
        dimensions: '160cm x 200cm x 6cm',
        firmness: 'Medium',
        features: ['Cooling Gel', 'Temperature Control', 'Removable', 'Breathable'],
        benefits: ['Stay Cool', 'Better Sleep', 'Comfortable', 'Easy Clean'],
        warranty: '3 Years'
      },
      {
        id: 33,
        name: 'Latex Topper - Premium',
        type: 'toppers',
        price: 'AED 1,299',
        priceNum: 1299,
        image: '🛌',
        rating: 4.9,
        reviews: 412,
        description: 'Premium natural latex topper',
        colors: ['Cream', 'White', 'Natural'],
        material: 'Natural Latex',
        dimensions: '160cm x 200cm x 7cm',
        firmness: 'Medium',
        features: ['Natural Latex', 'Eco-Friendly', 'Hypoallergenic', 'Durable'],
        benefits: ['Eco-Friendly', 'Hypoallergenic', 'Comfortable', 'Long Lasting'],
        warranty: '10 Years'
      },
      {
        id: 34,
        name: 'Down Feather Topper',
        type: 'toppers',
        price: 'AED 699',
        priceNum: 699,
        image: '🛌',
        rating: 4.6,
        reviews: 234,
        description: 'Soft down feather mattress topper',
        colors: ['White', 'Cream'],
        material: 'Down Feather + Cotton',
        dimensions: '160cm x 200cm x 5cm',
        firmness: 'Soft',
        features: ['Down Feather', 'Soft & Plush', 'Removable', 'Easy Care'],
        benefits: ['Luxurious Feel', 'Extra Soft', 'Comfortable', 'Affordable'],
        warranty: '2 Years'
      },
      {
        id: 35,
        name: 'Hybrid Topper - Foam & Springs',
        type: 'toppers',
        price: 'AED 999',
        priceNum: 999,
        image: '🛌',
        rating: 4.8,
        reviews: 345,
        description: 'Hybrid topper combining foam and springs',
        colors: ['White', 'Grey'],
        material: 'Memory Foam + Mini Springs',
        dimensions: '160cm x 200cm x 8cm',
        firmness: 'Medium',
        features: ['Hybrid Design', 'Best of Both', 'Balanced Support', 'Comfortable'],
        benefits: ['Perfect Balance', 'Good Support', 'Comfortable', 'Value'],
        warranty: '5 Years'
      },
      {
        id: 36,
        name: 'Thin Comfort Topper - 5cm',
        type: 'toppers',
        price: 'AED 599',
        priceNum: 599,
        image: '🛌',
        rating: 4.6,
        reviews: 201,
        description: 'Thin comfort topper for slight upgrade',
        colors: ['White', 'Cream', 'Grey'],
        material: 'Comfort Foam',
        dimensions: '160cm x 200cm x 5cm',
        firmness: 'Medium-Soft',
        features: ['Thin Profile', 'Easy to Use', 'Affordable', 'Removable'],
        benefits: ['Budget Friendly', 'Easy Setup', 'Improved Comfort', 'Value'],
        warranty: '2 Years'
      }
    ]
  };

  // Get all products
  const allProducts = Object.values(mattressData).flat();
  
  // Filter products
  let filteredProducts = selectedFilter === 'all' 
    ? allProducts 
    : mattressData[selectedFilter] || [];

  // Apply price filter
  filteredProducts = filteredProducts.filter(
    product => product.priceNum >= priceRange[0] && product.priceNum <= priceRange[1]
  );

  // Apply firmness filter
  if (firmness !== 'all') {
    filteredProducts = filteredProducts.filter(
      product => product.firmness.includes(firmness)
    );
  }

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
        <title>Premium Mattresses - Zoya Premium Furnishing</title>
        <meta name="description" content="Shop our premium collection of mattresses including memory foam, orthopedic, spring, latex, medical grade, and toppers. Free delivery across UAE." />
        <meta name="keywords" content="mattress, memory foam, orthopedic, spring mattress, latex, medical mattress, UAE" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">🛌 Premium Mattress Collection</h1>
            <p className="text-lg text-gray-300">Discover the perfect mattress for a better sleep</p>
            <p className="text-amber-300 font-semibold mt-2">✓ Free Delivery | ✓ 10-Year Warranty | ✓ Easy Returns | ✓ Medical Grade Options</p>
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
                  <h4 className="font-bold text-gray-900 mb-3">Mattress Type</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {['all', 'memory-foam', 'orthopedic', 'spring', 'latex', 'medical', 'toppers'].map((filter) => (
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
                          ? 'All Mattresses' 
                          : filter.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
                        }
                      </button>
                    ))}
                  </div>
                </div>

                {/* Firmness Filter */}
                <div className="mb-6 pb-6 border-b">
                  <h4 className="font-bold text-gray-900 mb-3">Firmness Level</h4>
                  <div className="space-y-2">
                    {['all', 'Soft', 'Medium-Soft', 'Medium', 'Medium-Firm', 'Firm'].map((level) => (
                      <button
                        key={level}
                        onClick={() => setFirmness(level)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all text-sm ${
                          firmness === level
                            ? 'bg-amber-500 text-white font-bold'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {level === 'all' ? 'All Firmness' : level}
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
                        max="5000"
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
                        max="5000"
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
                    setFirmness('all');
                    setPriceRange([0, 5000]);
                  }}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-bold transition-all"
                >
                  Clear All Filters
                </button>

                {/* Benefits */}
                <div className="mt-6 pt-6 border-t space-y-3">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Truck className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold">Free Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Shield className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold">10-Year Warranty</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <RotateCcw className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold">Easy Returns</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-semibold">Medical Grade</span>
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
                    Showing <span className="font-bold text-amber-600">{filteredProducts.length}</span> mattresses
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                      >
                        {/* Image */}
                        <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-6xl overflow-hidden group-hover:scale-110 transition-transform">
                          {product.image}
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

                          {/* Firmness Badge */}
                          <div className="mb-3">
                            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                              {product.firmness}
                            </span>
                          </div>

                          {/* Key Features */}
                          <div className="mb-4 pb-4 border-b">
                            <p className="text-xs font-semibold text-gray-700 mb-2">Key Features:</p>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {product.features.slice(0, 2).map((feature, idx) => (
                                <li key={idx}>✓ {feature}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Warranty Badge */}
                          {product.warranty && (
                            <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-2">
                              <p className="text-xs font-semibold text-green-700">✓ {product.warranty} Warranty</p>
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
                                to={`/mattress/${product.type}/${product.id}`}
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
                      <p className="text-xl text-gray-600">No mattresses found matching your filters.</p>
                    </div>
                  )}
                </div>
              ) : (
                // List View
                <div className="space-y-4">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div key={product.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all flex gap-6">
                        <div className="w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center text-5xl flex-shrink-0">
                          {product.image}
                        </div>

                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mt-1">
                                {product.firmness}
                              </span>
                            </div>
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
                                to={`/mattress/${product.type}/${product.id}`}
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
                      <p className="text-xl text-gray-600">No mattresses found matching your filters.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sleep Guide Section */}
        <div className="bg-blue-50 py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Choose Your Perfect Mattress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Memory Foam</h3>
                <p className="text-gray-600 text-sm">Conforms to your body, perfect for pressure relief</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Orthopedic</h3>
                <p className="text-gray-600 text-sm">Medical grade support for proper alignment</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Spring Mattress</h3>
                <p className="text-gray-600 text-sm">Traditional support with breathable design</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Latex</h3>
                <p className="text-gray-600 text-sm">Natural, eco-friendly, hypoallergenic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
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
                <p className="text-gray-300">Up to 15-Year warranty</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                <h3 className="font-bold text-lg mb-2">Easy Returns</h3>
                <p className="text-gray-300">100-day comfort guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Sleep</h2>
            <p className="text-lg mb-6">Our sleep experts can help you choose the right mattress</p>
            <a href="tel:+971555124614" className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all">
              📞 Call Now: +971 55 512 4614
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MattressCategory;