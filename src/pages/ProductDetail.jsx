import React, { useEffect, useState } from "react";
import CommonHeader from "../components/CommonHeader";
import ProductSliderSection from "../components/ProductSliderSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Mousewheel } from "swiper/modules"; // Import Mousewheel and Navigation modules
import "swiper/css"; // Core Swiper styles
import "swiper/css/mousewheel"; // Mousewheel styles
import "swiper/css/navigation"; // Navigation styles
import whatsapp from "../assets/whatsapp-og.svg";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductsDetails } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { getWhatsappLink, isInWishlist } from "../utils/common";
import { addtowishList, removeFromwishList } from "../redux/slices/WishListSlice";

function ProductDetail() {

  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const { productDetails } = useSelector((state) => state.products);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { storeInfo } = useSelector((state) => state.storeInfo);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const phone_number = storeInfo?.storeinfo?.retailer?.phone_number;
  const product = productDetails?.product
  const wishlistData = wishlist?.data?.wishlist;
  const productImg = product?.product_images ? product?.product_images.split(',') : []
  const isWishlist =
    (isAuthenticated && isInWishlist(product?.id, wishlistData)) || false;

  useEffect(() => {
    if (slug) {
      dispatch(fetchProductsDetails({ slug }));
    } else {
      navigate("/shop");
    }
  }, [slug]);

  const addToWishList = () => {
    if (isAuthenticated) {
      if (isWishlist) {
        const payload = {
          product_id: !product?.retailer_id ? product?.id : null,
          retailer_product_id: product?.retailer_id ? product?.id : null,
        };
        dispatch(removeFromwishList(payload, dispatch));
      } else {
        const payload = {
          product_id: product?.id,
          retailer_id: product?.wholesaler_id ? null : product?.retailer_id,
          wholesaler_id: product?.retailer_id ? null : product?.wholesaler_id,
        };
        dispatch(addtowishList(payload, dispatch));
      }
    } else {
      navigate("/signin");
    }
  };

  const discount =
    product?.old_price && product?.new_price
      ? (((product?.old_price - product?.new_price) / product?.old_price) * 100).toFixed(0)
      : 0;

  // Handle quantity increment and decrement
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // New: Handle slide change to update active index
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    if (thumbsSwiper) {
      thumbsSwiper.slideTo(swiper.activeIndex); // Sync thumbnail Swiper
    }
  };

  return (
    <div className="mr-auto ml-auto">
      <CommonHeader />
      <div className="pt-25">
        <div className="flex flex-col lg:flex-row gap-25 justify-center">
          {/* Left Column: Vertical Swiper */}

          {/* Center Column: Main Product Image */}
          <div className="w-full max-w-[63.75rem] gap-6 flex justify-center items-start">
            <div className="w-full flex flex-col-reverse md:flex-row items-start">
              <div className="flex flex-row md:flex-col w-full md:w-[100px] md:mr-8 mt-6 md:mt-0">
                <div className="slider__prev cursor-pointer text-center text-sm h-auto w-8 md:h-12 md:w-auto flex items-center justify-center select-none focus:outline-none">
                  Prev
                </div>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  direction="horizontal"
                  slidesPerView={5}
                  spaceBetween={15}
                  freeMode={true}
                  breakpoints={{
                    0: { direction: "horizontal" },
                    768: { direction: "vertical" },
                  }}
                  modules={[Navigation, Thumbs]}
                  navigation={{
                    nextEl: ".slider__next",
                    prevEl: ".slider__prev",
                  }}
                  className="h-[100px] w-[calc(100%-96px)] mx-4 md:w-full md:h-[calc(100px*5+(24px/2*5)))]"
                >
                  {productImg.map((src, index) => (
                    <SwiperSlide key={index}>
                      <div className={`slider__image w-full h-full rounded-[10px] overflow-hidden transition duration-250 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 swiper-slide-thumb-active:grayscale-0 swiper-slide-thumb-active:opacity-100 ${activeIndex === index
                        ? "grayscale-0 opacity-100"
                        : "grayscale opacity-50"
                        }`}>
                        <img src={src} alt="" className="w-full h-full object-cover block" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="slider__next cursor-pointer text-center text-sm h-auto w-8 md:h-12 md:w-auto flex items-center justify-center select-none focus:outline-none">
                  Next
                </div>
              </div>
              <Swiper
                direction="horizontal"
                slidesPerView={1}
                spaceBetween={24}
                grabCursor={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs, Mousewheel]}
                navigation={{
                  nextEl: ".slider__next",
                  prevEl: ".slider__prev",
                }}
                breakpoints={{
                  0: { direction: "horizontal" },
                  768: { direction: "horizontal" },
                }}
                onSlideChange={handleSlideChange}
                className="mySwiper md:flex-1"
              >
                {productImg.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="slider__image w-full h-full rounded-[10px] overflow-hidden relative before:content-[''] before:block before:float-left before:pt-[100%] after:content-[''] after:table after:clear-both bg-[#f2f2f2]">
                      <img
                        src={src}
                        alt=""
                        className="absolute top-0 left-0 object-contain w-full h-full block transition-transform duration-3000 group-hover:scale-110"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="w-full max-w-[40.625rem] text-left">
            <h3 className="text-[2rem] font-bold mb-3.5">{product?.name}</h3>
            <div className="text-xl mb-3.5 price-wrapper inline-flex items-center border border-gray-300 rounded-lg p-4 w-auto flex-auto">
              <span className="mr-3 text-[1.5rem] font-bold">${product?.new_price.toFixed(2)}</span>
              <span className="mr-1 text-[1rem] text-[#808080]">MRP</span>
              <span className="mr-3 line-through text-[1rem] text-[#808080]">${product?.old_price.toFixed(2)}</span>
              <span className="mr-1 text-[0.875rem] discount bg-[#111111] px-[0.375rem] text-[#FFFFFF] rounded-sm">{discount}%</span>
              <span class="mr-1 text-[0.75rem] text-[#808080] uppercase">off</span>
            </div>
            <div className="item-stock-status mb-6">
              <p class="text-2xl flex items-center uppercase">
                <span class="indicator rounded-lg inline-block h-[0.625rem] w-[0.625rem] bg-[#25D366] mr-2">
                </span>{product?.quantity.length !== 0 ? "Item in stock" : "Out of stock"}
              </p>
            </div>
            {/* Available Sizes */}
            {product?.productVariations.length > 0 &&
              <div className="mb-6">
                <h4 className="text-sm font-bold mb-2 uppercase">Size</h4>
                <div className="flex gap-2">
                  {product?.productVariations.map((size, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-[#111111] hover:text-[#FFFFFF]"
                    >
                      {size?.product_variation}
                    </button>
                  ))}
                </div>
              </div>
            }

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
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  getWhatsappLink(e, product, phone_number);
                }}
                className="flex-1 btn btn-outline sm:px-[1.5rem] px-[0.9rem] py-[0.9375rem] rounded-lg text-sm font-medium focus:outline-none flex items-center justify-center">
                <span className="max-w-[1.5rem] mr-2"><img className="w-full h-auto" src={whatsapp} alt="WhatsApp" /></span>Enquiry on whatsapp
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToWishList();
                }}
                className="flex-1 btn btn-outline sm:px-[1.5rem] px-[0.9rem] py-[0.9375rem] rounded-lg text-sm font-medium focus:outline-none">
                Wishlist
              </button>
            </div>
            {product?.description &&
              <div className="description-wrapper">
                <h4 className="text-sm font-bold mb-2 uppercase">Description</h4>
                <p className="mb-4">{product?.description}</p>
              </div>
            }
          </div>
        </div>
      </div>
      <ProductSliderSection />
    </div>
  );
}

export default ProductDetail;
