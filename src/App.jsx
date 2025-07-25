import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
// import Leads from './components/Leads'
import Map from './components/Map';
import { Menu, X } from 'lucide-react'
import { useLocation } from 'react-router-dom'


function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const location = useLocation()
  const isHome = location.pathname === '/'


  return (
    <div className="bg-gradient-to-b from-slate-900 to-black min-h-screen text-white">
      {/* Fixed Header */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 md:px-20 py-4 bg-gradient-to-r from-teal-700 to-cyan-700 shadow-lg">
        {/* Logo */}
        <div className="flex flex-row items-center space-x-4 flex-shrink-0">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="https://res.cloudinary.com/djvcd6qvd/image/upload/v1749971278/DP_v9uief.png"
              alt="tree"
              className="w-12 h-12 rounded-lg hover:scale-105 transition-transform duration-200"
            />
            <h1 className="text-orange-500 text-3xl font-bold">Sahasra Digitals</h1>
          </Link>
        </div>
        {/* Desktop Menu - Centered */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-12">
            <Link to="/" className="text-xl hover:text-orange-400 font-bold text-white">Home</Link>
            <Link to="/about" className="text-xl hover:text-orange-400 font-bold text-white">About Us</Link>
            <Link to="/services" className="text-xl hover:text-orange-400 font-bold text-white">Services</Link>
            <Link to="/gallery" className="text-xl hover:text-orange-400 font-bold text-white">Gallery</Link>
            <Link to="/contact Us" className="text-xl hover:text-orange-400 font-bold text-white">Contact Us</Link>
            <Link to="/map" className="text-xl hover:text-orange-400 font-bold text-white">Map</Link>
          </div>
        </div>
        {/* Mobile Toggle Button */}
        <div className="md:hidden flex-shrink-0">
          <button onClick={toggleMenu} className="text-white hover:text-orange-500 transition">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-r from-teal-800 to-cyan-800 flex flex-col items-start p-4 space-y-4 md:hidden z-50">
            <Link to="/" onClick={toggleMenu} className="hover:text-orange-400 text-white">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-orange-400 text-white">About</Link>
            <Link to="/services" onClick={toggleMenu} className="hover:text-orange-400 text-white">Services</Link>
            <Link to="/gallery" onClick={toggleMenu} className="hover:text-orange-400 text-white">Gallery</Link>
            <Link to="/contact Us" onClick={toggleMenu} className="hover:text-orange-400 text-white">Contact Us</Link>
            <Link to="/map" onClick={toggleMenu} className="hover:text-orange-400 text-white">Map</Link>
          </div>
        )}
      </nav>

      {/* Main Content Wrapper with padding and top spacing */}
      <div className={`${isHome ? '' : 'pt-20'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact Us" element={<Contact />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9581823990"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 rounded-full shadow-lg w-16 h-16 flex items-center justify-center transition-all duration-200"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-9 h-9 text-white"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.828-2.05C13.416 27.68 14.686 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.13 0-2.238-.188-3.287-.557l-.235-.08-4.65 1.217 1.24-4.527-.153-.236C7.188 18.238 7 17.13 7 16c0-5.065 4.135-9.2 9.2-9.2S25.4 10.935 25.4 16 21.265 25.2 16.2 25.2zm5.29-7.29c-.27-.135-1.6-.793-1.847-.883-.247-.09-.427-.135-.607.135-.18.27-.697.883-.855 1.063-.157.18-.315.202-.585.067-.27-.135-1.14-.42-2.17-1.34-.803-.715-1.345-1.597-1.504-1.867-.157-.27-.017-.416.12-.55.124-.123.28-.32.42-.48.14-.16.187-.27.28-.45.09-.18.045-.337-.022-.472-.067-.135-.607-1.47-.832-2.01-.22-.53-.445-.457-.607-.465-.157-.007-.337-.01-.517-.01-.18 0-.47.067-.717.337-.247.27-.94.92-.94 2.24 0 1.32.96 2.59 1.093 2.77.135.18 1.89 2.89 4.59 3.94.642.22 1.14.35 1.53.45.642.16 1.23.137 1.695.083.517-.06 1.6-.655 1.825-1.288.225-.633.225-1.177.157-1.288-.067-.11-.247-.18-.517-.315z" />
        </svg>
      </a>

      {/* Global Footer */}
      <footer className="bg-gradient-to-b from-black to-slate-900 text-white py-16">
        <div className="px-6 md:px-30">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://res.cloudinary.com/djvcd6qvd/image/upload/v1749971278/DP_v9uief.png"
                  alt="Sahasra Digitals"
                  className="w-12 h-12 rounded-lg"
                />
                <h3 className="text-orange-500 text-2xl font-bold">Sahasra Digitals</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Your trusted partner in building a strong online presence. We specialize in result-driven digital marketing solutions designed to grow your brand, attract the right audience, and drive conversions.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61563348611003" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-600 transition">
                  <svg className="w-5 h-5 text-white" fill="blue" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                  </svg>
                </a>
                {/* <a href="https://www.instagram.com/sahasra_digitals/?next=%2F" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="https://www.google.com/search?q=SAHASRA+DIGITALS+GUNTUR&oq=sahas&gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MggIABBFGCcYOzIICAEQRRgnGDsyBggCEEUYQDIGCAMQRRg5MgoIBBAAGLEDGIAEMgoIBRAuGLEDGIAEMgcIBhAuGIAEMgcIBxAuGIAE0gEJMzExOGowajE1qAIIsAIB8QWBvA1pz09V7Q&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a> */}

                <a href="https://www.instagram.com/sahasra_digitals/?next=%2F" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-orange-600 transition">
                  <svg className="w-5 h-5 text-white" fill="red" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1-5.25 5.25a5.25 5.25 0 0 1 5.25-5.25zm0 1.5a3.75 3.75 0 1 0 3.75 3.75a3.75 3.75 0 0 0-3.75-3.75zm5.25 1.25a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/surekha-pothakamuri-41b7a3373/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                  <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-orange-400 font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-orange-400 transition">Home</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-orange-400 transition">About Us</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-orange-400 transition">Services</a></li>
                <li><a href="/contact Us" className="text-gray-300 hover:text-orange-400 transition">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-orange-400 font-semibold text-lg mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      6-17-43, 17/3, Arundelpet,<br />
                      Guntur, Andhra Pradesh - 522002.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:sahasradigitals919@gmail.com" className="text-gray-300 hover:text-orange-400 transition text-sm">
                    sahasradigitals919@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+917893940717" className="text-gray-300 hover:text-orange-400 transition text-sm">
                    +91 78939 40717
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sahasra Digitals. All rights reserved. | Designed with ❤️ for your business growth
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
