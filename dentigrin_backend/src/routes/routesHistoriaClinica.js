const express = require('express');
const router = express.Router();
const historiaClinicaController = require('@controllers/historiaClinicaController');


//Definir ruta obtener historias clinicas
router.get('/historias-clinicas', historiaClinicaController.getHistoriaClinica);

module.exports = router;