import React, { useState } from 'react'
import toast from "react-hot-toast"

const Form = ({todos, setTodos}) => {

    const[title, setTitle] = useState("")
    const[desc, setDesc] = useState("")

  return (
    <div className='w-[50vw] h-[92vh] flex items-center justify-center bg-gray-200'>
        <div className='w-[80%] max-w-md bg-white p-6 rounded-2xl shadow-md space-y-5'>
            
            <h2 className='text-2xl font-semibold text-gray-800'>Add New Task</h2>

            <div className='flex flex-col space-y-1'>
                <label htmlFor="title" className='text-sm font-medium text-gray-600'>
                    Title
                </label>
                <input
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    value={title}
                    id='title'
                    type="text"
                    placeholder='Enter task title'
                    className='px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-black/20 transition'
                />
            </div>

            <div className='flex flex-col space-y-1'>
                <label htmlFor="desc" className='text-sm font-medium text-gray-600'>
                    Description
                </label>
                <textarea
                    onChange={(e) => {
                        setDesc(e.target.value)
                    }}
                    value={desc}
                    id='desc'
                    placeholder='Enter task description'
                    rows={4}
                    className='px-3 py-2 rounded-lg outline-none resize-none focus:ring-2 focus:ring-black/20 transition'
                ></textarea>
            </div>

            <button
                onClick={() => {
                    if(title.trim().length == 0 || desc.trim().length == 0)
                    {
                        // alert("Please neter all the values")
                        toast.error("Please enter all the fields...")
                        return
                    }
                    setTodos([...todos, {title : title.trim(), desc : desc.trim()}])
                    setDesc("")
                    setTitle("")
                }}
                className='w-full py-2 bg-black text-white rounded-lg font-medium hover:opacity-90 transition'>
                Add Task
            </button>

        </div>      
    </div>
  )
}

export default Form