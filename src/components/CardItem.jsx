export function CardItem({ item }) {
  return (
    <div className="w-full bg-white rounded-[18px] shadow-lg flex flex-col flex-shrink-0 overflow-hidden relative">
      <img
        src={item.image}
        alt={item.name}
        className="w-full object-cover rounded-[18px]"
      />
      <div className="absolute bottom-0 w-100 category-title py-[16px] lg:py-[34px] rounded-lg rounded-t-none overflow-hidden">
        <h3 className="text-lg font-bold text-[18px] lg:text-[24px] text-white">
          {item.name}
        </h3>
        {/* <p className="text-md text-gray-600">{item.price}</p> */}
      </div>
    </div>
  );
}
