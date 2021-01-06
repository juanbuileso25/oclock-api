const express = require('express');
const router = express.Router();

const users = require('../components/user/routes');
const providers = require('../components/provider/routes');

//Requerimos todas las rutas del componente
router.use('/users', users);

router.use('/providers', providers);

module.exports = router;
