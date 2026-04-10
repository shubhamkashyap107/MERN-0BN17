import { Route, Routes } from "react-router-dom"
import Users from "./Components/Users"
import Harry from "./Components/Harry"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <div>
      
    <Navbar />


    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/harry" element={<Harry />} />
    </Routes>

    </div>
  )
}

export default App