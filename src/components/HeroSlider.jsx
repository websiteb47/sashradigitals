// components/HeroSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1600&auto=format&fit=crop', // modern digital workspace with multiple screens
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop', // data analytics and marketing dashboard
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop', // social media marketing and mobile strategy
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop', // SEO analytics and performance tracking
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop', // creative design and branding workspace
  'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1600&auto=format&fit=crop', // digital marketing strategy and planning
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="absolute inset-0 z-0 h-80 md:h-150 w-full"
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Hero slide ${index + 1}`}
            className="w-full h-80 md:h-150 object-cover"
            loading="lazy"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
