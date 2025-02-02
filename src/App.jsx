import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import ItemListContainer from './Components/ItemListContainer/itemListContainer'
import { BrowserRouter,Routes, Route } from 'react-router-dom'





const App = () => {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          
          
          </Routes>
          </BrowserRouter>
   

    
      
    </>


  )
}

export default App
