import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import HeroSlider from './HeroSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
import ContentHighlighter from './ContentHighlighter';
const API_URL = 'https://sahasra-backend.onrender.com' || 'http://localhost:5000';


const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, phone, company, message } = formData;

    if (!name.trim()) return 'Name is required';
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Enter a valid email address';
    if (!phone.trim()) return 'Phone number is required';
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) return 'Enter a valid 10-digit phone number';
    if (!company.trim()) return 'Please tell us what your company does';
    if (!message.trim()) return 'Message is required';
    if (message.length < 10) return 'Message should be at least 10 characters';

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    try {
      toast.loading('Sending your message...');
      await axios.post(`${API_URL}/api/contact`, formData);
      toast.dismiss();
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />

      {/* 🎯 Content Highlighter Section */}
      <section className="relative pt-20 md:pt-20 mb-10">
        <ContentHighlighter />
      </section>

      {/* Company Promo Video Section */}
      {/* <section className="w-full flex flex-col items-center justify-center bg-white py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">See What We Do</h2>
        <div className="w-full overflow-hidden ">
          <video
            src="/promo.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster="/public/images/banner1.png"
                className="w-full  object-contain"
              >
            Your browser does not support the video tag.
          </video>
        </div>
      </section> */}

      {/* Main Content Section (Headline, Tagline, CTA, Contact) */}
      <section className="relative px-6 md:px-30 py-16 flex flex-col md:flex-row justify-between items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-purple-800/20 to-slate-700/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-slate-400/15 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/15 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-slate-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        {/* Main Content */}
        <div className="relative z-10 w-full md:w-1/2 animate-fade-in">
          <h2 className="text-4xl md:text-7xl font-serif font-bold"><span className="text-orange-500">S</span>ahasra <span className="text-orange-500">D</span>igitals</h2>
          <p className="mt-6 max-w-xl font-bold md:text-2xl text-gray-200">WE CARE AND PROMOTE YOUR BUSINESS!</p>
          <button className="mt-8 px-8 py-3 bg-orange-500 text-black font-bold hover:bg-orange-600 rounded-[0.5vw] transition">
            JOIN US
          </button>
        </div>
        {/* Contact Form */}
        <section className="relative z-10 mt-12 md:mt-0 w-full md:w-1/2 bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-md text-white animate-fade-in border border-slate-600/30">
          <h2 className="text-2xl font-bold text-orange-400 mb-6">Send Us Your Query</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded bg-slate-700/50 text-white placeholder-gray-300 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-sm"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded bg-slate-700/50 text-white placeholder-gray-300 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-sm"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full p-3 rounded bg-slate-700/50 text-white placeholder-gray-300 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-sm"
              required
              pattern="\d{10}"
              maxLength={10}
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="What does your company do?"
              className="w-full p-3 rounded bg-slate-700/50 text-white placeholder-gray-300 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-sm"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded bg-slate-700/50 text-white placeholder-gray-300 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-sm"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-semibold transition"
            >
              Submit
            </button>
          </form>
        </section>
      </section>

      {/* Brochure / Plans Section */}
      <section className="w-full py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-purple-800/20 to-slate-700/20"></div>
        <div className="absolute top-20 left-20 w-20 h-20 bg-orange-400 rounded-full opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-blue-400 rounded-full opacity-15 animate-pulse delay-500"></div>
        <div className="w-full mx-auto px-4 md:px-10 relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-10 text-center tracking-tight">Our Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Basic Plan */}
            <div className="plans-card bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-8 border-orange-400 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:z-10 hover:relative transition-all duration-300 transform">
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 text-orange-500 tracking-wide">Basic Plan</h3>
              <p className="font-heading font-semibold text-xl md:text-2xl text-orange-500 mb-6">₹8,000<span className="text-base font-normal text-gray-500">/30 days</span></p>
              <ul className="text-gray-600 mb-2 space-y-3 text-left font-sans text-base md:text-lg w-full pl-2">
                <li className="flex items-start gap-2"><span className="mt-1 text-orange-400">✔</span>10 Graphic Designs & 2 Reels</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-orange-400">✔</span>Maintenance of pages: Facebook, Insta, Twitter, Google</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-orange-400">✔</span>Special days for Festivals</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-orange-400">✔</span>Guidance Related Competitor Research</li>
              </ul>
            </div>
            {/* Business Plan */}
            <div className="plans-card bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-8 border-blue-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:z-10 hover:relative transition-all duration-300 transform">
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 text-blue-600 tracking-wide">Business Plan</h3>
              <p className="font-heading font-semibold text-xl md:text-2xl text-blue-600 mb-6">₹12,000<span className="text-base font-normal text-gray-500">/30 days</span></p>
              <ul className="text-gray-600 mb-2 space-y-3 text-left font-sans text-base md:text-lg w-full pl-2">
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-400">✔</span>All Basic Plan Services</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-400">✔</span>Sponsored Ads in Facebook & Instagram</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-400">✔</span>Weekly once Response Strategy with Google Meet</li>
              </ul>
            </div>
            {/* Professional Plan (Most Popular) */}
            <div className="plans-card relative bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center border-t-8 border-purple-600 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:z-10 hover:relative transition-all duration-300 transform">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg uppercase tracking-wide">Most Popular</span>
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 text-purple-700 tracking-wide">Professional Plan</h3>
              <p className="font-heading font-semibold text-xl md:text-2xl text-purple-700 mb-6">₹18,000<span className="text-base font-normal text-gray-500">/30 days</span></p>
              <ul className="text-gray-600 mb-2 space-y-3 text-left font-sans text-base md:text-lg w-full pl-2">
                <li className="flex items-start gap-2"><span className="mt-1 text-purple-400">✔</span>All Standard Plan Services (Basic + Business)</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-purple-400">✔</span>Premium GMB Optimization with local SEO</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-purple-400">✔</span>Campaigns & Sponsorship in Facebook, Instagram & Google</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-purple-400">✔</span>Monthly once WhatsApp Campaign with client data
                  <a href="https://wa.me/9581823990" target="_blank" rel="noopener noreferrer" className="ml-2">
                    <svg className="w-5 h-5 text-green-500 inline" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.28-.32.42-.48.14-.16.19-.27.28-.45.09-.18.05-.34-.02-.47-.07-.13-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.94.92-.94 2.24 0 1.32.96 2.59 1.09 2.77.14.18 1.89 2.89 4.59 3.94.64.22 1.14.35 1.53.45.64.16 1.23.14 1.7.08.52-.06 1.6-.66 1.83-1.29.23-.63.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            {/* Premium Plan (Ads) */}
            <div className="plans-card bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-8 border-emerald-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 hover:z-10 hover:relative transition-all duration-300 transform">
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 text-emerald-600 tracking-wide">Premium Plan (Ads)</h3>
              <p className="font-heading font-semibold text-xl md:text-2xl text-emerald-600 mb-6">₹26,000<span className="text-base font-normal text-gray-500">/30 days</span></p>
              <ul className="text-gray-600 mb-2 space-y-3 text-left font-sans text-base md:text-lg w-full pl-2">
                <li className="flex items-start gap-2"><span className="mt-1 text-emerald-400">✔</span>Professional Plan (Basic + Business + Professional)</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-emerald-400">✔</span>Facebook Ads, Instagram Ads, Google Ads & YouTube Ads, WhatsApp Ads</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-emerald-400">✔</span>Pinterest & LinkedIn Pages</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-emerald-400">✔</span>Reviews Management</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-emerald-400">✔</span>Customer Support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 w-full py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-purple-800/20 to-slate-700/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800/30 via-transparent to-purple-800/30"></div>
                  <div className="absolute top-20 right-20 w-24 h-24 bg-slate-400/15 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-400/15 rounded-full animate-pulse delay-1000"></div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-10 relative z-10">
          {/* Illustration/Icon */}
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-1/3 mb-8 md:mb-0">
            <img src="/images/about.png" alt="About Sahasra Digitals" className=" border-2 border-[#ddd] rounded-2xl object-cover mx-auto shadow-lg" />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-6">About Us</h2>
            <p className="text-lg leading-relaxed mb-4 font-semibold text-white">Welcome to Sahasra Digitals</p>
            <p className="text-lg leading-relaxed mb-6 text-gray-200">
              Sahasra Digitals is a full-service digital marketing agency dedicated to helping businesses grow in the digital landscape. Established in 2024, we provide affordable, effective, and transparent online marketing solutions for small and medium businesses, startups, and enterprises.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-200">
              <span className="text-orange-400 font-bold text-xl">Mrs. Surekha Ramarao Pothakamuri</span>, our founder and CEO, is a seasoned digital strategist with over 5 years of experience in marketing, branding, and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 text-center">
                Read More About Us
              </Link>
              <Link to="/contact Us" className="inline-block border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors duration-300 text-center">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 w-full py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-purple-800/20 to-slate-700/20"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-slate-400/15 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-400/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-slate-400/15 rounded-full animate-pulse delay-500"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-10 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-orange-400">Sahasra Digitals</span>?
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              We combine creativity, technology, and strategic thinking to deliver exceptional results that drive your business forward.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Features */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="why-choose-card group flex items-start gap-6 p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-700 transform opacity-0 translate-x-[-100px] animate-fade-in-left">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Expert Team, Proven Success</h3>
                  <p className="text-gray-200 leading-relaxed">
                    Our experienced professionals bring deep knowledge in digital marketing and design. With a strong portfolio and proven track record, we know what it takes to make your brand shine in the competitive digital landscape.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="why-choose-card group flex items-start gap-6 p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-700 transform opacity-0 translate-x-[-100px] animate-fade-in-left" style={{animationDelay: '0.2s'}}>
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Cutting-Edge Creativity</h3>
                  <p className="text-gray-200 leading-relaxed">
                    We stay ahead of the curve using the latest tools, technologies, and industry trends. Our innovative approach ensures your brand gets a modern, competitive edge in today's fast-paced digital world.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="why-choose-card group flex items-start gap-6 p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-700 transform opacity-0 translate-x-[-100px] animate-fade-in-left" style={{animationDelay: '0.4s'}}>
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Customer-First Approach</h3>
                  <p className="text-gray-200 leading-relaxed">
                    At Sahasra Digitals, you're not just a client — you're a partner. We listen, understand, and work closely with you to turn your vision into impactful results that exceed expectations.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="why-choose-card group flex items-start gap-6 p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1 transition-all duration-700 transform opacity-0 translate-x-[-100px] animate-fade-in-left" style={{animationDelay: '0.6s'}}>
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Results-Driven Strategy</h3>
                  <p className="text-gray-200 leading-relaxed">
                    We don't just create — we deliver measurable results. Our work is driven by data and analytics, aimed at growing your business, building your brand, and boosting your bottom line.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="relative opacity-0 translate-x-[100px] animate-fade-in-right">
              {/* Main Image */}
              <div className="relative z-10">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/190/190411.png" 
                  alt="Why Choose Us" 
                  className="w-full max-w-md mx-auto object-contain drop-shadow-2xl"
                />
              </div>
              
              {/* Background Decorative Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-blue-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-5 w-12 h-12 bg-green-200 rounded-full opacity-60 animate-pulse delay-500"></div>
              
              {/* Modern Stats Cards */}
              <div className="absolute -bottom-8 -left-8 group">
                <div className="bg-gradient-to-br from-orange-400/20 via-orange-500/10 to-orange-600/20 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-orange-300/20 hover:border-orange-300/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white bg-gradient-to-r from-orange-300 to-orange-100 bg-clip-text text-transparent">100+</div>
                      <div className="text-sm text-orange-200/80 font-medium">Happy Clients</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-orange-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8 group">
                <div className="bg-gradient-to-br from-green-400/20 via-green-500/10 to-green-600/20 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-green-300/20 hover:border-green-300/40 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                      <svg className="w-6 h-6 text-white relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">120+</div>
                      <div className="text-sm text-green-200/80 font-medium">Projects Completed</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-green-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have trusted us to grow their business online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/9581823990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-300 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.28-.32.42-.48.14-.16.19-.27.28-.45.09-.18.05-.34-.02-.47-.07-.13-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.94.92-.94 2.24 0 1.32.96 2.59 1.09 2.77.14.18 1.89 2.89 4.59 3.94.64.22 1.14.35 1.53.45.64.16 1.23.14 1.7.08.52-.06 1.6-.66 1.83-1.29.23-.63.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32z" />
                  </svg>
                  Start Your Project
                </a>
                <Link 
                  to="/contact Us" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 w-full py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-purple-800/20 to-slate-700/20"></div>
                  <div className="absolute top-20 left-20 w-28 h-28 bg-slate-400/15 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-purple-400/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-pulse delay-500"></div>
        <div className="max-w-5xl mx-auto px-4 md:px-10 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-10 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col justify-center items-center md:items-center text-center md:text-center">
              <span className="mb-3 text-blue-500">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </span>
              <h3 className="text-xl font-bold mb-2 text-black">Search Engine Optimization</h3>
              <p className="text-white-700">Boost your visibility and ranking on search engines.</p>
            </div>
            <div className="flex flex-col justify-center items-center md:items-center text-center md:text-center">
              <span className="mb-3 text-green-500">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4m0 0l-2-2m2 2l2-2" /></svg>
              </span>
              <h3 className="text-xl font-bold mb-2 text-black">Social Media Marketing</h3>
              <p className="text-white-700">Engage your audience and grow your brand online.</p>
            </div>
            <div className="flex flex-col justify-center items-center md:items-center text-center md:text-center">
              <span className="mb-3 text-violet-500">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5V3a1 1 0 00-1-1H9a1 1 0 00-1 1v9m10 4h.01" /></svg>
              </span>
              <h3 className="text-xl font-bold mb-2 text-black">Content Marketing</h3>
              <p className="text-white-700">Create and share valuable content to attract customers.</p>
            </div>
            <div className="flex flex-col justify-center items-center md:items-center text-center md:text-center">
              <span className="mb-3 text-pink-500">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
              </span>
              <h3 className="text-xl font-bold mb-2 text-black">Pay-Per-Click</h3>
              <p className="text-white-700">Drive targeted traffic with effective PPC campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (short list) */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 w-full py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-purple-800/20 to-slate-700/20"></div>
                  <div className="absolute top-10 left-10 w-24 h-24 bg-slate-400/15 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400/15 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-slate-400/15 rounded-full animate-pulse delay-500"></div>
        <div className="w-full mx-auto px-4 md:px-10 relative z-10">
                      <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-10 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* 1. Social Media Marketing & Handling */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100 h-full">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop"
                  alt="Social Media Marketing & Handling"
                  className="object-cover h-52 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-6 flex-1'>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-black">Social Media Marketing & Handling</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">Grow your brand and engage your audience with strategic social media management across all major platforms.</p>
                </div>
                <a
                  href="https://wa.me/9581823990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-6 py-3 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            {/* 2. SEO Consultancy */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100 h-full">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                  alt="SEO Consultancy"
                  className="object-cover h-52 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-6 flex-1'>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-black">SEO Consultancy</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">Boost your website's visibility and ranking with expert SEO strategies and ongoing consultancy.</p>
                </div>
                <a
                  href="https://wa.me/9581823990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-6 py-3 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            {/* 3. Video Editing & Promotional Videos */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100 h-full">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop"
                  alt="Video Editing & Promotional Videos"
                  className="object-cover h-52 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-6 flex-1'>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-black">Video Editing & Promotional Videos</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">Captivate your audience with professional video editing and compelling promotional content.</p>
                </div>
                <a
                  href="https://wa.me/9581823990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-6 py-3 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            {/* 4. Logo & Business Card Designing */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100 h-full">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
                  alt="Logo & Business Card Designing"
                  className="object-cover h-52 w-full"
                />
              </div>
              <div className='flex flex-col justify-between h-full p-6 flex-1'>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-black">Logo & Business Card Designing</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">Memorable logos and business cards that make a lasting impression.</p>
                </div>
                <a
                  href="https://wa.me/9581823990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-6 py-3 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            </div>
          <div className="text-center">
            <Link to="/services" className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 md:px-20 py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 w-full relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-purple-800/20 to-slate-700/20"></div>
                  <div className="absolute top-20 right-20 w-28 h-28 bg-slate-400/15 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-400/15 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-slate-400/15 rounded-full animate-pulse delay-500"></div>
        <div className="mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8 text-center">What Our Clients Say</h2>
          <p className="text-lg text-white-700 mb-10 text-center max-w-2xl mx-auto">
            Hear from local Andhra Pradesh business owners and professionals who have trusted Sahasra Digitals for their digital journey.
          </p>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {/* Testimonial 1 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100 relative overflow-hidden h-80 w-full flex flex-col">
                {/* Background Digital Marketing Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg className="w-24 h-24 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-lg">Venkatesh Rao</h4>
                    <p className="text-orange-500 text-sm font-medium">Owner, Rao Electronics (Guntur)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-base mb-6 relative z-10 flex-grow">
                  "Sahasra Digitals designed our new logo and managed our social media. Our shop's footfall and online orders have both increased! Very professional and creative team."
                </p>
                <div className="flex text-orange-400 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
            {/* Testimonial 2 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100 relative overflow-hidden h-80 w-full flex flex-col">
                {/* Background Video/Content Marketing Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg className="w-24 h-24 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-lg">Lakshmi Devi</h4>
                    <p className="text-orange-500 text-sm font-medium">Owner, Lakshmi Saree Center (Vijayawada)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-base mb-6 relative z-10 flex-grow">
                  "The video editing and promotional content Sahasra created for us went viral in our city! Our brand is now recognized by so many more people. Highly recommended."
                </p>
                <div className="flex text-orange-400 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
            {/* Testimonial 3 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100 relative overflow-hidden h-80 w-full flex flex-col">
                {/* Background Social Media Marketing Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg className="w-24 h-24 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-lg">Krishna Prasad</h4>
                    <p className="text-orange-500 text-sm font-medium">Owner, Prasad Sweets & Snacks (Nellore)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-base mb-6 relative z-10 flex-grow">
                  "We got our banners, business cards, and social media handled by Sahasra. The designs are top-notch and the team is very responsive. Our business has grown a lot!"
                </p>
                <div className="flex text-orange-400 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
            {/* Testimonial 4 */}
            <SwiperSlide>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-orange-100 relative overflow-hidden h-80 w-full flex flex-col">
                {/* Background Photo/Design Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <svg className="w-24 h-24 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-lg">Padma Rani</h4>
                    <p className="text-orange-500 text-sm font-medium">Owner, Padma Photo Studio (Kurnool)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-base mb-6 relative z-10 flex-grow">
                  "Their photo editing and album designing service is the best in the city. My clients love the albums and I get more referrals now. Thank you, Sahasra Digitals!"
                </p>
                <div className="flex text-orange-400 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

    </div>
  );
};

export default Home;
