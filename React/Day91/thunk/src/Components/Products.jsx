import React from 'react'
import Loader from './Loader'
import { useSelector } from 'react-redux'

const Products = () => {
  const data = useSelector((store) => {
    return store.userSlice.data.products
  })
  return (
    <div>
      {data.length > 0 ? data.map((item) => {
        return <p>{item.title}</p>
      }) : <Loader />}
    </div>
  )
}

export default Products