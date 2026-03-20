import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-black text-white p-[15px]">
        <h3>
            LOGO
        </h3>


        <div className='flex gap-8'>
            <a href="">Home</a>
            <a href="">Profile</a>
            <a href="">Login</a>
        </div>
    </nav>
  )
}

export default Navbar