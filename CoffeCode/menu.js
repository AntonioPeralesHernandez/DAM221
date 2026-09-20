const readline = require("readline");
const {spawnSync} = require("child_process");

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
            spawnSync('node', ['caja.js'], { stdio: 'inherit' });
            mostrarMenu();
            break;
        case "2":
            spawnSync('node', ['cocina.js'], { stdio: 'inherit' });
            mostrarMenu();
            break;
        case "3":
            spawnSync('node', ['clientes.js'], { stdio: 'inherit' });
            mostrarMenu();
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

