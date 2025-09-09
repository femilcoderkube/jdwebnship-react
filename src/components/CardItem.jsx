import React from "react";

export default function CardItem() {
  const item = {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=334.8&h=418&q=80",
    name: "Mountain Retreat",
    price: "$299.99",
  };

  return (
    <div className="w-[334.8px] h-[491px] bg-white rounded-lg shadow-lg flex flex-col">
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
