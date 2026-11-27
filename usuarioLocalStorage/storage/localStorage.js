
// Guardar información
export const guardarDatos = (clave, datos) => {
    localStorage.setItem(clave, JSON.stringify(datos));
};

// Recuperar información
export const obtenerDatos = (clave) => {
    const datos = localStorage.getItem(clave);
    return datos ? JSON.parse(datos) : [];
};

// Eliminar información
export const eliminarDatos = (clave) => {
    localStorage.removeItem(clave);
};
