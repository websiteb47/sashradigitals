import React from 'react';

const Gallery = () => {
  return (
    <section className="bg-slate-100 w-full px-0 min-h-screen">
      <div className="w-full mx-auto px-4 md:px-20 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 text-center">Gallery</h2>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
          Explore our real work! Here is a sample from our recent projects.
        </p>
        {/* Special Event: Grand Opening Invitation */}
        <div className="mb-12 flex flex-col items-center">
          <h3 className="text-2xl font-heading font-bold text-purple-700 mb-4">Special Event: Grand Opening</h3>
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-white max-w-md w-full flex flex-col items-center p-4 border-2 border-purple-300">
            <img
              src="/images/grand-opening.jpeg"
              alt="Grand Opening Invitation for Sahasra Digitals - November 3, 2024"
              className="w-full h-auto object-contain rounded-lg mb-2"
              loading="lazy"
            />
            <span className="block text-sm text-gray-700 text-center">Grand Opening Invitation - Sahasra Digitals, Nov 3, 2024</span>
          </div>
        </div>
        {/* Gallery Images */}
        <div className="flex flex-col items-center md:flex-row w-full justify-center flex-wrap gap-4 ">
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
          <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition group bg-white max-w-xs w-full">
            <img
              src="/images/gallery4.jpeg"
              alt="Gallery Sample"
              className="w-full h-82 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition group bg-white max-w-xs w-full">
            <img
              src="/images/gallery5.jpeg"
              alt="Gallery Sample"
              className="w-full h-82 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition group bg-white max-w-xs w-full">
            <img
              src="/images/gallery6.jpeg"
              alt="Gallery Sample"
              className="w-full h-82 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition group bg-white max-w-xs w-full">
            <img
              src="/images/gallery7.jpeg"
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