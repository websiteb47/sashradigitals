import React from 'react';



const Services = () => (
  <section className="bg-slate-100 w-full px-0 min-h-screen py-16">
    <div className="w-full mx-auto px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 text-center font-heading">Our Services</h2>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
        At Sahasra Digitals, we offer a comprehensive suite of creative and digital solutions to help your business stand out, connect with your audience, and grow effectively. From branding and design to marketing and technology, our expert team delivers results that matter.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* 1. Social Media Marketing & Handling */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/service3.jpeg"
                  alt="Social Media Marketing & Handling"
                  className="object-fill h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
                <h3 className="text-xl font-bold mb-2 text-black">Social Media Marketing & Handling</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Grow your brand and engage your audience with strategic social media management across all major platforms.</p>
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
            {/* 2. SEO Consultancy */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/service4.jpeg"
                  alt="SEO Consultancy"
                  className="object-fill h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
                <h3 className="text-xl font-bold mb-2 text-black">SEO Consultancy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Boost your website's visibility and ranking with expert SEO strategies and ongoing consultancy.</p>
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
            {/* 3. Google Sponsored Ads */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/service5.jpeg"
                  alt="Google Sponsored Ads"
                  className="object-fill h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
                <h3 className="text-xl font-bold mb-2 text-black">Google Sponsored Ads</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Drive targeted traffic and maximize ROI with expertly managed Google Ads campaigns.</p>
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
            {/* 4. Video Editing & Promotional Videos */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/service6.jpeg"
                  alt="Video Editing & Promotional Videos"
                  className="object-fill h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
                <h3 className="text-xl font-bold mb-2 text-black">Video Editing & Promotional Videos</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Captivate your audience with professional video editing and compelling promotional content.</p>
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
            {/* 5. Brochure, Poster & Banner Design */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/service7.jpeg"
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
            {/* 6. Logo & Business Card Designing */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/service10.jpeg"
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
            {/* 7. Photo Editing & Album Designing */}
            {/* <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/service9.jpeg"
                  alt="Photo Editing & Album Designing"
                  className="object-fill h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
                <h3 className="text-xl font-bold mb-2 text-black">Photo Editing & Album Designing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Professional photo editing and beautiful album layouts for personal and business needs.</p>
                <a
                  href="https://wa.me/9581823990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
                >
                  Learn More
                </a>
              </div>
            </div> */}
            {/* 8. Digital Printing Solutions */}
            {/* <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/gallery2.jpeg"
                  alt="Digital Printing Solutions"
                  className="object-fill h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
                <h3 className="text-xl font-bold mb-2 text-black">Digital Printing Solutions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">High-quality digital printing for all your marketing and branding materials.</p>
                <a
                  href="https://wa.me/9581823990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
                >
                  Learn More
                </a>
              </div>
            </div> */}
            {/* 9. Market Analysis */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/service8.jpeg"
                  alt="Market Analysis"
                  className="object-fill h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
                <h3 className="text-xl font-bold mb-2 text-black">Market Analysis</h3>
                <p className="text-gray-700 leading-relaxed mb-4">In-depth market research and competitor analysis to inform your business strategy and growth.</p>
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
            {/* 10. Keyword Research */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/service9.jpeg"
                  alt="Keyword Research"
                  className="object-fill h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
                <h3 className="text-xl font-bold mb-2 text-black">Keyword Research</h3>
                <p className="text-gray-700 leading-relaxed mb-4">Discover the best keywords to target for your business to improve SEO and attract the right audience.</p>
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
          </div>
    </div>
  </section>
);

export default Services;
