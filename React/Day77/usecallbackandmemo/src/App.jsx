import React, { useState } from 'react'
import Child from './Components/Child'

const App = () => {

  console.log("App rendered")
  const[count, setCount] = useState(0)

  return (
    <div>

      <div>
        <h1>Count of app : {count}</h1>

        <button onClick={() => {
          setCount(prev => prev + 1)
        }}>Increment App Count</button>

        
        <button onClick={() => {
          setCount(count - 1)
        }}>Decrement App Count</button>
      </div>

      <Child />
    </div>
  )
}

export default App