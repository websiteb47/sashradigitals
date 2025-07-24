import React from 'react';

const Gallery = () => {
  return (
    <section className="bg-slate-100 w-full px-0 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-20 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 text-center">Gallery</h2>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
          Explore our real work! Here is a sample from our recent projects.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 ">
          <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition group bg-white max-w-xs w-full">
            <img
              src="/images/gallery.jpeg"
              alt="Gallery Sample"
              className="w-full h-82 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition group bg-white max-w-xs w-full">
            <img
              src="/images/gallery2.jpeg"
              alt="Gallery Sample"
              className="w-full h-82 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition group bg-white max-w-xs w-full">
            <img
              src="/images/gallery3.jpeg"
              alt="Gallery Sample"
              className="w-full h-82 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 