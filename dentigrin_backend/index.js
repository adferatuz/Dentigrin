const express = require('express');
const app = express();

const sequelize = require('./config/db');
const routesPacientes = require('./routes/routesPacientes');
const routeServer = require('./server/server')

app.use(express.json());

app.use('/', routeServer);
app.use('/', routesPacientes);

sequelize.authenticate()
  .then(() => {
    console.log("Conectado a la base de datos");
    return sequelize.sync({ alter: true });
  })
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor escuchando en el puerto 3000');
    });
  })
  .catch(err => {
    console.log('Error al sincronizar la base de datos: ', err);
  });


