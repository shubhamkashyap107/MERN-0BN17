// import React, { useContext } from 'react'
// import { useCounterContext } from './Utils/CounterCountext'

// const App = () => {
//   const {count, setCount, text, setText} = useCounterContext()
//   return (
//     <div>
//       <h1>{count}</h1>

//       <div>
//         <button onClick={() => {
//           setCount(count + 1)
//         }}>Increment</button>
//         <button onClick={() => {
//           setCount(0)
//         }}>Reset</button>
//         <button onClick={() => {
//           setCount(count - 1)
//         }}>Decrement</button>
//       </div>


//       <input type="text" value={text} onChange={(e) => {
//         setText(e.target.value)
//       }} />


//       <h1>{text}</h1>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Landing from './Components/Landing'
import ProtectedRoutes from './Utils/ProtectedRoutes'

const App = () => {
  return (
    <div>
      <Routes>


        

        <Route path='/' element={<ProtectedRoutes />} >

          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />

        </Route>




        <Route path='/login' element={<Login />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App