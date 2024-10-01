const express = require('express');
const router = express.Router();
const citaMedicaController = require('@controllers/citaMedicaController')

//Definir ruta obtener citas
router.get('/cita-medica', citaMedicaController.getCitas);
router.post('/cita-medica', citaMedicaController.createCita);

module.exports = router;