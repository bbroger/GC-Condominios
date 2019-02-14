module.exports = {
    server: {
        port: process.env.port || 3000
    },
    database: {
        connection: process.env.connection || 'mongodb://127.0.0.1:27017'
    },
    auth: {
        secret: 12345 // falta gerar uma hash melhor
    }
}