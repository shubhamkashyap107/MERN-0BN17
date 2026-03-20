import React, { useState } from 'react'

const Counter = () => {
    const[count, setCount] = useState(0) // setters function ACTS async
  return (
    <div>
        <div>
            {count}
        </div>
        
        <button onClick={() => {
            setCount((prev) => {
                return prev + 1
            })
            setCount((prev) => {
                return prev + 1
            })

        }}>Increment</button>
        <button onClick={() => {
            setCount(prev => prev - 1)
            setCount(c => c - 1)

        }}>Decrement</button>
    </div>
  )
}

export default Counter