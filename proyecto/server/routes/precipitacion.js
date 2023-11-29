const express = require('express')
const router = express.Router()

const {getAllTasks, SendTasks, getAllDepart} = require('../controllers/precipitacion')
  

router.route('/').get(getAllTasks).post(SendTasks)
router.route('/:departamento').get(getAllDepart)

module.exports = router
