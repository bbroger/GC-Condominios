const mongoose = require('mongoose')
const Condominio = mongoose.Schema({
    nome: {
        trim: true,
        required: true,
        type: String
    },
    unidades: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Unidades'
    }
})

module.exports = mongoose.model('Condominio', Condominio)