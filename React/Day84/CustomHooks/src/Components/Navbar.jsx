import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex bg-black text-white justify-between p-3">
        <h3>LOGO</h3>


        <div className="flex gap-3">
            <Link to={"/harry"}>
                Harry
            </Link>

            <Link to={"/users"}>
                Users
            </Link>
        </div>
    </div>
  )
}

export default Navbar