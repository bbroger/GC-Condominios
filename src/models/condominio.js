const mongoose = require('mongoose');
const Condominio = mongoose.Schema({
    nome: {
        trim: true,
        required: true,
        type: String
    },
    morador: { type: mongoose.Schema.Types.ObjectId, ref: 'Moradores', required: true }
});

module.exports = mongoose.model('Condominio', Condominio)