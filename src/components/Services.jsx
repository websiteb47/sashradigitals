import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => (
  <section className="bg-slate-100 w-full px-0 min-h-screen py-16">
    <div className="w-full mx-auto px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 text-center font-heading">Our Services</h2>
      <p className="text-lg text-gray-700 font-bold mb-10 text-center max-w-3xl mx-auto">
        At Sahasra Digitals, we offer a comprehensive suite of creative and digital solutions to help your business stand out, connect with your audience, and grow effectively. From branding and design to marketing and technology, our expert team delivers results that matter.
      </p>
      
      {/* Digital Marketing Services */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-orange-600 mb-6 text-center">Digital Marketing Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* 1. Social Media Marketing & Handling */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-all duration-300 flex flex-col items-center text-center group border border-orange-100 hover:scale-105 hover:-translate-y-2">
            <div className="w-full mb-4 shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop"
                alt="Social Media Marketing & Handling"
                className="object-cover h-50 w-full"
              />
            </div>
            <div className='flex flex-col justify-between h-full p-4'>
              <h3 className="text-xl font-bold mb-2 text-black font-heading">Social Media Marketing & Handling</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Grow your brand and engage your audience with strategic social media management across all major platforms including Facebook, Instagram, Twitter, and LinkedIn.</p>
              <a
                href="https://wa.me/9581823990"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
          
          {/* 2. SEO Consultancy */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-all duration-300 flex flex-col items-center text-center group border border-orange-100 hover:scale-105 hover:-translate-y-2">
            <div className="w-full mb-4 shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                alt="SEO Consultancy"
                className="object-cover h-50 w-full"
              />
            </div>
            <div className='flex flex-col justify-between h-full p-4'>
              <h3 className="text-xl font-bold mb-2 text-black font-heading">SEO Consultancy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Boost your website's visibility and ranking with expert SEO strategies, keyword research, and ongoing consultancy to improve your search engine presence.</p>
              <a
                href="https://wa.me/9581823990"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
          
          {/* 3. Google Sponsored Ads */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-all duration-300 flex flex-col items-center text-center group border border-orange-100 hover:scale-105 hover:-translate-y-2">
            <div className="w-full mb-4 shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                alt="Google Sponsored Ads"
                className="object-cover h-50 w-full"
              />
            </div>
            <div className='flex flex-col justify-between h-full p-4'>
              <h3 className="text-xl font-bold mb-2 text-black font-heading">Google Sponsored Ads</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Drive targeted traffic and maximize ROI with expertly managed Google Ads campaigns, including search ads, display ads, and shopping ads.</p>
              <a
                href="https://wa.me/9581823990"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
          
          {/* 4. Market Analysis */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-all duration-300 flex flex-col items-center text-center group border border-orange-100 hover:scale-105 hover:-translate-y-2">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop"
                alt="Market Analysis"
                  className="object-cover h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
              <h3 className="text-xl font-bold mb-2 text-black font-heading">Market Analysis</h3>
              <p className="text-gray-700 leading-relaxed mb-4">In-depth market research and competitor analysis to inform your business strategy and growth with data-driven insights.</p>
              <a
                href="https://wa.me/9581823990"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
              >
                Get Quote
              </a>
              </div>
          </div>
          
          {/* 5. Keyword Research */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-all duration-300 flex flex-col items-center text-center group border border-orange-100 hover:scale-105 hover:-translate-y-2">
            <div className="w-full mb-4 shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop"
                alt="Keyword Research"
                className="object-cover h-50 w-full"
              />
            </div>
            <div className='flex flex-col justify-between h-full p-4'>
              <h3 className="text-xl font-bold mb-2 text-black font-heading">Keyword Research</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Discover the best keywords to target for your business to improve SEO and attract the right audience with comprehensive keyword analysis.</p>
              <a
                href="https://wa.me/9581823990"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Creative Design Services */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">Creative Design Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* 6. Video Editing & Promotional Videos */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-all duration-300 flex flex-col items-center text-center group border border-orange-100 hover:scale-105 hover:-translate-y-2">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop"
                  alt="Video Editing & Promotional Videos"
                  className="object-cover h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
              <h3 className="text-xl font-bold mb-2 text-black font-heading">Video Editing & Promotional Videos</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Captivate your audience with professional video editing and compelling promotional content for social media and marketing campaigns.</p>
              <a
                href="https://wa.me/9581823990"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
              >
                Get Quote
              </a>
              </div>
          </div>
          
          {/* 7. Brochure, Poster & Banner Design */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-all duration-300 flex flex-col items-center text-center group border border-orange-100 hover:scale-105 hover:-translate-y-2">
            <div className="w-full mb-4 shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop"
                alt="Brochure, Poster & Banner Design"
                className="object-cover h-50 w-full"
              />
            </div>
            <div className='flex flex-col justify-between h-full p-4'>
              <h3 className="text-xl font-bold mb-2 text-black font-heading">Brochure, Poster & Banner Design</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Eye-catching print and digital designs to promote your business and events with professional layouts and creative concepts.</p>
              <a
                href="https://wa.me/9581823990"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
          
          {/* 8. Logo & Business Card Designing */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-all duration-300 flex flex-col items-center text-center group border border-orange-100 hover:scale-105 hover:-translate-y-2">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                  alt="Logo & Business Card Designing"
                  className="object-cover h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
              <h3 className="text-xl font-bold mb-2 text-black font-heading">Logo & Business Card Designing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Memorable logos and business cards that make a lasting impression and represent your brand identity professionally.</p>
              <a
                href="https://wa.me/9581823990"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
              >
                Get Quote
              </a>
              </div>
            </div>
          
          {/* 9. Photo Editing & Album Designing */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-all duration-300 flex flex-col items-center text-center group border border-orange-100 hover:scale-105 hover:-translate-y-2">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop"
                alt="Photo Editing & Album Designing"
                  className="object-cover h-50 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-4'>
              <h3 className="text-xl font-bold mb-2 text-black font-heading">Photo Editing & Album Designing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">Professional photo editing and beautiful album layouts for personal and business needs with attention to detail.</p>
              <a
                href="https://wa.me/9581823990"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
              >
                Get Quote
              </a>
              </div>
          </div>
          
          {/* 10. Digital Printing Solutions */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-all duration-300 flex flex-col items-center text-center group border border-orange-100 hover:scale-105 hover:-translate-y-2">
            <div className="w-full mb-4 shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
                alt="Digital Printing Solutions"
                className="object-cover h-50 w-full"
              />
            </div>
            <div className='flex flex-col justify-between h-full p-4'>
              <h3 className="text-xl font-bold mb-2 text-black font-heading">Digital Printing Solutions</h3>
              <p className="text-gray-700 leading-relaxed mb-4">High-quality digital printing for all your marketing and branding materials with fast turnaround times.</p>
              <a
                href="https://wa.me/9581823990"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>

              {/* Call to Action */}
        <div className="text-center bg-green-200 rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-pink-500 mb-4">Ready to Get Started?</h3>
        <p className="text-gray-700 font-bold mb-6 max-w-2xl mx-auto">
          Let's discuss your project requirements and create a customized solution that fits your business needs and budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/9581823990"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors duration-300"
          >
            Chat on WhatsApp
          </a>
          <Link to="/contact Us" className="inline-block border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-orange-500 hover:text-white transition-colors duration-300">
            Contact Us
          </Link>
        </div>
          </div>
    </div>
  </section>
);

export default Services;
