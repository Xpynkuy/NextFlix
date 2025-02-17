"use client";

import { TitleData } from "@/types/types";
import { useEffect, useState } from "react";
import { BannerSkeletonLoader } from "@/components/Skeleton/BannerSkeletonLoader";
import { Swiper, SwiperSlide } from "swiper/react";
import { BannerCard } from "./BannerCard";
import "swiper/css";

interface CustomCarouselProps {
  items: TitleData[];
  isLoading?: boolean;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  items,
  isLoading,
}) => {
  const [slidesPerView, setSlidesPerView] = useState(1.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(1.2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(1.3);
      } else {
        setSlidesPerView(1.5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Если данные загружаются, отображаем скелетоны
  if (isLoading) {
    return (
      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          spaceBetween={10}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          loop={true}
        >
          {Array.from({ length: 1 }).map((_, index) => (
            <SwiperSlide
              key={index}
              className="relative transition-transform duration-300 w-full"
            >
              <BannerSkeletonLoader />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  return (
    <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        spaceBetween={10}
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
          <SwiperSlide
            key={item.id}
            className="relative transition-transform duration-300 w-full"
          >
            <BannerCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomCarousel;
