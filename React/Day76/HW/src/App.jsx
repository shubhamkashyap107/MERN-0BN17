import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Products from './Components/Products'

const App = () => {
  const[apiData, setApiData] = useState([])
  const[products, setProducts] = useState([])

  useEffect(() => {
        async function getData()
        {
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            setProducts(data.products)
            setApiData(data.products)
        }

        getData()
    }, [])
  
  return (
    <div>
      <Navbar setProducts={setProducts} products={products} apiData={apiData} />

      <Products products={products} setProducts={setProducts}/>
    </div>
  )
}

export default App