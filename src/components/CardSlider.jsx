import React, { useState, useEffect } from "react";

// Sample card data
const cardItems = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=334.8&h=418&q=80",
    name: "Mountain Retreat",
    price: "$299.99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=334.8&h=418&q=80",
    name: "Beach Villa",
    price: "$399.99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=334.8&h=418&q=80",
    name: "City Loft",
    price: "$199.99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=334.8&h=418&q=80",
    name: "Forest Cabin",
    price: "$249.99",
  },
];

// CardItem component
function CardItem({ item }) {
  return (
    <div className="w-[334.8px] h-[491px] bg-white rounded-lg shadow-lg flex flex-col flex-shrink-0">
      <img
        src={item.image}
        alt={item.name}
        className="w-[334.8px] h-[418px] object-cover rounded-t-lg"
      />
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-md text-gray-600">{item.price}</p>
      </div>
    </div>
  );
}

// CardSlider component
export default function CardSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const cardsPerSlide = 3; // Number of cards to show per slide
  const length = cardItems.length;
  const maxSlides = Math.ceil(length / cardsPerSlide); // Total number of slides
  const autoSlideInterval = 3000; // 3 seconds

  // Duplicate cards for continuous scrolling
  const extendedCardItems = [
    ...cardItems.slice(-cardsPerSlide), // Cards from the end to prepend
    ...cardItems,
    ...cardItems.slice(0, cardsPerSlide), // Cards from the start to append
  ];

  const nextSlide = () => {
    setCurrent((prev) => {
      const next = prev + 1;
      if (next >= length) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrent(0);
        }, 700); // Match transition duration
        return next;
      }
      return next;
    });
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrent((prev) => {
      const next = prev - 1;
      if (next < 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrent(length - 1);
        }, 700); // Match transition duration
        return next;
      }
      return next;
    });
    setIsTransitioning(true);
  };

  const goToSlide = (idx) => {
    setIsTransitioning(true);
    setCurrent(idx * cardsPerSlide);
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);
      return () => clearInterval(interval); // Cleanup on unmount or pause
    }
  }, [isPaused]);

  // Reset transition after jump
  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50); // Small delay to ensure DOM update
    }
  }, [isTransitioning]);

  return (
    <div
      id="card-carousel"
      className="relative w-full mx-auto lg:px-10 xl:px-[60px]"
      data-carousel="slide"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on leave
    >
      {/* Carousel wrapper */}
      <div className="relative h-[491px] overflow-hidden rounded-lg">
        <div
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${
              ((current + cardsPerSlide) % (length + cardsPerSlide)) *
              (100 / cardsPerSlide)
            }%)`,
          }}
        >
          {extendedCardItems.map((item, idx) => (
            <div key={idx} className="w-[33.33%] flex justify-center">
              <CardItem item={item} />
            </div>
          ))}
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {Array.from({ length: maxSlides }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`w-3 h-3 rounded-full ${
              Math.floor(current / cardsPerSlide) === idx
                ? "bg-white"
                : "bg-gray-300"
            }`}
            aria-current={Math.floor(current / cardsPerSlide) === idx}
            aria-label={`Slide ${idx + 1}`}
            data-carousel-slide-to={idx}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
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
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
