import React, { createContext, useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Products from "./Components/Products"
import Cart from "./Components/Cart"
export const CartContext = createContext()

const App = () => {

  const[cart, setCart] = useState([])
  console.log(cart)

  return (
    <CartContext.Provider value={{cart, setCart}}>

      <div>
        <Navbar />


        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>

      </div>
    </CartContext.Provider>

  )
}

export default App