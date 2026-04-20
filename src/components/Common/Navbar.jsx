import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ChevronRight, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const location = useLocation();

  const FormatName = ({ name }) => {
    if (name.toLowerCase().startsWith('e-')) {
      return (
        <span>
          <span className="lowercase">e</span>-{name.substring(2)}
        </span>
      );
    }
    return name;
  };

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Product & Services', path: '/marketplace' },
    { name: 'Buyer Platform', path: '/buyer' },
    { name: 'Seller Platform', path: '/seller' },
  ];

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
    { name: 'Visit with Appointment', path: '/appointment' },
    { name: 'Media Gallery', path: '/media' },
    { name: 'Our Textile Associates', path: '/associates' },
  ];

  const brandBlue = "#155dfc";
  const accentBlue = "#2563eb";

  return (
    <nav className="bg-white shadow-sm border-b border-blue-50 sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">

          {/* --- LOGO SECTION --- */}
          <Link to="/" className="flex items-center  flex-shrink-0 group">
            <div
              className="w-14 h-14 md:w-14 md:h-14 flex items-center justify-center rounded-xl overflow-hidden"
            >
              <img
                src="/4.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>

           <div className="flex flex-col">
  {/* Line 1: PAREKH (Black) */}
  <h1 className="text-[13px] md:text-[14px] font-black leading-none text-black">
    PAREKH
  </h1>

  {/* Line 2: e-TRADE Market (Textile) (Same Color & Same Weight) */}
  <div style={{ color: accentBlue }} className="flex items-baseline gap-1 mt-0.5">
    <span className="text-[12px] md:text-[13px] font-black leading-none">
      <span className="lowercase italic">e</span>-TRADE
    </span>
    <span className="text-[12px] md:text-[13px] font-black uppercase">
      Market (Textile)
    </span>
  </div>

  {/* Line 3: Location (Subtle Color) */}
 <div className="flex items-center text-[8px] font-black text-slate-900 uppercase mt-0.5">
  <MapPin size={9} className="mr-0.5" />
  <span className="tracking-wider">Hyderabad, TG, India</span>
</div>
</div>
          </Link>

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{ color: location.pathname === link.path ? accentBlue : '' }}
                className={`px-3 py-2 text-sm font-bold transition-all rounded-lg hover:bg-blue-50 ${location.pathname === link.path ? '' : 'text-slate-600'
                  }`}
              >
                <FormatName name={link.name} />
              </Link>
            ))}

            {/* Dropdown with Bridge to prevent closing on hover gap */}
            <div className="relative ml-2" onMouseLeave={() => setShowMore(false)}>
              <button
                onMouseEnter={() => setShowMore(true)}
                onClick={() => setShowMore(!showMore)}
                style={{ backgroundColor: brandBlue }}
                className="flex items-center gap-1 px-5 py-2.5 text-white text-xs font-black rounded-full hover:opacity-90 transition shadow-md"
              >
                MORE <ChevronDown size={14} className={`${showMore ? 'rotate-180' : ''} transition-transform`} />
              </button>

              <AnimatePresence>
                {showMore && (
                  <>
                    {/* Invisible Bridge to fill the gap */}
                    <div className="absolute w-full h-4 top-full left-0" />
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 4 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 top-full mt-1 w-64 bg-white border border-blue-50 shadow-2xl rounded-2xl p-2 grid grid-cols-1"
                    >
                      {moreLinks.map((link) => (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={() => setShowMore(false)}
                          className="flex items-center justify-between px-4 py-2 text-xs font-bold text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        >
                          <FormatName name={link.name} /> <ChevronRight size={12} />
                        </Link>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: brandBlue }}
              className="p-2 rounded-xl bg-blue-50"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-blue-50 overflow-hidden"
          >
            {/* Reduced padding and tighter spacing for mobile */}
            <div className="px-5 py-2 flex flex-col max-h-[85vh] overflow-y-auto">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={{ color: location.pathname === link.path ? accentBlue : '' }}
                  className={`py-3 text-[14px] font-bold border-b border-slate-50 flex items-center justify-between ${location.pathname === link.path ? '' : 'text-slate-700'
                    }`}
                >
                  <FormatName name={link.name} /> <ChevronRight size={14} className="opacity-30" />
                </Link>
              ))}

              <div className="border-b border-slate-50">
                <button
                  onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                  className="w-full py-4 text-[14px] font-black text-slate-800 flex items-center justify-between outline-none"
                >
                  <span className="flex items-center gap-2">
                    <span style={{ backgroundColor: brandBlue }} className="w-1.5 h-1.5 rounded-full"></span>
                    More Services
                  </span>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${mobileMoreOpen ? 'rotate-180' : ''}`} />
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: mobileMoreOpen ? 'auto' : 0, opacity: mobileMoreOpen ? 1 : 0 }}
                  className="overflow-hidden bg-slate-50/50 rounded-xl mb-2"
                >
                  <div className="py-1 px-1 grid grid-cols-1">
                    {moreLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="py-2.5 px-4 text-[12px] font-bold text-slate-600 flex items-center justify-between hover:bg-white rounded-lg transition-all"
                      >
                        <FormatName name={link.name} />
                        <ChevronRight size={12} className="opacity-30" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Tighter footer */}
              <div className="py-4 px-1">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Office Location</p>
                <p className="text-[11px] font-black text-slate-700">Hyderabad, TG, India</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
