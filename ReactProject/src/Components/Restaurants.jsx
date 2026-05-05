import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader'
import FoodSuggestions from './FoodSuggestions'
import TopRestaurantsSlider from './TopRestaurantsSlider'
import RestaurantsInAreaGrid from './RestaurantsInAreaGrid'

const Restaurants = () => {

  const[suggestionData, setSuggestionsData] = useState({})
  const[topRestaurants, setTopRestaurants] = useState({})
  const[restaurantsinArea, setRestaurantsInArea] = useState({})
  const location = useSelector(store => store.location)
 
  

  useEffect(() => {
    if(location.data.lat)
    {
      fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${location.data.lat}&lng=${location.data.lon}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setSuggestionsData({
          title : data.data.cards[0].card.card.header.title,
          cards : data.data.cards[0].card.card.imageGridCards.info
        })

        let kaamKaData = data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map((item) => {
          return item.info
        })
        setTopRestaurants({
          title : data.data.cards[1].card.card.header.title,
          cards : kaamKaData
        })


        let kaamKaData2 = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map((item) => {
          return item.info
        })

        setRestaurantsInArea({
          title : data.data.cards[2].card.card.title,
          cards : kaamKaData2
        })
      })
    }
   
  }, [location])

  return suggestionData.title ? (
    <div>
      <Navbar />
      <div>
        <FoodSuggestions data={suggestionData} />

        <hr  className='w-[80vw] mx-auto mt-10 border-gray-200'/>

        <TopRestaurantsSlider data={topRestaurants} />

        <hr  className='w-[80vw] mx-auto mt-10 border-gray-200'/>

        <RestaurantsInAreaGrid data={restaurantsinArea} />


      </div>
    </div>
  ) : (
    <div>
      <Navbar />
      <div className='h-screen flex justify-center items-center'>
        <Loader />
      </div>
    </div>
  )
}

export default Restaurants
