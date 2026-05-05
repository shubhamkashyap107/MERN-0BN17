import React from 'react'
import { useNavigate } from 'react-router-dom'
const CDN = import.meta.env.VITE_IMG_CDN


const FoodSuggestions = ({data}) => {
    const{title, cards} = data
    const navigate = useNavigate()
    // console.log(cards)
  return (
    <div className='mt-5 text-lg w-[80vw] mx-auto'>
        <div className='flex justify-between'>
            <h3 className='font-extrabold'>{title}</h3>

            <div>
                <i class="fa-solid fa-arrow-left"></i>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>


        <div className='flex overflow-scroll scrollbar-none [scrollbar-width:none] '>
            {cards.map((c) => {
                console.log(c)
                return <img onClick={() => navigate(`/restaurants/${c.entityId.slice(36, 41)}`)} className='w-50 h-55' src={CDN + c.imageId} />
            })}
        </div>

        
    </div>
  )
}

export default FoodSuggestions