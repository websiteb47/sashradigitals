import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const API_URL = 'https://sahasra-backend.onrender.com' || 'http://localhost:5000';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });

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
      toast.loading('Sending message...');
      await axios.post(`${API_URL}/api/contact`, formData);
      toast.dismiss();
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 w-full min-h-screen px-0 py-16">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-5xl mx-auto px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 font-heading">Contact Us</h2>
        <p className="text-lg font-bold text-gray-700 mb-8" style={{fontWeight: '700'}}>
          We'd love to hear from you! Whether you have questions about our services, need a custom quote, or just want to say hello — feel free to reach out.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-4 border border-orange-100">
            <div>
              <label className="block mb-1 text-black font-semibold">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded bg-slate-100 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-black font-semibold">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 rounded bg-slate-100 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
                pattern="\d{10}"
                maxLength={10}
              />
            </div>
            <div>
              <label className="block mb-1 text-black font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded bg-slate-100 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-black font-semibold">What does your company do?</label>
              <input
                type="text"
                name="company"
                placeholder="Briefly describe your company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 rounded bg-slate-100 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block mb-1 text-black font-semibold">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded bg-slate-100 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-semibold transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-black">
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-1 font-heading">Email</h3>
              <a href="mailto:sahasradigitals919@gmail.com" className="text-gray-700 font-bold hover:text-orange-500 transition" style={{fontWeight: '700'}}>sahasradigitals919@gmail.com</a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-1 font-heading">Phone</h3>
              <a href="tel:+917893940717" className="text-gray-700 font-bold hover:text-orange-500 transition" style={{fontWeight: '700'}}>+91 78939 40717</a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-1 font-heading">Address</h3>
              <p className="text-gray-700 font-bold" style={{fontWeight: '700'}}>
                6-17-43, 17/3, Arundelpet,<br />
                Guntur, Andhra Pradesh - 522002.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-400 mb-1 font-heading">Business Hours</h3>
              <p className="text-gray-700 font-bold" style={{fontWeight: '700'}}>Monday - Saturday: 9 AM to 6 PM</p>
              <p className="text-gray-700 font-bold" style={{fontWeight: '700'}}>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
