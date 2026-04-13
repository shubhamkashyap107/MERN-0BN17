// import React, { useRef, useState } from 'react'

// const App = () => {

//   let a = 0
//   const[count, setCount] = useState(0)
//   const countRef = useRef(0)


//   return (
//     <div>

//       <div>
//         <h1>{a}</h1>
        
//         <button
//           onClick={() => {
//             a = a + 1
//             console.log(a)
//           }}
//         >
//           Increment let variable
//         </button>
//       </div>


//       <div>
//         <h1>{count}</h1>

//         <button onClick={() => {
//           setCount(count + 1)
//         }}>Increment count state</button>
//       </div>


//       <div>
//         <h1>{countRef.current}</h1>

//         <button onClick={() => {
//           countRef.current = countRef.current + 1
//           console.log(countRef)
//         }}>Increment count ref</button>
//       </div>
      
//     </div>
//   )
// }

// export default App



import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const[text, setText] = useState("")
  const myRef = useRef(0)
  const ipRef = useRef()


  useEffect(() => {
    myRef.current++
  })


  useEffect(() => {
    ipRef.current.focus()
  }, [])

  return (
    <div>
      <input
       ref={ipRef}
       onChange={(e) => {
        setText(e.target.value)
       }}
       value={text}
       type="text"
      />


      <h1>render count {myRef.current}</h1>



      <div>
       <img style={{
        height : "200px",
        width : "200px",
        borderRadius : "50%",
        cursor : "pointer"
       }}
       onClick={() => {
        ipRef.current.click()
       }} 
       src="https://images.unsplash.com/photo-1774804819042-3e688108c50f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D" alt="" />
       
       
       <input
        ref={ipRef}
        style={{
        display : "none"
       }} type="file" />


      </div>

    </div>
  )
}

export default App