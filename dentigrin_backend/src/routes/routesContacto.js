const express = require('express');
const router = express.Router();
const contactoController = require('@controllers/contactoController')

//Definir ruta obtener contactos
router.get('/contactos', contactoController.getContactos);

module.exports = router;