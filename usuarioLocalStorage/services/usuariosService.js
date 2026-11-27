import { guardarDatos, obtenerDatos, eliminarDatos } from '../storage/localStorage';

const CLAVE = 'usuarios';
// Validar los datos del usuario
const validarUsuario = (nombre, edad) => {

  if (!nombre.trim() || !String(edad).trim()) {
    throw new Error('Todos los campos son obligatorios');
  }

  if (isNaN(edad) || Number(edad) <= 0) {
    throw new Error('Ingresa una edad válida');
  }

};

// Obtener todos los usuarios
export const consultarUsuarios = () => {
  return obtenerDatos(CLAVE);
};

// Registrar un usuario
export const agregarUsuario = (nombre, edad) => {

  validarUsuario(nombre, edad);

  const usuarios = obtenerDatos(CLAVE);

  const nuevoUsuario = {
    id: Date.now(),
    nombre: nombre.trim(),
    edad: Number(edad)
  };

  usuarios.push(nuevoUsuario);

  guardarDatos(CLAVE, usuarios);

  return nuevoUsuario;
};

// Actualizar un usuario
export const actualizarUsuario = (id, nombre, edad) => {

  validarUsuario(nombre, edad);

  const usuarios = obtenerDatos(CLAVE);

  const nuevosUsuarios = usuarios.map(usuario =>
    usuario.id === Number(id)
      ? {
          ...usuario,
          nombre: nombre.trim(),
          edad: Number(edad)
        }
      : usuario
  );

  guardarDatos(CLAVE, nuevosUsuarios);
};

// Eliminar un usuario
export const eliminarUsuario = (id) => {

  const usuarios = obtenerDatos(CLAVE);

  const nuevosUsuarios = usuarios.filter(
    usuario => usuario.id !== Number(id)
  );

  guardarDatos(CLAVE, nuevosUsuarios);
};

// Eliminar todos los usuarios
export const limpiarUsuarios = () => {
  eliminarDatos(CLAVE);
};
