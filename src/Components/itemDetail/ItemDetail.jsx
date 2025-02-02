import { useState } from 'react';

import { Link } from 'react-router-dom';
import './ItemDetail.css'

import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img }) => {

  const {agregarAlCarrito} = useContext(CarritoContext)

  //Creamos un estado local con la cantidad de productos agregados. 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //Creamos una función manejadora de la cantidad: 

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id,nombre, precio}
    agregarAlCarrito(item,cantidad)
    
  }


  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <img src={img} alt={nombre} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam hic molestiae laudantium non provident maxime magni debitis sapiente! Pariatur illum tempore excepturi asperiores, officiis magnam ex placeat quibusdam necessitatibus?</p>



    </div>
  )
}

export default ItemDetail