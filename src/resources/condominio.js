'use strict'

require('../models/condominio')
const mongoose = require('mongoose')
const model = mongoose.model('Condominio')

class Condominio {
    static async create(data) {
        return await model(data).save()
    }

    // ta tudo errado
    static async get() {
        return await model.find().populate('morador', 'nome')
    }
}

module.exports = Condominio

