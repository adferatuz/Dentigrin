const Paciente = require('@models/paciente/paciente');
const pacienteService = require('@services/pacienteService');
const { validatePaciente } = require('../domain/validations/pacienteValidation');

//Obtener todos los pacientes
exports.getPacientes = async (req, res) => {
    try {
        const pacientes = await Paciente.findAll();
        res.json(pacientes);

    } catch (error){
        res.status(500).json({ message: error.message});
    }
};

// Obtener un paciente por ID
exports.getPacienteById = async (req, res) => {
    try {
      const paciente = await Paciente.findByPk(req.params.id);
      if (paciente) {
        res.json(paciente);
      } else {
        res.status(404).json({ message: 'Paciente no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Crear un nuevo paciente
  exports.createPaciente = async (req, res) => {
    try {

      //Validacion de datos que llegan desde el lado del cliente.
      const { error } = validatePaciente(req.body);
      if (error) {
        return res.status(400).json({message: error.details[0].message});
      }

      //Llamada al servicio para crear un nuevo paciente
      const nuevoPaciente = await pacienteService.createPaciente(req.body);

      //Respuesta al lado del cliente
      res.status(201).json(nuevoPaciente);

    } catch (error) {
      
      //Manejador de errores
      res.status(400).json({ message: error.message });
    }
  };
  
  // Actualizar un paciente
  exports.updatePaciente = async (req, res) => {
    try {
      const [updated] = await Paciente.update(req.body, {
        where: { id_paciente: req.params.id }
      });
      if (updated) {
        const updatedPaciente = await Paciente.findByPk(req.params.id);
        res.status(200).json(updatedPaciente);
      } else {
        res.status(404).json({ message: 'Paciente no encontrado' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Eliminar un paciente
  exports.deletePaciente = async (req, res) => {
    try {
      const deleted = await Paciente.destroy({
        where: { id_paciente: req.params.id }
      });
      if (deleted) {
        res.status(204).json({ message: 'Paciente eliminado' });
      } else {
        res.status(404).json({ message: 'Paciente no encontrado' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };