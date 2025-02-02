
const misProductos = [
    { id: "1", nombre: "Suspension Neumatica", precio: 2500, img: "./img/neumatica.jpg", idCat: "Neumatica"},
    { id: "2", nombre: "Suspension Regulable", precio: 1200, img: "./img/regulable.jpg", idCat: "Regulable"},
    { id: "3", nombre: "Espirales", precio: 700, img: "./img/espirales.jpg", idCat: "Regulable"},
    { id: "4", nombre: "Pulmon De suspension de aire", precio: 800, img: "./img/pulmon.jpg", idCat: "Neumatica"},
]


export const getProductos = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(misProductos)
        }, 1000);
    })
}

export const getUnProducto = (id) => {
        return new Promise((resolve) =>{
            setTimeout(() => {
               const producto = misProductos.find(item => item.id === id);
               resolve(producto); 
            }, 1000);
        })

}

export const getProductosPorCategoria = (idCategoria) => {
        return new Promise((resolve)=>{
            setTimeout(() => {
               const producto = misProductos.filter(item => item.idCat === idCategoria);
               resolve(productoCategoria);
            }, 1000);
        } )

}


