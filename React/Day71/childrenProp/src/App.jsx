import React from 'react'
import Card from './Components/Card'
import OnSale from './Components/OnSale'

const App = () => {
  return (
    <div>

      <div style={{display : "flex", justifyContent : "space-around"}}>

        <Card 
          name={"Apple"} 
          price={50} 
          src={"https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGV8ZW58MHx8MHx8fDA%3D"} 
        />

        <Card 
          name={"Mango"} 
          price={70} 
          src={"https://images.unsplash.com/photo-1635716279493-d1e30afc25a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuZ298ZW58MHx8MHx8fDA%3D"} 
        />

        {/* <OnSale>

          <Card 
            name={"Pineapple"} 
            price={100} 
            src={"https://images.unsplash.com/photo-1490885578174-acda8905c2c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGluZWFwcGxlfGVufDB8fDB8fHww"} 
          />

        </OnSale> */}

        <Card 
          name={"Orange"} 
          price={20} 
          src={"https://images.unsplash.com/photo-1609424572698-04d9d2e04954?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
        />

      </div>

    </div>
  )
}

export default App