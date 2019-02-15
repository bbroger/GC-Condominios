const mongoose = require('mongoose')
const model = mongoose.Schema({
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
    condominio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Condominio'
        // required: true
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

module.exports = mongoose.model('Morador', model)