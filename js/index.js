//variables
let busqueda = document.getElementById("buscador")
let productosEnCarrito = []
let sectionProductos = document.getElementById("productos")
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let coincidencia = document.getElementById("coincidencia")
let botonEliminar = document.getElementById("botonEliminar")
let precioTotal = document.getElementById("precioTotal")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let loaderTexto = document.getElementById("loaderTexto")
let loader = document.getElementById("loader")

//funciones

function agregarAlCarrito(producto){

    let productoAgregado = productosEnCarrito.find((elem) => elem.id == producto.id)
 
    if(productoAgregado == undefined){
    productosEnCarrito.push(producto)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    Toastify({
     text: `Se ha agregado al carrito`,
     duration: 3000,
     gravity: "top",
     position: "right",
     style: {
         background: "#7e066c",
         color: "white"
     }
 }).showToast()
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Epaa...',
            text: 'Este producto ya se encuentra en el carrito',
          })
  }
 }

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

function cargarProductosCarrito(array){
    modalBodyCarrito.innerHTML = ""
    array.forEach((productoEnCarrito)=>{
        modalBodyCarrito.innerHTML +=
        `
        <div class="card border-primary mb-3s" id ="productoCarrito${productoEnCarrito.id}" style="width: 100%;">
                 <div class="card-body">
                        <h4 class="card-title">${productoEnCarrito.nombre}</h4>
                    
                         <p class="card-text">$${productoEnCarrito.precio}</p> 
                         <button class= "btn btn-danger botonEliminar" id="botonEliminar${productoEnCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                 </div>    
            </div>
        `
    })

    array.forEach((productoEnCarrito)=>{
        document.getElementById(`botonEliminar${productoEnCarrito.id}`).addEventListener("click", () => {
            let productoCont = document.getElementById(`productoCarrito${productoEnCarrito.id}`)
            productoCont.remove()
            let productoEliminar = array.find((producto) => producto.id == productoEnCarrito.id)
            let posicion = array.indexOf(productoEliminar)
            array.splice(posicion, 1)
            localStorage.setItem("carrito", JSON.stringify(array))
            calcularTotal(array)
        })
    })
    calcularTotal(array)
}

function calcularTotal(array){
    let total = array.reduce((acc, productoCarrito) => acc + productoCarrito.precio, 0)
        total == 0 ? precioTotal.innerHTML = `No hay productos en el carrito` : precioTotal.innerHTML = `
        Subtotal: ${total}
        + 20% ||
        Total a pagar : ${total+total*0.20} `
} 

function buscar(buscado, array){
    let busquedaArray = array.filter(
        (producto)=> producto.nombre.toLowerCase().includes(buscado)
    )
    busquedaArray.length == 0 ?
    (coincidencia.innerHTML == `<h3>No hay coincidencias con su búsqueda</h3>`, mostrarCatalogo(busquedaArray)) 
    :
    (coincidencia.innerHTML = "", mostrarCatalogo(busquedaArray))
}

//eventos

busqueda.addEventListener("input", () => {
    buscar(busqueda.value.toLowerCase(), mostrador)
})

botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosEnCarrito)
})

setTimeout(()=>{
  loaderTexto.innerHTML = ""
  loader.remove()
  mostrarCatalogo(mostrador)
}, 3000)

botonFinalizarCompra.addEventListener("click", () => {
      
  if(productosEnCarrito.length = 0){
    
    }else{
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estas seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          productosEnCarrito.splice(0, productosEnCarrito.length)
          swalWithBootstrapButtons.fire(
            'Vendido!',
            'Compra realizada exitosamente',
            'success',
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Deberias reconsiderar hacer una compra ;)',
            'error'
          )
        }
      })
  }})