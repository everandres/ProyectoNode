const precipitacion = require('../models/precipitacion');
const Prec = require('../models/precipitacion')

const getAllTasks = async (req, res) => {
    try {
        const precipitacion = await Prec.find({});
        res.status(200).json({precipitacion});
    } catch (err) {
        res.status(500).json({status: "failed", msg: err});
    }
}

const getAllDepart = async (req, res, next) => {
    try {
            const {departamento: departamentoID } = req.params
            const precipitacion = await Prec.find({ DPTO: departamentoID })
            if (!precipitacion) {
                return next(createCustomError(`No task with id : ${departamentoID}`, 404))
            }
            res.status(200).json({ precipitacion })
    } catch (err) {
        res.status(500).json({status: "failed", msg: err});
    }
}

const SendTasks = async (req, res) => {
    try {
        const precipitacion = await Prec.create(req.body);
        res.status(201).json({ precipitacion });
    } catch (err) {
        res.status(500).json({status: "failed", msg: err});
    }
}



module.exports = {getAllTasks, SendTasks, getAllDepart}