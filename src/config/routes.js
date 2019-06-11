const express = require('express')

//exporta a function para receber como parâmetro o server.
module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}