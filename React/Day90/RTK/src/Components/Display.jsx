import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
  
  const data = useSelector((store) => {
    return store.list
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-[50vw]">
      
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Items List
        </h2>

        <ul className="space-y-3">
          {data && data.map((item) => {
            return (
              <li
                className="px-4 py-2 bg-gray-50 border border-gray-200 
                           rounded-lg hover:bg-gray-100 transition duration-200"
              >
                {item}
              </li>
            )
          })}
        </ul>

      </div>

    </div>
  )
}

export default Display