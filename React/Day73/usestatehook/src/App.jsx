import React, { useState } from 'react'
import DemoForm from './Components/DemoForm'
import Grandparent from './Components/Grandparent'
import Parent from './Components/Parent'
import Child from './Components/Child'
import Counter from './Components/Counter'
import DarkAndLightMode from './Components/DarkAndLightMode'
import Navbar from './Components/Navbar'

const App = () => {

  console.log("App Called")
  const[count, setCOunt] = useState(0)
  const[useDarkMode, setUseDarkMode] = useState(false)
  

  return (
    <div>
      {/* <DemoForm /> */}
      {/* <button onClick={() => {
        setCOunt(count + 1)
      }} className='bg-blue-200'>Increase app count</button>

      <Grandparent />
      <Parent />
      <Child /> */}

      {/* <Counter /> */}

      <Navbar setUseDarkMode={setUseDarkMode} />
      <DarkAndLightMode useDarkMode={useDarkMode} />

    </div>
  )
}

export default App