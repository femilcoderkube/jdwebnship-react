import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CardItem } from "./CardItem";

// Sample card data
const cardItems = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=334.8&h=418&q=80",
    name: "Mountain Retreat",
    // price: "$299.99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=334.8&h=418&q=80",
    name: "Beach Villa",
    // price: "$399.99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=334.8&h=418&q=80",
    name: "City Loft",
    // price: "$199.99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=334.8&h=418&q=80",
    name: "Forest Cabin",
    // price: "$249.99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=334.8&h=418&q=80",
    name: "Mountain Retreat",
    // price: "$299.99",
  },
];

export default function CardSlider() {
  return (
    <div className="pl-6 sm:pl-6 lg:pl-10 xl:pl-[60px]">
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
