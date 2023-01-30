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
 
 const producto3 = new Producto(3,"Galletas", 1200)
 
 const producto4 = new Producto(4,"Alfajores", 2000)
 
 const producto5 = new Producto(5,"Tarta de limon", 1600)
 
 const producto6 = new Producto(6, "Budin glaseados", 1400)
 
 const mostrador = [producto1, producto2, producto3, producto4, producto5, producto6]

 let sectionProductos = document.getElementById("productos")

 function mostrarCatalogo(array){
     //vaciar Div
     sectionProductos.innerHTML = ""
     //tenemos nuestros libros en estanteria:
     for(let producto of array){
         let nuevoProductoDiv = document.createElement("div")
         //otra forma de sumarle una class a un elemento html
         //classList + add agrego clases al elemento seleccionado
         nuevoProductoDiv.classList.add("col-12", "col-md-6", "col-lg-4", "mb-3")
         nuevoProductoDiv.innerHTML = `
         <div id="${producto.id}" class="card tarjetas" style="width: 18rem;">
                 <img class="card-img-top img-fluid" style="height: 200px;"src="./../assets/images/img${producto.id}.jpg" alt="${producto.nombre}">
                 <div class="card-body">
                     <h4 class="card-title">${producto.nombre}</h4>
                     <p class="">Precio: ${producto.precio}</p>
                 <button id="agregarBtn${producto.id}" class="btn btn-outline-success">Agregar al carrito</button>
                 </div>
         </div>
         `
         sectionProductos.appendChild(nuevoProductoDiv)
         //captura agregarBtn
         let agregarBtn = document.getElementById(`agregarBtn${producto.id}`)
         //adjunto evento
         agregarBtn.addEventListener("click", ()=>{
             agregarAlCarrito(producto)
         })
} 
}



if(localStorage.getItem("carrito")){
    //cuando ya existe algo en el storage entra aca:
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
    console.log(productosEnCarrito)
}else{
    productosEnCarrito = []
    localStorage.setItem("carrito", productosEnCarrito)

}
//if para preguntar si entra por primera vez o si hay algo en storage


function agregarAlCarrito(producto){

    console.log(`El producto ${producto.nombre} ha sido agregado al carrito. Vale ${producto.precio}`)
    //agregar libro al array de carrito
    productosEnCarrito.push(producto)
    console.log(productosEnCarrito)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}