import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex bg-black text-white text-lg justify-between px-10 py-4">
        <h3>LOGO</h3>


        <div className="flex gap-5">
            <Link to={"/home"}>Home</Link>
            {/* <Link to={"/edit"}>Edit</Link> */}
            <Link to={"/add"}>Add</Link>
        </div>
    </nav>
  )
}

export default Navbar