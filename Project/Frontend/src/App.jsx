import { Routes, Route } from "react-router-dom"
import Landing from "./Pages/Landing"
import Signup from "./Pages/Signup"
import { Toaster } from "react-hot-toast"
import Login from "./Pages/Login"
import ProtectedRoute from "./Pages/ProtectedRoute"
import Home from "./Pages/Home"
import CompleteProfile from "./Pages/CompleteProfile"

const App = () => {
  return (
    <div>

      <Toaster />
      

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />


        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
        </Route>  

        
      </Routes>



    </div>
  )
}

export default App