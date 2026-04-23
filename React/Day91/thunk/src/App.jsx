import { useDispatch, useSelector } from "react-redux"
import User from './Components/User'
import { useEffect } from "react"
import { getUserData } from "./Utils/UserSlice"
import {Link, Route, Routes} from "react-router-dom"
import Home from "./Components/Home"
import About from "./Components/About"
import Harry from "./Components/Harry"
import Products from "./Components/Products"

const App = () => {

  const data = useSelector(store => store.userSlice.data)
  const dispatch = useDispatch()

  useEffect(() => { 
    dispatch(getUserData())
  }, [])

  return (
    <div>
      

    <nav className="bg-black flex justify-between py-2 px-3 text-white">
      <h3>LOGO</h3>


      <div className="flex gap-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/harry"}>Harry</Link>
        <Link to={"/products"}>Products</Link>
      </div>
    </nav>


    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<User />} path="/users" />
      <Route element={<Harry />} path="/harry" />
      <Route element={<Products />} path="/products" />
    </Routes>

    </div>
  )
}

export default App