import React from 'react';

const MediaBlog = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Circulars & Blogs */}
        <div className="lg:col-span-4 space-y-8">
          <h2 className="text-3xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4">Latest Circulars</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 rounded-xl border border-gray-100 hover:bg-blue-50 cursor-pointer transition">
                <span className="text-xs font-bold text-blue-600 uppercase">April 2026</span>
                <h4 className="font-bold text-slate-800 mt-1">New Export Policy for Finished Silk Products</h4>
                <p className="text-sm text-gray-500 mt-2">Official notice regarding trade regulations...</p>
              </div>
            ))}
          </div>
          <button className="w-full py-3 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200">View All Updates</button>
        </div>

        {/* Right Side: Media Gallery */}
        <div className="lg:col-span-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Media Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1705248382842-e5c7fddde756?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRleHRpbGUlMjBidWxrfGVufDB8fDB8fHww" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Gallery" />
            </div>
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1705248382836-3618e25706d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRleHRpbGUlMjBidWxrfGVufDB8fDB8fHww" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Gallery" />
            </div>
            <div className="h-64 bg-gray-200 rounded-2xl md:row-span-2 md:h-full overflow-hidden relative group">
                <img src="https://media.istockphoto.com/id/898566242/photo/choosing-a-fabric-color-in-a-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=JGsM8Ttmjhn5Y-WKZb3KmkA6ouk3ktElziyDWnPIYGw=" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Gallery" />
            </div>
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative group col-span-2 md:col-span-2">
                <img src="https://plus.unsplash.com/premium_photo-1726862510287-0d0b28ffdc5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGV4dGlsZSUyMHRyYWRlJTIwY2xvdGh8ZW58MHx8MHx8fDA%3D" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Gallery" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MediaBlog;