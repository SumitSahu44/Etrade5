import React, { useState, useEffect } from 'react'; // <-- Ye imports zaroori hain
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Common/Preloader';

import Hero from './pages/Home/Hero';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import AssociatesMap from './components/Home/AssociatesMap';
import TradePlatform from './pages/Platforms/TradePlatform';
import ProductServices from './pages/Products/ProductServices';
import MediaBlog from './pages/Media/MediaBlog';
import Tenders from './pages/Trade/Tenders';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';
import ContactForm from './pages/Contact/ContactForm';
import Circulars from './pages/Media/Circulars';
import AuctionPortal from './pages/Trade/AuctionPortal';
import Terms from './pages/Legal/Terms';
import BuyerPlatform from './pages/Platforms/BuyerPlatform';
import SellerPlatform from './pages/Platforms/SellerPlatform';
import ProductMarketplace from './pages/Products/ProductMarketplace';
import TradeEnquiry from './pages/Forms/TradeEnquiry';
import Appointment from './pages/Forms/Appointment';
import Management from './pages/About/Management';
import Quotation from './pages/Trade/Quotation';
import Blog from './pages/Media/Blog';
import ScrollToTop from './components/Common/ScrollToTop';
import AdminDashboard from './pages/Admin/AdminDashboard';
import TextileChatbot from './components/Common/TextileChatbot';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');

    if (hasSeenLoader) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasSeenLoader', 'true'); // Mark as seen
      }, 4500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Router>
      {/* AnimatePresence loader ke smooth exit animation ke liye zaroori hai */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="loader" />}
      </AnimatePresence>

      {/* <ScrollToTop /> */}

      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Main Home Route */}
            <Route path="/" element={
              <>
                <Hero />
                <ProductServices />
                <AssociatesMap />
                <Tenders />
                <MediaBlog />
              </>
            } />

            {/* Dedicated Routes */}
            <Route path="/trade-platform" element={<TradePlatform />} />
            <Route path="/products" element={<ProductServices />} />
            <Route path="/tenders" element={<Tenders />} />
            <Route path="/media" element={<MediaBlog />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/circulars" element={<Circulars />} />
            <Route path="/auction" element={<AuctionPortal />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/buyer" element={<BuyerPlatform />} />
            <Route path="/seller" element={<SellerPlatform />} />
            <Route path="/marketplace" element={<ProductMarketplace />} />
            <Route path="/enquiry" element={<TradeEnquiry />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/management" element={<Management />} />
            <Route path="/quotation" element={<Quotation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/associates" element={<AssociatesMap />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>

        <TextileChatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;