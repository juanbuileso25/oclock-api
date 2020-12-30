const express = require('express');
const router = express.Router();

const users = require('../components/user/routes');

//Requerimos todas las rutas del componente
router.use('/users', users);

module.exports = router;
