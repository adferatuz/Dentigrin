const express = require('express');
const router = express.Router();
const odontologoController = require('@controllers/odontologoController');


//Definir ruta obtener odontologos
router.get('/odontologos', odontologoController.getOdontologos);
router.post('/odontologos', odontologoController.createOdontologo);

module.exports = router;