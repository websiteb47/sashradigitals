// components/About.jsx

import React from 'react';

const About = () => (
  <section className="bg-orange-50 w-full py-16 min-h-screen">
    <div className="max-w-2xl mx-auto flex flex-col items-center px-4 md:px-0">
      {/* Illustration at top */}
      <img src="/images/about.png" alt="About Sahasra Digitals" className="w-60 h-60 border-2 border-orange-500 rounded-full object-cover mx-auto" />
      <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8 text-center">About Us</h2>

      {/* Our Services Include */}
      <div className="bg-white rounded-xl shadow p-6 mb-8 w-full">
        <h3 className="text-2xl font-bold text-orange-400 mb-3 text-center">Our Services Include</h3>
        <ul className="list-disc ml-6 text-lg text-black">
          <li>Brochure, Poster & Banner Design</li>
          <li>Video Editing & Promotional Videos</li>
          <li>Logo & Business Card Designing</li>
          <li>Social Media Handling & Marketing</li>
          <li>Photo Editing & Album Designing</li>
          <li>Digital Printing Solutions</li>
        </ul>
      </div>

      {/* Our Mission */}
      <div className="bg-white rounded-xl shadow p-6 mb-8 w-full">
        <h3 className="text-2xl font-bold text-orange-400 mb-3 text-center">Our Mission</h3>
        <p className="text-lg text-black text-center">To provide creative and quality-driven digital services to every customer with passion and perfection. With a focus on innovation and visual excellence, Sahasra Digitals is your trusted partner in your digital journey. <span className="font-semibold">Let your brand speak with design – Only at Sahasra Digitals!</span></p>
      </div>

      {/* Who We Are */}
      <div className="bg-white rounded-xl shadow p-6 mb-8 w-full">
        <h3 className="text-2xl font-bold text-orange-400 mb-3 text-center">Who We Are?</h3>
        <p className="text-lg text-black text-center">At Sahasra Digitals, we are passionate creators, designers, and storytellers dedicated to bringing your ideas to life through digital innovation. With a blend of creativity and technology, we specialize in delivering customized design and branding solutions that leave a lasting impact. We believe that every brand has a unique voice, and we help you express it through powerful visuals and smart digital solutions.</p>
      </div>

      {/* How we are best among others? */}
      <div className="bg-white rounded-xl shadow p-6 mb-8 w-full">
        <h3 className="text-2xl font-bold text-orange-400 mb-3 text-center">How we are best among others?</h3>
        <ul className="list-disc ml-6 text-lg text-black">
          <li><span className="font-semibold text-black">Expert Team, Proven Success:</span> Our team is made up of experienced professionals with deep knowledge in digital marketing and design. With a strong portfolio and a track record of delivering success, we know what it takes to make your brand shine.</li>
          <li><span className="font-semibold text-black">Cutting-Edge Creativity:</span> We stay ahead of the curve by using the latest tools, technologies, and industry trends. Our innovative approach ensures your brand gets a modern, competitive edge in a fast-paced digital world.</li>
          <li><span className="font-semibold text-black">Customer-First Approach:</span> At Sahasra Digitals, you’re not just a client — you're a partner. We listen, understand, and work closely with you to turn your vision into impactful results.</li>
          <li><span className="font-semibold text-black">Focused on Real Results:</span> We don’t just create – we deliver. Our work is driven by results, aimed at growing your business, building your brand, and boosting your bottom line.</li>
        </ul>
      </div>

      {/* Our Expertise */}
      <div className="bg-white rounded-xl shadow p-6 w-full">
        <h3 className="text-2xl font-bold text-orange-400 mb-3 text-center">Our Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center md:items-center">
            <span className="mb-2 text-blue-500">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
            <span className="font-bold text-black text-center">Search Engine Optimization</span>
          </div>
          <div className="flex flex-col items-center md:items-center">
            <span className="mb-2 text-green-500">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2h2" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12v4m0 0l-2-2m2 2l2-2" /></svg>
            </span>
            <span className="font-bold text-black text-center">Social Media Marketing</span>
          </div>
          <div className="flex flex-col items-center md:items-center">
            <span className="mb-2 text-violet-500">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5V3a1 1 0 00-1-1H9a1 1 0 00-1 1v9m10 4h.01" /></svg>
            </span>
            <span className="font-bold text-black text-center">Content Marketing</span>
          </div>
          <div className="flex flex-col items-center md:items-center">
            <span className="mb-2 text-pink-500">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
            </span>
            <span className="font-bold text-black text-center">Pay-Per-Click</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
