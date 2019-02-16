const mongoose = require('mongoose')
const Morador = mongoose.Schema({
    nome: {
        trim: true,
        required: true,
        type: String
    }, 
    idade: {
        required: true,
        type: Number
    },
    cpf: {
        trim: true,
        required: true,
        type: Number
    },
    email: {
        trim: true,
        required: [true, 'o e-mail é obrigatório'],
        unique: true,
        lowercase: true,
        type: String
    },
    senha: {
        trim: true,
        required: true,
        type: String
    },
    bloco: {
        trim: true,
        type: String
    },
    ap: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Moradores', Morador)