import React, { useState } from 'react'
import Left from './Component/Left'
import Right from './Component/Right'
import Card from "./Component/Card"

const products = [
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    name: "Smart Watch",
    price: 2999
  },
  {
    img: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
    name: "Wireless Headphones",
    price: 1999
  },
  {
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    name: "Laptop",
    price: 54999
  },
  {
    img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
    name: "Running Shoes",
    price: 2499
  },
  {
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    name: "DSLR Camera",
    price: 45999
  },
  {
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    name: "Smartphone",
    price: 15999
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    name: "Smart Watch",
    price: 2999
  },
  {
    img: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
    name: "Wireless Headphones",
    price: 1999
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    name: "Smart Watch",
    price: 2999
  },
  {
    img: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
    name: "Wireless Headphones",
    price: 1999
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    name: "Smart Watch",
    price: 2999
  },
  {
    img: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
    name: "Wireless Headphones",
    price: 1999
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    name: "Smart Watch",
    price: 2999
  },
  {
    img: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
    name: "Wireless Headphones",
    price: 1999
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    name: "Smart Watch",
    price: 2999
  },
  {
    img: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
    name: "Wireless Headphones",
    price: 1999
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    name: "Smart Watch",
    price: 2999
  },
  {
    img: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
    name: "Wireless Headphones",
    price: 1999
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    name: "Smart Watch",
    price: 2999
  },
  {
    img: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
    name: "Wireless Headphones",
    price: 1999
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    name: "Smart Watch",
    price: 2999
  },
  {
    img: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
    name: "Wireless Headphones",
    price: 1999
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    name: "Smart Watch",
    price: 2999
  },
  {
    img: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
    name: "Wireless Headphones",
    price: 1999
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    name: "Smart Watch",
    price: 2999
  },
  {
    img: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
    name: "Wireless Headphones",
    price: 1999
  },
  
];

const App = () => {
  return (
   <div className='grid grid-cols-4'>
    {products.map((item) => {
      return item.price > 2000 ? <Card img={item.img} name={item.name} price={item.price} /> : undefined
    })}
   </div>
  )
}

export default App