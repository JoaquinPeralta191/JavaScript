//variables
let busqueda = document.getElementById("buscador");
let productosEnCarrito = []
let sectionProductos = document.getElementById("productos")
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let coincidencia = document.getElementById("coincidencia")
//funciones

function mostrarCatalogo(array){
    sectionProductos.innerHTML = ""
    for(let producto of array){
        let nuevoProductoDiv = document.createElement("div")
        nuevoProductoDiv.classList.add("col-12", "col-md-6", "col-lg-4", "mb-3")
        nuevoProductoDiv.innerHTML = `
        <div id="${producto.id}" class="card tarjetas" style="width: 18rem;">
                <img class="card-img-top img-fluid" style="height: 250px;"src="./../assets/images/img${producto.id}.jpg" alt="${producto.nombre}">
                <div class="card-body">
                    <h4 class="card-title">${producto.nombre}</h4>
                    <p class="">Precio: ${producto.precio}</p>
                <button id="agregarBtn${producto.id}" class="btn btn-outline-success">Agregar al carrito</button>
                </div>
        </div>
        `
        sectionProductos.appendChild(nuevoProductoDiv)
        let agregarBtn = document.getElementById(`agregarBtn${producto.id}`)
        agregarBtn.addEventListener("click", ()=>{
            agregarAlCarrito(producto)
        })
} 
}

if(localStorage.getItem("carrito")){
   productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
   console.log(productosEnCarrito)
}else{
   productosEnCarrito = []
   localStorage.setItem("carrito", productosEnCarrito)

}

function agregarAlCarrito(producto){

   console.log(`El producto ${producto.nombre} ha sido agregado al carrito. Vale ${producto.precio}`)
   productosEnCarrito.push(producto)
   console.log(productosEnCarrito)
   localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}

function cargarProductosCarrito(array){
    modalBodyCarrito.innerHTML = ""
    array.forEach((productoEnCarrito)=>{
        modalBodyCarrito.innerHTML +=
        `
        <div class="card border-primary mb-3" id ="productoCarrito${productoEnCarrito.id}" style="width: 100%;">
                 <img class="card-img-top" height="300px" src="./../assets/images/img${productoEnCarrito.id}.jpg" alt="">
                 <div class="card-body">
                        <h4 class="card-title">${productoEnCarrito.nombre}</h4>
                    
                         <p class="card-text">$${productoEnCarrito.precio}</p> 
                         <button class= "btn btn-danger" id="botonEliminar${productoEnCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                 </div>    
            </div>
        `
    })
}

function buscarInfo(buscado, array){
    let busquedaArray = array.filter(
        (producto)=> producto.nombre.toLowerCase().includes(buscado)
    )
    busquedaArray.length == 0 ?
    (coincidencia.innerHTML = `<h3>No hay coincidencias con su búsqueda</h3>`, mostrarCatalogo(busquedaArray)) 
    :
    (coincidencia.innerHTML = "", mostrarCatalogo(busquedaArray))
    }
//eventos

busqueda.addEventListener("input", () => {
    buscarInfo(busqueda.value.toLowerCase(), mostrador)
})

mostrarCatalogo(mostrador)

botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosEnCarrito)
})