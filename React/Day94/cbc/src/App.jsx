import React, { useState } from 'react'
// import Counter from './Components/Counter'
import Counter from './Components/CounterCBC'

const App = () => {

  const[showCounter, setShowCounter] = useState(false)

  return (
    <div>
      <button onClick={() => setShowCounter(!showCounter)}>Show / Hide</button>
      {showCounter && <Counter />}
    </div>
  )
}

export default App