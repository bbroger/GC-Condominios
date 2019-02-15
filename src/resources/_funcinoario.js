/* 'use strict'

require('../models/funcionario')
const Model = require('../resources/_model')

class Funcionario extends Model {
    constructor() {
        super('Funcionario')
    }

    async getAll() {
        try {
            return await this.model.find()
        } catch(err) {
            throw new Error('Não foi possível acessar as informações!')
        }
    }

    async create(data) {
        return await res(data).save()
    }
}

module.exports = Funcionario */