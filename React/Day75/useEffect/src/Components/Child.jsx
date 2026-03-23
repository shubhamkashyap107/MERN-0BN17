import React, { useEffect } from 'react'

const Child = () => {


    useEffect(() => {
        console.log("UE of child called")
    })

  return (
    <div>
        <h1>CHILD</h1>
    </div>
  )
}

export default Child