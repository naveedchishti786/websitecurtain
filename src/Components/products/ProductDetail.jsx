import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEO from '../common/SEO';
import { products } from '../../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Additional product images (in real app, this would come from backend)
  const productImages = [
    product?.image,
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600',
    'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=600',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600'
  ];

  // Available colors (example)
  const colors = [
    { name: 'Beige', code: '#F5F5DC' },
    { name: 'Brown', code: '#8B4513' },
    { name: 'Gray', code: '#808080' },
    { name: 'White', code: '#FFFFFF' },
    { name: 'Navy', code: '#000080' }
  ];

  // Available sizes (example)
  const sizes = ['Small', 'Medium', 'Large', 'Extra Large', 'Custom'];

  useEffect(() => {
    // Find product from all categories
    let foundProduct = null;
    Object.values(products).forEach(category => {
      const prod = category.find(p => p.id === parseInt(id));
      if (prod) foundProduct = prod;
    });

    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(colors[0].name);
      setSelectedSize(sizes[0]);
      
      // Get related products from same category
      const related = products[foundProduct.category]
        ?.filter(p => p.id !== foundProduct.id)
        .slice(0, 4) || [];
      setRelatedProducts(related);
    } else {
      // Product not found, redirect to home
      navigate('/');
    }
  }, [id, navigate]);

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleEnquiry = (e) => {
    e.preventDefault();
    // Handle enquiry submission
    alert('Thank you for your enquiry! We will contact you soon.');
    setShowEnquiryForm(false);
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={product.name}
        description={product.description}
        keywords={`${product.name}, ${product.category}, buy ${product.category}`}
        ogImage={product.image}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to={`/${product.category}`} className="text-gray-600 hover:text-primary capitalize">
              {product.category}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-800 font-semibold">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              {/* Main Image */}
              <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 md:h-[500px] object-contain object-center"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x400?text=Product+Image';
                  }}
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-20 object-contain object-center"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/150?text=Img';
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-1">🚚</div>
                  <p className="text-xs font-semibold">Free Delivery</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-1">🛡️</div>
                  <p className="text-xs font-semibold">Warranty</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-1">✓</div>
                  <p className="text-xs font-semibold">Quality Check</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              {/* Category Badge */}
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4 capitalize">
                {product.category}
              </div>

              {/* Product Name */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-2">
                  {'⭐'.repeat(5)}
                </div>
                <span className="text-gray-600">(4.8/5 from 120 reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline space-x-3">
                  <span className="text-4xl font-bold text-primary">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ₹{(product.price * 1.3).toLocaleString()}
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    23% OFF
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2">Inclusive of all taxes</p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Select Color</h3>
                <div className="flex flex-wrap gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedColor === color.name
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className="w-6 h-6 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: color.code }}
                      ></div>
                      <span className="text-sm font-medium">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 rounded-lg border-2 font-medium transition-all ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-white'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-bold text-lg mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange('decrement')}
                    className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 font-bold"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange('increment')}
                    className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => setShowEnquiryForm(true)}
                  className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-secondary transition-all duration-300 shadow-lg"
                >
                  Enquire Now
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
                  >
                    <span className="mr-2">📞</span>
                    Call Us
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300"
                  >
                    <span className="mr-2">💬</span>
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className="border-t pt-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold w-32">SKU:</span>
                    <span>PROD-{product.id}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold w-32">Category:</span>
                    <span className="capitalize">{product.category}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold w-32">Availability:</span>
                    <span className="text-green-600 font-semibold">In Stock</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold w-32">Delivery:</span>
                    <span>Free delivery in 3-5 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowEnquiryForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-2xl font-bold mb-6">Enquire About This Product</h3>
            
            <form onSubmit={handleEnquiry} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-all"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Product Details Tabs */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Specifications */}
              <div>
                <h3 className="text-xl font-bold mb-4">📋 Specifications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Material:</span>
                    <span>Premium Quality</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Warranty:</span>
                    <span>1 Year</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Installation:</span>
                    <span>Free</span>
                  </li>
                  <li className="flex justify-between border-b pb-2">
                    <span className="font-semibold">Customization:</span>
                    <span>Available</span>
                  </li>
                </ul>
              </div>

              {/* Shipping Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">🚚 Shipping Info</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Free delivery on all orders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Delivery in 3-5 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Track your order online</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Installation included</span>
                  </li>
                </ul>
              </div>

              {/* Return Policy */}
              <div>
                <h3 className="text-xl font-bold mb-4">↩️ Return Policy</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>7 days return policy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>100% refund guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>No questions asked</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Free pickup service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-contain object-center"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300';
                    }}
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{relatedProduct.name}</h3>
                    <p className="text-primary font-bold text-xl">
                      ₹{relatedProduct.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;