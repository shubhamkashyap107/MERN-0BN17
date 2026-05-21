import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"

const Home = () => {

  const [data, setData] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    fetch("http://localhost:8080/todos")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      
      <h1 className='text-4xl font-bold text-center mb-10 text-gray-800'>
        Todo List
      </h1>

      {data.length > 0 ? <main className='max-w-3xl mx-auto grid gap-6'>
        {data.map((item) => {
          return (
            <article
              key={item.id}
              className='bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition'
            >
              <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
                {item.title}
              </h2>

              <p className='text-gray-600 mb-5'>
                {item.desc}
              </p>

              <div className='flex gap-3'>
                <button onClick={() => {
                  nav(`/edit/${item.id}?title=${item.title}&desc=${item.desc}`)
                }} className='px-5 py-2 rounded-lg bg-blue-500 cursor-pointer text-white font-medium hover:bg-blue-600 transition'>
                  Edit
                </button>

                <button 
                 onClick={() => {
                  fetch(import.meta.env.VITE_BE_URL + `/todos/${item.id}`, {
                    method : "DELETE",

                  })
                  .then((res) => {
                    return res.json()
                  })
                  .then((data) => {
                    setData(data)
                    toast.success("Task Deleted")
                  })
                 }}
                 className='px-5 py-2 rounded-lg bg-red-500 cursor-pointer text-white font-medium hover:bg-red-600 transition'>
                  Delete
                </button>
              </div>
            </article>
          )
        })}
      </main> : <h1>No tasks yet, add first</h1>}

    </div>
  )
}

export default Home