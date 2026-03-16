import React from 'react'

const OnSale = ({children}) => {
  return (
    <div style={{position : "relative"}}>
        <span style={{position : "absolute", backgroundColor : "red", color : "white", right : "0px", top : "20px", padding : "10px"}}>On Sale</span>
        {children}
    </div>
  )
}

export default OnSale