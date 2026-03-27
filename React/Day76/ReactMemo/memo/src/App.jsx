import React, { useState } from 'react'
import Parent from './Components/Parent'

const App = () => {

  const[count, setCount] = useState(0)
  console.log("App Component Rendered")
  return (
    <div>
      <h1>Count : {count}</h1>

      <div>
        <button onClick={() => {
          setCount(count + 1)
        }}>+</button>
        <button onClick={() => {
          setCount(0)
        }}>Reset</button>
        <button onClick={() => {
          setCount(count - 1)
        }}>-</button>
      </div>


      <Parent />
    </div>
  )
}

export default App