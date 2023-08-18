const express = require('express');
const { auth } = require('express-oauth2-jwt-bearer');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();

// Configuración del Middleware de Autorización
const autenticacion = auth({
  audience: process.env.OAUTH_AUDIENCE,
  issuerBaseURL: process.env.OAUTH_URL,
  tokenSigningAlg: 'RS256',
});

// Middleware para manejar JSON en las peticiones
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require('./routes/libros');

// Importamos el Router de Usuarios
const usuariosRoutes = require('./routes/usuarios');

// Configuramos el middleware de autenticación en el Router de Libros
app.use('/api/libros', autenticacion, librosRouter);

// Configuramos el middleware de autenticación en el Router de Usuarios
app.use('/usuarios', usuariosRoutes);

// Configuramos el middleware de manejo de errores
app.use(errorHandler);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

module.exports = app;
