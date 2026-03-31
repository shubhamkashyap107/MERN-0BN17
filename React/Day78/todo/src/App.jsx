import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Display from './Components/Display'
import { Toaster } from 'react-hot-toast';

const App = () => {

  const[darkMode, setDarkMode] = useState(false)
  const[todos, setTodos] = useState([])
  console.log(todos)

  return (
    <div className={"h-screen " + (darkMode ? "bg-black" : "bg-white")}>
      <Toaster />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />


      <div className='flex'>
        <Form todos={todos} setTodos={setTodos} />
        <Display todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  )
}

export default App