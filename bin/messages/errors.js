/*
    MOTIVAÇÃO:
    Supondo que eu tenha que passar vários thwros com a mesma mensagem,
    a ideia aqui é automatizar a criacao dessas mensagens, reduzindo e 
    reutilizando as escritas.
*/

module.exports = {
    generics: {
        bd: 'Não foi possível acessar a base de dados!',
        post: 'Esta operação falhou, tente novamente.',
        put: 'Houve um erro ao atualizar as informações.',
        delete: 'Houver um erro ao realizar esta operação.',
        pages: 'Não foi possível processar a página!'
    }
}
