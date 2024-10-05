const pacienteService = require('@services/pacienteService');
const { validatePaciente, validatePacienteId } = require('../domain/validations/pacienteValidation');

//Obtener todos los pacientes
exports.getPacientes = async (req, res) => {
    try {

      //Llamada al servicio para crear un nuevo paciente
      const pacientes = await pacienteService.getPacientes();

      if(pacientes){
        res.json(pacientes);
      } else{
        // Lanza una respuesta http 204 que significa no-content
        res.status(204).json({ message: 'Aun no ahi pacientes' });
      }

    } catch (error){
        res.status(500).json({ message: error.message});
    }
};

// Obtener un paciente por ID
exports.getPacienteById = async (req, res) => {
    try {

      //Validacion de datos que llegan desde el lado del cliente.
      const {error} = validatePacienteId( req.params.id );
      if (error) {
        return res.status(404).json({message: error.details[0].message});
      }

      //Llamada al servicio para buscar un paciente por id.
      const paciente = await pacienteService.getPacienteById(req.params.id);
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

      //Validacion de datos que llegan desde el lado del cliente.
      const { error } = validatePaciente(req.body);
      if (error) {
        return res.status(400).json({message: error.details[0].message});
      }

      //Llamada al servicio para actualizar un paciente
      const actualizado = await pacienteService.updatePaciente(req.body, req.params.id);
      if (actualizado) {
        const pacienteActualizado = await pacienteService.getPacienteById(req.params.id);
        res.status(200).json(pacienteActualizado);
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

      //Validacion de datos que llegan desde el lado del cliente.
      const {error} = validatePacienteId( req.params.id );
      if (error) {
        return res.status(404).json({message: error.details[0].message});
      }
      
      //Llamada al servicio para eliminar un paciente
      const deleted = await pacienteService.deletePaciente(req.params.id);
      if (deleted) {
        res.status(204).json({ message: 'Paciente eliminado' });
      } else {
        res.status(404).json({ message: 'Paciente no encontrado' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };