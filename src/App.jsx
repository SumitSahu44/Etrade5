import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
 import Navbar from './components/Common/Navbar';
 import Footer from './components/Common/Footer'; // Suggested to add

// Page Components
 import Hero from './pages/Home/Hero';
 import AssociatesMap from './components/Home/AssociatesMap';
 import TradePlatform from './pages/Platforms/TradePlatform';
 import ProductServices from './pages/Products/ProductServices';
 import MediaBlog from './pages/Media/MediaBlog';
 import Tenders from './pages/Trade/Tenders';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';
import ContactForm from './pages/Contact/ContactForm'; // If you made this before
import Circulars from './pages/Media/Circulars';
import AuctionPortal from './pages/Trade/AuctionPortal';
import Terms from './pages/Legal/Terms';
import BuyerPlatform from './pages/Platforms/BuyerPlatform';
import SellerPlatform from './pages/Platforms/SellerPlatform';
import ProductMarketplace from './pages/Products/ProductMarketplace'; // If you want to add this as a separate route
import TradeEnquiry from './pages/Forms/TradeEnquiry';
import Appointment from './pages/Forms/Appointment';
import Management from './pages/About/Management';
import Quotation from './pages/Trade/Quotation';
import Blog from './pages/Media/Blog';
import ScrollToTop from './components/Common/ScrollToTop'; // To ensure we scroll to top on route change
function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Scroll to top on route change */}
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Main Home Route - Combines key sections */}
            <Route path="/" element={
              <>
                <Hero />
                <ProductServices />
                <AssociatesMap />
                <Tenders />
                <MediaBlog />
              </>
            } />

            {/* Dedicated Routes for direct navigation */}
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
            <Route path="/marketplace" element={<ProductMarketplace />} /> {/* If you want to add this as a separate route */}
            {/* Add more routes like /about or /contact as you build them */}
            <Route path="/enquiry" element={<TradeEnquiry />} />
<Route path="/appointment" element={<Appointment />} />
<Route path="/management" element={<Management />} />
<Route path="/quotation" element={<Quotation />} />
<Route path="/blog" element={<Blog />} />
<Route path="/associates" element={<AssociatesMap />} />
          </Routes>
        </main>

        {/* Floating WhatsApp - Stays across all pages */}
        <a 
          href="https://wa.me/yournumber" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-8 right-8 bg-green-500 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-8 h-8" alt="WhatsApp" />
        </a>
          <Footer /> {/* Footer added outside main to ensure it's always at the bottom */}
   
      </div>
     </Router>
     
  );
}

export default App;