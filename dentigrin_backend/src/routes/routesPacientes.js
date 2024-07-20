const express = require('express');
const router = express.Router();
const pacienteController = require('@controllers/pacienteController');

//Definir ruta obtener odontologos
router.get('/pacientes', pacienteController.getPacientes);
router.get('/pacientes', pacienteController.createPaciente);
router.get('/pacientes/:id', pacienteController.getPacienteById);
router.get('/pacientes/:id', pacienteController.updatePaciente);
router.get('/pacientes/:id', pacienteController.deletePaciente);

module.exports = router;