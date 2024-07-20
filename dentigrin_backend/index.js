require('module-alias/register')

const express = require('express');
const app = express();
const sequelize = require('@config/db');
const routesPacientes = require('@routes/routesPacientes');
const routesOdontologos = require('@routes/routesOdontologos');
const routesAdministrador = require('@routes/routesAdministrador')
const routeServer = require('@routes/routesServer');
const routeHistoriaClinica = require('@routes/routesHistoriaClinica');

app.use(express.json());

app.use('/', routeServer);
app.use('/', routesPacientes);
app.use('/', routesOdontologos);
app.use('/', routesAdministrador);
app.use('/', routeHistoriaClinica);

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


