require('module-alias/register');

const sequelize = require('@config/db');
const app = require('./app.js')

sequelize.authenticate()
  .then(() => {
    console.log("Conectado a la base de datos");
    return sequelize.sync(/*{force: true}*/);
  })
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor escuchando en el puerto 3000');
    });
  })
  .catch(err => {
    console.log('Error al sincronizar la base de datos: ', err);
  });