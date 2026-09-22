const readline = require("readline");
const {spawn} = require("child_process");

function mostrarMenu() {
    console.log(`
        =================================
                    COFFE CODE
        =================================
        1.Caja
        2.Cocina
        3.Clientes
        4.Salir
        =================================
    `);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Selecciona una opción (1-4): ', (opcion) => {
        rl.close();

        switch (opcion) {
            case "1":
                spawn('node', ['caja.js'], {stdio: 'inherit'})
                    .on('close', mostrarMenu);
                break;

            case "2":
                spawn('node', ['cocina.js'], {stdio: 'inherit'})
                    .on('close', mostrarMenu);
                break;

            case "3":
                spawn('node', ['clientes.js'], {stdio: 'inherit'})
                    .on('close', mostrarMenu);
                break;

            case "4":
                console.log("Saliendo del programa...");
                break;

            default:
                console.log("Opción inválida. Intenta de nuevo.");
                mostrarMenu();
                break;
        }
    });
}

mostrarMenu();
