import React, { useState, useEffect } from 'react';
import { mediaApi, IMAGE_BASE_URL } from '../../utils/api';

const MediaBlog = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const siteId = 'ParekheTradeMarket02';

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await mediaApi.getMedia(siteId);
        if (response.data && response.data.success) {
          setMedia(response.data.data || []);
        }
      } catch (error) {
        console.error("Error fetching media:", error);
        setMedia([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  const renderCard = (item, idx) => (
    <div
      key={idx}
      className={`relative rounded-2xl overflow-hidden group cursor-pointer 
      ${idx === 2 ? 'md:row-span-2 md:h-full' : 'h-64'} 
      ${idx === 3 ? 'col-span-2 md:col-span-2' : ''}`}
    >
      <img
        src={`${IMAGE_BASE_URL}${item.image}`}
        alt="Media"
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
        <span className="text-xs text-blue-300 font-semibold uppercase tracking-wide">
          {item.category || "Media"}
        </span>
        <h3 className="text-white text-lg font-bold leading-tight">
          {item.title || "Media Title"}
        </h3>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Media <span className="text-blue-600">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-64 bg-slate-100 animate-pulse rounded-2xl"></div>
            ))}
          </div>
        ) : media.length > 0 ? (
          /* Gallery */
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {media.map((item, idx) => renderCard(item, idx))}
          </div>
        ) : (
          /* 🔥 Empty State */
          <div className="flex flex-col items-center justify-center py-20 text-center">

            {/* Icon */}
            <div className="bg-blue-50 border border-blue-100 rounded-full p-6 mb-6 shadow-sm">
              <span className="text-3xl">📷</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-slate-800">
              No Media Available
            </h3>

            {/* 🔥 Styled Line (same wording, better design) */}
            <div className="mt-4 px-6 py-3 bg-slate-100 border border-slate-200 rounded-xl shadow-sm">
              <p className="text-slate-600 text-sm font-medium italic tracking-wide">
                ( At present, No event photos to be uploaded )
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default MediaBlog;
