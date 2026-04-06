import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Custom SVG Icons (No more import errors)
  const Icons = {
    Linkedin: () => (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
    ),
    Twitter: () => (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
    ),
    Mail: () => (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    ),
    Map: () => (
      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
    )
  };

  const socialLinks = [
    { icon: <Icons.Linkedin />, href: "#", color: "hover:bg-blue-700" },
    { icon: <Icons.Twitter />, href: "#", color: "hover:bg-sky-500" },
    { icon: <Icons.Mail />, href: "mailto:e-trade@parekhtrade.com", color: "hover:bg-red-500" },
  ];

  return (
    <footer className="bg-[#020617] text-slate-400 pt-20 pb-8 border-t border-slate-900 relative overflow-hidden font-sans">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col gap-1 group">
              <span className="text-2xl font-black text-white tracking-tighter  leading-none transition-colors group-hover:text-blue-500">
                PAREKH <span className="text-blue-600">e-TRADE</span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase">Market (Textile)</span>
            </Link>
            
            <p className="text-sm leading-relaxed font-medium">
              India's premier digital gateway for the textile industry. Connecting manufacturers, 
              wholesalers, and retailers across the globe.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className={`w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color} hover:text-white hover:-translate-y-1 shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[11px] flex items-center gap-2">
              <div className="w-1.5 h-4 bg-blue-600 rounded-full"></div> Navigation
            </h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Marketplace</Link></li>
              <li><Link to="/tenders" className="hover:text-blue-500 transition-colors">Tenders</Link></li>
              <li><Link to="/careers" className="hover:text-blue-500 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Trade Portal */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[11px] flex items-center gap-2">
              <div className="w-1.5 h-4 bg-blue-600 rounded-full"></div> Trade Portal
            </h4>
            <ul className="space-y-4 text-sm font-semibold">
              <li><Link to="/buyer" className="hover:text-blue-500 transition-colors">Buyer Portal</Link></li>
              <li><Link to="/seller" className="hover:text-blue-500 transition-colors">Seller Portal</Link></li>
              <li><Link to="/terms" className="hover:text-blue-500 transition-colors">Terms & Policy</Link></li>
              <li><Link to="/circulars" className="hover:text-blue-500 transition-colors">Circulars</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[11px] flex items-center gap-2">
              <div className="w-1.5 h-4 bg-blue-600 rounded-full"></div> Get In Touch
            </h4>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4">
                <div className="text-blue-500 bg-blue-500/5 p-2 rounded-lg border border-blue-500/10"><Icons.Map /></div>
                <p className="font-medium text-slate-300">Hyderabad, TG, India</p>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-500 bg-blue-500/5 p-2 rounded-lg border border-blue-500/10"><Icons.Mail /></div>
                <p className="font-bold tracking-tight text-white">e-trade@parekhtrade.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black  tracking-widest text-slate-500">
            © {currentYear} PAREKH e-TRADE MARKET (TEXTILE). ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <Link to="/terms" className="hover:text-white transition-colors tracking-tighter">Privacy Policy</Link>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="text-blue-500 hover:text-white transition-colors"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;