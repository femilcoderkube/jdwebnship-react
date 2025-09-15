// import { useState, useCallback, useEffect } from "react";

// export default function useCartQuantity(
//   initial = 1,
//   maxLimit = 5,
//   availableStock = Infinity,
//   cartQuantity = 0,
//   resetKey = null
// ) {
//   const [quantity, setQuantity] = useState(initial);

//   // Reset when resetKey changes
//   useEffect(() => {
//     setQuantity(initial);
//   }, [resetKey, initial]);

//   const increase = useCallback(() => {
//     setQuantity((prev) =>
//       Math.min(prev + 1, Math.min(availableStock - cartQuantity, maxLimit))
//     );
//   }, [availableStock, cartQuantity, maxLimit]);

//   const decrease = useCallback(() => {
//     setQuantity((prev) => Math.max(1, prev - 1));
//   }, []);

//   const reset = useCallback(() => {
//     setQuantity(initial);
//   }, [initial]);

//   return {
//     quantity,
//     setQuantity,
//     increase,
//     decrease,
//     reset,
//     canIncrease:
//       quantity <= Math.min(availableStock - cartQuantity, maxLimit) &&
//       quantity <= availableStock,
//     canDecrease: quantity > 1,
//   };
// }

import { useState, useCallback, useEffect } from "react";

export default function useCartQuantity(
  {
    initial = 1,
    maxLimit = 5,
    availableStock = Infinity,
    cartQuantity = 0,
    resetKey = null,
    onChange = null, // 👈 callback to notify Redux
  } = {}
) {
  const [quantity, setQuantity] = useState(initial);

  // Reset when resetKey changes
  useEffect(() => {
    setQuantity(initial);
  }, [resetKey, initial]);

  // 🔥 helper to update local + redux
  const updateQuantity = useCallback(
    (newQty) => {
      setQuantity(newQty);
      if (onChange) onChange(newQty); // notify redux
    },
    [onChange]
  );

  const increase = useCallback(() => {
    updateQuantity(
      Math.min(quantity + 1, Math.min(availableStock - cartQuantity, maxLimit))
    );
  }, [quantity, availableStock, cartQuantity, maxLimit, updateQuantity]);

  const decrease = useCallback(() => {
    updateQuantity(Math.max(1, quantity - 1));
  }, [quantity, updateQuantity]);

  const reset = useCallback(() => {
    updateQuantity(initial);
  }, [initial, updateQuantity]);

  return {
    quantity,
    setQuantity: updateQuantity,
    increase,
    decrease,
    reset,
    canIncrease:
      quantity < Math.min(availableStock - cartQuantity, maxLimit) &&
      quantity < availableStock,
    canDecrease: quantity > 1,
  };
}
