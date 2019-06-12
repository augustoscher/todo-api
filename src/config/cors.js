module.exports = function (req, res, next) {
    res.header('Acces-Control-Allow-Origin', '*')
    res.header('Acces-Control-Allow-Methods', 'GET, PUT, OPTIONS, PATCH, POST, DELETE')
    res.header('Acces-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
}