import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from "./Navbar"
import { useSelector } from 'react-redux'
import Loader from "./Loader"
import Accordion from './Accordion'
const CDN = import.meta.env.VITE_IMG_CDN

const Menu = () => {


    const{id} = useParams()
    const[data, setData] = useState({})
    const{lat, lon} = useSelector(store => store.location.data)
    // console.log(data)

    useEffect(() => {

      if(lat)
      {
        fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lon}&restaurantId=${id}&submitAction=ENTER`)
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          let lastIdx = data.data.cards.length - 1
          let kaamKaArrayKaLasyIdx = data.data.cards[lastIdx].groupedCard.cardGroupMap.REGULAR.cards.length - 1
          let sanitisedCards = data.data.cards[lastIdx].groupedCard.cardGroupMap.REGULAR.cards.slice(2, kaamKaArrayKaLasyIdx - 1).map((item) => {
            // console.log(item)
            if(item.card.card.itemCards)
            {
              return {
                title : item.card.card.title,
                cards : item.card.card.itemCards 
              }
            }
          })
          sanitisedCards = sanitisedCards.filter((item) => {
            return item
          })
          // console.log(data.data.cards[lastIdx].groupedCard.cardGroupMap.REGULAR.cards.slice(2, kaamKaArrayKaLasyIdx - 1))
          setData({
            title : data.data.cards[0].card.card.text,
            // cards : data.data.cards[lastIdx].groupedCard.cardGroupMap.REGULAR.cards.slice(2, kaamKaArrayKaLasyIdx - 1)
            cards : sanitisedCards
          })
        })
      }

    }, [id, lat, lon])

  return (
    <div className='h-screen'>
      <Navbar />

      {
        data.title ? (
          <div className='w-screen flex justify-center'>

            <main className='w-[60%] mt-10'>

              <h1 className='text-3xl font-extrabold mb-10'>{data.title}</h1>

              <div>
                {data.cards.map((item) => {
                  // console.log(item)
                  return <Accordion resId={id} key={item.id} cdn={CDN} title={item.title} cards={item.cards} />
                })}
              </div>

            </main>

          </div>
        ) : (
          <div className='h-[88vh] flex justify-center items-center'>
            <Loader />
          </div>
        )
      }


    </div>
  )
}

export default Menu