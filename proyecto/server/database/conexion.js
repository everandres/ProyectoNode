const mongoose = require('mongoose')

const conexion = (url) => {
    return mongoose.connect(url)} 

module.exports = conexion