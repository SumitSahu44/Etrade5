import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Future of Sustainable Silk in 2026",
      excerpt: "How organic farming is changing the textile landscape in Southern India and boosting export quality.",
      date: "04 April 2026",
      readTime: "5 min",
      category: "Sustainability",
      img: "https://media.istockphoto.com/id/2249574249/photo/closeup-view-of-stacked-saris-or-sarees-in-display-of-retail-shop-for-use-as-indian-textiles.webp?a=1&b=1&s=612x612&w=0&k=20&c=LJ8o-Lc4ZE4O_VmNkAP11FKKGRgZksL1OYJ7QThoXVk="
    },
    {
      id: 2,
      title: "Digital Transformation in Weaving Looms",
      excerpt: "IoT-enabled machinery is reducing downtime by 40% in modern spinning mills.",
      date: "02 April 2026",
      readTime: "8 min",
      category: "Technology",
      img: "https://media.istockphoto.com/id/2195351339/photo/ancient-petras-market-street-filled-with-unique-bedouin-ornaments-carpets-and-fabrics.webp?a=1&b=1&s=612x612&w=0&k=20&c=t45Ew9EJZuKlTjfeCQLPgm2JkokArMXPtPR_ldzgLLA="
    },
    {
      id: 3,
      title: "GST Updates for Textile Exporters",
      excerpt: "Understanding the new tax slabs for man-made fiber export and job work regulations.",
      date: "28 March 2026",
      readTime: "12 min",
      category: "Legal",
      img: "https://media.istockphoto.com/id/1470346020/photo/colourful-clothes-hang-to-dry.webp?a=1&b=1&s=612x612&w=0&k=20&c=mJKj5u0-N2_Tt1NwxUWrmpsncPLFd8T7Qvp3TNVFM6g="
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans relative overflow-hidden">
      
      {/* --- ELITE HEADER (Industrial Navy) --- */}
      <section className="bg-slate-950 pt-24 pb-48 px-6 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://media.istockphoto.com/id/453564523/photo/art-on-the-yarn.webp?a=1&b=1&s=612x612&w=0&k=20&c=sApy7kPXiHm7rCXuEApinQrch4WP1lVzig8wLb-ID44=')]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end gap-10"
          >
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-6">
                <BookOpen size={14} /> Textile Insights 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-6 leading-none">
                Trade <span className="text-blue-500">Journal</span>
              </h1>
              <p className="text-slate-400 text-lg font-medium">
                Analysis, trends, and updates from the heart of the global textile trade.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURED BLOG CARD --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 relative z-20">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-[3.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 border border-white flex flex-col lg:flex-row"
        >
          <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden">
            <img 
              src="https://media.istockphoto.com/id/453564523/photo/art-on-the-yarn.webp?a=1&b=1&s=612x612&w=0&k=20&c=sApy7kPXiHm7rCXuEApinQrch4WP1lVzig8wLb-ID44=" 
              className="w-full h-full object-cover"
              alt="Featured Post"
            />
          </div>
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white">
            <div className="flex gap-4 mb-6">
              <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">Featured</span>
              <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-widest">
                <Calendar size={12} /> 04 April 2026
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight uppercase mb-6 leading-tight group-hover:text-blue-600">
              The Evolution of India's Digital Textile Corridors
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-10">
              How e-trade platforms are revolutionizing the way yarn and fabrics are sourced across the Surat-Hyderabad-Salem belt.
            </p>
            <button className="w-fit flex items-center gap-3 text-xs font-black text-blue-600 uppercase tracking-[0.2em] group">
              Read Analysis <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- RECENT POSTS GRID (Slate-50 Background) --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12 border-b border-slate-200 pb-8">
           <h3 className="text-xl font-black text-slate-900 tracking-tighter uppercase">Recent Analysis</h3>
           <div className="flex gap-2">
             {['Policy', 'Market', 'Tech'].map(tag => (
               <button key={tag} className="text-[10px] font-bold text-slate-400 border border-slate-200 px-4 py-1.5 rounded-full hover:bg-blue-600 hover:text-white transition-all uppercase tracking-widest">
                 {tag}
               </button>
             ))}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <motion.div 
              key={post.id} 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-white group"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={post.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={post.title} />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-blue-600">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex gap-4 mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-blue-600 transition-colors uppercase">
                  {post.title}
                </h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center border-t border-slate-50 pt-6">
                  <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                    Read More <ArrowRight size={14} />
                  </button>
                  <Tag size={14} className="text-slate-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- NEWSLETTER STRIP (Deep Blue) --- */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto bg-blue-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <h3 className="text-3xl font-bold mb-6 tracking-tighter uppercase relative z-10">Subscribe to Market Updates</h3>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 relative z-10">
            <input 
              type="email" 
              placeholder="Enter official email" 
              className="flex-1 bg-white/10 border border-white/20 p-4 rounded-2xl outline-none focus:bg-white/20 text-sm font-medium"
            />
            <button className="bg-white text-blue-900 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-blue-950/20">
              Join List
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;