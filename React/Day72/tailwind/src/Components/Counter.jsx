import React, { useState } from 'react'

const Counter = () => {
  
  
    // let count = 0

  const[count, setCount] = useState(0)


  return (
    <div className="w-[320px] mx-auto mt-[200px] border border-gray-200 rounded-2xl p-6 shadow-md text-center h-fit">
      
      {/* Count Display */}
      <div className="text-4xl font-semibold mb-6 text-gray-800">
        {count}
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-3">
        <button
         onClick={() => {
            // count++
            setCount(count + 1)
         }}
         className="flex-1 bg-gray-900 text-white py-2 rounded-xl hover:bg-gray-700 transition">
          +
        </button>

        <button 
         onClick={() => {
            // count = 0
            setCount(0)
         }}
         className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-xl hover:bg-gray-300 transition">
          Reset
        </button>

        <button
         onClick={() => {
            // count--
            if(count == 0)return
            setCount(count - 1)
         }}
         className="flex-1 bg-gray-900 text-white py-2 rounded-xl hover:bg-gray-700 transition">
          -
        </button>
      </div>
      
    </div>
  )
}

export default Counter