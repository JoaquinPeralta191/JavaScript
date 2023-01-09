//functions para el menú:
function agregarProducto(){
    let productoIngresado = prompt("Ingrese el nombre del postre")
    let clasificacionIngresada = prompt("Ingrese el tipo de postre")
    let precioIngresado = parseInt (prompt("Ingrese el precio del postre"))
    while (isNaN(precioIngresado)){
   precioIngresado = prompt("Atencion ingrese un numero, tipo dato anterior incorrecto. Ingrese el precio del postre") 
    }
    mostrarDatosproducto(productoIngresado, clasificacionIngresada, precioIngresado)
 }
 function mostrarDatosproducto(nombre, tipo, precio){
    console.log(`El postre es ${nombre}, se clasifica como ${tipo} y vale ${precio}`)
 }
 // CÓDIGO AFTER 
 let salirMenu = false
 console.log(salirMenu)
 do{
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
    1 - Agregar postre
    2 - Reiniciar consola
    3 - Consultar catálogo
    4 - Comprar
    0 - Salir del menu`))
    switch(opcionIngresada){
       case 1:
          agregarProducto()
       break
       case 2:
          let asegurarse = prompt("ATENCION: ESTO BORRARA TODO PROGRESO DE LA CONSOLA, POR ENDE TENDRA QUE REFRESCAR LA PAGINA PARA SEGUIR USANDO LA APP. Desea continuar? De lo contrario precione ESC")
          while (asegurarse.toUpperCase() != "ESC")
          console.clear()
       break
       case 3:
         console.log(`
         1 Chocotorta $1800
         2 LemonPie $1500
         3 Tarte de frutilla $2000
         4 Budines $1200
         5 Chessecake $2100
         6 Alfajores $1100
         7 Marquise $2200
         8 Rogel $2400
         9 Selva Negra $2800`)
       break
       case 4:
         const chocotorta = 1800
         const lemonpie = 1500
         const tartaDeFrutilla = 2000
         const budines = 1200
         const chessecake = 2100
         const alfajores = 300
         const marquise = 2200
         const rogel = 2400
         const selvaNegra = 2800
         let total
         let carrito = prompt(`Elija los productos que desee agragar a su compra, en base al catalogo de la opción N° 3 (Solamente ingrese el/los números de los productos que deseé comprar y separelos con una coma y un espacio) ATENCION: ESCRIBA LOS NUMEROS EN ORDEN DEL 1 AL 9. Si no desea continuar escriba "ESC".`)
         switch(carrito){
            case carrito = "1, 2, 3, 4, 5, 6, 7, 8, 9": total = chocotorta + lemonpie + tartaDeFrutilla + budines + chessecake + alfajores + marquise + rogel + selvaNegra
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "1, 2, 3, 4, 5, 6, 7, 8": total = chocotorta + lemonpie + tartaDeFrutilla + budines + chessecake + alfajores + marquise + rogel
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "1, 2, 3, 4, 5, 6, 7": total = chocotorta + lemonpie + tartaDeFrutilla + budines + chessecake + alfajores + marquise
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "1, 2, 3, 4, 5, 6": total = chocotorta + lemonpie + tartaDeFrutilla + budines + chessecake + alfajores
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "1, 2, 3, 4, 5": total = chocotorta + lemonpie + tartaDeFrutilla + budines + chessecake
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "1, 2, 3, 4": total = chocotorta + lemonpie + tartaDeFrutilla + budines
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "1, 2, 3": total = chocotorta + lemonpie + tartaDeFrutilla
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "1, 2": total = chocotorta + lemonpie
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "1": total = chocotorta
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "2": total = lemonpie
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "3": total = tartaDeFrutilla
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "4": total = budines
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "5": total = chessecake
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "6": total = alfajores
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "7": total = marquise
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "8": total = rogel
            console.log(`La suma total de su carrito es ${total}`)
            break
            case carrito = "9": total = selvaNegra
            console.log(`La suma total de su carrito es ${total}`)
            break
         }while(carrito.toUpperCase() != "ESC")
       break         
       case 0:
          console.log(`Gracias por utilizar nuestra app. Saludos!`)
          salirMenu = true
       break   
       default:
          console.log("Opción no válida, ingrese alguna presente en el menu")
       break
    }
 }while(!salirMenu)