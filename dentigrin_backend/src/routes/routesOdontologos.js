const express = require('express');
const router = express.Router();
const odontologoController = require('@controllers/odontologoController');


//Definir ruta obtener odontologos
router.get('/odontologos', odontologoController.getOdontologos);

module.exports = router;