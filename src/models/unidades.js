'use strict'

const mongoose = require('mongoose')

const unidades = mongoose.Schema({
    numero: {
        required: true,
        type: Number
    },
    morador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Morador'
    }
})

module.exports = mongoose.model('Unidades', unidades)