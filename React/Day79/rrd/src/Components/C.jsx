import React from 'react'
import { useEffect } from 'react'

const C = () => {
        useEffect(() => {
        console.log(document.location.pathname)
    })
  return (
    <div>C</div>
  )
}

export default C