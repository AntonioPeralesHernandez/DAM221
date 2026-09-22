//Cocina
let productos =[
    {id:1, nombre: "Café sin azucar", precio: 40, categoria: "bebida"},
    {id:2, nombre: "Café Italiano", precio: 60, categoria:"bebida"},
    {id:3, nombre: "Pan de muertos", precio: 15, categoria:"postre"}
];

function agregar(nombre, precio, categoria){
    productos.push({
        id: productos.length + 1,
        nombre: nombre,
        precio: precio,
        categoria: categoria
    });
}

function editar(id, nombre, precio, categoria){
    let producto = productos.find(p => p.id === id);

    if(producto){
        producto.nombre = nombre;
        producto.precio = precio;
        producto.categoria = categoria;
    }
}

function eliminar(id){
    productos = productos.filter(p => p.id !== id);
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
        let resultado = productos.find(p => p.categoria === "bebida");
        console.log("\n---BEBIDAS PA' LA SED---");
        console.log(resultado);
    }

    else if(tipo === "4"){
        let resultado = productos.find(p => p.categoria === "postre");
        console.log("\n---POSTRESITOS---");
        console.log(resultado);
    }
}

    const readline = require("readline");
    function mostrarMenu(){
    const rl = readline.createInterface({
        input: process.stdin, 
        output: process.stdout
    });

    rl.question(`
        1. Agregar producto
        2. Editar producto
        3. Eliminar producto
        4. Listar productos
        5. Buscar producto
        6. Salir
        Selecciona una opción: `, opcion =>{

        if (opcion === "1"){
            rl.question("Nombre: ", nombre =>
            rl.question("Precio: ", precio => 
            rl.question("Categoria: ", categoria => {

                agregar(nombre, Number(precio), categoria);
                listar();
                rl.close();
                mostrarMenu();
            })));
        }

        else if (opcion === "2"){
            rl.question("ID: ", id => 
            rl.question("Nombre: ", nombre =>
            rl.question("Precio: ", precio => 
            rl.question("Categoria: ", categoria => {

                editar(Number(id), nombre, Number(precio), categoria);
                listar();
                rl.close();
                mostrarMenu();
            }))));
        }

        else if (opcion === "3"){
            rl.question("ID: ", id => {
                eliminar(Number(id));
                listar();
                rl.close();
                mostrarMenu();
            });
        }

        else if (opcion === "4"){
            listar();
            rl.close();
            mostrarMenu();
        }

        else if (opcion === "5"){
            rl.question(`
            1. Productos baratos
            2. Productos caros
            3. Bebidas
            4. Postres
            Selecciona qué quieres buscar: `, tipo => {
            buscarProductos(tipo);
            rl.close();
            mostrarMenu();
            });
        }

        else if (opcion === "6"){
            rl.close();
        }
    });
}
mostrarMenu();

