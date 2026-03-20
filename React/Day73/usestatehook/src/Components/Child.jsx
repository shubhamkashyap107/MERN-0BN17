import React, { useState } from 'react'

const Child = () => {

    console.log("Child Called")
    const [number, setNumber] = useState(0)

  return (
    <div>
        <button className='bg-red-100' onClick={() => {
            setNumber(number + 1)
        }}>Increase Child State</button>
    </div>
  )
}

export default Child