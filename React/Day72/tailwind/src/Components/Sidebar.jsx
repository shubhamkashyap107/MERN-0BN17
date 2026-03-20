import React, { useState } from 'react'

const Sidebar = () => {

    const[isSidebarOpen, setIsSidebarOpen] = useState(false)
    
  return (
    <aside
     onMouseEnter={() => {
        setIsSidebarOpen(true)
     }}
     onMouseLeave={() => {
        setIsSidebarOpen(false)
     }}
     className={'h-[100vh] bg-yellow-200 flex flex-col gap-[30px] items-center pt-[50px] ' + 
     (isSidebarOpen ? "w-[20vw]" : "w-[5vw]")}>
        
        <p><span>🏠</span>{isSidebarOpen && "Home"}</p>
        <p><span>💻</span>{isSidebarOpen && "Code"}</p>
        <p><span>▶️</span>{isSidebarOpen && "Media"}</p>

    </aside>
  )
}

export default Sidebar