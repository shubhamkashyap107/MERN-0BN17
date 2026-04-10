import React, { useEffect, useState } from 'react'
import { useFetch } from '../Hooks/useFetch'
import { useCounter } from '../Hooks/useCounter'

const Harry = () => {

   const[data] = useFetch("https://hp-api.onrender.com/api/characters")
    const{count, increment, decrement, reset} = useCounter()
  return (
    <>


    <h1>COunt is {count}</h1>
    <div>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
    </div>


    <div>
        {data.length > 0 ? (
            data.map((item) => {
                return <h1>{item.name}</h1>
            })
        ) : ""}
    </div>
    </>

  )
}

export default Harry