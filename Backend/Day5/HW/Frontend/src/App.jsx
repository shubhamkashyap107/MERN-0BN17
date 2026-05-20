import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Edit from './Components/Edit'
import Add from './Components/Add'

import { Toaster } from "react-hot-toast"

const App = () => {
  return (
    <div>
      <Navbar />
      <Toaster />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/add' element={<Add />} />

      </Routes>
    </div>
  )
}

export default App