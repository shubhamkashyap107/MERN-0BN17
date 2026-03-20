import React from 'react'

const Left = ({setText}) => {
  return (
    <div className='border h-[100vh] w-[50vw]'>
        <input onChange={(e) => {
            setText(e.target.value)
        }} type="text" />
    </div>
  )
}

export default Left