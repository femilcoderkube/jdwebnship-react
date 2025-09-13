import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeOrderPopup } from "../redux/slices/orderPopupSlice";
import close from "../assets/images/close.png";
import copy_icon from "../assets/images/copy_icon.png";
import { toTitleCase } from "../utils/common";
import { useTheme } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const OrderDetailsPopup = () => {
  const { theme, bottomFooterTextColor } = useTheme();
  const orderPopup = useSelector((state) => state.orderPopup);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = toTitleCase(orderPopup?.order?.status);

  const { orders } = useSelector((state) => state.customerOrders);
  const shippingAddress = orders?.customerData[0];
  return (
    <>
      <div
        className="overlay w-full h-full fixed top-0 left-0 bg-[rgba(0,0,0,.65)] z-99"
        onClick={() => dispatch(closeOrderPopup())}
      ></div>
      <div className="fixed top-0 right-0 z-100 w-full max-w-[50rem]">
        <div
          className="relative  border border-white/20 w-full max-w-[50rem] h-dvh overflow-y-auto sm:p-7.5 p-4 mx-auto"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="relative pb-6 mb-6 border-b ">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold ">Order Details</h1>
                <div className="flex items-center gap-2">
                  <span className=" font-mono text-lg">
                    #{orderPopup.order?.order_id || ""}
                  </span>
                  <img
                    className="cursor-pointer w-4 h-4"
                    src={copy_icon}
                    alt=""
                  />
                </div>
              </div>
              <img
                className="cursor-pointer w-4 h-4 mt-1.5"
                src={close}
                alt=""
                onClick={() => dispatch(closeOrderPopup())}
              />
            </div>
          </div>
          {/* Example: show more order details from orderPopup.order */}
          <div
            className="relative flex sm:flex-row flex-col sm:items-center justify-between gap-4 p-6  rounded-[0.625rem]"
            style={{
              backgroundColor: theme?.bottomFooterBackgroundColor,
              color: bottomFooterTextColor,
            }}
          >
            <div className="">
              <div className=" text-sm mb-1 uppercase">Order Date:</div>
              <div className=" text-sm font-bold">
                {orderPopup.order?.order_date || ""}
              </div>
            </div>
            <div className="">
              <div className=" text-sm mb-1 uppercase">TOTAL:</div>
              <div className=" text-sm font-bold">
                ₹{orderPopup.order?.final_amount || ""}
              </div>
            </div>
            <div className="">
              <div className=" text-sm mb-1 uppercase">STATUS:</div>
              <div className=" text-sm font-bold">{status || ""}</div>
            </div>
          </div>

          <div className="relative pt-6">
            <div className="border  rounded-[1.125rem] p-6">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3 className=" font-bold text-base mb-1">SHIP TO:</h3>
                  <div className="space-y-1 ">
                    <div className="">{shippingAddress?.fullName}</div>
                    <div>{shippingAddress?.email}</div>
                    <div>{shippingAddress?.phone_number}</div>
                    <div className="leading-relaxed">
                      {shippingAddress?.shipping_address}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pt-6">
            <div className="border  rounded-[1.125rem] p-6">
              <div className="flex items-start gap-3">
                <div>
                  <h3 className=" font-bold">PAYMENT:</h3>
                  <div className="">Pay on delivery</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pt-6">
            <div className="border  rounded-[1.125rem] p-6">
              <div className="flex items-start gap-3 mb-2">
                <h3 className=" font-bold">ORDER SUMMARY:</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="">Amount:</span>
                  <span className="">₹{orderPopup?.order?.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="">Subtotal:</span>
                  <span className="">₹0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="">Shipping Cost:</span>
                  <span className="">Free</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className=" font-bold">Total</span>
                  <span className=" font-bold">
                    ₹{orderPopup?.order?.final_amount}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pt-6 mt-6 border-t ">
            <button
              className="w-full btn py-4 px-6 rounded-2xl"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/products/${orderPopup?.order.product_slug}`);
              }}
            >
              <span className="text-lg">BUY IT AGAIN</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetailsPopup;
