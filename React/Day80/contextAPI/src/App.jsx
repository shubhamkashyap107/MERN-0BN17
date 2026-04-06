import React, { createContext, useState } from 'react'
import GP from './Components/GP'
export const MyContext = createContext()

const App = () => {
  const[name] = useState("Qwerty")
  const[age] = useState(12)
  return (
    <MyContext.Provider value={{name, age}}>
      
      <div>
        <GP />
      </div>
    
    </MyContext.Provider>
  )
}

export default App