const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// GET /usuarios
router.get('/', usuariosController.getUsuarios);

// GET /usuarios/:id
router.get('/:id', usuariosController.getUsuarioPorId);

// POST /usuarios
router.post('/', usuariosController.crearUsuario);

// PUT /usuarios/:id
router.put('/:id', usuariosController.actualizarUsuario);

// DELETE /usuarios/:id
router.delete('/:id', usuariosController.eliminarUsuario);

module.exports = router;
