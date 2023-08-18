// Suponiendo que tienes una base de datos o fuente de datos

const usuariosDB = []; // Ejemplo de base de datos en memoria

// Obtener todos los usuarios
exports.getAllUsuarios = async () => {
  return usuariosDB;
};

// Obtener un usuario por su ID
exports.getUsuarioPorId = async (id) => {
  return usuariosDB.find(usuario => usuario.id === id);
};

// Crear un nuevo usuario
exports.crearUsuario = async (nuevoUsuario) => {
  nuevoUsuario.id = Date.now().toString(); // Generar ID único (esto puede variar según tu fuente de datos)
  usuariosDB.push(nuevoUsuario);
  return nuevoUsuario;
};

// Actualizar un usuario existente
exports.actualizarUsuario = async (id, datosActualizados) => {
  const index = usuariosDB.findIndex(usuario => usuario.id === id);
  if (index !== -1) {
    usuariosDB[index] = { ...usuariosDB[index], ...datosActualizados };
    return usuariosDB[index];
  }
  throw new Error('Usuario no encontrado.');
};

// Eliminar un usuario
exports.eliminarUsuario = async (id) => {
  const index = usuariosDB.findIndex(usuario => usuario.id === id);
  if (index !== -1) {
    usuariosDB.splice(index, 1);
    return;
  }
  throw new Error('Usuario no encontrado.');
};
