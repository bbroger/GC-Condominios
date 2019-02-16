'use strict'

require('../models/morador');
const mongoose = require('mongoose');
const model = mongoose.model('Moradores');

const messages = require('../messages/errors');

class Morador {
    // criando morador
    static async create(data) {
        try {
            const morador = await new model(data);
            return morador.save();
        } catch(err) {
            throw new Error(messages.generics.post);
        }
    }
}

module.exports = Morador;