import React from 'react'

const Display = ({ todos, setTodos }) => {
  return (
    <div className='w-[50vw] h-[92vh] bg-yellow-100 flex flex-col'>
      
      {/* Header */}
      <div className='px-8 pt-8 pb-4'>
        <h2 className='text-2xl font-semibold text-neutral-900 tracking-tight'>
          Tasks
        </h2>
      </div>

      {/* Content */}
      <main className='flex-1 overflow-y-auto px-8 pb-8 space-y-3'>
        {todos.length === 0 ? (
          <p className='text-neutral-400 mt-10 text-sm'>
            Nothing here yet.
          </p>
        ) : (
          todos.map((item, index) => {
            return (
                <article
                  key={index}
                  className='group py-4 px-4 rounded-xl bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-200 flex items-center justify-between'
                >
                  {/* Left content */}
                  <div>
                    <h2 className='text-[15px] font-medium text-neutral-900'>
                      {item.title}
                    </h2>

                    <p className='text-[13px] text-neutral-500 mt-1 leading-relaxed'>
                      {item.desc}
                    </p>
                  </div>

                  {/* Delete button */}
                  <button
                    className=' transition text-red-500 text-sm font-medium cursor-pointer'
                    onClick={() => {
                      const filteredTodos = todos.filter((obj, idx) => {
                        return index != idx
                      })

                      setTodos(filteredTodos)
                    }}
                  >

                    Delete
                  </button>
                </article>
            )
          })
        )}
      </main>

    </div>
  )
}

export default Display