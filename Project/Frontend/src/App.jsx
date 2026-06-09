import { Routes, Route } from "react-router-dom"
import Landing from "./Pages/Landing"
import Signup from "./Pages/Signup"
import { Toaster } from "react-hot-toast"
import Login from "./Pages/Login"

const App = () => {
  return (
    <div>

      <Toaster />
      

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>



    </div>
  )
}

export default App