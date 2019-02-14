'use strict'

const app = require('./bin/express')
const variaveis = require('./bin/config/variaveis')

app.listen(variaveis.server.port, () => {
    console.log('Servidor iniciado!')
})