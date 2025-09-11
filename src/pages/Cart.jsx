import React, { useMemo, useState } from "react";
import CommonHeader from "../components/CommonHeader";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Longine_s Heritage Classic Copper-Black",
      price: 79.99,
      quantity: 1,
      image: "/src/assets/images/hero.jpg",
    },
    {
      id: 2,
      name: "Lacost e Navy Blue Logo Work Premium Polo T-Shirt",
      price: 129.0,
      quantity: 2,
      image: "/src/assets/images/hero.jpg",
    },
  ]);

  const increaseQty = (id) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, quantity: it.quantity + 1 } : it
      )
    );
  };

  const decreaseQty = (id) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, quantity: Math.max(1, it.quantity - 1) } : it
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const { subtotal, tax, total } = useMemo(() => {
    const sub = items.reduce((s, it) => s + it.price * it.quantity, 0);
    const t = sub * 0.07;
    return { subtotal: sub, tax: t, total: sub + t };
  }, [items]);

  const proceedToCheckout = () => {
    navigate("/checkout", { state: { items } });
  };

  return (
    <div>
      <CommonHeader />
      <div className="max-w-[80rem] mx-auto lg:py-[6.25rem] md:py-[5rem] py-[3.5rem] text-left">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
          <div className="lg:col-span-2 space-y-7.5">
            <h1 className="text-2xl font-bold mb-6 pb-5 border-b border-[#11111126] text-left">
              Your Cart
            </h1>
            {items.length === 0 ? (
              <div className="text-center p-6 border rounded-md">
                <p>Your cart is empty.</p>
                <Link className="text-blue-600" to="/shop">
                  Continue shopping
                </Link>
              </div>
            ) : (
              items.map((it) => (
                <div key={it.id} className="flex gap-6 justify-between">
                  <div className="flex gap-6 flex-1 max-w-[25.938rem]">
                    <img
                      src={it.image}
                      alt={it.name}
                      className="lg:w-[6.25rem] lg:h-[6.25rem] w-20 h-20 object-cover rounded-[1.125rem]"
                    />
                    <div>
                      <div className="text-lg font-bold mb-2.5 text-[#111111]">{it.name}</div>
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="text-base font-bold text-[#111111]">₹3,298</span>
                        <span className="text-sm text-[#808080]">₹19,999</span>
                      </div>
                      <button
                        onClick={() => removeItem(it.id)}
                        className="ml-auto text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <button
                      onClick={() => decreaseQty(it.id)}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <span>{it.quantity}</span>
                    <button
                      onClick={() => increaseQty(it.id)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <p className="text-lg font-bold">₹9,894</p>
                  </div>
                </div>
              ))
            )}
          </div>
          <aside className="border rounded-md p-4 h-fit lg:mt-12">
            <h2 className="text-lg font-semibold mb-4">Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes (7%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={proceedToCheckout}
              disabled={items.length === 0}
              className="mt-4 w-full bg-black text-white rounded-md py-2 disabled:opacity-60"
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Cart;
