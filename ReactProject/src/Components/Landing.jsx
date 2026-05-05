import { Link, useNavigate } from "react-router-dom"
import logo from "../../public/logo.avif"
import left from "../../public/left.avif"
import right from "../../public/right.avif"
import card1 from "../../public/card1.avif"
import card2 from "../../public/card2.avif"
import card3 from "../../public/card3.avif"
import searchIcon from "../../public/searchIcon.svg"

const Landing = () => {

    const nav = useNavigate()

  return (
    <div style={{backgroundColor : "#FF5200"}} className='h-screen relative'>
        
        <nav className="flex justify-between items-center px-30 py-10">
            <img className="h-12 w-40" src={logo} alt="logo" />


            <div style={{fontSize : "16px", color : "white"}} className="flex gap-5 items-center">
                <Link>Swiggy Corporate</Link>
                <Link>Partner with us</Link>
                <button className="border border-white h-13.5 w-37.5 px-4 py-3 rounded-xl">Get the App</button>
                <button className="bg-black text-white h-13.5 w-33.75 rounded-2xl px-4 py-3">Sign in</button>
            </div>
        </nav>

        <h1 style={{fontSize : "48px", lineHeight : "56px", fontWeight : "600", color : "white", textAlign : "center", marginTop : "64px"}}>Order food & groceries. Discover <br></br> best restaurants. Swiggy it!</h1>


        <img className="h-[70vh] absolute left-0 top-35" src={left} alt="" />
        <img className="h-[70vh] absolute right-0 top-35" src={right} alt="" />

        <div onClick={() => {
            nav("/search")
        }} className="mt-4 flex w-fit mx-auto relative">
            <input type="text" placeholder="Search for restaurant, item or more" className="bg-white h-15 rounded-2xl w-[40vw] border-none outline-none p-2"  />
            <img className="absolute right-5 top-5" src={searchIcon} alt="" />
        </div>

        <div className="flex justify-center mt-4">
            <img onClick={() => {
                nav("/restaurants")
            }} className="h-[40vh] cursor-pointer" src={card1} alt="" />
            <img className="h-[40vh] cursor-pointer" src={card2} alt="" />
            <img className="h-[40vh] cursor-pointer" src={card3} alt="" />
        </div>

    </div>
  )
}

export default Landing