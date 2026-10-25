import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Sparkles, CheckCircle, ArrowRight, Eye, Phone, MessageCircle, Award, Cpu, Zap } from 'lucide-react';

const PillowsCategory = () => {
  const { type } = useParams();
  const [selectedHeroId, setSelectedHeroId] = useState('pillow-4d');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // The two premier featured pillows
  const productsData = {
    'pillow-4d': {
      id: 'pillow-4d',
      name: '4D Skin-Friendly Contour Memory Pillow',
      tagline: 'WYGJ HEALTH • Technology from Italy • PostureCare Tech',
      badgeTag: 'New Italian Tech • AED 89',
      price: 'AED 89',
      priceNum: 89,
      originalPrice: 'AED 179',
      discount: '50% OFF',
      rating: 5.0,
      reviews: 182,
      dimensions: '60 × 35 × 9/11 cm',
      coreMaterial: 'Water Ripple Memory Foam Core with Cool Gel Honeycomb Insert',
      coverMaterial: 'Ice-Silk Breathable Fabric with 3D Ventilation Mesh',
      description: 'Crafted with Italian PostureCare technology, this 4D skin-friendly contour pillow features an enlarged and widened side sleeping area, ergonomic cervical neck support, and a soothing water ripple core blended with the cooling touch of ice-silk fabric.',
      gallery: [
        { url: '/images/pillows/pillow-4d-studio-pro.jpg', caption: 'Luxury Studio Shot • 4D Ergonomic Cervical Contour' },
        { url: '/images/pillows/pillow-4d-bedroom-pro.jpg', caption: 'Modern Master Bedroom • Hotel Luxury Styling' },
        { url: '/images/pillows/pillow-spine-alignment.jpg', caption: 'Cervical Spine Support • Side & Back Sleeper Alignment' },
        { url: '/images/pillows/pillow-4d-diagram.png', caption: 'Water Ripple Core & Ice Silk Fabric Structure' },
        { url: '/images/pillows/pillow-4d-cover.png', caption: 'WYGJ Health Italy • PostureCare Packaging Presentation' },
        { url: '/images/pillows/pillow-4d-sleep.png', caption: 'Deep Restorative Sleep • Non-Allergenic & Odourless' },
      ],
      highlights: [
        'PostureCare Italian Technology: Precision ergonomic cervical spine contouring',
        'Enlarged and widened side sleeping area design for effortless movement',
        'Water ripple pillow core blends with the cooling skin-feel of ice-silk fabric',
        'Cool-gel honeycomb inner insert prevents heat buildup all night',
        'Non-allergenic, odourless, durable & resilient high-density memory foam',
        'Dual ergonomic heights: 9cm (back/stomach) and 11cm (side sleepers)',
        'Removable, machine washable ice-silk zippered protective cover'
      ],
      specs: {
        'Technology': 'WYGJ HEALTH (Italy)',
        'Brand / Series': 'DREAMMAKER PostureCare',
        'Dimensions': '60 × 35 × 9/11 cm',
        'Core Type': 'Water-Ripple Contour Memory Foam + Gel',
        'Pillow Surface': 'Skin-Friendly Ice Silk Fabric',
        'Special Features': 'Non-Allergenic & Odourless',
        'Sleep Positions': 'Side, Back & Multi-Position Sleepers',
        'Warranty': '2 Years Quality Assurance'
      }
    },
    'pillow-8006': {
      id: 'pillow-8006',
      name: 'Cervical Neck Care Pillow (Model 8006)',
      tagline: 'The balance between softness and support',
      badgeTag: 'Best Seller • AED 60',
      price: 'AED 60',
      priceNum: 60,
      originalPrice: 'AED 120',
      discount: '50% OFF',
      rating: 4.9,
      reviews: 148,
      dimensions: '60 × 35 × 9/11 cm',
      coreMaterial: 'Eco-Friendly Comfort Memory Foam Core',
      coverMaterial: 'Breathable Quilted Honeycomb Jacquard with Gold Trim',
      description: 'Scientifically contoured cervical orthopedic pillow engineered to relieve neck stiffness, tension headaches, and shoulder strain. Dual-height contour (9cm / 11cm) ensures optimal spine alignment for restful, pain-free sleep.',
      gallery: [
        { url: '/images/pillows/pillow-8006-studio-pro.jpg', caption: 'Studio Presentation • Model 8006 Wave Contour' },
        { url: '/images/pillows/pillow-8006-pair.png', caption: 'Official Packaging Presentation • Model 8006' },
        { url: '/images/pillows/pillow-8006-real.png', caption: 'Showroom Photo • Honeycomb Quilted Fabric & Gold Trim' },
        { url: '/images/pillows/pillow-8006-packaging.png', caption: 'Official Carry Bag • Eco-Friendly Pillow Core' },
        { url: '/images/pillows/pillow-8006-tech.png', caption: 'Technology & Life • Healthy Sleep Resources' },
        { url: '/images/pillows/pillow-spine-alignment.jpg', caption: 'Orthopedic Cervical Spine Alignment Guide' },
      ],
      highlights: [
        'Ergonomic Dual Height: 9cm (back/stomach) and 11cm (side sleepers)',
        'Eco-Friendly Slow-Rebound Comfort Memory Foam Core',
        'Cervical Spine Support: Aligns head, neck, and shoulders naturally',
        'Breathable quilted jacquard cover with air circulation mesh panels',
        'Luxury gold cord piping border with durable hidden zipper',
        'Removable, hypoallergenic & machine washable cover',
        'Model 8006 with original factory carry-bag packaging'
      ],
      specs: {
        'Model Number': '8006',
        'Dimensions': '60 × 35 × 9/11 cm',
        'Core Type': 'Eco-Friendly Slow-Rebound Memory Foam',
        'Pillow Shape': 'Ergonomic Cervical Wave Contour',
        'Cover': 'Quilted Jacquard + Gold Trim + Air Mesh',
        'Sleep Positions': 'Side, Back & Stomach Sleepers',
        'Warranty': '2 Years Quality Assurance'
      }
    }
  };

  const currentHero = productsData[selectedHeroId];

  // All catalog items
  const pillowProducts = [
    {
      id: 'prod-4d-single',
      name: '4D Skin-Friendly Contour Memory Pillow',
      category: 'cervical',
      price: 'AED 89',
      priceNum: 89,
      originalPrice: 'AED 179',
      tag: 'New Italian Tech',
      image: '/images/pillows/pillow-4d-studio-pro.jpg',
      badge: 'SIZE: 60*35*9/11cm',
      rating: 5.0,
      reviews: 182,
      desc: 'PostureCare technology from Italy. Ice silk fabric with water-ripple memory core.'
    },
    {
      id: 'prod-8006-single',
      name: 'Cervical Neck Care Pillow (Model 8006)',
      category: 'cervical',
      price: 'AED 60',
      priceNum: 60,
      originalPrice: 'AED 120',
      tag: 'Best Seller',
      image: '/images/pillows/pillow-8006-studio-pro.jpg',
      badge: 'SIZE: 60*35*9/11cm',
      rating: 4.9,
      reviews: 148,
      desc: 'The balance between softness and support. Eco-friendly memory foam core.'
    },
    {
      id: 'prod-4d-pair',
      name: '4D Skin-Friendly Pillow (Twin Pack - 2 Pcs)',
      category: 'cervical',
      price: 'AED 160',
      priceNum: 160,
      originalPrice: 'AED 358',
      tag: 'Family Value',
      image: '/images/pillows/pillow-4d-bedroom-pro.jpg',
      badge: 'Pack of 2 (Save AED 18)',
      rating: 5.0,
      reviews: 64,
      desc: 'Set of two 4D Italian Technology ice-silk pillows with carry bags.'
    },
    {
      id: 'prod-8006-pair',
      name: 'Cervical Neck Care Pillow (Twin Pack - 2 Pcs)',
      category: 'cervical',
      price: 'AED 110',
      priceNum: 110,
      originalPrice: 'AED 240',
      tag: 'Special Value',
      image: '/images/pillows/pillow-8006-pair.png',
      badge: 'Pack of 2 (Model 8006)',
      rating: 4.9,
      reviews: 96,
      desc: 'Set of two Model 8006 cervical neck pillows with original factory bags.'
    },
    {
      id: 'prod-combo',
      name: 'Orthopedic Combo Pack (1x 4D + 1x Model 8006)',
      category: 'cervical',
      price: 'AED 139',
      priceNum: 139,
      originalPrice: 'AED 299',
      tag: 'Best Combo',
      image: '/images/pillows/pillow-spine-alignment.jpg',
      badge: 'Complete Sleep Set',
      rating: 5.0,
      reviews: 53,
      desc: 'Experience both: 1x 4D Ice Silk pillow and 1x Model 8006 Cervical pillow.'
    },
    {
      id: 'prod-4d-diagram',
      name: '4D Water Ripple Ice-Silk Healthy Sleep Pillow',
      category: 'memory-foam',
      price: 'AED 89',
      priceNum: 89,
      originalPrice: 'AED 179',
      tag: 'Ergonomic',
      image: '/images/pillows/pillow-4d-diagram.png',
      badge: 'Side Sleeper Focus',
      rating: 4.9,
      reviews: 77,
      desc: 'Enlarged side sleeping areas engineered for healthy cervical microcirculation.'
    }
  ];

  const handleHeroSwitch = (id) => {
    setSelectedHeroId(id);
    setActiveImageIndex(0);
  };

  const currentWhatsappMsg = encodeURIComponent(
    `Hi Zoya Curtains! I would like to order the "${currentHero.name}" (${currentHero.dimensions}) for ${currentHero.price}. Please confirm delivery details.`
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <Helmet>
        <title>Orthopedic Cervical Pillows | 4D Contour (AED 89) & Model 8006 (AED 60) - Zoya UAE</title>
        <meta 
          name="description" 
          content="Buy premium 4D Skin-Friendly Contour Memory Pillow (AED 89) and Cervical Neck Care Pillow Model 8006 (AED 60) in UAE. Italian PostureCare tech, ice-silk cooling fabric, eco-friendly memory foam core. Free consultation & fast delivery in Dubai, Sharjah & Ajman." 
        />
      </Helmet>

      {/* ===== HERO / BANNER ===== */}
      <section className="relative bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] text-white py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#38BDF8] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#C8A96A]/20 border border-[#C8A96A]/40 mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#C8A96A]" />
            <span className="text-xs sm:text-sm font-bold text-[#F5F1EA] uppercase tracking-wider">
              Italian PostureCare & Orthopedic Collection
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
            Ergonomic Cervical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#C8A96A] to-[#E8C547]">Memory Pillows</span>
          </h1>

          <p className="text-sm sm:text-lg text-[#F5F1EA] max-w-2xl mx-auto font-medium mb-8">
            Engineered for restful, pain-free sleep. Relieve neck stiffness, tension headaches, and shoulder strain with genuine orthopedic contour support.
          </p>

          {/* Quick Price Banner Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            <button
              onClick={() => handleHeroSwitch('pillow-4d')}
              className={`flex items-center space-x-3 px-5 py-3 rounded-2xl border-2 transition-all duration-300 ${
                selectedHeroId === 'pillow-4d'
                  ? 'bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-[#0B1E36] border-[#D4AF37] shadow-xl scale-105 font-black'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/20 font-bold'
              }`}
            >
              <Cpu className="w-5 h-5 text-[#38BDF8]" />
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider block opacity-80">New Arrival • Italian Tech</span>
                <span className="text-sm sm:text-base">4D Contour Pillow • <span className="text-white font-black underline">AED 89</span></span>
              </div>
            </button>

            <button
              onClick={() => handleHeroSwitch('pillow-8006')}
              className={`flex items-center space-x-3 px-5 py-3 rounded-2xl border-2 transition-all duration-300 ${
                selectedHeroId === 'pillow-8006'
                  ? 'bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-[#0B1E36] border-[#D4AF37] shadow-xl scale-105 font-black'
                  : 'bg-white/10 hover:bg-white/20 text-white border-white/20 font-bold'
              }`}
            >
              <Award className="w-5 h-5 text-[#D4AF37]" />
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider block opacity-80">Best Seller • Classic</span>
                <span className="text-sm sm:text-base">Model 8006 Pillow • <span className="text-white font-black underline">AED 60</span></span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ===== STAR PRODUCT SPOTLIGHT ===== */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4">
        {/* Toggle Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 pb-4 border-b border-[#C8A96A]/30 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C8A96A]">
              Featured Product Spotlight
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B1E36]">
              {currentHero.name}
            </h2>
          </div>

          <div className="inline-flex p-1.5 bg-[#0B1E36]/5 rounded-2xl border border-[#C8A96A]/30">
            <button
              onClick={() => handleHeroSwitch('pillow-4d')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                selectedHeroId === 'pillow-4d'
                  ? 'bg-[#0B1E36] text-[#D4AF37] shadow-md'
                  : 'text-[#0B1E36]/70 hover:text-[#0B1E36]'
              }`}
            >
              4D Contour (AED 89)
            </button>
            <button
              onClick={() => handleHeroSwitch('pillow-8006')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all ${
                selectedHeroId === 'pillow-8006'
                  ? 'bg-[#0B1E36] text-[#D4AF37] shadow-md'
                  : 'text-[#0B1E36]/70 hover:text-[#0B1E36]'
              }`}
            >
              Model 8006 (AED 60)
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border-2 border-[#C8A96A]/30 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
            
            {/* Left: Gallery & Main Image (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#F5F1EA] to-white border-2 border-[#C8A96A]/20 shadow-inner h-[340px] sm:h-[460px] flex items-center justify-center p-4">
                <img 
                  src={currentHero.gallery[activeImageIndex].url}
                  alt={currentHero.gallery[activeImageIndex].caption}
                  className="w-full h-full object-contain object-center transition-all duration-500 transform hover:scale-105"
                />

                {/* Badges on Image */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-[#0B1E36] text-[#D4AF37] font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-xl shadow-lg border border-[#C8A96A]/40 uppercase tracking-wide">
                    {currentHero.badgeTag}
                  </span>
                  <span className="bg-[#0284C7] text-white font-bold text-xs px-3 py-1 rounded-xl shadow-md uppercase tracking-wider">
                    SIZE: 60*35*9/11cm
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-[#C8A96A] text-[#0B1E36] font-black text-xs sm:text-sm px-3.5 py-1.5 rounded-xl shadow-lg uppercase">
                  {currentHero.price} Only
                </div>

                {/* Caption bar */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg text-center font-medium">
                  {currentHero.gallery[activeImageIndex].caption}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-6 gap-2">
                {currentHero.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative rounded-xl overflow-hidden h-16 sm:h-20 border-2 transition-all p-1 bg-white ${
                      activeImageIndex === idx 
                        ? 'border-[#C8A96A] shadow-md ring-2 ring-[#C8A96A]/40 scale-105' 
                        : 'border-gray-200 hover:border-[#C8A96A]/50 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover rounded-lg" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Information & Ordering (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[#C8A96A] font-bold text-xs tracking-widest uppercase inline-block bg-[#C8A96A]/15 px-3 py-1 rounded-full mb-2">
                  ✨ {currentHero.tagline}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1E36] leading-tight">
                  {currentHero.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#173054]/80 font-medium mt-2 leading-relaxed">
                  {currentHero.description}
                </p>
              </div>

              {/* Price Banner */}
              <div className="bg-gradient-to-r from-[#F5F1EA] to-white p-4 rounded-2xl border-2 border-[#C8A96A]/30 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold">Special Offer Price</p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-black text-[#0B1E36]">{currentHero.price}</span>
                    <span className="text-sm text-gray-400 line-through">{currentHero.originalPrice}</span>
                    <span className="text-xs font-bold bg-[#C8A96A] text-[#0B1E36] px-2 py-0.5 rounded-full">{currentHero.discount}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-[#25D366] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    In Stock
                  </span>
                  <p className="text-[11px] text-[#C8A96A] font-bold mt-1">Free UAE Delivery</p>
                </div>
              </div>

              {/* Specification Grid */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                {Object.entries(currentHero.specs).slice(0, 4).map(([key, value]) => (
                  <div key={key} className="bg-[#F8F9FA] p-2.5 rounded-xl border border-gray-200">
                    <p className="text-gray-500 font-medium text-[11px]">{key}</p>
                    <p className="font-black text-[#0B1E36] text-xs truncate">{value}</p>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="space-y-1.5">
                <p className="text-xs font-black uppercase text-[#0B1E36] tracking-wider">Key Benefits:</p>
                {currentHero.highlights.slice(0, 4).map((h, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-[#173054] font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-[#C8A96A] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/971555124614?text=${currentWhatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-[#25D366] text-white font-black text-base rounded-xl hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl transform hover:scale-[1.02] uppercase tracking-wide"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order on WhatsApp • {currentHero.price}</span>
                </a>

                <a
                  href="tel:+971555124614"
                  className="w-full flex items-center justify-center space-x-3 px-6 py-3.5 bg-[#0B1E36] text-white font-bold text-sm rounded-xl hover:bg-[#173054] transition-all shadow-md transform hover:scale-[1.01] uppercase tracking-wide"
                >
                  <Phone className="w-4 h-4 text-[#C8A96A]" />
                  <span>Call to Order: +971 55 512 4614</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== ALL PRODUCTS IN PILLOWS COLLECTION ===== */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[#C8A96A] font-bold text-xs tracking-widest uppercase bg-[#C8A96A]/15 px-3 py-1 rounded-full border border-[#C8A96A]/30 inline-block mb-2">
            Complete Collection
          </span>
          <h2 className="text-3xl font-black text-[#0B1E36]">
            Pillow Collection & Package Deals
          </h2>
          <p className="text-sm text-[#173054] font-medium max-w-xl mx-auto mt-2">
            Choose single or discounted multi-pack options. Delivered anywhere across Dubai, Sharjah, Ajman, and all Emirates with Cash on Delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillowProducts.map((prod) => (
            <div 
              key={prod.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#C8A96A]/20 hover:border-[#C8A96A] overflow-hidden flex flex-col group hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative h-64 bg-[#F5F1EA] overflow-hidden p-4 flex items-center justify-center">
                <img 
                  src={prod.image} 
                  alt={prod.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 left-3 bg-[#0B1E36] text-[#D4AF37] font-black text-[10px] px-2.5 py-1 rounded-lg uppercase tracking-wider">
                  {prod.tag}
                </span>
                <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm text-[#0B1E36] font-bold text-[10px] px-2.5 py-1 rounded shadow">
                  {prod.badge}
                </span>
                <span className="absolute top-3 right-3 bg-[#C8A96A] text-[#0B1E36] font-black text-xs px-2.5 py-1 rounded-lg shadow">
                  {prod.price}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C8A96A] text-[#C8A96A]" />
                    ))}
                    <span className="text-xs text-gray-500 font-bold ml-1">({prod.reviews})</span>
                  </div>

                  <h3 className="font-black text-[#0B1E36] text-base mb-1 group-hover:text-[#C8A96A] transition-colors leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#173054]/80 font-medium mb-3">
                    {prod.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-2xl font-black text-[#0B1E36]">{prod.price}</span>
                      <span className="text-xs text-gray-400 line-through ml-2">{prod.originalPrice}</span>
                    </div>
                    <span className="text-[10px] font-bold text-[#25D366] uppercase">In Stock</span>
                  </div>

                  <a
                    href={`https://wa.me/971555124614?text=${encodeURIComponent(`Hi Zoya Curtains! I want to order "${prod.name}" for ${prod.price}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-2.5 bg-[#0B1E36] hover:bg-[#C8A96A] text-white hover:text-[#0B1E36] font-black text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURE HIGHLIGHTS ===== */}
      <section className="py-14 bg-gradient-to-b from-[#F5F1EA] to-white border-t border-[#C8A96A]/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0B1E36]">
              Why Choose Our Orthopedic Memory Pillows?
            </h2>
            <p className="text-sm text-[#173054] font-medium max-w-xl mx-auto mt-2">
              Clinically contoured to match the natural curvature of your cervical spine, keeping your head, neck, and shoulders in restorative equilibrium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: '🇮🇹',
                title: 'Italian PostureCare Technology',
                desc: 'WYGJ Health Italian technology engineered with water-ripple core & cool-gel honeycomb padding.'
              },
              {
                icon: '📐',
                title: 'Dual-Height Design (9/11cm)',
                desc: 'Two scientific heights in one pillow: 9cm for back sleeping and 11cm for shoulder clearance on side.'
              },
              {
                icon: '❄️',
                title: 'Ice-Silk Cooling Fabric',
                desc: 'Skin-friendly cooling fabric blends with breathable 3D airflow mesh to prevent night sweats.'
              },
              {
                icon: '🌿',
                title: 'Non-Allergenic & Odourless',
                desc: 'Eco-friendly high resilience memory foam that never flattens or sags, backed by a 2-year warranty.'
              }
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#C8A96A] text-center hover:shadow-xl transition-all">
                <span className="text-4xl block mb-3">{f.icon}</span>
                <h3 className="font-black text-[#0B1E36] text-base mb-2">{f.title}</h3>
                <p className="text-xs text-[#173054] font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust Guarantees */}
          <div className="mt-12 bg-white rounded-2xl p-6 shadow-md border border-[#C8A96A]/30 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Truck className="w-8 h-8 text-[#C8A96A]" />
              <div className="text-left">
                <p className="font-black text-sm text-[#0B1E36]">Fast UAE Delivery</p>
                <p className="text-xs text-gray-500">Dubai, Sharjah, Ajman & all Emirates</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-8 h-8 text-[#C8A96A]" />
              <div className="text-left">
                <p className="font-black text-sm text-[#0B1E36]">100% Quality Guaranteed</p>
                <p className="text-xs text-gray-500">Original Italian Tech & Model 8006 Seals</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <RotateCcw className="w-8 h-8 text-[#C8A96A]" />
              <div className="text-left">
                <p className="font-black text-sm text-[#0B1E36]">Cash on Delivery</p>
                <p className="text-xs text-gray-500">Inspect and pay when you receive your pillow</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PillowsCategory;
