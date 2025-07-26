import React from 'react';

const companyAddress = '31-1-1425, Sali Pet, Arundelpet, Guntur, Andhra Pradesh 522601';
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyAddress)}`;
const navigationUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyAddress)}`;

const embedUrl = 'https://www.google.com/maps?q=31-1-1425,+Sali+Pet,+Arundelpet,+Guntur,+Andhra+Pradesh+-+522601&output=embed';

const Map = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-slate-100 py-16 px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">Our Location</h2>
    <div className="w-full  mb-8 rounded-xl overflow-hidden shadow-lg border border-orange-200">
      <iframe
        title="Google Map"
        src={embedUrl}
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-semibold transition text-center"
      >
        View on Google Maps
      </a>
      <a
        href={navigationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold transition text-center"
      >
        Get Directions
      </a>
    </div>
  </section>
);

export default Map; 