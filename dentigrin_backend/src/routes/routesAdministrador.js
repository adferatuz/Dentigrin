const express = require('express');
const router = express.Router();
const administradorController = require('@controllers/administradorController');


//Definir ruta obtener odontologos
router.get('/admin', administradorController.getAdministradores);

module.exports = router;