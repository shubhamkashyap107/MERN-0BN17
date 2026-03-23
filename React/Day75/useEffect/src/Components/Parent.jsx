import React, { useEffect } from 'react'
import Child from './Child'

const Parent = () => {

    useEffect(() => {
        console.log("UE of parent called")
    })

  return (
    <div>
        <h1>PARENT</h1>

        <Child />
    </div>
  )
}

export default Parent