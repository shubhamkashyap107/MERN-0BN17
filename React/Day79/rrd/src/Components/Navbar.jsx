import React from 'react'
import { useEffect } from 'react'
import { Link , NavLink} from "react-router-dom"

const Navbar = () => {


  return (
    <nav className='flex bg-black justify-between p-4 text-white'>
        <h3>LOGO</h3>

        <div className='flex gap-5'>
            {/* <Link></Link> */}
            <NavLink
              to={"/a"}
              className={({isActive}) => isActive ? "text-yellow-200" : "text-white"}
            >
                Go To A
            </NavLink>


            <NavLink
              to={"/b"}
              className={({isActive}) => isActive ? "text-yellow-200" : "text-white"}
            >
                Go To B
            </NavLink>


            <NavLink
              to={"/c"}
              className={({isActive}) => isActive ? "text-yellow-200" : "text-white"}
            >
                Go To C
            </NavLink>
        </div>
    </nav>
  )
}

export default Navbar