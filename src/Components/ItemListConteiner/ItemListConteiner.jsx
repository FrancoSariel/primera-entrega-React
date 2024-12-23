import React from 'react'
import './ItemListContainer.css'
const ItemListConteiner = (props) => {

const {Bienvenida} = props

  return (
    <h1 className="Saludo">{Bienvenida}</h1>
  )
}

export default ItemListConteiner
