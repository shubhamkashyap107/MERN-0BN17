import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 text-white bg-black">
        <h3>LOGO</h3>


        <div className="flex gap-3">
            <Link to={"/home"}>Home</Link>
            <Link to={"/users"}>Users</Link>
            <Link to={"/products"}>Products</Link>
        </div>
    </nav>
  )
}

export default Navbar