//variables
let busqueda = document.getElementById("buscador");
let productosEnCarrito = []
//funciones

function buscarPorNombre(arr){
    let nombreBuscado = prompt("Ingrese el nombre del producto que desea buscar")
    let nombreEncontrado = arr.filter(
        (producto)=>producto.nombre.toLowerCase() == nombreBuscado.toLowerCase()
        )
    if(nombreEncontrado.length == 0){
        console.log(`El producto ${nombreBuscado} no está en stock`)
    }else{
        mostrarCatalogoForEach(nombreEncontrado)
    }    
 }
function buscarProducto(busqueda, array){
 
    let busquedaArray = array.filter(
    (producto) => producto.nombre.toLowerCase() == busqueda
    
)
}
//eventos

busqueda.addEventListener("input", () => {
    console.log(busqueda.value)
    buscarProducto(busqueda.value, mostrador)
})

let btnCatalogo = document.getElementById("btnCatalogo")

btnCatalogo.onclick = () => {
    mostrarCatalogo(mostrador)
    sectionProductos.classList.add("espaciado")
}
