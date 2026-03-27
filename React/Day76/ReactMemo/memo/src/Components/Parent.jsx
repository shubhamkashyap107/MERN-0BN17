import React from 'react'

const Parent = React.memo(() => {
  console.log("Parent Rendered")
  return (
    <div>Parent</div>
  )
})

export default Parent