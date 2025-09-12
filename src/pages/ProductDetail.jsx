import React, { useState } from "react";
import CommonHeader from "../components/CommonHeader";
import ProductSliderSection from "../components/ProductSliderSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules"; // Import Mousewheel and Navigation modules
import "swiper/css"; // Core Swiper styles
import "swiper/css/mousewheel"; // Mousewheel styles
import "swiper/css/navigation"; // Navigation styles
import whatsapp from "../assets/whatsapp-og.svg";

function ProductDetail() {
  // Dummy product data with unique image URLs
  const product = {
    name: "Women's Classic Watch",
    price: 199.99,
    oldPrice: 299.99,
    description:
      " Trait is a particular characteristic, quality or tendency that a person or an object has. It is something that makes you be you. This demo store does not offer goods for purchase. All products and images kindly provided by Trait Store.",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://picsum.photos/600/400?random=1",
      "https://picsum.photos/600/400?random=2",
      "https://picsum.photos/600/400?random=3",
      "https://picsum.photos/600/400?random=4",
      "https://picsum.photos/600/400?random=5",
      "https://picsum.photos/600/400?random=6",
      "https://picsum.photos/600/400?random=7",
      "https://picsum.photos/600/400?random=8",
    ],
  };

  const discount =
    product.oldPrice && product.price
      ? (((product.oldPrice - product.price) / product.oldPrice) * 100).toFixed(0)
      : 0;

  // State for selected image
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  // State for quantity
  const [quantity, setQuantity] = useState(1);

  // Handle quantity increment and decrement
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="mr-auto ml-auto">
      <CommonHeader />
      <div className="pt-25">
        <div className="flex flex-col lg:flex-row gap-15 justify-center">
          {/* Left Column: Vertical Swiper */}

          {/* Center Column: Main Product Image */}
          <div className="w-full max-w-[63.75rem] gap-6 flex justify-center">
            <div className="w-full lg:w-1/10 flex justify-center">
              <div className="relative flex flex-col items-center w-full">
                {/* Previous Arrow (Above Swiper) */}
                <div className="swiper-button-prev mb-2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-900 transition shadow-md">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </div>
                <Swiper
                  direction="vertical"
                  slidesPerView={4}
                  spaceBetween={8}
                  mousewheel={true} // Enable mousewheel scrolling
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  }} // Enable navigation arrows
                  modules={[Mousewheel, Navigation]} // Register Mousewheel and Navigation modules
                  className="h-[400px] w-full"
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={`w-full h-full object-cover rounded-md cursor-pointer border-2 ${
                          selectedImage === image
                            ? "border-blue-500"
                            : "border-transparent"
                        }`}
                        onClick={() => setSelectedImage(image)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Next Arrow (Below Swiper) */}
                <div className="swiper-button-next mt-2 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-900 transition shadow-md">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1 relative before:content-[''] before:block before:float-left before:pt-[100%] after:content-[''] after:table after:clear-both bg-[#f2f2f2] rounded-2xl">
              <img
                src={selectedImage}
                alt="Main Product"
                className="w-full h-full object-contain rounded-lg absolute top-0 left-0"
              />
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="w-full max-w-[40.625rem] text-left">
            <h3 className="text-[2rem] font-bold mb-3.5">{product.name}</h3>
            <div className="text-xl mb-3.5 price-wrapper inline-flex items-center border border-gray-300 rounded-lg p-4 w-auto flex-auto">
              <span className="mr-3 text-[1.5rem] font-bold">${product.price.toFixed(2)}</span>
              <span className="mr-1 text-[1rem] text-[#808080]">MRP</span>
              <span className="mr-3 line-through text-[1rem] text-[#808080]">${product.oldPrice.toFixed(2)}</span>
              <span className="mr-1 text-[0.875rem] discount bg-[#111111] px-[0.375rem] text-[#FFFFFF] rounded-sm">{discount}%</span>
              <span class="mr-1 text-[0.75rem] text-[#808080]">(Incl. of all taxes)</span>
            </div>
            <div className="item-stock-status mb-6">
              <p class="text-2xl flex items-center"><span class="indicator rounded-lg inline-block h-[0.625rem] w-[0.625rem] bg-[#25D366] mr-2"></span>Item in stock (12)</p>
            </div>
            {/* Available Sizes */}
            <div className="mb-6">
              <h4 className="text-sm font-bold mb-2 uppercase">Size</h4>
              <div className="flex gap-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-[#111111] hover:text-[#FFFFFF]"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-3.5">
              {/* Quantity Selector */}
              <div className="quantity-wrapper">
                {/* <h4 className="text-sm font-bold mb-2 uppercase">Quantity</h4> */}
                <div className="inline-flex items-center border border-gray-300 rounded-md py-2 h-full">
                  <button
                    onClick={handleDecrement}
                    className="w-10 h-full text-gray-800 rounded-md flex items-center justify-center cursor-pointer transition"
                    disabled={quantity === 1}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </button>
                  <span className="w-12 text-center text-lg font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="w-10 h-full text-gray-800 rounded-md flex items-center justify-center cursor-pointer transition"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <button className="flex-1 btn sm:px-[1.5rem] px-[0.9rem] py-[0.9375rem] rounded-lg text-sm font-medium focus:outline-none">
                Add to Cart
              </button> 
            </div>
            {/* Whatsapp Button*/}
            <div className="text-xl mb-6 price-wrapper flex flex-wrap rounded-lg w-auto flex-auto gap-3.5">
              <button className="flex-1 btn btn-outline sm:px-[1.5rem] px-[0.9rem] py-[0.9375rem] rounded-lg text-sm font-medium focus:outline-none flex items-center justify-center">
                <span className="max-w-[1.5rem] mr-2"><img className="w-full h-auto" src={whatsapp} alt="WhatsApp" /></span>Enquiry on whatsapp
              </button> 
              <button className="flex-1 btn btn-outline sm:px-[1.5rem] px-[0.9rem] py-[0.9375rem] rounded-lg text-sm font-medium focus:outline-none">
                Wishlist
              </button> 
            </div>
            {/* Product Descriptions */}
            <div className="description-wrapper">
              <h4 className="text-sm font-bold mb-2 uppercase">Description</h4>
              <p className="mb-4">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
      <ProductSliderSection />
    </div>
  );
}

export default ProductDetail;
