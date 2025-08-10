import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import HeroSlider from './HeroSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
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

      {/* 🖼️ Hero Slider Section */}
      <section className="relative h-80 md:h-150  pt-20 md:pt-20 mb-10">
        <HeroSlider />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
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
      <section className="relative px-6 md:px-30 py-16 flex flex-col md:flex-row justify-between items-center bg-white text-black">
        {/* Main Content */}
        <div className="relative z-10 w-full md:w-1/2 animate-fade-in">
          <h2 className="text-4xl md:text-7xl font-serif font-bold"><span className="text-orange-500">S</span>ahasra <span className="text-orange-500">D</span>igitals</h2>
          <p className="mt-6 max-w-xl font-bold md:text-2xl text-gray-700">WE CARE AND PROMOTE YOUR BUSINESS!</p>
          <button className="mt-8 px-8 py-3 bg-orange-500 text-black font-bold hover:bg-orange-600 rounded-[0.5vw] transition">
            JOIN US
          </button>
        </div>
        {/* Contact Form */}
        <section className="relative z-10 mt-12 md:mt-0 w-full md:w-1/2 bg-slate-100 p-8 rounded-xl shadow-lg max-w-md text-black animate-fade-in border border-orange-100">
          <h2 className="text-2xl font-bold text-orange-400 mb-6">Send Us Your Query</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="w-full p-3 rounded bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
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
              className="w-full p-3 rounded bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded bg-white text-black placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
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
      <section className="w-full py-16 bg-gradient-to-br from-white via-orange-50 to-slate-100">
        <div className="w-full mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-800 mb-10 text-center tracking-tight">Our Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-8 border-orange-400  hover:shadow-2xl transition-transform duration-300">
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
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-8 border-blue-500  hover:shadow-2xl transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 text-blue-600 tracking-wide">Business Plan</h3>
              <p className="font-heading font-semibold text-xl md:text-2xl text-blue-600 mb-6">₹12,000<span className="text-base font-normal text-gray-500">/30 days</span></p>
              <ul className="text-gray-600 mb-2 space-y-3 text-left font-sans text-base md:text-lg w-full pl-2">
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-400">✔</span>All Basic Plan Services</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-400">✔</span>Sponsored Ads in Facebook & Instagram</li>
                <li className="flex items-start gap-2"><span className="mt-1 text-blue-400">✔</span>Weekly once Response Strategy with Google Meet</li>
              </ul>
            </div>
            {/* Professional Plan (Most Popular) */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center border-t-8 border-purple-600  hover:shadow-2xl transition-transform duration-300">
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
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-8 border-emerald-500 hover:shadow-2xl transition-transform duration-300">
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
      <section className="bg-orange-50 w-full py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-10">
          {/* Illustration/Icon */}
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-1/3 mb-8 md:mb-0">
            <img src="/images/about.png" alt="About Sahasra Digitals" className="w-60 h-60 border-2 border-orange-500 rounded-full object-cover mx-auto" />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">About Us</h2>
            <p className="text-lg leading-relaxed mb-4 font-semibold text-black">Welcome to Sahasra Digitals</p>
            <p className="text-lg leading-relaxed mb-6 text-black">
              Sahasra Digitals is a full-service digital marketing agency dedicated to helping businesses grow in the digital landscape. Established in 2024, we provide affordable, effective, and transparent online marketing solutions for small and medium businesses, startups, and enterprises.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-black">
              <span className="text-orange-500 font-bold text-xl">Mrs. Surekha Ramarao Pothakamuri</span>, our founder and CEO, is a seasoned digital strategist with over 5 years of experience in marketing, branding, and technology.
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
      <section className="bg-slate-100 w-full py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 md:px-10">
          {/* Icon List */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-6 text-center md:text-left">Why Choose Us?</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-orange-500 mt-1"><svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                <span className='text-black'><span className="font-semibold text-black">Expert Team, Proven Success:</span> Our team is made up of experienced professionals with deep knowledge in digital marketing and design. With a strong portfolio and a track record of delivering success, we know what it takes to make your brand shine.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-orange-500 mt-1"><svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg></span>
                <span className='text-black'><span className="font-semibold text-black">Cutting-Edge Creativity:</span> We stay ahead of the curve by using the latest tools, technologies, and industry trends. Our innovative approach ensures your brand gets a modern, competitive edge in a fast-paced digital world.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-orange-500 mt-1"><svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg></span>
                <span className='text-black'><span className="font-semibold text-black">Customer-First Approach:</span> At Sahasra Digitals, you’re not just a client — you're a partner. We listen, understand, and work closely with you to turn your vision into impactful results.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-orange-500 mt-1"><svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 17v.01" /></svg></span>
                <span className='text-black'><span className="font-semibold text-black">Focused on Real Results:</span> We don’t just create – we deliver. Our work is driven by results, aimed at growing your business, building your brand, and boosting your bottom line.</span>
              </li>
            </ul>
          </div>
          {/* Illustration/Icon */}
          <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-1/2">
            <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Why Choose Us" className="w-40 h-40 object-contain mx-auto" />
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="bg-orange-50 w-full py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-10 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col justify-center items-center md:items-center text-center md:text-center">
              <span className="mb-3 text-blue-500">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </span>
              <h3 className="text-xl font-bold mb-2 text-black">Search Engine Optimization</h3>
              <p className="text-gray-700">Boost your visibility and ranking on search engines.</p>
            </div>
            <div className="flex flex-col justify-center items-center md:items-center text-center md:text-center">
              <span className="mb-3 text-green-500">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4m0 0l-2-2m2 2l2-2" /></svg>
              </span>
              <h3 className="text-xl font-bold mb-2 text-black">Social Media Marketing</h3>
              <p className="text-gray-700">Engage your audience and grow your brand online.</p>
            </div>
            <div className="flex flex-col justify-center items-center md:items-center text-center md:text-center">
              <span className="mb-3 text-violet-500">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5V3a1 1 0 00-1-1H9a1 1 0 00-1 1v9m10 4h.01" /></svg>
              </span>
              <h3 className="text-xl font-bold mb-2 text-black">Content Marketing</h3>
              <p className="text-gray-700">Create and share valuable content to attract customers.</p>
            </div>
            <div className="flex flex-col justify-center items-center md:items-center text-center md:text-center">
              <span className="mb-3 text-pink-500">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
              </span>
              <h3 className="text-xl font-bold mb-2 text-black">Pay-Per-Click</h3>
              <p className="text-gray-700">Drive targeted traffic with effective PPC campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (short list) */}
      <section className="bg-slate-100 w-full py-16">
        <div className="w-full mx-auto px-4 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-10 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* 1. Social Media Marketing & Handling */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-300 transition-shadow duration-300 flex flex-col items-center text-center group border border-orange-100 h-full">
              <div className="w-full mb-4 shadow-lg transition">
                <img
                  src="/images/service3.jpeg"
                  alt="Social Media Marketing & Handling"
                  className="object-fill h-52 w-full"
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
                  src="/images/service4.jpeg"
                  alt="SEO Consultancy"
                  className="object-fill h-52 w-full"
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
                  src="/images/service6.jpeg"
                  alt="Video Editing & Promotional Videos"
                  className="object-fill h-52 w-full"
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
                  src="/images/service10.jpeg"
                  alt="Logo & Business Card Designing"
                  className="object-fill h-52 w-full"
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
      <section className="px-4 md:px-20 py-16 bg-orange-50 w-full">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8 text-center">What Our Clients Say</h2>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Hear from Indian business owners and professionals who have trusted Sahasra Digitals for their digital journey.
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
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col max-h-[120px] md:min-h-[180px]">
                <div className="flex items-center mb-4">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rahul Verma" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="text-black font-semibold">Rahul Verma</h4>
                    <p className="text-orange-400 text-sm">Owner, Verma Electronics (Delhi)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed flex-1 line-clamp-4">
                  "Sahasra Digitals designed our new logo and managed our social media. Our shop's footfall and online orders have both increased! Very professional and creative team."
                </p>
                <div className="flex text-orange-400 mt-4">
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
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col max-h-[120px] md:min-h-[180px]">
                <div className="flex items-center mb-4">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Priya Nair" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="text-black font-semibold">Priya Nair</h4>
                    <p className="text-orange-400 text-sm">Founder, Nair Boutique (Kochi)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed flex-1 line-clamp-4">
                  "The video editing and promotional content Sahasra created for us went viral in our city! Our brand is now recognized by so many more people. Highly recommended."
                </p>
                <div className="flex text-orange-400 mt-4">
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
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col max-h-[120px] md:min-h-[180px]">
                <div className="flex items-center mb-4">
                  <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Amit Singh" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="text-black font-semibold">Amit Singh</h4>
                    <p className="text-orange-400 text-sm">Director, Singh Foods (Lucknow)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed flex-1 line-clamp-4">
                  "We got our banners, business cards, and social media handled by Sahasra. The designs are top-notch and the team is very responsive. Our business has grown a lot!"
                </p>
                <div className="flex text-orange-400 mt-4">
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
              <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col max-h-[120px] md:min-h-[180px]">
                <div className="flex items-center mb-4">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Sneha Reddy" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="text-black font-semibold">Sneha Reddy</h4>
                    <p className="text-orange-400 text-sm">Owner, Reddy Studio (Hyderabad)</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed flex-1 line-clamp-4">
                  "Their photo editing and album designing service is the best in the city. My clients love the albums and I get more referrals now. Thank you, Sahasra Digitals!"
                </p>
                <div className="flex text-orange-400 mt-4">
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
