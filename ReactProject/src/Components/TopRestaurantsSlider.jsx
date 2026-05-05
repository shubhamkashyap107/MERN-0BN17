import React from 'react'
import RestaurantCard from './RestaurantCard'
const CDN = import.meta.env.VITE_IMG_CDN

const TopRestaurantsSlider = ({data}) => {
    const{title, cards} = data
  return (
    <div className='mt-5 text-lg w-[80vw] mx-auto'>
        <div className='flex justify-between'>
            <h3 className='font-extrabold'>{title}</h3>

            <div>
                <i class="fa-solid fa-arrow-left"></i>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>


        <div className='flex gap-4 overflow-scroll scrollbar-none [scrollbar-width:none] mt-4'>
            {cards.map((item) => {
                return <RestaurantCard size={"large"} cdn={CDN} data={item} />
            })}
        </div>
    </div>
  )
}

export default TopRestaurantsSlider