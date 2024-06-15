const express = require('express');
const router = express.Router();
const pacienteController = require('../controller/pacienteController');

// Definir las rutas y asignar las funciones del controlador
router.get('/pacientes', pacienteController.getPacientes);
router.get('/pacientes/:id', pacienteController.getPacienteById);
router.post('/crear/pacientes', pacienteController.createPaciente);
router.put('/pacientes/:id', pacienteController.updatePaciente);
router.delete('/pacientes/:id', pacienteController.deletePaciente);

module.exports = router;