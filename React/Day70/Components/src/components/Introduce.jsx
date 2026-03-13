import React from 'react'

// const Introduce = (props) => {

  
//   return (
//     <div>My name is {props.name}, i am {props.age} years old and i live in {props.city}</div>
//   )
// }


// const Introduce = (props) => {

//     const{name, city, age} = props
//   return (
//     <div>My name is {name}, i am {age} years old and i live in {city}</div>
//   )
// }


const Introduce = ({city, name, age}) => {

  return (
    <div>My name is {name}, i am {age} years old and i live in {city}</div>
  )
}


export default Introduce