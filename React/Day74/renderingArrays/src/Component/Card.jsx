import React from "react";

const ProductCard = ({ img, name, price }) => {
  return (
    <div className="w-[260px] bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Image */}
      <div className="h-[180px] w-full overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-md font-bold text-green-600">₹ {price}</p>

        {/* Button */}
        <button className="mt-2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;