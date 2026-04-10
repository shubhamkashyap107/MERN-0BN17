import React, { useEffect, useState } from 'react'
import { useFetch } from "../Hooks/useFetch"
import { useCounter } from '../Hooks/useCounter'


const Users = () => {

    const[data] = useFetch("https://jsonplaceholder.typicode.com/users")
    const{count, increment, decrement, reset} = useCounter()
    const{count : c, increment : i, decrement : d, reset : r} = useCounter()
  return (
    <>
    <div>
        {data.length > 0 ? (
            data.map((item) => {
                return <h1>{item.name}</h1>
            })
        ) : ""}
    </div>

    <section>
        <h1>count is {count}</h1>

        <div>
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => reset()}>Reset</button>
            <button onClick={() => decrement()}>Decrement</button>
        </div>
    </section>


    <section>
        <h1>count is {c}</h1>

        <div>
            <button onClick={() => i()}>Increment</button>
            <button onClick={() => r()}>Reset</button>
            <button onClick={() => d()}>Decrement</button>
        </div>
    </section>


    </>
    
  )
}

export default Users