//Cocina
let productos =[
    {id:1, nombre: "Café sin azucar", precio: 40, categoria: "bebida"},
    {id:2, nombre: "Café con leche", precio: 60, categoria:"bebida"},
    {id:3, nombre: "Pan de muertos", precio: 15, categoria:"postre"}
];

function agregar(nombre, precio, categoria){
    productos.push({
        id: productos.length + 1,
        nombre: nombre,
        precio: precio,
        categoria: categoria
    });
    console.log(`Producto agregado: ${nombre} - $${precio}`);
}

function editar(id, nombre, precio, categoria){
    let producto = productos.find(p => p.id === id);

    if(producto){
        producto.nombre = nombre;
        producto.precio = precio;
        producto.categoria = categoria;
        console.log(`Producto editado: ${producto.nombre}`);
    }else{
        console.log(`Producto no encontrado.`);
    }
}

function eliminar(id){
    let producto = productos.find(p => p.id === id);
    if(producto){
        productos = productos.filter(p => p.id !== id);
        console.log(`Producto eliminado: ${producto.nombre}`);
    }else{
        console.log(`Producto no encontrado.`);
    }
}

function listar(){
    console.log("\n---PRODUCTOS---");
    productos.forEach(p => {
        console.log(
            `ID: ${p.id} | Nombre: ${p.nombre} | Precio: ${p.precio} | Categoria: ${p.categoria}`
        );
    });
}

function buscarProductos(tipo){

    if(tipo === "1"){
        let resultado = productos.filter(p => p.precio <= 45);
        console.log("\n---PRODUCTOS BARATITOS---");
        resultado.forEach(p => console.log(
            `ID: ${p.id} | Nombre: ${p.nombre} | Precio: ${p.precio} | Categoria: ${p.categoria}`
        ));
    }

    else if(tipo === "2"){
        let resultado = productos.filter(p => p.precio > 45);
        console.log("\n---PRODUCTOS CARISIMOS DE PARÍS---");
        resultado.forEach(p => console.log(
            `ID: ${p.id} | Nombre: ${p.nombre} | Precio: ${p.precio} | Categoria: ${p.categoria}`
        ));
    }

    else if(tipo === "3"){
        let resultado = productos.filter(p => p.categoria === "bebida");
        console.log("\n---BEBIDAS PA' LA SED---");
        resultado.forEach(p => console.log(
            `ID: ${p.id} | Nombre: ${p.nombre} | Precio: ${p.precio} | Categoria: ${p.categoria}`
        ));
    }

    else if(tipo === "4"){
        let resultado = productos.filter(p => p.categoria === "postre");
        console.log("\n---POSTRESITOS---");
        resultado.forEach(p => console.log(
            `ID: ${p.id} | Nombre: ${p.nombre} | Precio: ${p.precio} | Categoria: ${p.categoria}`
        ));
    }else{
        console.log("Opción no válida.");
    }
}
function obtenerProducto(id){
    return productos.find(p => p.id === id);
}
function obtenerProductosDisponibles(){
    return productos.filter(p => p);
}
function prepararPedido(pedido,opcion){

    return new Promise((resolve, reject) => {
        console.log(`Cocina recibio el pedido #: ${pedido.idPedido}`);

        if(opcion === "2"){
            reject("Error en la cocina");
            return;}

            if(opcion === "3"){
                reject("Falta ingrediente, el gefe es codo y no compra");
                return;}

                pedido.estado = "listo";
                resolve(pedido);
    });
}
function menuCocina(rl, menuPrincipal){
    console.log("\n---MENU COCINA---");
    console.log("1. Agregar producto");
    console.log("2. Editar producto");
    console.log("3. Eliminar producto");
    console.log("4. Listar productos");
    console.log("5. Buscar producto");
    console.log("6. Salir");

    rl.question(`Selecciona una opción: `, opcion =>{

        if (opcion === "1"){
            rl.question("Nombre: ", nombre =>{
            rl.question("Precio: ", precio => {
            rl.question("Categoria: ", categoria => {
                agregar(nombre, Number(precio), categoria);
                listar();
                menuCocina(rl, menuPrincipal);
            });
            });
        });
    }

        else if (opcion === "2"){
            rl.question("ID: ", id => {
            rl.question("Nombre: ", nombre =>{
            rl.question("Precio: ", precio => {
            rl.question("Categoria: ", categoria => {

                editar(Number(id), nombre, Number(precio), categoria);
                listar();
                menuCocina(rl, menuPrincipal);
             });
        });
        });
        });
    }

        else if (opcion === "3"){
            rl.question("ID: ", id => {
                eliminar(Number(id));
                listar();
                menuCocina(rl, menuPrincipal);
            });
        }

        else if (opcion === "4"){
            listar();
            menuCocina(rl, menuPrincipal);
        }

        else if (opcion === "5"){
            console.log("1. Productos baratos");
            console.log("2. Productos caros");
            console.log("3. Bebidas");
            console.log("4. Postres");
            rl.question(`Selecciona qué quieres buscar: `, tipo => {
            buscarProductos(tipo);
            menuCocina(rl, menuPrincipal);
            });
        }

        else if (opcion === "6"){
            menuPrincipal();
        }else{
            console.log("Opción no válida.");
            menuCocina(rl, menuPrincipal);
        }
    });
}
module.exports = {
    productos,
    agregar,
    editar,
    eliminar,
    listar,
    buscarProductos,
    obtenerProducto,
    obtenerProductosDisponibles,
    prepararPedido,
    menuCocina
};

