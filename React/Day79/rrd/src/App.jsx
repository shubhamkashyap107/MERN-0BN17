import Navbar from './Components/Navbar'
import { Routes, Route} from "react-router-dom"
import A from "./Components/A"
import B from "./Components/B"
import C from "./Components/C"
import User from "./Components/User"

const App = () => {



  return (
    <div>
      <Navbar />



      <Routes>
        <Route path='/a' element={<A />} />
        <Route path='/b' element={<B />} />
        <Route path='/c' element={<C />} />
        <Route path="/user/:username/:lastname/:company/edit" element={<User />} />
      </Routes>
    </div>
  )
}

export default App