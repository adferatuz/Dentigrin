const Paciente = require('@models/paciente/paciente');
const { validatePaciente, validatePacienteId } = require('@validations/pacienteValidation');

class PacienteRepository {

    // metodo para obtener todos los pacientes
    static async getAllPacientes () {
        const pacientes = Paciente.findAll();
        return pacientes;
    }

    // metodo para crear un nuevo perfil de paciente
    static async createPaciente (data){

       //Validacion de datos que llegan desde el lado del cliente.
      const { error } = validatePaciente(data);
      if (error) {
        return res.status(400).json({message: error.details[0].message});
      } 

      //  Crear un nuevo paciente
      const nuevoPaciente = await Paciente.create(data);

      // devolver el id del paciente creado
      return nuevoPaciente.id;
    }
}

module.exports = PacienteRepository;