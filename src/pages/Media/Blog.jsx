import React, { useState, useEffect } from 'react';
import { BookOpen, User, Calendar, ArrowRight } from 'lucide-react';
import { blogApi, IMAGE_BASE_URL } from '../../utils/api';
import { motion } from 'framer-motion';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = 'ParekheTradeMarket02';

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await blogApi.getBlogs(siteId);
        if (response.data && response.data.success) {
          setBlogs(response.data.data || []);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="py-20 bg-[#f8fafc] font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Tag */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">
            <BookOpen size={14} /> Blog & Articles
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Latest <span className="text-blue-600">Insights</span>
          </h1>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">
            Stay updated with the latest trends and updates from the textile industry and digitalization efforts.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <motion.div
                key={blog._id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col h-full"
              >
                {/* Thumbnail */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`${IMAGE_BASE_URL}${blog.thumbnail}`}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-slate-900 uppercase tracking-wider shadow-sm">
                      {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">
                    <User size={12} /> {blog.author || "Admin"}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <div
                    className="text-slate-500 text-sm line-clamp-3 mb-6 flex-grow overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                  <div className="pt-6 border-t border-slate-50 flex justify-between items-center group/btn">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover/btn:text-blue-600 transition-colors">
                      Read More
                    </span>
                    <div className="w-10 h-10 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all shadow-sm">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white rounded-[3rem] shadow-xl border border-slate-100 p-12 text-center">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8">
              <BookOpen size={40} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
              “Join and participate in our nation-wide campaign to digitalize the Textile Sector, one of the largest sectors of India.”
            </h2>
            <div className="flex flex-col items-center gap-3 pt-8 border-t border-slate-100">
              <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center shadow-lg">
                <User size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 leading-none mb-1">HC Parekh</h4>
                <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">
                  Textile Manufacturer & Entrepreneur
                </p>
              </div>
            </div>
            <div className="mt-10 px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl inline-block">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-none">
                Official Update • India
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
