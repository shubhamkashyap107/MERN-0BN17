import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import toast from "react-hot-toast"

const Edit = () => {
  const{id} = useParams()
  const [getter] = useSearchParams()
  const[title, setTitle] = useState(() => getter.get("title"))
  const[desc, setDesc] = useState(() => getter.get("desc"))
  const nav = useNavigate()



  // useEffect(() => {
  //   fetch(import.meta.env.VITE_BE_URL + `/todos/${id}`)
  //   .then((res) => {
  //     return res.json()
  //   })
  //   .then((data) => {
  //     console.log(data)
  //   })
  // })

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
      
      <div className='w-full max-w-md bg-white shadow-xl rounded-2xl p-6'>
        
        <h1 className='text-2xl font-bold text-center mb-6'>
          Add New Task
        </h1>

        <div className='space-y-5'>

          <div className='flex flex-col gap-2'>
            <label htmlFor="ip" className='font-medium text-gray-700'>
              Title
            </label>

            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              type="text"
              id='ip'
              placeholder='Enter task title'
              className='border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="ds" className='font-medium text-gray-700'>
              Description
            </label>

            <textarea
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value)
              }}
              id="ds"
              rows="5"
              placeholder='Enter task description'
              className='border border-gray-300 rounded-lg px-4 py-2 outline-none resize-none focus:ring-2 focus:ring-black'
            ></textarea>
          </div>



          <button

              

            onClick={() => {
              if(!title || !desc)
              {
                toast.error("Please enter title and desc")
                return
              }
            
              fetch(import.meta.env.VITE_BE_URL + `/todos/${id}`, {
                method : "PATCH",
                headers : {
                  "content-type" : "application/json"
                },
                body : JSON.stringify({title, desc})
              })
              .then((res) => {
                return res.json()
              })
              .then(() => {
                toast.success("Task edited successfully...")
                nav("/")
              })
            }}
            className='w-full bg-black text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition'>
            Save Changes
          </button>











        </div>

      </div>

    </div>
  )
}

export default Edit