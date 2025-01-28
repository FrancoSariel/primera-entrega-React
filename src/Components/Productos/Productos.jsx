import React, { useState, useEffect } from 'react'

 const [item, setItem] = useState([]);

 const getItem = async () => {
  const url = "https://fakestoreapi.com/products?limit=6"
   const items = await fetch (url);
   const itemApi = await items.json();

   console.log(itemApi);

 }
 useEffect(() => {
    
 }, []);

    





  return (
    <div>
          <h2>productos</h2>
          <ul>
              {
                productos.map(producto=>{
                  return(
                    <li>
                        {producto.tittle}
                        <img src={producto.image} alt="" />
                    </li>
                  )
                })

              }
          </ul>
    </div>
  )
}

export default Productos
