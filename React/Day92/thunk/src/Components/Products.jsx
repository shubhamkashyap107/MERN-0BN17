import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDataThunk } from '../Utils/ProductsSlice'
import { addToCart, removeFromCart } from "../Utils/CartSlice"

const Products = () => {
  const data = useSelector((store) => store.product)
  const dispatch = useDispatch()

  useEffect(() => {

    if(data.data.length > 0)
    {
      return
    }

    dispatch(getProductDataThunk())
  }, [])

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="space-y-8">
        {data.data?.length > 0 &&
          data.data.map((item) => {
            return (
              <div
                key={item.id}
                className="flex gap-6 border-b pb-6"
              >
                {/* Product Image */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />

                {/* Product Info */}
                <div className="flex flex-col gap-2 flex-1">
                  {/* Title + Brand */}
                  <div className="flex justify-between items-start">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <span className="text-sm text-gray-500">
                      {item.brand}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Price + Discount */}
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-gray-900">
                      ${item.price}
                    </span>
                    <span className="text-sm text-green-600">
                      {item.discountPercentage}% OFF
                    </span>
                  </div>

                  {/* Rating + Stock */}
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>⭐ {item.rating}</span>
                    <span
                      className={`${
                        item.stock > 0
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {item.availabilityStatus}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Shipping */}
                  <p className="text-xs text-gray-500">
                    🚚 {item.shippingInformation}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-2">
                    <button
                    onClick={() => {
                      dispatch(addToCart(item))
                    }}
                    className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800">
                      Add to Cart
                    </button>

                    <button
                    onClick={() => {
                      dispatch(removeFromCart(item.id))
                    }}
                    className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-100">
                      Remove
                    </button>
                  </div>

                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Products