import React from 'react'
import Parent from './Parent'

const Grandparent = () => {

    console.log("GP Rendered")

  return (
    <div>
        <p>GP</p>
        {/* <Parent /> */}
    </div>

  )
}

export default Grandparent