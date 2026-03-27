import React, { useEffect, useState } from 'react'

const Navbar = ({products, setProducts, apiData}) => {

  const[query, setQuery] = useState("")
  
  useEffect(() => {
    const filteredProducts = apiData.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase())
    })

    setProducts(filteredProducts)
  }, [query])

  return (
    <nav className='bg-blue-400 flex justify-between px-5 py-2.5 text-white text-2xl'>
        <h3>LOGO</h3>


        <input
          onChange={(e) => {
            setQuery(e.target.value)
          }}
          className='bg-white text-black outline-none px-2 rounded-lg' type="text" placeholder='search...' />
    </nav>
  )
}

export default Navbar