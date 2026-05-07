import logo from "../../public/navLogo.svg"
import { Link, useNavigate } from "react-router-dom"
import help from "../../public/help.svg"
import search from "../../public/search.svg"
import corporate from "../../public/corp.svg"
import offers from "../../public/offers.svg"
import sign from "../../public/sign.svg"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"



const Navbar = () => {

  const navigate = useNavigate()
  const location = useSelector(store => store.location)

  

  return (
    <nav className="flex justify-between px-30 h-[12vh] items-center shadow-lg">

      <div className="flex items-center gap-4">

        <img onClick={() => navigate("/restaurants")} className="cursor-pointer" src={logo} alt="" />


        <p>{location.data.location && location.data.location.slice(0,30) + "..."}</p>

      </div>


        <div className="flex gap-7">
            <Link className="flex gap-1" style={{textWrap : "nowrap"}}><img src={corporate} alt="" />Swiggy Corporate</Link>
            <Link className="flex gap-1"><img src={search} alt="" />Search</Link>
            <Link className="flex gap-1"><img src={offers} alt="" />Offers</Link>
            <Link className="flex gap-1"><img src={help} alt="" />Help</Link>
            <Link className="flex gap-1" style={{textWrap : "nowrap"}}><img src={sign} alt="" />Sign In</Link>
            <Link className="flex gap-1">Cart</Link>
        </div>
    </nav>
  )
}

export default Navbar