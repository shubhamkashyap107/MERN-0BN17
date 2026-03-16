import React from 'react'

const Child = ({children}) => {
  return (
    <div>
        <h1>This is the child component</h1>
        {children}
    </div>
  )
}

export default Child