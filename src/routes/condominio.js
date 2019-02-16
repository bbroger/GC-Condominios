'use strict'

const express = require('express')
const router = express.Router()
const _CONDOMINIO = require('../controllers/condominio')

router.get('/', _CONDOMINIO.get)
router.post('/', _CONDOMINIO.create);

module.exports = router;