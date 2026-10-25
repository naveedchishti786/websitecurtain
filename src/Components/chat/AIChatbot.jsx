import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minus, Loader2, Sparkles, User, MapPin, Phone, Calculator, CheckCircle2, ArrowRight } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'model',
      content: `Hello & Welcome to Zoya Premium Curtain! ✨

I am your AI Interior & Furnishing Consultant. I can generate instant auto-quotations, share our custom curtain & furniture services, or book your 100% FREE Home Measurement across the UAE.

How may I assist you today?`,
      actions: [
        { label: '🏷️ Get Instant Quote', query: 'I need a quote' },
        { label: '🪟 Curtain Pricing', query: 'How much are custom curtains?' },
        { label: '🛋️ Sofa & Reupholstery', query: 'How much for custom sofas and reupholstery?' },
        { label: '💆 Orthopedic Pillows', query: 'How much are your memory pillows?' },
        { label: '📍 Showroom Location', query: 'Where is your showroom located?' }
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isMinimized]);

  // Intelligent Auto-Quotation & Services Knowledge Engine
  const generateResponse = (userMsg) => {
    const text = userMsg.toLowerCase().trim();

    // 1. DIMENSION-BASED AUTO QUOTATION (e.g., "3m", "3 meters", "2.5m window")
    const meterMatch = text.match(/(\d+(?:\.\d+)?)\s*(?:m|meter|meters|mtr)\b/);
    if (meterMatch && (text.includes('curtain') || text.includes('window') || text.includes('sheer') || text.includes('blackout') || text.includes('quote') || text.includes('cost') || text.includes('price'))) {
      const meters = parseFloat(meterMatch[1]);
      const sheerMin = Math.round(meters * 50);
      const sheerMax = Math.round(meters * 85);
      const blackoutMin = Math.round(meters * 80);
      const blackoutMax = Math.round(meters * 140);
      const velvetMin = Math.round(meters * 120);
      const velvetMax = Math.round(meters * 190);
      const doubleMin = sheerMin + blackoutMin;
      const doubleMax = sheerMax + blackoutMax;

      const waMsg = encodeURIComponent(`Hi Zoya! I got an auto-quote for a ${meters}m window (${sheerMin}-${doubleMax} AED). I would like to book a free home measurement.`);

      return {
        content: `📋 Instant Auto-Quote for ${meters} Meter Window:

• Linen Sheer Curtains: AED ${sheerMin} – ${sheerMax}
• 100% Thermal Blackout: AED ${blackoutMin} – ${blackoutMax}
• Luxury Velvet Curtains: AED ${velvetMin} – ${velvetMax}
• Double Layer (Sheer + Blackout): AED ${doubleMin} – ${doubleMax}
• Smart Motorized Track: +AED 350 – 500 (Alexa/Google Home remote)

✨ Every Quote Includes 100% FREE:
✓ Free Laser Measurement at your home
✓ Custom Double-Fullness Tailoring & Heavy-Duty Tracks
✓ Free Delivery across ALL UAE Emirates
✓ Free Professional Fitting & Steaming
✓ 5-Year Comprehensive Warranty

Would you like our specialist to bring physical fabric swatches to your home for free?`,
        actions: [
          { label: '🟢 Confirm on WhatsApp', url: `https://wa.me/971555124614?text=${waMsg}` },
          { label: '📐 Book Free Home Visit', query: 'How do I book a free home measurement?' }
        ]
      };
    }

    // 2. PILLOWS & NECK CARE AUTO-QUOTATION
    if (text.includes('pillow') || text.includes('neck') || text.includes('cervical') || text.includes('8006') || text.includes('4d')) {
      const waMsg = encodeURIComponent('Hi Zoya! I would like to order orthopedic memory pillows. Please share delivery details.');
      return {
        content: `💆 Orthopedic Cervical Pillow Collection (Direct Pricing):

1. 4D Skin-Friendly Contour Memory Pillow — AED 89 (Was AED 179)
• WYGJ HEALTH Italian PostureCare Technology
• Water-ripple core + Cooling Ice-Silk fabric + Cool-gel insert
• Enlarged side-sleeping areas (60×35×9/11cm)
• Twin Pack (2 Pcs): AED 160 (Save AED 18)

2. Cervical Neck Care Pillow (Model 8006) — AED 60 (Was AED 120)
• Eco-friendly slow-rebound memory foam core
• Quilted honeycomb jacquard with luxury gold piping
• Dual-height wave contour (9cm & 11cm)
• Twin Pack (2 Pcs): AED 110 (Save AED 10)

3. Ultimate Sleep Combo Pack — AED 139
• Includes 1x 4D Italian Pillow + 1x Model 8006 Pillow

🚚 Free Delivery & Cash on Delivery (COD) available across Dubai, Sharjah, Ajman and all Emirates!`,
        actions: [
          { label: '🟢 Order on WhatsApp', url: `https://wa.me/971555124614?text=${waMsg}` },
          { label: '📞 Call: +971 55 512 4614', url: 'tel:+971555124614' }
        ]
      };
    }

    // 3. CURTAIN PRICING & AUTO-QUOTE OVERVIEW
    if (text.includes('curtain') && (text.includes('quote') || text.includes('price') || text.includes('cost') || text.includes('how much') || text.includes('rate'))) {
      const waMsg = encodeURIComponent('Hi Zoya! I would like to get a custom curtain quote and see fabric samples.');
      return {
        content: `🪟 Custom Curtain Auto-Quotation Rates (Per Meter):

• Linen & Soft Sheer: AED 50 – 85 / meter
• 100% Thermal Blackout: AED 80 – 140 / meter
• Luxury Heavy Velvet: AED 120 – 190 / meter
• Smart Motorized Track: AED 350 – 500 / track (Somfy/Tuya WiFi)

⭐ Heading Styles Available:
Wave Fold / S-Fold (Modern hotel luxury), Pinch Pleat (Double/Triple), Eyelet, Ripple Fold & American Pleat.

🎁 What's ALWAYS Included For Free:
1. Free Laser Measurement at your home
2. Free Fabric Catalog Consultation (500+ swatches)
3. Free Professional Installation & Heavy-Duty Tracks
4. 5-Year Comprehensive Warranty

Tell me your window width (e.g. "3 meters") for an exact instant calculation!`,
        actions: [
          { label: '🟢 WhatsApp Custom Quote', url: `https://wa.me/971555124614?text=${waMsg}` },
          { label: '📐 Calculate 3m Window', query: 'Quote for 3 meter window' }
        ]
      };
    }

    // 4. SOFA & REUPHOLSTERY AUTO-QUOTATION
    if (text.includes('sofa') || text.includes('couch') || text.includes('reupholster') || text.includes('upholstery') || text.includes('majlis')) {
      const waMsg = encodeURIComponent('Hi Zoya! I want a quote for custom sofas / sofa reupholstery.');
      return {
        content: `🛋️ Bespoke Sofa & Reupholstery Auto-Quotation:

• 3-Seater Custom Sofa: AED 1,450 – 2,400
• 2-Seater Loveseat: AED 1,100 – 1,800
• L-Shape / Corner Sectional: AED 2,200 – 4,500
• Luxury U-Shape / Modern Majlis: AED 3,200 – 6,500
• Sofa Reupholstery & Repair: from AED 750 (includes free fabric selection at home)

✨ Customization Options:
• Premium Velvet, Water-repellent Linen, Pet-friendly Bouclé & Italian Leatherette
• High-density orthopedic foam cores (never sag)
• Solid kiln-dried hardwood framing with 5-Year Warranty
• 100% Free delivery & room placement across UAE`,
        actions: [
          { label: '🟢 Send Sofa Photo on WhatsApp', url: `https://wa.me/971555124614?text=${waMsg}` },
          { label: '📞 Call: +971 55 512 4614', url: 'tel:+971555124614' }
        ]
      };
    }

    // 5. BEDS, MATTRESSES & STORAGE QUOTE
    if (text.includes('bed') || text.includes('mattress') || text.includes('storage') || text.includes('headboard') || text.includes('wardrobe')) {
      const waMsg = encodeURIComponent('Hi Zoya! I would like a quote for a custom bed / mattress / storage.');
      return {
        content: `🛏️ Luxury Beds & Mattress Auto-Quotation:

• Custom Upholstered Bed (Queen/King): AED 1,800 – 3,200
• Hydraulic Gas-Lift Storage Bed: AED 2,400 – 3,800
• Floor-to-Ceiling Custom Headboards: AED 1,200 – 2,500
• Orthopedic Pocket Spring Mattress: AED 950 – 2,200
• Built-in Sliding Wardrobes: from AED 450 / sq meter

✨ Includes free home measurement, delivery, assembly, and 5-Year Warranty!`,
        actions: [
          { label: '🟢 WhatsApp Quote', url: `https://wa.me/971555124614?text=${waMsg}` },
          { label: '📐 Book Free Measurement', query: 'How do I book a free home measurement?' }
        ]
      };
    }

    // 6. BLINDS AUTO-QUOTATION
    if (text.includes('blind') || text.includes('roller') || text.includes('zebra') || text.includes('wooden')) {
      const waMsg = encodeURIComponent('Hi Zoya! I would like a quote for custom window blinds.');
      return {
        content: `🪟 Custom Window Blinds Auto-Quotation:

• Sunscreen & Blackout Roller Blinds: AED 65 – 120 / sq.m
• Dual-Layer Zebra / Day & Night Blinds: AED 90 – 150 / sq.m
• Real Wooden Venetian Blinds (50mm): AED 140 – 220 / sq.m
• Elegant Fabric Roman Blinds: AED 110 – 180 / sq.m
• Motorized Remote / Smart App Option: +AED 250 – 380 per blind

✨ 100% Free laser measurement, fitting, and warranty included.`,
        actions: [
          { label: '🟢 WhatsApp Blinds Quote', url: `https://wa.me/971555124614?text=${waMsg}` }
        ]
      };
    }

    // 7. CARPETS & RUGS
    if (text.includes('carpet') || text.includes('rug') || text.includes('flooring')) {
      const waMsg = encodeURIComponent('Hi Zoya! I would like details and pricing on your carpets and rugs.');
      return {
        content: `🧶 Luxury Carpets & Rugs Collection:

• Modern Living Room & Geometric Rugs: AED 350 – 950
• Authentic Hand-Knotted Persian Silk & Wool Rugs: from AED 850
• Deep-Pile Plush Shaggy Rugs: AED 280 – 650
• Commercial Broadloom & Office Carpet Tiles: from AED 35 / sq.m
• Bespoke Custom Carpets: Tailored to your exact room floorplan!`,
        actions: [
          { label: '🟢 WhatsApp Catalog', url: `https://wa.me/971555124614?text=${waMsg}` }
        ]
      };
    }

    // 8. GENERAL QUOTE INQUIRY
    if (text.includes('quote') || text.includes('price') || text.includes('cost') || text.includes('estimate') || text.includes('how much')) {
      return {
        content: `🏷️ Zoya Instant Auto-Quotation Menu:

Please select what you would like an instant quote for:

1. Curtains (Linen Sheer, 100% Blackout, Velvet, Motorized)
2. Sofas & Reupholstery (L-Shape, 3-Seater, Majlis, Repair)
3. Memory Pillows (4D Italian Pillow AED 89, Model 8006 AED 60)
4. Beds & Storage (Hydraulic Beds, Custom Headboards, Wardrobes)
5. Window Blinds (Roller, Zebra, Wooden, Smart Motorized)

💡 Tip: Type your window size (e.g. "Quote for 3m window") for an instant estimated price!`,
        actions: [
          { label: '🪟 Curtain Pricing', query: 'How much are custom curtains?' },
          { label: '🛋️ Sofa Quote', query: 'How much for custom sofas and reupholstery?' },
          { label: '💆 Pillow Pricing', query: 'How much are your memory pillows?' },
          { label: '📐 3m Window Quote', query: 'Quote for 3 meter window' }
        ]
      };
    }

    // 9. SHOWROOM LOCATION & VISIT
    if (text.includes('where') || text.includes('address') || text.includes('location') || text.includes('showroom') || text.includes('sharjah') || text.includes('locate') || text.includes('map')) {
      return {
        content: `📍 Zoya Showroom Location:

🏢 ZOYA AFRIN CURTAIN FABRICS TRADING LLC
📌 Al Shuwaiheen - Hay Al Gharb - Sharjah, United Arab Emirates
⏰ Operating Hours: Open Daily, 9:00 AM – 9:00 PM
📞 Contact: +971 55 512 4614

🚗 Free parking available in front of the showroom!

💡 Prefer not to drive?
We offer 100% FREE Home Visits! Our interior specialist will bring 500+ physical fabric swatches to your home in Dubai, Sharjah, Ajman, or Abu Dhabi and measure your windows for free.`,
        actions: [
          { label: '📍 Open in Google Maps', url: 'https://maps.app.goo.gl/py66qExCXesdHqXt8?g_st=awb' },
          { label: '📐 Book Free Home Visit', query: 'How do I book a free home measurement?' }
        ]
      };
    }

    // 10. ALL SERVICES & WHAT IS INCLUDED
    if (text.includes('service') || text.includes('alteration') || text.includes('hemming') || text.includes('repair') || text.includes('what do you offer') || text.includes('do you do')) {
      return {
        content: `🛠️ Complete Zoya Premium Services:

1. 100% Free In-Home Measurement & Design Consultation
2. Custom Curtain Tailoring (Blackout, Sheer, Velvet, Ripple Fold)
3. Smart Motorization (Somfy/Tuya tracks with Alexa & Google Home)
4. Curtain Alteration, Hemming & Track Repair
5. Custom Sofa Manufacturing & Sofa Reupholstery
6. Custom Upholstered Beds & Hydraulic Storage Beds
7. Medical Orthopedic Mattresses & Memory Foam Pillows
8. Commercial & Residential Carpets and Carpet Tiles
9. Free Delivery & Free Installation across all 7 UAE Emirates
10. 5-Year Comprehensive Warranty on all mechanisms & craftsmanship`,
        actions: [
          { label: '🏷️ Get Instant Quote', query: 'I need a quote' },
          { label: '📐 Book Free Consultation', query: 'How do I book a free home measurement?' }
        ]
      };
    }

    // 11. FREE HOME MEASUREMENT BOOKING
    if (text.includes('book') || text.includes('measure') || text.includes('visit') || text.includes('consultation') || text.includes('appointment')) {
      const waMsg = encodeURIComponent('Hi Zoya! I would like to book a free home measurement and see fabric catalogs at my home.');
      return {
        content: `📐 How to Book Your 100% FREE Home Measurement:

1. Click the WhatsApp button below or message us at +971 55 512 4614.
2. Share your preferred date, time, and location (Dubai, Sharjah, Ajman, Abu Dhabi, etc.).
3. Our interior consultant arrives with laser-measuring tools and 500+ physical fabric swatches (Blackout, Sheer, Velvet, Sofa fabrics).
4. You receive an exact on-the-spot quotation with zero commitment required!

✨ Totally free with no obligation to buy.`,
        actions: [
          { label: '🟢 Book Free Visit on WhatsApp', url: `https://wa.me/971555124614?text=${waMsg}` },
          { label: '📞 Call Us Directly', url: 'tel:+971555124614' }
        ]
      };
    }

    // 12. WARRANTY
    if (text.includes('warranty') || text.includes('guarantee')) {
      return {
        content: `🛡️ Comprehensive 5-Year Warranty:

All Zoya custom curtains, motorized tracks, window blinds, and sofa frameworks come with our official 5-Year Comprehensive Warranty covering:
• Motorized mechanisms & remotes
• Heavy-duty curtain tracks & runners
• Stitching, hemming & seam integrity
• Sofa solid wood frames & high-density foam

We guarantee lasting luxury and peace of mind!`,
        actions: [
          { label: '🏷️ Get Instant Quote', query: 'I need a quote' }
        ]
      };
    }

    // 13. INSTALLATION & DELIVERY
    if (text.includes('install') || text.includes('fitting') || text.includes('deliver') || text.includes('shipping') || text.includes('abu dhabi') || text.includes('dubai') || text.includes('ajman')) {
      return {
        content: `🚚 Free Delivery & Professional Installation:

• 100% FREE White-Glove Delivery across ALL UAE Emirates (Dubai, Abu Dhabi, Sharjah, Ajman, RAK, UAQ, Fujairah).
• 100% FREE Professional Fitting & Steaming by certified master installers.
• Same-day and scheduled delivery slots available.
• Full setup, wall mounting, and packaging removal included!`,
        actions: [
          { label: '📐 Book Free Measurement', query: 'How do I book a free home measurement?' }
        ]
      };
    }

    // 14. CONTACT DETAILS
    if (text.includes('contact') || text.includes('phone') || text.includes('whatsapp') || text.includes('call') || text.includes('number') || text.includes('email')) {
      return {
        content: `📞 Contact Zoya Premium Curtain:

• WhatsApp & Call: +971 55 512 4614
• Email: info@zoyapremiumcurtains.com
• Showroom: ZOYA AFRIN CURTAIN FABRICS TRADING LLC, Al Shuwaiheen, Sharjah, UAE
• Working Hours: Open Daily, 9:00 AM – 9:00 PM

We respond instantly on WhatsApp!`,
        actions: [
          { label: '🟢 Open WhatsApp (+971 55 512 4614)', url: 'https://wa.me/971555124614' },
          { label: '📞 Call Now', url: 'tel:+971555124614' }
        ]
      };
    }

    // 15. GREETING
    if (text.includes('hello') || text.includes('hi') || text.includes('hey') || text.includes('salam') || text.includes('good morning') || text.includes('good afternoon')) {
      return {
        content: `Hello! 👋 Welcome to Zoya Premium Curtain.

I am your AI Interior Specialist. Are you looking for an instant price quote, exploring our custom curtains & sofas, or would you like to book a 100% free home measurement?`,
        actions: [
          { label: '🏷️ Get Instant Quote', query: 'I need a quote' },
          { label: '🪟 Curtain Pricing', query: 'How much are custom curtains?' },
          { label: '🛋️ Sofa Quote', query: 'How much for custom sofas and reupholstery?' },
          { label: '📐 Book Free Home Visit', query: 'How do I book a free home measurement?' }
        ]
      };
    }

    // 16. DEFAULT HELPFUL FALLBACK
    const waDefault = encodeURIComponent(`Hi Zoya! I have a question regarding: "${userMsg}".`);
    return {
      content: `Thank you for your message! ✨

We specialize in bespoke custom curtains, motorized smart blinds, luxury sofas, reupholstery, upholstered beds, and orthopedic memory pillows across the UAE.

Would you like an instant price quote, or should our specialist bring physical fabric swatches to your home for a 100% free consultation?`,
      actions: [
        { label: '🏷️ Get Auto-Quote', query: 'I need a quote' },
        { label: '🟢 Ask on WhatsApp', url: `https://wa.me/971555124614?text=${waDefault}` },
        { label: '📍 Showroom Location', query: 'Where is your showroom located?' }
      ]
    };
  };

  const handleCloseChat = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    setIsMinimized(false);
    
    setTimeout(() => {
      setMessages([
        {
          role: 'model',
          content: `Hello & Welcome to Zoya Premium Curtain! ✨

I am your AI Interior & Furnishing Consultant. I can generate instant auto-quotations, share our custom curtain & furniture services, or book your 100% FREE Home Measurement across the UAE.

How may I assist you today?`,
          actions: [
            { label: '🏷️ Get Instant Quote', query: 'I need a quote' },
            { label: '🪟 Curtain Pricing', query: 'How much are custom curtains?' },
            { label: '🛋️ Sofa & Reupholstery', query: 'How much for custom sofas and reupholstery?' },
            { label: '💆 Orthopedic Pillows', query: 'How much are your memory pillows?' },
            { label: '📍 Showroom Location', query: 'Where is your showroom located?' }
          ]
        }
      ]);
      setInputMessage('');
    }, 300);
  };

  const handleSendMessage = async (e, customText = null) => {
    e?.preventDefault();
    const query = (customText || inputMessage).trim();
    if (!query) return;

    setInputMessage('');
    
    // Add user message to UI
    setMessages(prev => [...prev, { role: 'user', content: query }]);
    setIsLoading(true);

    setTimeout(() => {
      const response = generateResponse(query);
      setMessages(prev => [
        ...prev, 
        { 
          role: 'model', 
          content: response.content, 
          actions: response.actions 
        }
      ]);
      setIsLoading(false);
    }, 800);
  };

  const quickReplies = [
    { label: "🏷️ Instant Quote", query: "I need a quote" },
    { label: "🪟 Curtain Pricing", query: "How much are custom curtains?" },
    { label: "🛋️ Custom Sofa Quote", query: "How much for custom sofas and reupholstery?" },
    { label: "💆 Pillows (60-89 AED)", query: "How much are your memory pillows?" },
    { label: "📍 Showroom Map", query: "Where is your showroom located?" },
    { label: "📐 Book Free Visit", query: "How do I book a free home measurement?" }
  ];

  // Floating Trigger Button
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#0B1E36] hover:bg-[#C8A96A] text-white hover:text-[#0B1E36] p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[#C8A96A]/40 transition-all duration-300 border-2 border-[#C8A96A]/40 group flex items-center justify-center animate-bounce"
        aria-label="Open AI Assistant"
      >
        <Sparkles className="absolute top-1 right-1 w-3.5 h-3.5 text-[#C8A96A] group-hover:text-[#0B1E36] animate-pulse" />
        <MessageCircle className="w-8 h-8 transition-colors" />
      </button>
    );
  }

  // Interactive Chat Window
  return (
    <div 
      className={`fixed right-3 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-[420px] bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#C8A96A]/30 flex flex-col transition-all duration-300 transform origin-bottom-right ${
        isMinimized ? 'bottom-6 h-16' : 'bottom-6 h-[640px] max-h-[88vh]'
      }`}
    >
      {/* Header */}
      <div 
        className="bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] p-4 flex justify-between items-center cursor-pointer border-b-4 border-[#C8A96A] text-white"
        onClick={() => setIsMinimized(!isMinimized)}
      >
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-11 h-11 flex items-center justify-center bg-white/10 rounded-2xl shadow-inner border border-[#C8A96A]/40 backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0B1E36] animate-pulse"></div>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <h3 className="font-black text-sm text-white tracking-tight">Zoya AI Consultant</h3>
              <span className="bg-[#C8A96A] text-[#0B1E36] text-[9px] font-black px-1.5 py-0.5 rounded uppercase">Auto-Quote</span>
            </div>
            <p className="text-xs text-[#C8A96A] font-semibold flex items-center gap-1">
              <span>● Online</span>
              <span className="text-white/60">• Instant Quotation & Support</span>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1 text-[#E8E2D8]">
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
            title={isMinimized ? "Expand" : "Minimize"}
          >
            <Minus className="w-5 h-5" />
          </button>
          <button 
            onClick={handleCloseChat}
            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors text-red-300 hover:text-red-100"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#FDFBF7] space-y-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} w-full`}>
                  {msg.role === 'model' && (
                    <div className="w-7 h-7 rounded-full bg-[#0B1E36] flex items-center justify-center mr-2 flex-shrink-0 mt-1 shadow border border-[#C8A96A]/30">
                      <Sparkles className="w-3.5 h-3.5 text-[#C8A96A]" />
                    </div>
                  )}
                  
                  <div 
                    className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-r from-[#C8A96A] to-[#B8955A] text-[#0B1E36] font-bold rounded-tr-sm' 
                        : 'bg-white border border-[#E8E2D8] text-[#173054] rounded-tl-sm'
                    }`}
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {msg.content}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-[#0B1E36] flex items-center justify-center ml-2 flex-shrink-0 mt-1 shadow">
                      <User className="w-3.5 h-3.5 text-white" />
                    </div>
                  )}
                </div>

                {/* Interactive Action Buttons if available */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 ml-9 max-w-[85%]">
                    {msg.actions.map((act, actIdx) => (
                      act.url ? (
                        <a
                          key={actIdx}
                          href={act.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-[#25D366] hover:bg-[#128C7E] text-white shadow transition-all transform hover:scale-105"
                        >
                          <span>{act.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      ) : (
                        <button
                          key={actIdx}
                          onClick={() => handleSendMessage(null, act.query)}
                          className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-[#0B1E36]/5 hover:bg-[#C8A96A] hover:text-[#0B1E36] text-[#0B1E36] border border-[#C8A96A]/30 transition-all shadow-sm"
                        >
                          <span>{act.label}</span>
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start animate-in fade-in">
                <div className="w-7 h-7 rounded-full bg-[#0B1E36] flex items-center justify-center mr-2 shadow border border-[#C8A96A]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8A96A]" />
                </div>
                <div className="bg-white border border-[#E8E2D8] p-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#C8A96A] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#C8A96A] rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                  <div className="w-2 h-2 bg-[#C8A96A] rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                  <span className="text-xs text-gray-400 font-semibold ml-1">Calculating quote...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies Bar */}
          <div className="p-2.5 bg-white border-t border-[#E8E2D8] flex gap-2 overflow-x-auto no-scrollbar">
            {quickReplies.map((reply, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(null, reply.query)}
                className="whitespace-nowrap px-3.5 py-1.5 bg-[#F5F1EA] hover:bg-[#C8A96A] hover:text-[#0B1E36] text-[#173054] text-xs font-bold rounded-full transition-all border border-[#E8E2D8] hover:border-[#C8A96A] flex-shrink-0 shadow-sm"
              >
                {reply.label}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form 
            onSubmit={(e) => handleSendMessage(e)}
            className="p-3 bg-white border-t border-[#E8E2D8] flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask a question or enter window size (e.g. 3m)..."
              className="flex-1 bg-[#F5F1EA] text-[#0B1E36] px-4 py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C8A96A] text-xs sm:text-sm font-medium transition-all border border-transparent focus:border-[#C8A96A]"
              disabled={isLoading}
            />
            <button
              id="chat-submit-btn"
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="bg-[#0B1E36] hover:bg-[#C8A96A] text-white hover:text-[#0B1E36] p-3 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md group flex-shrink-0"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin text-[#C8A96A]" />
              ) : (
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default AIChatbot;
