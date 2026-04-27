import React, { useEffect, useState } from 'react'

const Profile = () => {
  const[data, setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json()
    })
    .then((d) => {
      setData(d)
    })
  }, [])

  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => {
          return <p>{item.name}</p>
        })
      ) : <h1>Fetching user data...</h1>}
    </div>
  )
}

export default Profile