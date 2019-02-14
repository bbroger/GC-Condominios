const mongoose = require('mongoose')
const Morador = mongoose.Schema({
    nome: {
        trim: true,
        required: true,
        type: String
    },
    email: {
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
        type: String
    },
    senha: {
        trim: true,
        required: true,
        type: String
    },
    idade: {
        required: true,
        type: Number
    },
    condominio: {
        
    }
})