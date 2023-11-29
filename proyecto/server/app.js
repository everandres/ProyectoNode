const express = require('express');
const conexion = require('./database/conexion');
require('dotenv').config();
const precipitacion = require('./routes/precipitacion');

app = express()

app.use(express.json());
app.use('/api/v1/precipitaciones', precipitacion);


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
  
