import React, { useEffect, useState } from 'react'
import {getProductos, getProductosPorCategoria} from '../../asyncmock'
import ItemList from '../itemList/itemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = ({}) => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams();

  useEffect(()=>{

      const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

      funcionProductos(idCategoria)
          .then(res => setProductos(res))

  },[idCategoria])

  return (
    <div>
    
        <ItemList productos={productos} />

    </div>
   
  )
}

export default ItemListContainer
