const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.route('/')
.get(controller.getProviders)
.post(controller.createProvider)

router.route('/:id')
.get(controller.getOneProvider)
.put(controller.updateProvider)
.delete(controller.deleteProvider)


module.exports = router;