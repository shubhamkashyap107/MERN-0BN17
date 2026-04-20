// import React, { useState } from 'react'
// import { buyCake } from "../Utils/Cake/CakeActions"
// import { connect } from "react-redux"
// const Cake = (props) => {


  
  
//     const[quantity, setQuantity] = useState("")
  
//     return (
//     <div className="p-5 space-y-4 max-w-md">
      
//       <h1 className="text-lg font-semibold text-gray-800">
//         Number of cakes: 
//         <span className="ml-2 text-blue-600">{props.numOfCakes}</span>
//       </h1>

//       <div className="flex items-center gap-3">
//         <input
//           onChange={(e) => {
//             setQuantity(e.target.value)
//           }}
//           type="number"
//           placeholder="Enter quantity"
//           className="border border-gray-300 rounded px-3 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button 
//           onClick={() => props.buyCake(Number(quantity))}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
//           BUY CAKE
//         </button>
//       </div>

//     </div>
//   )
// }


// function mapStateToProps(state)
// {
//     return {
//         numOfCakes : state.numOfCakes
//     }
// }


// function mapDispatchToProps(dispatch)
// {
//     return {
//         buyCake : (q) => dispatch(buyCake(q))
//     }
// }


// // const someFunction = connect(mapStateToProps, mapDispatchToProps)
// // const MyCakeComponent = someFunction(Cake)
// export default connect(mapStateToProps, mapDispatchToProps)(Cake)



import { useDispatch, useSelector } from "react-redux"
import { buyCake } from "../Utils/Cake/CakeActions"

const Cake = () => {
  const obj = useSelector(store => store.numOfCakes)
  const dispatch = useDispatch()
  // console.log(obj)
  return (
    <div>
      <h1>Number of cakes : {obj}</h1>
      <button onClick={() => {
        dispatch({type : "BUY_CAKE", payload : 2})
      }}>Buy Cake</button>
    </div>
  )
}

export default Cake