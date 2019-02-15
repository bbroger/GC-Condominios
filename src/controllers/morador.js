'use strict'

const Morador = require('../resources/morador')

// criando morador
module.exports.create = async (req, res, next) => {
    try {
        const morador = await Morador.create(req.body)
        res.status(201);
        res.json(morador)
    } catch (err) {
        next(err)
    }
}