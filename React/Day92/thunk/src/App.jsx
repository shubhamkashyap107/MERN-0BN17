import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Users from './Components/Users'
import Products from './Components/Products'
import { useDispatch } from "react-redux"
import { getUserDataThunk } from './Utils/UserSlice'
import { getProductDataThunk } from './Utils/ProductsSlice'

const App = () => {

  // const d = useDispatch()

  // useEffect(() => {
  //   d(getUserDataThunk())
  //   d(getProductDataThunk())
  // }, [])

  return (
    <div>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />

      </Routes>
    </div>
  )
}

export default App