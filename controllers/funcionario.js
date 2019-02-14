'use strict'

const Funcionario = require('../resources/funcionario')

module.exports.getById = async (req, res, next) => {
    try {
        const func = await Funcionario.getById(req.params.id)
        return res.json(func)
    } catch (err) {
        next(err)
    }
}

module.exports.getAll = async (req, res, next) => {
    try {
        const funcs = await Funcionario.getAll()
        funcs.forEach( funcinario => {
            console.log(funcinario)
        })
        return res.json(funcs)
    } catch (err) {
        next(err)
    }
}

module.exports.create = async (req, res, next) => {
    try {
        const verify = await Funcionario.createVerify(req.body);
        if(verify) {
            res.send('Funcionário já existe na base de dados!')
        } else {
            await Funcionario.create(req.body)
            res.send('Funcionario adicionado a base de dados!')
        }
    } catch (err) {
        next(err)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        const func = await Funcionario.update(req.params.id, req.body)
        return res.json(func)
    } catch(err) {
        next(err)
    }
}

module.exports.delete = async (req, res, next) => {
    try {
        const func = await Funcionario.delete(req.params.id)
        return res.json(func)
    } catch (err) {
        next(err)
    }
}