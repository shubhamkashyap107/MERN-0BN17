import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addItem } from "../Utils/ListSlice"

const List = () => {

  const[text, setText] = useState("")
  const dis = useDispatch()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-[50vw]">
      
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        
        <div className="flex gap-3">
          
          <input
            onChange={(e) => {
              setText(e.target.value)
            }}
            value={text}
            type="text"
            placeholder="Enter something..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       transition duration-200"
          />
          
          <button
            onClick={() => {
              dis(addItem(text))
              setText("")
            }}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg 
                       hover:bg-blue-700 active:scale-95 
                       transition duration-200"
          >
            Add Item
          </button>
        
        </div>
      
      </div>
    
    </div>
  )
}

export default List