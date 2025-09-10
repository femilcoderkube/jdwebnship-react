import React from "react";
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
import ct05 from "../assets/images/ct-01.jpg";

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
];

export default function CardSlider() {
  return (
    <div className="px-6 sm:px-6 lg:px-10 xl:px-[3.75rem]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        // slidesPerView={4.3}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1.3 },
          640: { slidesPerView: 2.3 },
          1366: { slidesPerView: 4.3 },
        }}
      >
        {cardItems.map((item, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
            <CardItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
