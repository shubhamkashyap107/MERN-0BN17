import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

    console.log("Parent Called")
    const[number, setNumber] = useState()

  return (
    <div>
        <p>Parent</p>
        <button onClick={() => {
            setNumber(number + 1)
        }}>Increase Parent state</button>
        {/* <Child /> */}
    </div>
  )
}

export default Parent