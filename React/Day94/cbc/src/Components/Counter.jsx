import React, { useEffect, useState } from 'react'

const Counter = () => {

    const[count, setCount] = useState(0)

    useEffect(() => {
        console.log("COunter Mounted")

        return () => {
            console.log("Counter Unmounted")
        }
    }, [count])

  return (
    <div>
        <h1>Count is {count}</h1>

        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>Increment</button>
            <button onClick={() => {
                setCount(0)
            }}>Reset</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter