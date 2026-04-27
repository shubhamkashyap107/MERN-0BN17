import { Link } from 'react-router-dom' 

const Navbar = () => {
  return (
    <div className='bg-blue-500 text-white flex justify-between p-5'>
        <h3>LOGO</h3>


        <div className='flex gap-5'>
            <Link to={"/home"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/profile"}>Profile</Link>
        </div>
    </div>
  )
}

export default Navbar