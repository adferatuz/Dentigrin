const express = require('express');
const router = express.Router();
const citaMedicaController = require('@controllers/citaMedicaController')

//Definir ruta obtener citas
router.get('/cronograma-citas', citaMedicaController.getAllCitas);
router.post('/registrar-cita-medica', citaMedicaController.createCita);
/* router.get('/cita-medica/:id', citaMedicaController.getCitaById);
router.put('/cita-medica/:id', citaMedicaController.updateCita);
router.delete('/cita-medica/:id', citaMedicaController.deleteCita); */

module.exports = router;