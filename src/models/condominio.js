const mongoose = require('mongoose')
const Condominio = mongoose.Schema({
    nome: {
        trim: true,
        required: true,
        type: String
    },
    blocos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bloco'
    }
})

module.exports = mongoose.model('Condominio', Condominio)