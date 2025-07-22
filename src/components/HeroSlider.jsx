// components/HeroSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  '/images/banner1.jpeg',
  '/images/banner2.jpeg',
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      className="absolute inset-0 z-0  w-full"
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Banner ${index + 1}`}
            className="w-full object-fill"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
