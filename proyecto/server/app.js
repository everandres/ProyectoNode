const express = require('express');
const conexion = require('./database/conexion');
require('dotenv').config();
const precipitacion = require('./routes/precipitacion');

app = express()

app.use(express.json());
app.use('/api/v1/precipitaciones', precipitacion);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // O un dominio específico en lugar de *
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});



const start = async () => {
    try {
      await conexion(process.env.MONGO_URI);
      app.listen(process.env.PORT || 8000, () =>
        console.log(`Server is listening on port 8000...`)
      );
    } catch (error) {
      console.log(error);
    }
  };

start();
  
