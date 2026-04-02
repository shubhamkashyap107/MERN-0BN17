import React from 'react'
import { useEffect } from 'react'

const A = () => {
        useEffect(() => {
        console.log(document.location.pathname)
    })
  return (
    <div>A</div>
  )
}

export default A