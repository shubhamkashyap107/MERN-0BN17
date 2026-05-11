import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing'
import Restaurants from './Components/Restaurants'
import { useDispatch } from 'react-redux'
import { getLocationThunk } from './Utils/LocationSlice'
import RestaurantsHavingFoodCategory from './Components/RestaurantsHavingFoodCategory'
import Menu from './Components/Menu'
import { Toaster } from 'react-hot-toast'

const App = () => {

 

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocationThunk())
  }, [])


  return (
    <div>
      <Toaster />
      
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/restaurants' element={<Restaurants />} />
      <Route path='/restaurants/:id' element={<RestaurantsHavingFoodCategory />} />
      <Route path='/restaurants/menu/:id' element={<Menu />} />
    </Routes>

    </div>
  )
}

export default App

