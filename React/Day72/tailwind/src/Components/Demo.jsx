import React, { useState } from 'react'

const Demo = () => {
    
    const[show, setShow] = useState(true)

  return (
    <div>
        <button onClick={() => {
            setShow(!show)
        }}>
            {show ? "Hide" : "Show"}
        </button>


        {show && <div className='bg-red-400 h-[200px] w-[200px]'>
            
        </div>}

        {show ? (<div className='bg-red-400 h-[200px] w-[200px]'>
            
        </div>) : ("")}
    </div>
  )
}

export default Demo