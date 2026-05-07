import React from 'react'
import RestaurantCard from './RestaurantCard'
const CDN = import.meta.env.VITE_IMG_CDN

const RestaurantsInAreaGrid = ({data}) => {

    const{title, cards} = data
    // console.log(cards)
  return (
    <div className='mt-5 text-lg w-[80vw] mx-auto'>
        <div className='flex justify-between'>
            <h3 className='font-extrabold'>{title}</h3>
        </div>


        <div className='grid grid-cols-4 gap-2b'>
            {cards.map((item) => {
                return <RestaurantCard key={item.id} cdn={CDN} data={item} />
            })}
        </div>


       
    </div>
  )
}

export default RestaurantsInAreaGrid