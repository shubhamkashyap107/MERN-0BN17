import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    const[userData, setUserData] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setUserData({
                name : "Shubham",
                isCorrect : false
            })
        }, 2000)
    }, [])

  if(!userData)
  {
    return <h1>Please Wait...</h1>
  }

//   return <Outlet />

  return userData.isCorrect ? <Outlet /> : <Navigate to={"/login"} />
}

export default ProtectedRoutes