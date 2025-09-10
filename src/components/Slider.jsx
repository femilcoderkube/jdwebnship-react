import React, { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
];

export default function Slider() {
  const { theme, buttonTextColor } = useTheme();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const length = images.length;
  const autoSlideInterval = 1000; // 3 seconds

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);
  const goToSlide = (idx) => setCurrent(idx);

  // Auto-slide effect
  //   useEffect(() => {
  //     if (!isPaused) {
  //       const interval = setInterval(() => {
  //         nextSlide();
  //       }, autoSlideInterval);
  //       return () => clearInterval(interval); // Cleanup on unmount or pause
  //     }
  //   }, [isPaused, current]); // Re-run if isPaused or current changes

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on leave
    >
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden h-[85vh]">
        {images.map((img, idx) => (
          <div
            key={img}
            className={`${
              idx === current ? "block" : "hidden"
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
            />
            <div className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-1">
              <p className="uppercase text-white mb-[8px]">Wardrobe Refresh</p>
              <h1 className="text-[32px] lg:text-[52px] xl:text-[62px] uppercase text-white mb-[8px]">
                New styles are here
              </h1>
              <p className="text-white text-2xl lg:text-[22px] mb-[15px]">
                Shine with our latest must-haves
              </p>

              <Link
                to={"/shop"}
                className="inline-flex gap-2 btn px-[24px] py-[15px] rounded-lg text-sm font-medium focus:outline-none items-center"
              >
                View Collection
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke={buttonTextColor}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      {/* <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-300"
            }`}
            aria-current={idx === current}
            aria-label={`Slide ${idx + 1}`}
            data-carousel-slide-to={idx}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div> */}
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
