//recebe a referência de module.exports de todo.js
const Todo = require('./todo')

Todo.methods(['get','post', 'put', 'delete'])

//Configura node-restful para retornar o model que foi atualizado em updates
//Por padrão, ele retorna o model no estado antigo, antes de ser atualizado.
//Configura o node-restful para executar validações ao realizar um update.
//Por padrão, ele não realiza validações em updates.
Todo.updateOptions({new: true, runValidators: true}) 

module.exports = Todo