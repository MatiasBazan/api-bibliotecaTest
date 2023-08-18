// Suponiendo que tienes un módulo de usuarios (usuariosModel.js) para interactuar con la base de datos

const usuariosModel = require('../models/usuariosModel');

// GET /usuarios
exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await usuariosModel.getAllUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios.' });
  }
};

// GET /usuarios/:id
exports.getUsuarioPorId = async (req, res) => {
  const id = req.params.id;
  try {
    const usuario = await usuariosModel.getUsuarioPorId(id);
    res.json(usuario);
  } catch (error) {
    res.status(404).json({ error: 'Usuario no encontrado.' });
  }
};

// POST /usuarios
exports.crearUsuario = async (req, res) => {
  const nuevoUsuario = req.body;
  try {
    const usuarioCreado = await usuariosModel.crearUsuario(nuevoUsuario);
    res.status(201).json(usuarioCreado);
  } catch (error) {
    res.status(400).json({ error: 'No se pudo crear el usuario.' });
  }
};

// PUT /usuarios/:id
exports.actualizarUsuario = async (req, res) => {
  const id = req.params.id;
  const datosActualizados = req.body;
  try {
    const usuarioActualizado = await usuariosModel.actualizarUsuario(id, datosActualizados);
    res.json(usuarioActualizado);
  } catch (error) {
    res.status(404).json({ error: 'Usuario no encontrado o no se pudo actualizar.' });
  }
};

// DELETE /usuarios/:id
exports.eliminarUsuario = async (req, res) => {
  const id = req.params.id;
  try {
    await usuariosModel.eliminarUsuario(id);
    res.json({ message: 'Usuario eliminado con éxito.' });
  } catch (error) {
    res.status(404).json({ error: 'Usuario no encontrado o no se pudo eliminar.' });
  }
};
