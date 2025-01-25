"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CardData } from "@/types/types";
import { BannerCard } from "./BannerCard";
import { useEffect, useState } from "react";

interface CustomCarouselProps {
  items: CardData[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ items }) => {
  const [slidesPerView, setSlidesPerView] = useState(1.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1); // На мобильных — 1 слайд
      } else if (window.innerWidth < 768) {
        setSlidesPerView(1.2); // На маленьких планшетах — 1.2 слайда
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(1.3); // На планшетах — 1.3 слайда
      } else {
        setSlidesPerView(1.5); // На десктопах — 1.5 слайда
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full  mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        
        spaceBetween={10} // Отступы между слайдами
        slidesPerView={slidesPerView}
        centeredSlides={true}
        loop={true}
        
        onInit={(swiper) => {
          swiper.slides.forEach((slide, index) => {
            if (index !== swiper.activeIndex) {
              slide.style.transform = "scale(0.8)";
              slide.style.opacity = "0.7";
            }
          });
        }}
        onSlideChange={(swiper) => {
          swiper.slides.forEach((slide, index) => {
            if (index !== swiper.activeIndex) {
              slide.style.transform = "scale(0.8)";
              slide.style.opacity = "0.7";
            } else {
              slide.style.transform = "scale(1)";
              slide.style.opacity = "1";
            }
          });
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="relative transition-transform duration-300 w-full">
            <BannerCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;