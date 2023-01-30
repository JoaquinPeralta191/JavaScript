class Producto {
    constructor(id, nombre, precio){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio
    }
    //métodos
    mostrarInfoLibro(){
        console.log(`El articulo es ${this.nombre}, se clasifica como ${this.tipo} y su precio es ${this.precio}`)
    }
 }
 
 const producto1 = new Producto(1,"Chesecake", 1900)
 
 const producto2 = new Producto(2,"Chocotorta", 2100)
 
 const producto3 = new Producto(3,"Galletas con chips de chocolate", 1200)
 
 const producto4 = new Producto(4,"Alfajores con almendras", 2000)
 
 const producto5 = new Producto(5,"Tarta de limon", 1600)
 
 const producto6 = new Producto(6, "Budin glaseados", 1400)
 
 const mostrador = [producto1, producto2, producto3, producto4, producto5, producto6]
 
 function agregarPostre(){
   let nombreIngresado = prompt("Ingrese el nombre del producto")
   let clasificacionIngresada = prompt("Ingrese la clasificacion del producto")
   let precioIngresado = parseInt(prompt("Ingrese el precio del producto"))
 
   const nuevoProducto = new Producto(mostrador.length+1, nombreIngresado, clasificacionIngresada, precioIngresado)
   console.log(nuevoProducto)
   mostrador.push(nuevoProducto)
   console.log(mostrador) 
 }
 
 function eliminarProducto(array){
    console.log("A partir del catalogo ingrese el id del producto que desea eliminar")
    for(let elem of array){
        console.log(`${elem.id} - ${elem.nombre}`)
    }
    let idEliminar = parseInt(prompt("Ingrese el id a eliminar"))
 
    let arrayID = array.map(book => book.id)
    console.log(arrayID)
 
    let indice = arrayID.indexOf(idEliminar)
 
    array.splice(indice, 1)
    mostrarCatalogoForEach(array)
 }
 
 
 function mostrarCatalogoForEach(array){
    console.log(`Productos disponibles: `)
    array.forEach(
        (producto)=>{
            console.log(producto.id, producto.nombre, producto.tipo, producto.precio)
        }
    )
 }
 
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
 
 function buscarPorTipo(array){
    let tipoBuscado = prompt("Ingrese el tipo de producto que está buscando")
    let busqueda = array.filter(
        (producto)=> producto.tipo.toLowerCase() == tipoBuscado.toLowerCase()
    )
    if(busqueda.length == 0){
        console.log(`No se encuentran ${tipoBuscado} en nuestro catalogo`)
    }else{
        mostrarCatalogoForEach(busqueda)
    }
 }
 
 function ordenarMenorMayor(array){
 
    const menorMayor = [].concat(array)
    
    menorMayor.sort((par1, par2)=> par1.precio - par2.precio)
    mostrarCatalogoForEach(menorMayor)
 }
 
 function ordenarMayorMenor(array){
    const mayorMenor = [].concat(array)
 
    mayorMenor.sort((a,b)=> b.precio - a.precio)
    mostrarCatalogoForEach(mayorMenor)
 }
 function ordenarAlfabeticamenteNombre(array){
    const arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort((a,b)=>{
 
      if (a.nombre > b.nombre) {
        return 1
      }
      if (a.nombre < b.nombre) {
        return -1
      }
      return 0;
    })
    mostrarCatalogoForEach(arrayAlfabetico)
 
 }
 
 function ordenar(array){
    let opcion = parseInt(prompt(`
    1 - Ordenar de menor a mayor
    2 - Ordenar de mayor a menor
    3 - Ordenar alfabeticamente`))
    switch(opcion){
        case 1:
            ordenarMenorMayor(array)
        break
        case 2:
            ordenarMayorMenor(array)
        break
        case 3:
            ordenarAlfabeticamenteNombre(array)
        break
        default:
            console.log(`${opcion} no es válida para ordenar`)
        break
    }
 }
 
 function menu(){
    let salirMenu = false
    do{
        salirMenu = preguntarOpcion(salirMenu)
    }while(!salirMenu)
 } 
 
 function preguntarOpcion(salir){
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
           1 - Agregar producto
           2 - Borrar producto
           3 - Consultar catálogo
           4 - Encontrar por Nombre
           5 - Buscar productos de un mismo tipo:
           6 - Ordenar productos
           0 - Salir del menu`))
    
        switch(opcionIngresada){
            case 1:
                agregarPostre()
            break
            case 2:
                eliminarProducto(mostrador)
            break
            case 3:
                mostrarCatalogoForEach(mostrador)
            break
            case 4:
                buscarPorNombre(mostrador)
            break
            case 5:
                buscarPorTipo(mostrador)
            break
            case 6:
                ordenar(mostrador)
            break
            case 0:
                console.log("gracias por utilizar nuestra app")
                salir = true
                return salir
            break
            default:
                console.log("Ingrese una opción correcta")
            break
        }
 }
 
 //menu()