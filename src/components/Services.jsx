import React from 'react';



const Services = () => (
  <section className="bg-slate-100 w-full px-0 min-h-screen py-16">
    <div className="w-full mx-auto px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 text-center">Our Services</h2>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
        At Sahasra Digitals, we offer a comprehensive suite of creative and digital solutions to help your business stand out, connect with your audience, and grow effectively. From branding and design to marketing and technology, our expert team delivers results that matter.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/service1.png"
                  alt="Brochure, Poster & Banner Design"
                  className="object-fill h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
              <h3 className="text-xl font-bold mb-2 text-black">Brochure, Poster & Banner Design</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Eye-catching print and digital designs to promote your business and events.</p>
              <a
                href="https://wa.me/9581823990"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
              >
                Learn More
              </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/service2.png"
                  alt="Video Editing & Promotional Videos"
                  className="object-fill h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
              <h3 className="text-xl font-bold mb-2 text-black">Video Editing & Promotional Videos</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Captivate your audience with professional video editing and compelling promotional videos.</p>
              <a
                href="https://wa.me/9581823990"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
              >
                Learn More
              </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/service3.jpg"
                  alt="Logo & Business Card Designing"
                  className="object-fill h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
              <h3 className="text-xl font-bold mb-2 text-black">Logo & Business Card Designing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Memorable logos and business cards that make a lasting impression.</p>
              <a
                href="https://wa.me/9581823990"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
              >
                Learn More
              </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/service4.jpg"
                  alt="Social Media Handling & Marketing"
                  className="object-fill h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
              <h3 className="text-xl font-bold mb-2 text-black">Social Media Handling & Marketing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Grow your brand and engage your audience with strategic social media management.</p>
              <a
                href="https://wa.me/9581823990"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
              >
                Learn More
              </a>
              </div>
            </div>
            {/* <div className="bg-white p-6 rounded-xl shadow hover:shadow-orange-500 transition-all duration-300 hover:scale-105 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="mb-3 text-orange-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
              </span>
              <h3 className="text-xl font-semibold mb-2 text-orange-400">Photo Editing & Album Designing</h3>
              <p className="text-gray-700 leading-relaxed">Professional photo editing and beautiful album layouts for personal and business needs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-orange-500 transition-all duration-300 hover:scale-105 flex flex-col items-center md:items-start text-center md:text-left">
              <span className="mb-3 text-orange-500">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 6h8M8 10h8M8 14h8" /></svg>
              </span>
              <h3 className="text-xl font-semibold mb-2 text-orange-400">Digital Printing Solutions</h3>
              <p className="text-gray-700 leading-relaxed">High-quality digital printing for all your marketing and branding materials.</p>
            </div> */}
          </div>
    </div>
  </section>
);

export default Services;
