const mongoose = require('mongoose')

const NewSchema = new mongoose.Schema(
    {
        LON: {type: Number, required: false},
        LAT: {type: Number, required: false},
        ELEV: {type: Number, required: false},
        'COD-DHIME': {type: Number, required: true},
        ESTACION: {type: String, required: true},
        MUNICIPIO: {type: String, required: true},
        DPTO: {type: String, required: true},
        Precipitacion: {type: Object}}
)

module.exports = mongoose.model('precs', NewSchema);
