import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Routes, Route , useNavigate} from "react-router-dom"
import Home from './Components/Home'
import Profile from './Components/Profile'
import About from './Components/About'
import Demo from './Components/Demo'

const App = () => {
  const fn = useNavigate()
  return (
    <>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
        <Route path='/demo' element={<Demo />} />
        <Route path='*' element={<h1>404 - no page found</h1>} />
      </Routes>

      <footer>All rights reserved</footer>

    </>
    
  )
}

export default App