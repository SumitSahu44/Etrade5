import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

  // Primary links
  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Buyer Platform', path: '/buyer' },
    { name: 'Seller Platform', path: '/seller' },
    { name: 'Products', path: '/marketplace' },
  ];

  // Dropdown links
  const moreLinks = [
    { name: 'Our Management', path: '/management' },
    { name: 'e-Trade T&C', path: '/terms' },
    { name: 'Trade Enquiry', path: '/enquiry' },
    { name: 'e-Quotation', path: '/quotation' },
    { name: 'e-Auction', path: '/auction' },
    { name: 'Tender & Contract', path: '/tenders' },
    { name: 'Career Page', path: '/careers' },
    { name: 'Circular', path: '/circulars' },
    { name: 'Blog', path: '/blog' },
    { name: 'Media Gallery', path: '/media' },
    { name: 'India Map', path: '/associates' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // --- THEME COLORS ---
  const brandBlue = "#155dfc"; // Deep Navy Blue
  const accentBlue = "#2563eb"; // Bright Azure Blue

  return (
    <nav className="bg-white shadow-sm border-b border-blue-50 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* --- LOGO SECTION --- */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo Box - Uses brandBlue */}
            <div 
              style={{ backgroundColor: brandBlue }} 
              className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-xl text-white font-black text-lg shadow-lg shadow-blue-100"
            >
              P
            </div>
            <div className="flex flex-col leading-tight">
              <h1 className="flex flex-col text-[14px] md:text-[16px] font-extrabold tracking-tight text-slate-900">
                <span>
                  PAREKH <span style={{ color: accentBlue }}>e-TRADE</span>
                </span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
                  Market (Textile)
                </span>
              </h1>
              <p className="text-[9px] font-bold tracking-[0.2em] text-blue-400 uppercase">
                Hyderabad, TG, India
              </p>
            </div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{ color: location.pathname === link.path ? accentBlue : '' }}
                className={`px-4 py-2 text-sm font-bold transition-all rounded-lg hover:bg-blue-50 ${
                  location.pathname === link.path ? '' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* More Dropdown Button */}
            <div className="relative ml-2">
              <button 
                onMouseEnter={() => setShowMore(true)}
                onClick={() => setShowMore(!showMore)}
                style={{ backgroundColor: brandBlue }}
                className="flex items-center gap-1 px-5 py-2.5 text-white text-xs font-black rounded-full hover:opacity-90 transition shadow-md shadow-blue-100"
              >
                MORE <ChevronDown size={14} className={`${showMore ? 'rotate-180' : ''} transition-transform`} />
              </button>

              <AnimatePresence>
                {showMore && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    onMouseLeave={() => setShowMore(false)}
                    className="absolute right-0 mt-3 w-64 bg-white border border-blue-50 shadow-2xl rounded-2xl p-2 grid grid-cols-1 overflow-hidden"
                  >
                    {moreLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setShowMore(false)}
                        className="flex items-center justify-between px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                      >
                        {link.name} <ChevronRight size={12} />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              style={{ color: brandBlue }}
              className="p-2 rounded-lg bg-blue-50 shadow-inner"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-blue-50 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-2 flex flex-col">
              {[...mainLinks, ...moreLinks].map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  style={{ color: location.pathname === link.path ? accentBlue : '' }}
                  className={`py-4 text-sm font-black border-b border-slate-50 flex items-center justify-between uppercase tracking-tighter ${
                    location.pathname === link.path ? '' : 'text-slate-700'
                  }`}
                >
                  {link.name} <ChevronRight size={14} className="opacity-30" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;