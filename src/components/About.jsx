// components/About.jsx

import React from 'react';

const About = () => (
  <section className="bg-gradient-to-br from-orange-50 via-pink-50 to-orange-100 w-full py-16 min-h-screen">
    <div className="max-w-4xl mx-auto px-4 md:px-0">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <img src="/images/about-new.png.jpg" alt="About Sahasra Digitals" className="w-60 h-60 border-2 border-orange-500 rounded-full object-cover mx-auto mb-6 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300" />
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">About Us</h2>
        {/* <p className="text-xl font-semibold text-black mb-4">Welcome to Sahasra Digitals</p> */}
      </div>

      {/* Company Overview */}
      <div className="bg-pink-200 rounded-3xl shadow-lg p-8 mb-8 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
        <h3 className="text-2xl font-bold text-orange-600 mb-4 text-center">Our Story</h3>
        <p className="text-lg text-black font-bold leading-relaxed mb-4">
          Sahasra Digitals is a full-service digital marketing agency dedicated to helping businesses grow in the digital landscape. Established in 2024, Sahasra Digitals was built on the vision of providing affordable, effective, and transparent online marketing solutions for small and medium businesses (SMBs), startups, and enterprises.
        </p>
        <p className="text-lg text-black font-bold leading-relaxed">
          With a customer-first approach, Sahasra Digitals delivers measurable results by combining creativity, data analytics, and strategic planning. The company offers end-to-end solutions that help businesses establish a strong online presence and achieve their digital marketing goals.
        </p>
      </div>

      {/* Founder Section */}
      <div className="bg-pink-200 rounded-3xl shadow-lg p-8 mb-8 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
        <h3 className="text-2xl font-bold text-orange-600 mb-4 text-center">Meet Our Founder</h3>
        <div className="text-center">
          <h4 className="text-green-500 font-bold text-2xl mb-4">Mrs. Surekha Ramarao Pothakamuri</h4>
          <p className="text-lg text-black font-bold leading-relaxed mb-4">
            The founder and CEO of Sahasra Digitals is a seasoned digital strategist with over 5 years of experience in marketing, branding, and technology. Before starting Sahasra Digitals, she worked with several digital marketing agencies, helping brands scale their online presence.
          </p>
          <p className="text-lg text-black font-bold leading-relaxed mb-4">
            Currently working as a Private School Teacher, Mrs. Surekha holds a Bachelor's Degree from Acharya Nagarjuna University. She has received extensive training in Facebook and Instagram ads and has earned multiple certificates in digital marketing.
          </p>
          <p className="text-lg text-black font-bold leading-relaxed">
            She is skilled in all types of Social Media Marketing & Ads Strategies, GMB Profile Optimization, Local SEO, and Creative Content Marketing Strategies.
          </p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-pink-200 rounded-3xl shadow-lg p-8 mb-8 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
        <h3 className="text-2xl font-bold text-orange-600 mb-4 text-center">Our Mission</h3>
        <p className="text-lg text-black font-bold text-center leading-relaxed">
          To provide creative and quality-driven digital services to every customer with passion and perfection. With a focus on innovation and visual excellence, Sahasra Digitals is your trusted partner in your digital journey. 
          <span className="font-semibold block text-blue-600 mt-2">Let your brand speak with design – Only at Sahasra Digitals!</span>
        </p>
      </div>

      {/* Our Services Include */}
      <div className="bg-pink-200 rounded-3xl shadow-lg p-8 mb-8 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
        <h3 className="text-2xl font-bold text-orange-400 mb-4 text-center">Our Services Include</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="list-disc ml-6 text-lg text-black space-y-2">
          <li>Brochure, Poster & Banner Design</li>
          <li>Video Editing & Promotional Videos</li>
          <li>Logo & Business Card Designing</li>
          <li>Social Media Handling & Marketing</li>
          </ul>
          <ul className="list-disc ml-6 text-lg text-black space-y-2">
          <li>Photo Editing & Album Designing</li>
          <li>Digital Printing Solutions</li>
            <li>SEO Consultancy</li>
            <li>Google Sponsored Ads</li>
        </ul>
      </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-pink-200 rounded-3xl shadow-lg p-8 mb-8 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
        <h3 className="text-2xl font-bold text-orange-400 mb-4 text-center">Why Choose Us?</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="text-orange-500 mt-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-black mb-1">Expert Team, Proven Success</h4>
              <p className="text-black">Our team is made up of experienced professionals with deep knowledge in digital marketing and design. With a strong portfolio and a track record of delivering success, we know what it takes to make your brand shine.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-orange-500 mt-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-black mb-1">Cutting-Edge Creativity</h4>
              <p className="text-black">We stay ahead of the curve by using the latest tools, technologies, and industry trends. Our innovative approach ensures your brand gets a modern, competitive edge in a fast-paced digital world.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-orange-500 mt-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-black mb-1">Customer-First Approach</h4>
              <p className="text-black">We believe in building long-term relationships with our clients. Our customer-first approach means we listen to your needs, understand your goals, and deliver solutions that exceed your expectations.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-orange-500 mt-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </span>
            <div>
              <h4 className="font-semibold text-black mb-1">Results-Driven Strategy</h4>
              <p className="text-black">We don't just create beautiful designs; we create strategies that drive results. Our data-driven approach ensures that every campaign and design decision contributes to your business growth and success.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Expertise */}
      <div className="bg-pink-200 rounded-3xl shadow-lg p-8 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
        <h3 className="text-2xl font-bold text-orange-400 mb-6 text-center">Our Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <span className="mb-3 text-blue-500">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <h4 className="font-bold text-black">Search Engine Optimization</h4>
            <p className="text-blue-900 font-bold text-sm mt-1">Boost your visibility and ranking</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="mb-3 text-green-500">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4m0 0l-2-2m2 2l2-2" />
              </svg>
            </span>
            <h4 className="font-bold text-black">Social Media Marketing</h4>
            <p className="text-green-900 font-bold text-sm mt-1">Engage your audience and grow</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="mb-3 text-violet-500">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5V3a1 1 0 00-1-1H9a1 1 0 00-1 1v9m10 4h.01" />
              </svg>
            </span>
            <h4 className="font-bold text-black">Content Marketing Expert</h4>
            <p className="text-violet-600 font-bold text-sm mt-1">Create valuable content</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="mb-3 text-pink-500">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
            <h4 className="font-bold text-black">Pay-Per-Click Expertise</h4>
            <p className="text-pink-600 font-bold text-sm mt-1">Drive targeted traffic</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
