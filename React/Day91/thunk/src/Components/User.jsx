import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { useSelector } from 'react-redux'

const User = () => {


  const data = useSelector((store) => {
    return store.userSlice.data.users
  })

  // const[data, setData] = useState([])

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users/")
  //   .then((res) => {
  //     return res.json()
  //   })
  //   .then((data) => {
  //     setData(data)
  //   })
  // }, [])


  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => {
          return <p>{item.name}</p>
        })
      ) : <Loader />}
    </div>
  )
}

export default User