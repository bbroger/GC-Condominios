const mongoose = require('mongoose')
const User = new mongoose.Schema({
    name: {
        trim: true, 
        required: true,
        createIndexes: true,
        type: String
    }
})