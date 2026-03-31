import React from 'react'

const Navbar = ({darkMode, setDarkMode}) => {
  return (
    <nav className={'flex justify-between h-[8vh] items-center px-4 ' + (darkMode ? "bg-white text-black" : "bg-black text-white")}>
        <h3>LOGO</h3>


        <div className='flex gap-4'>
            <button
              onClick={() => {
                setDarkMode(false)
              }}
            >
                Light
            </button>
            <button
              onClick={() => {
                setDarkMode(true)
              }}
            >
                Dark
            </button>
        </div>
    </nav>
  )
}

export default Navbar