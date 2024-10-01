const express = require('express');
const app = express();

const routesContactos = require('@routes/contacto.routes.js');
const routesCitas = require('@routes/cita.routes.js');
const routesPacientes = require('@routes/paciente.routes.js');
const routesOdontologos = require('@routes/odontologo.routes.js');
const routesAdministrador = require('@routes/administrador.routes.js')
const routeServer = require('@routes/server.routes.js');
const routeHistoriaClinica = require('@routes/historiaClinica.routes.js');
const routerAuth = require('@routes/auth.routes.js');


app.use(express.json());

app.use('/', routeServer);
app.use('/', routesContactos);
app.use('/', routesCitas);
app.use('/', routesPacientes);
app.use('/', routesOdontologos);
app.use('/', routesAdministrador);
app.use('/', routeHistoriaClinica);
app.use('/', routerAuth);

module.exports = app