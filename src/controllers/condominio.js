'use strict'

const Condominio = require('../resources/condominio')

exports.create = async (req, res, next) => {
    try {
        const condominio = await Condominio.create(req.body)
        return res.json(condominio)
    } catch (err) {
        next(err)
    }
}

exports.get = async (req, res, next) => {
    try {
        const condominio = await Condominio.get()
        return res.json(condominio)
    } catch (err) {
        next(err)
    }
}