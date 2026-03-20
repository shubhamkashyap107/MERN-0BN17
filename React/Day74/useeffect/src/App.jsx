// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const[count, setCount] = useState(0)
//   const[text, setText] = useState("")

//   useEffect(() => {
//     console.log("Use efffect chala")
//   }, [count])

//   return (
//     <div>

//       <input type="text" onChange={(e) => {
//         setText(e.target.value)
//       }} />
//       <div>{count}</div>

//       <button onClick={() => {
//         setCount(count + 1)
//       }}>Increment</button>
//       <button onClick={() => {
//         setCount(0)
//       }}>Reset</button>
//       <button onClick={() => {
//         setCount(count - 1)
//       }}>Decrement</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'
import Demo from './Components/Demo'

const App = () => {
  const[show, setShow] = useState(false)
  return (
    <div>

      <button onClick={() => {
        setShow(!show)
      }}>Toggle</button>


      {show && <Demo />}

    </div>
  )
}

export default App