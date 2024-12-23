import React from 'react'
import './CartWidget.css'
import imgCarrito from '../CartWidget/carrito.png'
const CartWidget = () => {


  return (
    <div>
      <img className='imgCarrito' src={imgCarrito} alt="imagen del carrito" />
    </div>
  )
}

export default CartWidget
