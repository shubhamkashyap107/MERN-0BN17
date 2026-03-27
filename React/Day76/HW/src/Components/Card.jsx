import React from 'react'

const Card = ({ img, name, price }) => {
  return (
    <div className="w-[220px] cursor-pointer group ">
      <div className="overflow-hidden rounded-xl">
        <img
          src={img}
          alt={name}
          className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-2 flex justify-between items-center">
        <h2 className="text-sm font-medium text-gray-800 truncate">
          {name}
        </h2>
        <span className="text-sm font-semibold text-gray-900">
          ₹{price}
        </span>
      </div>
    </div>
  )
}

export default Card