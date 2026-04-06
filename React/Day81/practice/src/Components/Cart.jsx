import React, { useContext } from 'react'
import { CartContext } from '../App'

const Cart = () => {

  const { cart, setCart } = useContext(CartContext)

  let total = 0;

  for (let item of cart) {
    total += item.quantity * item.price
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Your Cart
      </h1>

      {cart.length == 0 ? (
        <h1 className="text-xl text-gray-500 text-center mt-20">
          Cart Empty!!
        </h1>
      ) : (
        <main className="grid gap-6">

          {cart.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-6 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
              >

                {/* Image */}
                <img
                  src={item.thumbnail}
                  alt=""
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Details */}
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-gray-800">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Quantity: <span className="font-medium text-gray-700">{item.quantity}</span>
                  </p>

                  <p className="text-sm text-gray-500">
                    Price per unit: ₹{item.price}
                  </p>
                </div>

                {/* Total */}
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-800">
                    ₹{item.quantity * item.price}
                  </p>
                </div>

              </div>
            )
          })}

        </main>
      )}

      {/* Total Section */}
      {cart.length > 0 && (
        <div className="mt-10 flex justify-end">
          <div className="bg-white px-6 py-4 rounded-2xl shadow-md">
            <h1 className="text-xl font-semibold text-gray-800">
              Total: ₹{Math.ceil(total)}
            </h1>
          </div>
        </div>
      )}

    </div>
  )
}

export default Cart