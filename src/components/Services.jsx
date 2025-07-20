import React from 'react';

const services = [
  {
    title: 'Search Engine Optimization (SEO)',
    desc: 'Boost your website’s visibility and ranking on search engines with our expert SEO strategies.',
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    )
  },
  {
    title: 'Pay-Per-Click (PPC) Advertising',
    desc: 'Drive targeted traffic and maximize ROI with our data-driven PPC campaigns on Google and social platforms.',
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
    )
  },
  {
    title: 'Content Marketing',
    desc: 'Engage your audience and build authority with high-quality, relevant, and creative content.',
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5V3a1 1 0 00-1-1H9a1 1 0 00-1 1v9m10 4h.01" /></svg>
    )
  },
  {
    title: 'Web Design and Development',
    desc: 'Get a stunning, responsive website that reflects your brand and converts visitors into customers.',
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 6h8M8 10h8M8 14h8" /></svg>
    )
  },
  {
    title: 'Video Editing & Promotional Videos',
    desc: 'Captivate your audience with professional video editing and compelling promotional videos.',
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4M8 3v4" /></svg>
    )
  },
  {
    title: 'Influencer Marketing',
    desc: 'Leverage the power of influencers to expand your reach and build trust with your target market.',
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
    )
  },
  {
    title: 'Brochure, Poster & Banner Design',
    desc: 'Eye-catching print and digital designs to promote your business and events.',
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 6h8M8 10h8M8 14h8" /></svg>
    )
  },
  {
    title: 'Logo & Business Card Designing',
    desc: 'Memorable logos and business cards that make a lasting impression.',
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
    )
  },
  {
    title: 'Social Media Handling & Marketing',
    desc: 'Grow your brand and engage your audience with strategic social media management.',
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4m0 0l-2-2m2 2l2-2" /></svg>
    )
  },
  {
    title: 'Photo Editing & Album Designing',
    desc: 'Professional photo editing and beautiful album layouts for personal and business needs.',
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
    )
  },
  {
    title: 'Digital Printing Solutions',
    desc: 'High-quality digital printing for all your marketing and branding materials.',
    icon: (
      <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 6h8M8 10h8M8 14h8" /></svg>
    )
  },
];

const Services = () => (
  <section className="bg-slate-100 w-full px-0 min-h-screen py-16">
    <div className="max-w-6xl mx-auto px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 text-center">Our Services</h2>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
        At Sahasra Digitals, we offer a comprehensive suite of creative and digital solutions to help your business stand out, connect with your audience, and grow effectively. From branding and design to marketing and technology, our expert team delivers results that matter.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-orange-500 transition-all duration-300 hover:scale-105 flex flex-col items-center text-center">
            {service.icon}
            <h3 className="text-xl font-semibold mb-2 text-orange-400 mt-4">{service.title}</h3>
            <p className="text-gray-700 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
