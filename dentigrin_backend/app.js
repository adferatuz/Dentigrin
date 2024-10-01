const express = require('express');
const app = express();

const routesContactos = require('@routes/routesContacto');
const routesPacientes = require('@routes/routesPacientes');
const routesOdontologos = require('@routes/routesOdontologos');
const routesAdministrador = require('@routes/routesAdministrador')
const routeServer = require('@routes/routesServer');
const routeHistoriaClinica = require('@routes/routesHistoriaClinica');
const routerAuth = require('@routes/routesAuth');


app.use(express.json());

app.use('/', routeServer);
app.use('/', routesContactos);
app.use('/', routesPacientes);
app.use('/', routesOdontologos);
app.use('/', routesAdministrador);
app.use('/', routeHistoriaClinica);
app.use('/', routerAuth);

module.exports = app