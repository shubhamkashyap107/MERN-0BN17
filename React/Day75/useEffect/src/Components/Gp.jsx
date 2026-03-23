import React, { useEffect } from 'react'
import Parent from './Parent'

const Gp = () => {
    useEffect(() => {
        console.log("UE of GP called")
    })
  return (
    <div>
        <h1>GRANDPARENT</h1>

        <Parent />
    </div>
  )
}

export default Gp