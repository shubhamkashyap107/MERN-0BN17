import React from 'react'

const Comment = ({ id, author, text, replies }) => {
  return (
    <div className='ml-6 mt-5 border-l-2 border-zinc-700 pl-5'>
      <div className='rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 shadow-md transition-all hover:border-zinc-700'>
        <div className='flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white uppercase'>
            {author?.[0]}
          </div>

          <div>
            <h2 className='text-base font-semibold text-white'>
              {author}
            </h2>

            <p className='text-xs text-zinc-400'>
              @{author?.toLowerCase().replace(/\s+/g, '')}
            </p>
          </div>
        </div>

        <p className='mt-4 text-sm leading-relaxed text-zinc-300'>
          {text}
        </p>
      </div>

      <div className='mt-4 space-y-4'>
        { replies.length > 0 && replies.map((item) => {
          return (
            <Comment
              id={item.id}
              author={item.author}
              text={item.text}
              replies={item.replies}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Comment