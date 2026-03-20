import React, { useState } from 'react'

const DemoForm = () => {

    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-md w-[320px]">
        
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label htmlFor="ip" className="block text-sm font-medium mb-1">
            Username
          </label>
          <input
            onChange={(e) => {
                setUsername(e.target.value)
            }}
            value={username}
            type="text"
            id="ip"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="pw" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            value={password}
            id="pw"
            placeholder="qwertyu"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
         onClick={() => {
            console.log(`User logged in with username ${username} and password ${password}`)
            setUsername("")
            setPassword("")

         }}
         className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Login
        </button>

      </div>
    </div>
  )
}

export default DemoForm