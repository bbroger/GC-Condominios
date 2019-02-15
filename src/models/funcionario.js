const mongoose = require('mongoose')
const Funcionario = new mongoose.Schema({
    name: {
        trim: true, 
        required: true,
        createIndexes: true,
        type: String
    },
    email: {
        unique: true,
        required: true,
        lowercase: true,
        type: String
    },
    ocupation: {
        trim: true, 
        required: true,
        type: String
    },
    scale: [{
        trim: true, 
        required: true,
        type: String
    }],
    contact: {        
        required: true,
        type: Number
    },
    description: {
        trim: true, 
        required: true,
        type: String
    }
}, {versionKey: false})

module.exports = mongoose.model('Funcionario', Funcionario)