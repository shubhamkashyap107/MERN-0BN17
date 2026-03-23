import React, { useEffect, useState } from 'react'
import Card from './Card'
import Loader from './Loader'
import Shimmer from './Shimmer'

const Harry = () => {

  const[hpData, setHpData] = useState([])

  useEffect(() => {
    async function getData()
    {
      const res = await fetch("https://hp-api.onrender.com/api/characters")
      const data = await res.json()
      setHpData(data)
    }
    getData()
  }, [])

  // if(hpData.length == 0)
  // {
  //   return (
  //     <div className='h-screen w-screen flex justify-center items-center'>
  //       <Loader /> 
  //     </div>
  //   )
  // }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold text-center mb-8">
        Harry Potter Characters
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* {hpData && hpData.map((item, index) => {
          return <Card image={item.image} name={item.name} id={item.id} />
        })} */}


        {hpData.length > 0 ? 
          (
            hpData.map((item, index) => {
            return <Card image={item.image} name={item.name} id={item.id} />
          })
        ) : (
          // <div className='h-screen w-screen flex justify-center items-center'>
          //   <Loader /> 
          // </div>
          <Shimmer />
        )}

      </div>
    </div>
  )
}

export default Harry