const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.route('/')
.get(controller.getAllCategory)


router.route('/:id')
.get(controller.getOneCategory)

module.exports = router;