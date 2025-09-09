import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SocialAdvertisementImage() {
  const images = [
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=354&h=418&q=80",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=354&h=418&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=354&h=418&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=354&h=418&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=354&h=418&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=354&h=418&q=80",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "15px", // Maintaining gap from previous request
        padding: 0,
      }}
    >
      <span
        style={{
          marginBottom: "10px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: "16px",
        }}
      >
        Follow @storename on Instagram
      </span>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={1.3} // Default for small screens
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1.3 },
          640: { slidesPerView: 2.3 },
          1366: { slidesPerView: 3 }, // Show all 3 images on larger screens
        }}
        style={{
          width: "100%", // Full width of container
          maxWidth: "1200px", // Limit max width for large screens
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={src}
              alt={`Social Advertisement ${index + 1}`}
              style={{
                width: "354px",
                height: "418px",
                transform: "rotate(0deg)",
                opacity: 1,
                objectFit: "cover",
                display: "block",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SocialAdvertisementImage;
