import React, { createContext, useState } from 'react'
import Child from './Child'
export const UserContext = createContext()

const Parent = () => {
  const[city] = useState("Delhi")
  return (
    <UserContext.Provider value={{city}}>

      <div>
          <Child  />
      </div>
    
    </UserContext.Provider>
  )
}

export default Parent