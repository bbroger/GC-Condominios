'use strict'

const express = require('express');
const router = express.Router();
const _MORADOR = require('../controllers/morador');

router.post('/create', _MORADOR.create);

module.exports = router;
