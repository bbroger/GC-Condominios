'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const handlebars = require('express-handlebars')
const variaveis = require('./config/variaveis')

const app = express()

// configurando parse
app.use(bodyParser.json({limit: '5mb'}))
app.use(bodyParser.urlencoded({extended: true}))

// definindo template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// carregando arquivos estáticos
app.use(express.static('public'))

// configurando conexao
mongoose.connect(variaveis.database.connection, { useCreateIndex: true})
mongoose.Promise = global.Promise

// chamando rotas
const funcionario_router = require('../routes/funcionario')
app.use('/api/v1/funcionarios', funcionario_router)

/* HOME */
app.use('/', (req, res, next) => { 
    res.render('pages/user/_home')
}) // rota principal

app.use((req, res) => { 
    res.render('pages/errors/404')
}) // tratamento para erro 404

app.use((err, req, res, next) => { 
    const message = err.message
    res.send(message)
    // res.render('pages/errors/501', {error: message})
 }) // tratamento para demais erros

module.exports = app





// const session = require('express-session')