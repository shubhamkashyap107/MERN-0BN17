import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { CartContext } from "../App"

const Navbar = () => {

    const{ cart } = useContext(CartContext)
    let count = 0

    for(let item of cart)
    {
        count += item.quantity
    }

  return (
    <div className="flex bg-black justify-between text-white p-4">
        
        <h3>LOGO</h3>


        <div className="flex gap-5">
            <NavLink to={"/products"}>
                Products
            </NavLink>

            <div className="relative inline-block">
            <NavLink 
                to="/cart" 
                className=" font-medium  transition"
            >
                Cart
            </NavLink>

            <span className="absolute -top-2 -right-3 min-w-[18px] h-[18px] px-[5px] flex items-center justify-center text-[11px] font-semibold bg-red-500 text-white rounded-full shadow-sm">
                {count}
            </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar