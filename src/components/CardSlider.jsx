import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CardItem } from "./CardItem";

import ct01 from "../assets/images/ct-01.jpg";
import ct02 from "../assets/images/ct-02.jpg";
import ct03 from "../assets/images/ct-03.jpg";
import ct04 from "../assets/images/ct-04.jpg";
import ct05 from "../assets/images/ct-02.jpg";
import ct06 from "../assets/images/ct-03.jpg";

// Sample card data
const cardItems = [
  {
    image: ct01,
    name: "Mountain Retreat",
    // price: "$299.99",
  },
  {
    image: ct02,
    name: "Beach Villa",
    // price: "$399.99",
  },
  {
    image: ct03,
    name: "City Loft",
    // price: "$199.99",
  },
  {
    image: ct04,
    name: "Forest Cabin",
    // price: "$249.99",
  },
  {
    image: ct05,
    name: "Mountain Retreat",
    // price: "$299.99",
  },
  {
    image: ct06,
    name: "City Loft",
    // price: "$299.99",
  },
];

// const extendedItems = [...cardItems, ...cardItems, ...cardItems];

export default function CardSlider() {
  const { theme } = useTheme();
  const isSwiper = (theme?.categoryLayout || "swiper") === "swiper";

  return (
    <div className="px-6 sm:px-6 lg:px-10 xl:px-[4.6875rem]">
      {isSwiper ? (
        <div className="newsSlider-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className="newsSlider"
            spaceBetween={30}
            slidesPerView={1.1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            // pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            
          >
            {cardItems.map((item, idx) => (
              <SwiperSlide key={idx} className="flex justify-center">
                <CardItem item={item} />
              </SwiperSlide>
            ))}

            {/* Navigation buttons */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </div>
      ) : (
        <section className="py-[3.125rem] lg:py-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 gap-4">
            {cardItems.map((item, idx) => (
              <CardItem key={idx} item={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
