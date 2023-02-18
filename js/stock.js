class Producto {
    constructor(id, nombre, precio){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio
    }
}
 
//  const producto1 = new Producto(1,"Chesecake", 1900)
 
//  const producto2 = new Producto(2,"Chocotorta", 2100)
 
//  const producto3 = new Producto(3,"Tarta de Frutilla", 1200)
 
//  const producto4 = new Producto(4,"Alfajores", 2000)
 
//  const producto5 = new Producto(5,"Tarta de limon", 1600)
 
//  const producto6 = new Producto(6, "Huevo de chocolate relleno", 1400)
 

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
        let productoNuevo = new Producto(producto.id, libro.nombre, producto.precio)
        mostrador.push(productoNuevo)
    }
}else{
    cargarMostrador()  
}