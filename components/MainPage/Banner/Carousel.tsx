"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
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
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // На маленьких экранах показываем 1 слайд
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(1.2); // На планшетах — 1.2 слайда
      } else {
        setSlidesPerView(1.5); // На десктопах — 1.5 слайда
      }
    };

    // Устанавливаем начальное значение
    handleResize();

    // Добавляем обработчик изменения размера окна
    window.addEventListener("resize", handleResize);

    // Убираем обработчик при размонтировании
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0} // Увеличиваем отступы между слайдами
        slidesPerView={slidesPerView} // Используем состояние
        centeredSlides={true} // Центрируем текущий слайд
        loop={true} // Зацикливаем карусель
        onInit={(swiper) => {
          swiper.slides.forEach((slide, index) => {
            if (index !== swiper.activeIndex) {
              slide.style.transform = "scale(0.8)"; // Уменьшаем боковые слайды
              slide.style.opacity = "0.7"; // Затемнение боковых слайдов
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
          <SwiperSlide key={item.id} className="relative transition-transform duration-300">
            <BannerCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;