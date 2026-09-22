const readline = require('readline');

let pedidos = [];
let totalAcumulado = 0;

let productos = [
    { id: 1, nombre: "Cafe americano", precio: 40 },
    { id: 2, nombre: "Cafe con leche", precio: 45 },
    { id: 3, nombre: "Pan de Muerto ", precio: 15 }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarProductos() {
    console.log("\nProductos disponibles \n elige tu opcion:");
    console.log("1. Agregar pedido");
    console.log("2. Mostrar pedidos");
    console.log("3. Mostrar total acumulado");
    console.log("4. Eliminar pedido");
    console.log("5. Modificar pedido");
    console.log("6. Calcular total con IVA ( ni modos )");
    console.log("7. Salir");
    productos.forEach((producto) => {
        console.log(`${producto.id}. ${producto.nombre} - $${producto.precio}`);
    });
}

function agregarPedido(nombre, precio) {
    let pedido = { nombre: nombre, precio: precio };
    pedidos.push(pedido);
    totalAcumulado += precio;
    console.log(`\n Pedido agregado correctamente: ${nombre} - $${precio}`);
}

function mostrarPedidos() {
    console.log("\nPedidos realizados:");
    if (pedidos.length === 0) {
        console.log("No hay pedidos realizados.");
        return;
    }
    pedidos.forEach((pedido, index) => {
        console.log(`${index + 1}. ${pedido.nombre} - $${pedido.precio}`);
    });
}

function mostrarTotal() {
    console.log(`Total acumulado: $${totalAcumulado}`);
}

function calcularTotal() {
    let subtotal = pedidos.reduce((acumulador, pedido) => {
        const { precio } = pedido;
        return acumulador + precio;
    }, 0);

    let iva = subtotal * 0.20;
    let totalConIva = subtotal + iva;
    console.log("\nRESUMEN DE PEDIDOS");
    console.log(`Subtotal: $${subtotal}`);
    console.log(`IVA (20%): $${iva}`);
    console.log(`Total: $${totalConIva}`);
}

function eliminarPedido(indice) {
    if (indice >= 0 && indice < pedidos.length) {
        let pedidoEliminado = pedidos.splice(indice, 1)[0];
        totalAcumulado -= pedidoEliminado.precio;
        console.log(`\n Pedido eliminado correctamente: ${pedidoEliminado.nombre} - $${pedidoEliminado.precio}`
        );
    } else {
        console.log("Índice de pedido inválido.");
    }
}

function modificarPedido(indice, nuevoNombre, nuevoPrecio) {
    if (indice >= 0 && indice < pedidos.length) {
        let pedidoModificado = pedidos[indice];
        totalAcumulado -= pedidoModificado.precio;
        pedidoModificado.nombre = nuevoNombre;
        pedidoModificado.precio = nuevoPrecio;
        totalAcumulado += nuevoPrecio;
        console.log(`\n Pedido modificado correctamente: ${nuevoNombre} - $${nuevoPrecio}`
        );
    } else {
        console.log("Índice de pedido inválido.");
    }
}

function mostrarMenu() {
    console.log("\n--- SISTEMA DE PEDIDOS ---");
    console.log("1. Agregar pedido");
    console.log("2. Mostrar pedidos");
    console.log("3. Mostrar total acumulado");
    console.log("4. Eliminar pedido");
    console.log("5. Modificar pedido");
    console.log("6. Calcular total con IVA ( ni modos )");
    console.log("7. Salir");
}

function inicializar() {
    mostrarProductos();
    rl.question("HOLAAAA puedes porfas poner una opcion del 1 al 7 : ", (opcion) => {
        switch (opcion.trim()) {
            case "1":
                mostrarProductos();
                rl.question("ingresa el nombre del producto: ", (nombre) => {
                    let prodEncontrado = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());
                    if (prodEncontrado) {
                        agregarPedido(prodEncontrado.nombre, prodEncontrado.precio);
                    } else {
                        console.log("Producto no encontrado.");
                    }
                    inicializar();
                });
                break;
                case "2":
                mostrarPedidos();
                inicializar();
                break;
                case "3":
                mostrarTotal();
                inicializar();
                break;
            case "4":
                mostrarPedidos();
                if (pedidos.length > 0) {
                    rl.question("Ingrese el número del pedido a eliminar: ", (num) => {
                        eliminarPedido(parseInt(num) - 1);
                        inicializar();
                    });
                } else {    
                    inicializar();
                }
                break;
                case "5":
                mostrarPedidos();
                if (pedidos.length > 0) {
                    rl.question("Ingrese el número del pedido a modificar: ", (num) => {
                        let indice = parseInt(num) - 1;
                        if (indice >= 0 && indice < pedidos.length) {
                            rl.question("Ingrese el nuevo nombre del producto: ", (nuevoNombre) => {
                                rl.question("Ingrese el nuevo precio del producto: ", (nuevoPrecio) => {
                                    modificarPedido(indice, nuevoNombre, parseFloat(nuevoPrecio));
                                    inicializar();
                                });
                            });
                        } else {
                            console.log("Índice de pedido inválido.");
                            inicializar();
                        }   
                    });
                } else {
                    inicializar();
                }
                break;
            case "6":
                calcularTotal();
                inicializar();
                break;
            case "7":
                console.log("Saliendo del sistema, adiooooossss ");
                rl.close();
                break;
            default:
                console.log("Opción inválida. Intente nuevamente.");
                inicializar();
                break;
        }
    });
}

inicializar();