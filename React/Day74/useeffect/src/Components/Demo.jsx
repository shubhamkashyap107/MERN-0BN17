import React, { useEffect } from 'react'

const Demo = () => {
    useEffect(() => {
       
        // console.log("Demo Mounted")
        let id = setInterval(() => {
            console.log("Heavy Task")
        }, 500)



        return () => { // cleanup function
            // console.log("Demo Unmounted")
            clearInterval(id)
        }

    }, [])
  return (
    <div>Demo</div>
  )
}

export default Demo