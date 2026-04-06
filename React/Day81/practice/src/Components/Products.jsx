import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../App'

const Products = () => {

  const [products, setProducts] = useState([])
  const{ setCart, cart } = useContext(CartContext)

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://dummyjson.com/products")
      const data = await res.json()
      setProducts(data.products)
    }
    getData()
  }, [])

  return (
    <div className="min-h-screen bg-neutral-100 px-6 py-10">
      {
        products.length == 0 ? (
          <h1 className="text-center text-xl font-medium text-neutral-600">
            Loading...
          </h1>
        ) : (
          <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
              products.map((item, index) => {
                return (
                  <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200 group">
                    
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                    />

                    <div className="p-4 flex flex-col gap-2">
                      <h2 className="text-sm font-semibold text-neutral-800 line-clamp-1">
                        {item.title}
                      </h2>

                      <span className="text-lg font-bold text-neutral-900">
                        ${item.price}
                      </span>

                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => {

                            const foundProduct = cart.find((cp) => {
                              return cp.id == item.id
                            })

        
                            if(!foundProduct)
                            {
                              setCart(prev => [...prev , {...item, quantity : 1}])
                            }
                            else
                            {
                              let filteredArray = cart.filter((cp) => {
                                return cp.id != foundProduct.id
                              })
                              filteredArray.push({...foundProduct, quantity : foundProduct.quantity + 1})
                              setCart(filteredArray)
                            }
                          }}
                          className="flex-1 text-xs bg-black text-white py-2 rounded-lg hover:bg-neutral-800 transition">
                          Add
                        </button>

                        <button
                          onClick={() => {
                            const foundProduct = cart.find((cp) => {
                              return cp.id == item.id
                            })

                            if(foundProduct)
                            {
                              if(foundProduct.quantity > 1)
                              {
                                let filteredArray = cart.filter((cp) => {
                                  return cp.id != foundProduct.id
                                })
                                filteredArray.push({...foundProduct, quantity : foundProduct.quantity - 1})
                                setCart(filteredArray)
                              }
                              else
                              {
                                let filteredArray = cart.filter((cp) => {
                                  return cp.id != foundProduct.id
                                })
                                setCart(filteredArray)
                              }
                            }
                          }}
                          className="flex-1 text-xs border border-neutral-300 py-2 rounded-lg hover:bg-neutral-100 transition">
                          Remove
                        </button>
                      </div>
                    </div>

                  </article>
                )
              })
            }
          </main>
        )
      }
    </div>
  )
}

export default Products