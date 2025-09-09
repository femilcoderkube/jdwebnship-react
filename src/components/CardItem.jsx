export function CardItem({ item }) {
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
