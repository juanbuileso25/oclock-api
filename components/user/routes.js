const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.route('/')
.get(controller.getUsers)
.post(controller.createUser)

router.route('/:id')
.put(controller.updateUser)
.delete(controller.deleteUser)


module.exports = router;