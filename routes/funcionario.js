'use strict'

const express = require('express')
const router = express.Router()
const _FUNCIONARIO = require('../controllers/funcionario')

router.get('/', _FUNCIONARIO.getAll)
router.get('/:id', _FUNCIONARIO.getById)

router.post('/create', _FUNCIONARIO.create)
router.put('/update/:id', _FUNCIONARIO.update)
router.delete('/delete/:id', _FUNCIONARIO.delete)

module.exports = router

