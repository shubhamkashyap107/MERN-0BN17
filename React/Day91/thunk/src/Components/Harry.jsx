import React from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader'

const Harry = () => {
  const data = useSelector((store) => {
    return store.userSlice.data.harry
  })
  return (
    <div>
      {data.length > 0 ? data.map((item) => {
        return <p>{item.name}</p>
      }) : <Loader />}
    </div>
  )
}

export default Harry