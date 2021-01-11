const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.route('/')
.get(controller.getProviders)
.post(controller.createProvider)


module.exports = router;