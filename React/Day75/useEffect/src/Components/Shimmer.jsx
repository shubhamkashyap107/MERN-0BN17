import React from 'react'

const Shimmer = () => {
  return (
    <div className='grid grid-cols-4 gap-6 p-6 w-[100vw]'>
      {Array(8).fill("").map((_, i) => (
        <div
          key={i}
          className='h-[250px] w-[200px] rounded-xl bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse'
        ></div>
      ))}
    </div>
  )
}

export default Shimmer