import React, { useContext } from 'react'
import { MyContext } from "../App"
import { UserContext } from './Parent'


const Child = () => {
    const {name, age} = useContext(MyContext)
    const {city} = useContext(UserContext)
  return (
    <div>
      {`name is ${name} and age is ${age} and i live in ${city}`}
    </div>
  )
}

export default Child