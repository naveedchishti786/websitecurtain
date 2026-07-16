import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Common Components
import Header from './components/common/Header';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AIChatbot from './components/chat/AIChatbot';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Collections = lazy(() => import('./pages/Collections'));

// Category Pages
const CurtainCategory = lazy(() => import('./pages/products/CurtainCategory'));
const CarpetCategory = lazy(() => import('./pages/products/CarpetCategory'));
const FurnitureCategory = lazy(() => import('./pages/products/FurnitureCategory'));
const BedsCategory = lazy(() => import('./pages/products/BedsCategory'));
const MattressCategory = lazy(() => import('./pages/products/MattressCategory'));
const StorageCategory = lazy(() => import('./pages/products/StorageCategory'));

// Product Detail
const ProductDetail = lazy(() => import('./pages/products/ProductDetail'));
const SofaCategory = lazy(() => import('./pages/products/SofaCategory'));
const AccessoriesCategory = lazy(() => import('./pages/products/AccessoriesCategory'));

// Service and Info Pages
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Blog = lazy(() => import('./pages/Blog'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading Fallback Component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-white">
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full animate-spin"></div>
          <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
            <div className="text-2xl">🏠</div>
          </div>
        </div>
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">Loading...</h2>
      <p className="text-gray-600">Please wait while we prepare your content</p>
      <div className="mt-4 flex justify-center space-x-2">
        <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white">
          {/* Header with contact info */}
          <Header />
          
          {/* Navigation bar */}
          <Navbar />
          
          {/* Main content with lazy loading */}
          <main className="flex-grow">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                {/* ==================== HOME PAGE ==================== */}
                <Route path="/" element={<Home />} />

                {/* ==================== COLLECTIONS PAGE ==================== */}
                <Route path="/collections" element={<Collections />} />

                {/* ==================== CURTAINS CATEGORY ==================== */}
                <Route path="/curtains" element={<CurtainCategory />} />
                <Route path="/curtains/:type" element={<CurtainCategory />} />
                <Route path="/curtains/:type/:id" element={<ProductDetail />} />

                {/* ==================== CARPETS CATEGORY ==================== */}
                <Route path="/carpets" element={<CarpetCategory />} />
                <Route path="/carpets/:type" element={<CarpetCategory />} />
                <Route path="/carpets/:type/:id" element={<ProductDetail />} />

                {/* ==================== FURNITURE CATEGORY ==================== */}
                <Route path="/furniture" element={<FurnitureCategory />} />
                <Route path="/furniture/:type" element={<FurnitureCategory />} />
                <Route path="/furniture/:type/:id" element={<ProductDetail />} />

                {/* ==================== SOFAS CATEGORY ==================== */}
                <Route path="/sofas" element={<SofaCategory />} />
                <Route path="/sofas/:type" element={<SofaCategory />} />
                <Route path="/sofas/:type/:id" element={<ProductDetail />} />

                {/* ==================== BEDS CATEGORY ==================== */}
                <Route path="/beds" element={<BedsCategory />} />
                <Route path="/beds/:type" element={<BedsCategory />} />
                <Route path="/beds/:type/:id" element={<ProductDetail />} />

                {/* ==================== MATTRESS CATEGORY ==================== */}
                <Route path="/mattress" element={<MattressCategory />} />
                <Route path="/mattress/:type" element={<MattressCategory />} />
                <Route path="/mattress/:type/:id" element={<ProductDetail />} />

                {/* ==================== STORAGE CATEGORY ==================== */}
                <Route path="/storage" element={<StorageCategory />} />
                <Route path="/storage/:type" element={<StorageCategory />} />
                <Route path="/storage/:type/:id" element={<ProductDetail />} />

                {/* ==================== ACCESSORIES CATEGORY ==================== */}
                <Route path="/accessories" element={<AccessoriesCategory />} />
                <Route path="/accessories/:type" element={<AccessoriesCategory />} />
                <Route path="/accessories/:type/:id" element={<ProductDetail />} />

                {/* ==================== SERVICE & INFO PAGES ==================== */}
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
                
                {/* ==================== 404 NOT FOUND PAGE ==================== */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Global AI Chatbot */}
          <AIChatbot />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;