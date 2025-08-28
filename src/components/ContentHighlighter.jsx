import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ContentHighlighter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);

  const contentSlides = [
    {
      background: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop',
      title: 'Sahasra Digitals',
      subtitle: 'We Care and Promote Your Business',
      font: 'font-bold',
      color: 'from-blue-500/20 to-purple-600/20'
    },
    {
      background: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
      title: 'Social Media Mastery',
      subtitle: 'Engage, grow, and convert your audience',
      icon: '📱',
      color: 'from-green-500/20 to-blue-600/20'
    },
    {
      background: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop',
      title: 'SEO & Analytics',
      subtitle: 'Optimize for search and track performance',
      icon: '🔍',
      color: 'from-orange-500/20 to-red-600/20'
    },
    {
      background: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop',
      title: 'Digital Marketing Excellence',
      subtitle: 'Data-driven strategies that deliver results',
      icon: '📊',
      color: 'from-blue-500/20 to-purple-600/20'
    },
    {
      background: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
      title: 'Creative Design Solutions',
      subtitle: 'Beautiful designs that tell your story',
      icon: '🎨',
      color: 'from-purple-500/20 to-pink-600/20'
    }
  ];

  return (
    <div className="relative w-full h-[550px] md:h-[580px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={false}
        slidesPerView={1}
        spaceBetween={0}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        onSwiper={setSwiper}
        className="w-full h-full"
      >
        {contentSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image with Blur */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.background})` }}
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
              </div>
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} backdrop-blur-md`}></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <div className="text-6xl md:text-8xl mb-6 animate-bounce">
                  {slide.icon}
                </div>
                <h2 className={`${slide.title === 'Sahasra Digitals' ? 'text-5xl md:text-9xl' : 'text-3xl md:text-5xl'} font-bold text-white mb-4 drop-shadow-lg`}>
                  {slide.title === 'Sahasra Digitals' ? (
                    <>
                      <span className="text-orange-400">S</span>ahasra{' '}
                      <span className="text-orange-400">D</span>igitals
                    </>
                  ) : (
                    slide.title
                  )}
                </h2>
                <p className={`${slide.title === 'Sahasra Digitals' ? 'text-xl md:text-xl font-bold' : 'text-lg md:text-xl'} text-white/90 max-w-2xl drop-shadow-md`}>
                  {slide.subtitle}
                </p>
                
                {/* Floating Elements */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-5 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm animate-pulse delay-500"></div>
                <div className="absolute top-1/3 right-8 w-14 h-14 bg-white/10 rounded-full backdrop-blur-sm animate-pulse delay-1500"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Buttons */}
      <button
        onClick={() => swiper && swiper.slidePrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => swiper && swiper.slideNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Custom Pagination */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {contentSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => {
              if (swiper) swiper.slideTo(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentHighlighter; 