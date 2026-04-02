import React from 'react'
import { useEffect } from 'react'

const B = () => {
        useEffect(() => {
        console.log(document.location.pathname)
    })
  return (
    <div>B</div>
  )
}

export default B