const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.route('/')
.get(controller.getUsers)



module.exports = router;