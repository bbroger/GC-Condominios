'use strict'

const mongoose = require('mongoose')

const unidades = mongoose.Schema({
    numero: {
        required: true,
        type: Number
    },
    moradores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Morador'
    }]
})

module.exports = mongoose.model('Unidades', unidades)