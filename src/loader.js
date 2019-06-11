const server = require('./config/server')
require('./config/database')
//Passa o server como parÂmetro para routes.js
require('./config/routes')(server)