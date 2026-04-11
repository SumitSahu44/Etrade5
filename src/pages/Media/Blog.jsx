import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, Info, User } from 'lucide-react';
import { blogApi } from '../../utils/api';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = 'ParekhETradeMarket02';

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogApi.getBlogs(siteId);
        setPosts(response.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans relative overflow-hidden pb-20">

      {/* --- HEADER SECTION --- */}
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
                <BookOpen size={14} /> Blog & Article
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

      {/* --- CONTENT SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 relative z-20">
        {loading ? (
          <div className="bg-white rounded-[3.5rem] p-20 flex justify-center items-center shadow-2xl">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : posts.length > 0 ? (
          <>
            {/* Featured Post */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white rounded-[3.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 border border-white flex flex-col lg:flex-row mb-16"
            >
              <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                <img
                  src={posts[0].image || "https://images.unsplash.com/photo-1558383331-f520f2888351?q=80&w=2069&auto=format&fit=crop"}
                  className="w-full h-full object-cover"
                  alt="Featured"
                />
              </div>
              <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white">
                <div className="flex gap-4 mb-6">
                  <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">Featured</span>
                  <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-widest">
                    <Calendar size={12} /> {new Date(posts[0].createdAt).toLocaleDateString()}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight uppercase mb-6 leading-tight">
                  {posts[0].title}
                </h2>
                <p className="text-slate-500 font-medium leading-relaxed mb-10 line-clamp-3">
                  {posts[0].content}
                </p>
                <button className="w-fit flex items-center gap-3 text-xs font-black text-blue-600 uppercase tracking-[0.2em] group">
                  Read Analysis <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Other Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.slice(1).map((post) => (
                <motion.div
                  key={post._id}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-white group flex flex-col"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight line-clamp-2">{post.title}</h4>
                    <p className="text-slate-500 text-sm mb-6 line-clamp-3">{post.content}</p>
                    <div className="mt-auto">
                      <button className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                        View Details <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          /* --- HC PAREKH FALLBACK (Show when no blogs) --- */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[3.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 border border-white p-12 md:p-20 text-center relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl -ml-10 -mb-10"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-inner">
                <Info size={40} />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight uppercase mb-8 leading-tight italic">
                “Join and participate in our nation-side campaign to digitalize the Textile Sector, one of the largest sectors of India.”
              </h2>

              <div className="flex flex-col items-center justify-center pt-8 border-t border-slate-100">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <User size={30} />
                </div>
                <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter">HC Parekh</h4>
                <p className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mt-2">Textile Manufacturer & Entrepreneur</p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="w-8 h-[1px] bg-slate-200"></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">India</span>
                  <span className="w-8 h-[1px] bg-slate-200"></span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Blog;