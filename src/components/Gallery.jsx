import React from 'react';

const Gallery = () => {
  return (
    <section className="bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 w-full px-0 min-h-screen">
      <div className="w-full mx-auto px-4 md:px-20 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 text-center">Gallery</h2>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
          Explore our real work and achievements! Here is a sample from our recent projects and certifications.
        </p>
        
        {/* Special Event: Grand Opening Invitation */}
        {/* <div className="mb-12 flex flex-col items-center">
          <h3 className="text-2xl font-heading font-bold text-purple-700 mb-4">Special Event: Grand Opening</h3>
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-white max-w-md w-full flex flex-col items-center p-4 border-2 border-purple-300">
            <img
              src="/images/grand-opening.jpeg"
              alt="Grand Opening Invitation for Sahasra Digitals - November 3, 2024"
              className="w-full h-auto object-contain rounded-lg mb-2"
              loading="lazy"
            />
            <span className="block text-sm text-gray-700 text-center">Grand Opening Invitation - Sahasra Digitals, Nov 3, 2024</span>
          </div>
        </div> */}

         {/* Achievement Section - Certifications */}
         <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-purple-600 mb-8 text-center">Achievements & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src="/images/gallery9.jpeg"
                  alt="Professional Certification"
                  className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="text-lg font-semibold">Professional Certification</h4>
                    <p className="text-sm opacity-90">Digital Marketing Excellence</p>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-pink-700 mb-2">Digital Marketing Certification</h4>
              <p className="text-gray-600 text-sm">Recognized expertise in modern digital marketing strategies and techniques.</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src="/images/gallery7.jpeg"
                  alt="Advanced Certification"
                  className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="text-lg font-semibold">Advanced Certification</h4>
                    <p className="text-sm opacity-90">Social Media Mastery</p>
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-purple-700 mb-2">Social Media Mastery</h4>
              <p className="text-gray-600 text-sm">Advanced certification in social media marketing and platform optimization.</p>
            </div>
          </div>
        </div>

        {/* Client Recognition Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-blue-600 mb-8 text-center">Client Recognition & Projects</h3>
          <div className="flex flex-col items-center md:flex-row w-full justify-center flex-wrap gap-6">
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group bg-white max-w-xs w-full transform hover:scale-105">
              <img
                src="/images/gallery.jpeg"
                alt="Client Project Sample"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div> 
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group bg-white max-w-xs w-full transform hover:scale-105">
              <img
                src="/images/gallery2.jpeg"
                alt="Client Project Sample"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group bg-white max-w-xs w-full transform hover:scale-105">
              <img
                src="/images/gallery3.jpeg"
                alt="Client Project Sample"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group bg-white max-w-xs w-full transform hover:scale-105">
              <img
                src="/images/gallery4.jpeg"
                alt="Client Project Sample"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group bg-white max-w-xs w-full transform hover:scale-105">
              <img
                src="/images/gallery5.jpeg"
                alt="Client Project Sample"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group bg-white max-w-xs w-full transform hover:scale-105">
              <img
                src="/images/gallery6.jpeg"
                alt="Client Project Sample"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Gallery; 