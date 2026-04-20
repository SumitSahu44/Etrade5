import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from "lucide-react";
import { MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
 const accentBlue = "#2563eb";

  const Icons = {
    Linkedin: () => (
      <svg fill="currentColor" viewBox="0 0 448 512" height="18" width="18">
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
      </svg>
    ),
    Twitter: () => (
      <svg fill="currentColor" viewBox="0 0 512 512" height="18" width="18">
        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
      </svg>
    ),
  };

  const socialLinks = [
    { icon: <Icons.Linkedin />, href: "#", color: "hover:bg-blue-700" },
    { icon: <Icons.Twitter />, href: "#", color: "hover:bg-sky-500" },
  ];

  return (
    <footer className="bg-[#020617] text-slate-400 pt-20 pb-8 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">

          {/* 🔥 Brand */}
          <div className="space-y-6">

            {/* ✅ Perfect Alignment */}
            <Link to="/" className="flex items-center gap-4">

              {/* Logo */}
              <div className="rounded-xl shadow-md">
                <img
                  src="/4.png"
                  alt="Logo"
                  className="w-15 h-15 object-contain"
                />
              </div>

              {/* Text */}
             <div className="flex flex-col justify-center">
  {/* Line 1: PAREKH (White) */}
  <span className="text-[13px] md:text-[14px] font-black text-white leading-none">
    PAREKH
  </span>

  {/* Line 2: e-TRADE Market (Textile) (Blue) */}
  <div className="flex items-baseline gap-1 mt-0.5">
    <span style={{ color: accentBlue }}  className="text-[12px] md:text-[13px] font-black leading-none">
      e-TRADE
    </span>
    <span style={{ color: accentBlue }} className="text-[12px] md:text-[13px]  font-black uppercase">
      Market (Textile)
    </span>
  </div>

  {/* Line 3: Location (Slate/Greyish) */}
  <div className="flex items-center text-[8px] font-black text-slate-100 uppercase mt-0.5">
    <MapPin size={9} className="mr-0.5" />
     <span className="tracking-wider">Hyderabad, TG, India</span>
  </div>
</div>
            </Link>

            <p className="text-sm leading-relaxed">
              India's premier digital gateway for the textile industry.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.href} className={`w-10 h-10 flex items-center justify-center bg-slate-900 rounded-xl transition ${s.color}`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white mb-6 text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Marketplace</Link></li>
              <li><Link to="/tenders" className="hover:text-white transition">Tenders</Link></li>
              <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>

          {/* Trade */}
          <div>
            <h4 className="text-white mb-6 text-xs uppercase tracking-wider">Trade Portal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/buyer" className="hover:text-white transition">Buyer Portal</Link></li>
              <li><Link to="/seller" className="hover:text-white transition">Seller Portal</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms</Link></li>
              <li><Link to="/circulars" className="hover:text-white transition">Circulars</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-6 text-xs uppercase tracking-wider">Get In Touch</h4>

            <div className="space-y-4 text-sm">

              <div className="flex gap-3 items-center">
                <Phone size={16} className="text-blue-500" />
                <p>6353778329</p>
              </div>

              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-blue-500" />
                <p className="text-xs break-all">
                  trade-enquiry@parekhtrade.com
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <Mail size={16} className="text-blue-500" />
                <p className="text-xs break-all">
                  customer-care@parekhtrade.com
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} PAREKH e-TRADE</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-white transition"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
