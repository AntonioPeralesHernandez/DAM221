let pedidos = [];

const IVA = 0.21;

function agregarPedido(pedido) {
    pedidos.push(pedido);

    console.log(
        `Pedido #${pedido.idPedido} registrado en Caja. `
    );
}

function mostrarPedidos() {
    console.log(" \n Pedidos en Caja:");
    if (pedidos.length === 0) {
        console.log("No hay pedidos registrados por el momentoooo .");
        return;
    }

    pedidos.forEach((pedido, index) => {
        console.log(
            `${index + 1}. Pedido #${pedido.idPedido} | ${pedido.producto } | $${pedido.subtotal} | estado:${pedido.estado}`
        );
    });
}

function mostrarTotalAcumulado(){
    const totalAcomulado = pedidos.reduce(
        (acumulador, pedido) => {
            const {subtotal, estado} = pedido;
            if(estado !== "cancelado"){
                return acumulador + subtotal;
            }
            return acumulador;
        },
        0
    );
    console.log(
        `Total acumulado : $${totalAcomulado.toFixed(2)}`
    );
}
function calcularTotal(){
    const subtotal = pedidos.reduce(
        (acumulador, pedido) => {
            const {subtotal, estado} = pedido;
            if( estado !== "cancelado"){
                return acumulador + subtotal;
            }
            return acumulador;
        },
        0
    );
    const iva = subtotal * IVA;
    const total = subtotal + iva;

    console.log("\n RESUMEN DE LA CAJITA");
    console.log(
        `Subtotal: $${subtotal.toFixed(2)}`
    );
    console.log(
        `IVA (21%): $${iva.toFixed(2)}`
    );
    console.log(
        `Total : $${total.toFixed(2)}`
    );
}

function notificarPedidoListo(callback){
    pedidos
    .filter(pedido => pedido.estado === "listo")
    .forEach(pedido => {
        callback(
            `Pedido #${pedido.idPedido} esta ready bro`
        );
    });
}

function notificarPedidoCancelado(callback){
    pedidos
    .filter(pedido => pedido.estado === "cancelado")
    .forEach(pedido => {
        callback(
            `Pedido #${pedido.idPedido} fue cancelado rey motivo: ${pedido.motivoCancelacion}`
        );
    });
}

function menuCaja(rl, menuPrincipal){

    console.log("\n CAJA COFFEE");
    console.log("1. mostrar los pedidos ");
    console.log("2. mostrar total acumulado");
    console.log("3. calcular total con iva");
    console.log("4. mostrar pedidos listos");
    console.log("5. mostrar pedidos cancelados");
    console.log("6. regresar");

    rl.question("\nSelecciona un opcion: ", opcion => {
        if(opcion === "1"){
            mostrarPedidos();
            menuCaja(rl, menuPrincipal);
        }
        else if(opcion === "2"){
            mostrarTotalAcumulado();
            menuCaja(rl, menuPrincipal);
        }
        else if(opcion === "3"){
            calcularTotal();
            menuCaja(rl, menuPrincipal);
        }
        else if(opcion === "4"){
            notificarPedidoListo(mensaje =>{
                console.log(mensaje);
            });
            menuCaja(rl, menuPrincipal);
        }
        else if(opcion === "5"){
            notificarPedidoCancelado(mensaje => {
                console.log(mensaje); 
            });
            menuCaja(rl, menuPrincipal);
        }
        else if(opcion === "6"){
            menuPrincipal();
        }
        else{
            console.log("opcion no valida intenta un numero del 1 al 6");
            menuCaja(rl, menuPrincipal);

        }
    });
}

module.exports = {
    pedidos,
    agregarPedido,
    mostrarPedidos,
    mostrarTotalAcumulado,
    calcularTotal,
    notificarPedidoListo,
    notificarPedidoCancelado,
    menuCaja

};