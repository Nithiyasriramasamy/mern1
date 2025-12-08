import { useState } from 'react'

function App() {
  const productList=[
    {
      Image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      name:"laptop",
      price:1000,
      description:"this is a laptop"
    },
    {
      Image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      name:"mobile",
      price:500,
      description:"this is a mobile"
    },
    {
      Image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      name:"tablet",
      price:300,
      description:"this is a tablet"
    },
    {
      Image:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      name:"watch",
      price:200,
      description:"this is a watch"
    }
  ]
  
  return (
    <>
   <h1 syle={{color:"red"}}>product List</h1>
   <div style={{ display: "flex", gap: "20px" }}> 
   {productList.map((product,index)=>(
    <div 
    key={index}
    style={{
      width: "200px",
      padding: "15px",
      border: "1px solid black",
      borderRadius: "8px",
      background: "black"
    }}
    >
      <img src={product.Image} alt={product.name} width="200px" height="200px" />
      <h2>{product.name}</h2>
      <h3><u>price:{product.price}</u></h3>
      <p>{product.description}</p>
      <p>---------------------------------</p>
    </div>

   ))} 
   </div>

    </>
  )
}

export default App
