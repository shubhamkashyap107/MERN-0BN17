import React, { useState } from 'react'

const Navbar = ({setUseDarkMode}) => {
    // const[useDarkMode, setUseDarkMode] = useState(false)
  return (
    <nav>
        <button onClick={() => {
            setUseDarkMode(false)
        }} className='border p-2 ml-3 bg-white'>Light</button>
        <button onClick={() => {
            setUseDarkMode(true)
        }} className='border p-2 ml-3 bg-white'>Dark</button>

    </nav>
  )
}

export default Navbar