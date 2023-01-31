class Producto {
    constructor(id, nombre, precio){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio
    }
    //métodos
    mostrarInfoLibro(){
        console.log(`El articulo es ${this.nombre} y su precio es ${this.precio}`)
    }
 }
 
 const producto1 = new Producto(1,"Chesecake", 1900)
 
 const producto2 = new Producto(2,"Chocotorta", 2100)
 
 const producto3 = new Producto(3,"Tarta de Frutilla", 1200)
 
 const producto4 = new Producto(4,"Alfajores", 2000)
 
 const producto5 = new Producto(5,"Tarta de limon", 1600)
 
 const producto6 = new Producto(6, "Huevo de chocolate relleno", 1400)
 
 const mostrador = [producto1, producto2, producto3, producto4, producto5, producto6]

