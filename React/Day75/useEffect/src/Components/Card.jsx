import React from 'react'

const Card = ({image, name, id}) => {
  return (
        <article key={id} className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300">
            
            <img
            className="w-full h-60 object-cover rounded-xl mb-4"
            src={image || "https://images.unsplash.com/photo-1661860982808-70e8576332ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVmYXVsdCUyMGltYWdlfGVufDB8fDB8fHww"}
            alt=""
            />

            <p className="text-lg font-semibold text-center">
            {name}
            </p>

        </article>
  )
}

export default Card