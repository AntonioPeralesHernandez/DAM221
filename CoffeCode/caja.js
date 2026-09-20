const readline = require('readline');

let pedidos = [];
let totalAcumulado = 0;

function agregarPedido(nombre, precio) {
    let pedido = { nombre: nombre, precio: precio };

    pedidos.push(pedido);
    totalAcumulado += precio;

    console.log(`Pedido agregado correctamente: ${nombre} - $${precio}`);
}

function mostrarPedidos() {
    console.log("\nPedidos realizados:");

    pedidos.forEach((pedido, index) => {
        console.log(`${index + 1}. ${pedido.nombre} - $${pedido.precio}`);
    });
}

function mostrarTotal() {
    console.log(`Total acumulado: $${totalAcumulado}`);
}

function eliminarPedido(indice) {
    if (indice >= 0 && indice < pedidos.length) {

        let pedidoEliminado = pedidos.splice(indice, 1)[0];

        totalAcumulado -= pedidoEliminado.precio;

        console.log(
            `Pedido eliminado correctamente: ${pedidoEliminado.nombre} - $${pedidoEliminado.precio}`
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

        console.log(
            `Pedido modificado correctamente: ${nuevoNombre} - $${nuevoPrecio}`
        );

    } else {
        console.log("Índice de pedido inválido.");
    }
}

function mostrarMenu() {
    console.log("\n SISTEMA DE PEDIDoS");
    console.log("1. Agregar pedido");
    console.log("2. Mostrar pedidos");
    console.log("3. Mostrar total acumulado");
    console.log("4. Eliminar pedido");
    console.log("5. Modificar pedido");
    console.log("6. Salir");
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

mostrarMenu();

rl.on('line', (input) => {

    let args = input.split(" ");
    let comando = args[0];

    switch (comando) {

        case "1":
            agregarPedido(args[1], parseFloat(args[2]));
            break;

        case "2":
            mostrarPedidos();
            break;

        case "3":
            mostrarTotal();
            break;

        case "4":
            eliminarPedido(parseInt(args[1]) - 1);
            break;

        case "5":
            modificarPedido(
                parseInt(args[1]) - 1,
                args[2],
                parseFloat(args[3])
            );
            break;

        case "6":
            console.log("Programa finalizado.");
            rl.close();
            return;

        default:
            console.log("Comando inválido.");
            break;
    }

    mostrarMenu();
});