class Producto {
    constructor(id, nombre, precio){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio
    }
}

let mostrador = []

const cargarMostrador = async () => {
    const response = await fetch("../stock.json")
    const data = await response.json()
    
    for(let producto of data){
        let productoNuevo = new Producto(producto.id, producto.nombre, producto.precio,)
        mostrador.push(productoNuevo)
    }
    
    localStorage.setItem("mostrador", JSON.stringify(mostrador))
}

if(localStorage.getItem("mostrador")){

    for(let producto of JSON.parse(localStorage.getItem("mostrador"))){
        let productoNuevo = new Producto(producto.id, producto.nombre, producto.precio)
        mostrador.push(productoNuevo)
    }
}else{
    cargarMostrador()  
}