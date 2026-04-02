import React from 'react'
import { Link, useNavigate} from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <nav>
        <h3>LOGO</h3>

        <div>
           <Link to={"/home"}>Home</Link>
           <Link to={"/about"}>About</Link>
           <Link to={"/profile"}>Profile</Link>
           {/* <Link to={"/demo"}>Demo</Link> */}
           <div
           onClick={() => {
            navigate("/demo")
           }}
           style={{backgroundColor : 'red'}}>GO to DEMO</div>

           <button
            onClick={() => {
              navigate("/demo")
            }}
           >Go to demo 2</button>
           
        </div>
    </nav>
  )
}

export default Navbar