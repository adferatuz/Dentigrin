// app.js
const express = require('express');
const app = express();

const routes = require('./routes/routes');

app.use('/', routes);

app.get('/', (req, res) => {
  res.send('¡Hola, mundo! hola chinas como les va????😎👌');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
