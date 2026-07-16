import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'How to Choose the Perfect Curtains',
      category: 'Design Guide',
      excerpt: 'A comprehensive guide to selecting the right fabric, color, and style for your space.',
      content: `
        <h2>How to Choose the Perfect Curtains</h2>
        <p>Curtains are more than just window coverings – they're a statement piece that can transform your entire room. Whether you're looking to update your living room, bedroom, or office, choosing the perfect curtains involves considering several important factors.</p>
        
        <h3>1. Consider the Room's Purpose</h3>
        <p>The first step in choosing curtains is to think about the room's function. Bedrooms typically benefit from blackout curtains that provide privacy and block light, while living rooms might showcase sheer curtains that filter light beautifully. Home offices need curtains that reduce glare on screens without creating a dim environment.</p>
        
        <h3>2. Select the Right Fabric</h3>
        <p>Different fabrics serve different purposes. Velvet curtains add luxury and warmth to a space, while linen offers a casual, natural look. Silk curtains are elegant and sophisticated, and blackout fabrics are perfect for complete light control. Consider the climate in your area – heavier fabrics work better in cold climates, while lighter fabrics are ideal for warm regions.</p>
        
        <h3>3. Choose Colors That Complement Your Space</h3>
        <p>Your curtain color should complement your existing décor. Neutral colors like cream, gray, and beige are versatile and timeless, while bold colors can add personality and drama. Consider the size of your room – lighter colors make small spaces feel larger, while darker colors create cozy, intimate atmospheres.</p>
        
        <h3>4. Measure Your Windows Carefully</h3>
        <p>Proper measurements are crucial for a professional look. Measure the width and height of your window, and decide if you want curtains to extend to the ceiling (which creates the illusion of height) or just above the window frame.</p>
        
        <h3>5. Think About Maintenance</h3>
        <p>Consider how easy the curtains are to maintain. Some fabrics require dry cleaning, while others can be machine washed. If you have children or pets, choose durable, easy-to-clean fabrics.</p>
      `,
      author: 'Sarah Johnson',
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&auto=format&fit=crop&q=60',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Top Furniture Trends of 2024',
      category: 'Trends',
      excerpt: 'Explore the most popular furniture styles and materials dominating interior design this year.',
      content: `
        <h2>Top Furniture Trends of 2024</h2>
        <p>2024 brings exciting new trends in furniture design that blend sustainability, comfort, and style. Whether you're planning a complete home makeover or just looking to refresh your space, these trends will inspire your next furniture purchase.</p>
        
        <h3>1. Sustainable and Eco-Friendly Materials</h3>
        <p>Environmental consciousness continues to influence furniture design. Reclaimed wood, recycled metals, and sustainable fabrics are becoming increasingly popular. Furniture makers are focusing on durability and timeless design to reduce waste and encourage long-term use.</p>
        
        <h3>2. Comfort-First Design</h3>
        <p>After years of prioritizing aesthetics, 2024 sees a return to comfort. Oversized sofas, deep seating, and plush cushions are everywhere. The "athleisure" movement has extended to furniture, creating pieces that are both stylish and incredibly comfortable for daily living.</p>
        
        <h3>3. Bold Colors and Patterns</h3>
        <p>Gone are the days of all-neutral interiors. Rich jewel tones, earth tones, and bold patterns are making a comeback. Emerald green, terracotta, and deep blues are popular choices for statement furniture pieces.</p>
        
        <h3>4. Multifunctional Pieces</h3>
        <p>Space-saving furniture is more popular than ever. Storage ottomans, sofa beds, and extendable dining tables help maximize living spaces. These pieces are perfect for modern homes where efficiency and style go hand in hand.</p>
        
        <h3>5. Curved and Organic Shapes</h3>
        <p>Sharp angles are out, soft curves are in. Rounded corners, curved sofas, and organic-shaped coffee tables create a more inviting and contemporary look. These shapes are not just trendy but also more comfortable and safer in homes with children.</p>
        
        <h3>6. Mix and Match Styles</h3>
        <p>Eclectic interior design is thriving. Combining different styles – modern with vintage, industrial with bohemian – creates unique, personalized spaces that tell a story.</p>
      `,
      author: 'Michael Chen',
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Creating the Perfect Bedroom Sanctuary',
      category: 'Home Design',
      excerpt: 'Transform your bedroom into a peaceful retreat with our expert tips and styling ideas.',
      content: `
        <h2>Creating the Perfect Bedroom Sanctuary</h2>
        <p>Your bedroom should be a peaceful retreat where you can relax and recharge. Creating the perfect bedroom sanctuary involves thoughtful design choices that prioritize comfort, functionality, and aesthetics.</p>
        
        <h3>1. Choose a Calming Color Palette</h3>
        <p>The foundation of a peaceful bedroom is the color scheme. Soft blues, greens, and warm neutrals promote relaxation. Avoid overly bright or stimulating colors in the bedroom.</p>
        
        <h3>2. Invest in Quality Bedding</h3>
        <p>Your bed is the focal point of your bedroom. Invest in high-quality mattresses, sheets, and pillows that prioritize comfort. Quality bedding not only improves sleep but also elevates the entire room's aesthetic.</p>
        
        <h3>3. Layer Your Lighting</h3>
        <p>Use a combination of ambient, task, and accent lighting. Consider blackout curtains for controlling light, dimmer switches for adjusting mood, and bedside lamps for reading.</p>
        
        <h3>4. Add Soft Textures</h3>
        <p>Incorporate plush rugs, soft throws, and comfortable cushions. These elements add warmth and invite relaxation.</p>
        
        <h3>5. Minimize Clutter</h3>
        <p>A peaceful bedroom is an organized bedroom. Invest in smart storage solutions to keep the space tidy and serene.</p>
      `,
      author: 'Emma Williams',
      date: '2024-01-05',
      image: 'https://images.unsplash.com/photo-1604857521033-91d2cdb9bada?w=800&auto=format&fit=crop&q=60',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Maximizing Small Spaces with Smart Furniture',
      category: 'Design Guide',
      excerpt: 'Learn how to make the most of limited space with clever furniture arrangement and selection.',
      content: `
        <h2>Maximizing Small Spaces with Smart Furniture</h2>
        <p>Living in a small space doesn't mean compromising on style or comfort. With smart furniture choices and strategic arrangement, you can create a functional and beautiful home.</p>
        
        <h3>1. Multi-Functional Furniture</h3>
        <p>Choose pieces that serve multiple purposes. A storage ottoman can be a footrest, coffee table, and storage solution. Sofa beds provide sleeping and seating areas. These pieces maximize functionality without taking up additional space.</p>
        
        <h3>2. Vertical Storage Solutions</h3>
        <p>Think vertically instead of horizontally. Wall-mounted shelves, tall bookcases, and corner storage units use vertical space efficiently without crowding the floor.</p>
        
        <h3>3. Choose Lightweight Pieces</h3>
        <p>Light, airy furniture makes spaces feel larger. Glass tables, metal frames, and open shelving allow light to pass through, creating an open, spacious feeling.</p>
        
        <h3>4. Use Mirrors Strategically</h3>
        <p>Mirrors reflect light and create the illusion of more space. Position mirrors opposite windows or light sources to maximize their effect.</p>
        
        <h3>5. Stick to a Color Scheme</h3>
        <p>A cohesive color palette makes small spaces feel more organized and spacious. Limit yourself to 2-3 main colors.</p>
      `,
      author: 'David Martinez',
      date: '2023-12-28',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop&q=60',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'The Art of Interior Layering',
      category: 'Design Tips',
      excerpt: 'Master the technique of layering textures, colors, and patterns for a sophisticated look.',
      content: `
        <h2>The Art of Interior Layering</h2>
        <p>Interior layering is the art of combining different textures, colors, patterns, and materials to create a rich, sophisticated interior. It's what separates a basic room from a stunning, designer-worthy space.</p>
        
        <h3>1. Layer Textures</h3>
        <p>Combine soft and hard textures for visual interest. Pair a soft velvet sofa with a hard wooden coffee table, or layer a plush rug with sleek tile flooring. This contrast creates depth and sophistication.</p>
        
        <h3>2. Mix Patterns Wisely</h3>
        <p>Layering patterns requires confidence but creates visual impact. Combine patterns of different scales – a large floral pattern with a small geometric one works well together.</p>
        
        <h3>3. Play with Colors</h3>
        <p>Create a color story by layering different shades and tones. Start with a neutral base and add pops of color through accessories, artwork, and accent furniture.</p>
        
        <h3>4. Balance Materials</h3>
        <p>Mix materials like wood, metal, glass, and textiles. This variety prevents a space from feeling monotonous or one-dimensional.</p>
      `,
      author: 'Lisa Anderson',
      date: '2023-12-20',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=60',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Home Office Essentials for Productivity',
      category: 'Workspace',
      excerpt: 'Create an inspiring and productive workspace with these essential furniture and design tips.',
      content: `
        <h2>Home Office Essentials for Productivity</h2>
        <p>A well-designed home office is crucial for productivity and professional success. Whether you work full-time from home or occasionally, these essentials will help you create an inspiring and functional workspace.</p>
        
        <h3>1. Ergonomic Desk and Chair</h3>
        <p>Invest in a quality ergonomic desk and chair. Your comfort directly impacts your productivity and long-term health. The desk should be the right height for your work, and the chair should provide proper lumbar support.</p>
        
        <h3>2. Proper Lighting</h3>
        <p>Natural light is ideal, but supplement with task lighting to reduce eye strain. Position your desk near a window when possible, and add a desk lamp for focused lighting.</p>
        
        <h3>3. Storage Solutions</h3>
        <p>Keep your workspace organized with filing cabinets, shelves, and desk organizers. A clutter-free desk leads to a focused mind.</p>
        
        <h3>4. Minimize Distractions</h3>
        <p>Create a dedicated workspace that's separate from living areas. Use noise-canceling headphones if needed, and keep your space organized and professional.</p>
      `,
      author: 'James Wilson',
      date: '2023-12-15',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=60',
      readTime: '4 min read'
    }
  ];

  const categories = ['All', 'Design Guide', 'Trends', 'Home Design', 'Design Tips', 'Workspace'];

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const displayedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const BlogDetailModal = ({ post, onClose }) => {
    if (!post) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="relative max-w-4xl w-full my-8 bg-white rounded-3xl shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#222222] hover:text-[#C8A96A] transition-colors z-10 bg-white rounded-full p-2 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Featured Image */}
          <div className="relative h-96 overflow-hidden rounded-t-3xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-contain object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center space-x-1 bg-[#C8A96A]/20 text-[#0B1E36] px-4 py-2 rounded-full text-sm font-bold">
                <Tag className="w-4 h-4" />
                <span>{post.category}</span>
              </span>
              <span className="flex items-center space-x-2 text-[#888888] text-sm font-semibold">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </span>
              <span className="flex items-center space-x-2 text-[#888888] text-sm font-semibold">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </span>
              <span className="text-[#888888] text-sm font-semibold">{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-black text-[#222222] mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-[#666666] leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: post.content.replace(/^<h2>.*?<\/h2>/s, '') // Remove the duplicate h2
                }}
              />
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t-2 border-[#E8E2D8] bg-[#F5F1EA] p-6 rounded-2xl">
              <p className="text-[#666666] font-semibold leading-relaxed">
                <strong className="text-[#222222]">{post.author}</strong> is a renowned interior design expert with over 10 years of experience helping homeowners create beautiful and functional spaces. Follow more of their insights on home design and interior styling.
              </p>
            </div>

            {/* Related Links */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 bg-[#0B1E36] text-white font-bold rounded-xl hover:bg-[#C8A96A] hover:text-[#0B1E36] transition-all duration-300 uppercase tracking-wider"
              >
                Back to Blog
              </button>
              <a
                href="/contact"
                className="flex-1 px-6 py-3 border-2 border-[#0B1E36] text-[#0B1E36] font-bold rounded-xl hover:bg-[#0B1E36] hover:text-white transition-all duration-300 uppercase tracking-wider"
              >
                Get Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Blog - Zoya Premium Curtain & Furnishing</title>
        <meta name="description" content="Read our latest articles on interior design, furniture trends, and home furnishing inspiration." />
        <meta property="og:title" content="Blog - Zoya Premium Curtain" />
        <meta property="og:description" content="Discover design tips, trends, and inspiration for your home" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* ===== HERO SECTION ===== */}
        <section className="relative bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] text-white py-20 md:py-32 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            {/* Breadcrumb */}
            <div className="inline-flex items-center space-x-2 mb-6 bg-[#C8A96A]/20 px-6 py-3 rounded-full border border-[#C8A96A]/40">
              <span className="text-[#F5F1EA] text-sm font-semibold">Home</span>
              <span className="text-[#C8A96A]">/</span>
              <span className="text-[#C8A96A] text-sm font-bold">Blog</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Our Blog
            </h1>

            <p className="text-xl md:text-2xl text-[#F5F1EA] max-w-3xl mx-auto font-medium">
              Discover the latest trends, tips, and inspiration for transforming your home with premium curtains and furnishings
            </p>
          </div>
        </section>

        {/* ===== SEARCH & FILTER SECTION ===== */}
        <section className="py-12 bg-[#F5F1EA] border-b-2 border-[#E8E2D8]">
          <div className="max-w-7xl mx-auto px-4">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#C8A96A]" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-6 py-3 bg-white border-2 border-[#E8E2D8] rounded-xl focus:border-[#0B1E36] focus:outline-none transition-all text-[#222222] placeholder-[#666666] font-semibold"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category === 'All' ? 'all' : category);
                    setCurrentPage(1);
                  }}
                  className={`px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === (category === 'All' ? 'all' : category)
                      ? 'bg-[#0B1E36] text-white shadow-lg'
                      : 'bg-white text-[#222222] border-2 border-[#E8E2D8] hover:border-[#C8A96A] hover:bg-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <p className="text-center text-sm text-[#888888] font-semibold mt-6">
              Showing <span className="text-[#0B1E36] font-black">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''}
            </p>
          </div>
        </section>

        {/* ===== BLOG POSTS GRID ===== */}
        <section className="py-16 md:py-24 bg-white relative">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-20 right-20 w-64 h-64 bg-[#C8A96A] rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {displayedPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post, idx) => (
                  <article
                    key={post.id}
                    onClick={() => setSelectedBlog(post)}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-2 border-[#E8E2D8] hover:border-[#C8A96A] cursor-pointer group"
                    style={{
                      animation: `fadeIn 0.5s ease-in-out ${idx * 100}ms both`
                    }}
                  >
                    {/* Featured Image */}
                    <div className="relative overflow-hidden h-64 bg-[#F5F1EA]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/60 via-[#0B1E36]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      {/* Category Badge */}
                      <div className="inline-flex items-center space-x-1 bg-[#C8A96A]/20 text-[#0B1E36] px-3 py-1 rounded-full text-xs font-bold uppercase">
                        <Tag className="w-3 h-3" />
                        <span>{post.category}</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-black text-[#222222] group-hover:text-[#0B1E36] transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-[#666666] text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between pt-4 border-t-2 border-[#E8E2D8]">
                        <div className="flex items-center space-x-2 text-xs text-[#888888] font-semibold">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <span className="text-xs text-[#888888] font-semibold bg-[#F5F1EA] px-3 py-1 rounded-full">
                          {post.readTime}
                        </span>
                      </div>

                      {/* Read More */}
                      <button className="w-full mt-4 text-[#0B1E36] hover:text-[#C8A96A] font-black text-sm uppercase tracking-wider flex items-center justify-center space-x-2 group/btn transition-colors">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-black text-[#222222] mb-2">No Articles Found</h3>
                <p className="text-[#666666] font-semibold mb-6">
                  We couldn't find any articles matching your search. Try different keywords or reset filters.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setCurrentPage(1);
                  }}
                  className="px-8 py-3 bg-[#0B1E36] text-white font-bold rounded-xl hover:bg-[#C8A96A] hover:text-[#0B1E36] transition-all"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ===== PAGINATION ===== */}
        {totalPages > 1 && (
          <section className="py-12 bg-[#F5F1EA] border-t-2 border-[#E8E2D8]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg transition-all ${
                    currentPage === 1
                      ? 'bg-[#E8E2D8] text-[#888888] cursor-not-allowed'
                      : 'bg-white text-[#0B1E36] hover:bg-[#C8A96A] hover:text-white border-2 border-[#E8E2D8]'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Page Numbers */}
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg font-bold transition-all ${
                        currentPage === page
                          ? 'bg-[#0B1E36] text-white shadow-lg'
                          : 'bg-white text-[#222222] border-2 border-[#E8E2D8] hover:border-[#C8A96A] hover:bg-[#F5F1EA]'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg transition-all ${
                    currentPage === totalPages
                      ? 'bg-[#E8E2D8] text-[#888888] cursor-not-allowed'
                      : 'bg-white text-[#0B1E36] hover:bg-[#C8A96A] hover:text-white border-2 border-[#E8E2D8]'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ===== NEWSLETTER CTA ===== */}
        <section className="bg-gradient-to-r from-[#0B1E36] via-[#173054] to-[#0B1E36] text-white py-16 md:py-24 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A96A] rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Subscribe to Our Blog
            </h2>

            <p className="text-xl text-[#F5F1EA] mb-10 max-w-2xl mx-auto font-semibold">
              Get the latest design tips, trends, and inspiration delivered to your inbox
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl focus:outline-none text-[#222222] font-semibold placeholder-[#666666] bg-white"
              />
              <button className="px-8 py-4 bg-[#C8A96A] text-[#0B1E36] font-black rounded-xl hover:bg-[#B8955A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 uppercase tracking-wider">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-[#F5F1EA] mt-4 font-medium">
              No spam, just inspiration and exclusive offers from Zoya Premium
            </p>
          </div>
        </section>

        {/* ===== FEATURED BLOG MODAL ===== */}
        <BlogDetailModal post={selectedBlog} onClose={() => setSelectedBlog(null)} />
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .prose h2 {
          font-size: 1.875rem;
          font-weight: 900;
          color: #222222;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
        }

        .prose h3 {
          font-size: 1.375rem;
          font-weight: 900;
          color: #222222;
          margin-top: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .prose p {
          color: #666666;
          line-height: 1.75;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
};

export default Blog;