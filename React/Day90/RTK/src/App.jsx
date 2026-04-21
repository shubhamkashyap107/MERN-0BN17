import React from 'react'
import List from './Components/List'
import Display from './Components/Display'

const App = () => {
  return (
    <div>
      <div className='flex'>
        <List />
        <Display />
      </div>
    </div>
  )
}

export default App