'use strict'

require('../models/funcionario')
const mongoose = require('mongoose')
const model = mongoose.model('Funcionario')

const messages = require('../messages/errors')

class Funcionario {
    // buscando pelo ID
    static async getById(id) {
        try {
            return model.findOne({_id: id})
        } catch(err) {
            throw new Error(messages.generics.bd)
        }
    }
    // buscando funcionarios
    static async getAll() {
        try {
            return await model.find({})
        } catch(err) {
            throw new Error(messages.generics.bd)
        }
    }

    // criando funcionario
    static async create(data) {
        try {
            const func = await new model(data)
            /* const data = await model.findOne(func)
            data.scale.push() */
            return func.save()
        } catch(err) {
            throw new Error(messages.generics.post)
        }
    }
    
    // verificacao antes da criacao
    static async createVerify(data) {
        try {
            const { email } = data
            return await model.findOne({ email })
        } catch(err) {
            throw new Error(messages.generics.post)
        }
    }

    // atualizando funcionario
    static async update(id, data) {
        try {
            return await model.findOneAndReplace(id, { $set: data })
        } catch(err) {
            throw new Error(messages.generics.put)
        }
    }

    // excluindo funcionario
    static async delete(id) {
        try {
            return await model.findOneAndRemove(id)
        } catch(err) {
            throw new Error(messages.generics.delete)
        }
    }
}

module.exports = Funcionario

/**
 * Mesmo que o reaproveitamento de código fosse excelente,
 * a quantidade de instâncias iria consumir muita memória.
    use strict'
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
    module.exports = Funcionario 
*/
