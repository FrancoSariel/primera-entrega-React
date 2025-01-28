import React from 'react'
import ItemListConteiner from './Components/ItemListConteiner/ItemListConteiner'
import Navbar from './Components/NavBar/Navbar'
import Productos from './Components/Productos/Productos'


const App = () => {
  return (
    <>
      <Navbar />
     
      <ItemListConteiner Bienvenida="Bienvenido a nuestra pagina" />
      <Productos/>
    
      
    </>


  )
}

export default App
