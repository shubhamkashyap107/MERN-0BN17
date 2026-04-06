import React, { useContext } from 'react'
import Parent, { UserContext } from './Parent'

const GP = () => {
  const obj = useContext(UserContext)
  console.log(obj)
  
  return (
    <div>
        {/* <h1>City is {city}</h1> */}
        <Parent  />
    </div>
  )
}

export default GP