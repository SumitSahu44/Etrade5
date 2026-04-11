import React from 'react';
import { BookOpen, User } from 'lucide-react';

const Blog = () => {
  return (
    <div className=" py-10 bg-[#f8fafc] font-sans flex items-center justify-center px-6">

      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-10 text-center">

        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-6">
          <BookOpen size={14} /> Blog & Article
        </div>

        {/* Main Text */}
        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed mb-8">
          “Join and participate in our nation-wide campaign to digitalize the Textile Sector, one of the largest sectors of India.”
        </h2>

        {/* Author */}
        <div className="flex flex-col items-center gap-2 pt-6 border-t border-slate-100">

          <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center">
            <User size={20} />
          </div>

          <h4 className="text-base font-semibold text-slate-900">
            HC Parekh
          </h4>

          <p className="text-blue-600 text-xs font-semibold uppercase tracking-wider">
            Textile Manufacturer & Entrepreneur
          </p>

          <span className="text-[11px] text-slate-400 mt-1">
            India
          </span>

        </div>
      </div>
    </div>
  );
};

export default Blog;