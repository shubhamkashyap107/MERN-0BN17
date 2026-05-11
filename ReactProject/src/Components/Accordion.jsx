import React, { useState } from 'react'
import MenuCard from './MenuCard'

const Accordion = ({title, cards, cdn, resId}) => {
    const[isOpen, setIsOpen] = useState(false)
    // console.log(cards)
  return (
    <>
    <div className='my-3'>
        <div onClick={() => setIsOpen(!isOpen)} className='flex justify-between'>
            <h2 className='font-extrabold text-lg'>{title}({cards.length})</h2>
            <i class={"fa-solid " + (isOpen ? "fa-arrow-up" : "fa-arrow-down")}></i>
        </div>

        {isOpen && <div>
           {
            cards.map((item) => {
                // console.log(item.card.info)
                const{name, defaultPrice, price, ratings, imageId, description, itemAttribute, id} = item.card.info


                return <MenuCard itemId={id} resId={resId} key={id} cdn={cdn} name={name} defaultPrice={defaultPrice} price={price} ratings={ratings} imageId={imageId} description={description} itemAttribute={itemAttribute} />

            })
           }
        </div>}





    </div>

    <div className='h-5 bg-gray-200'></div>

    </>

  )
}

export default Accordion