const Paciente = require('@models/paciente/paciente');
const pacienteRepository = require('@repository/pacienteRepository');

//Servicio para crear una persistencia de datos del ORM Paciente.
exports.createPaciente = async (data) => {
    try {

        //Llamada al  repositorio para crear un nuevo paciente.
        const nuevoPaciente = await pacienteRepository.createPaciente(data);

        //Si el paciente se creo correctamente, se devuelve el id del paciente creado.
        return nuevoPaciente;
        
    } catch (error) {
        throw new Error(`Error al crear el paciente: ${error.message}`);       
    }
};

//Servicio para listar todos los pacientes de la base de datos.
exports.getPacientes = async () => {
    try {
        const pacientes = await pacienteRepository.getAllPacientes();
        return pacientes;
    } catch (error) {
        throw new Error(`Error listar pacientes: ${error.message}`); 
    }
}

//Servicio para buscar un paciente por id.
exports.getPacienteById = async (id) => {
    try {
        const paciente = await Paciente.findByPk(id);
        return paciente;
    } catch (error) {
        throw new Error(`Error al encontrar el paciente: ${error.message}`);
    }
}

//Servicio para actualizar un paciente
exports.updatePaciente = async (data, id) => {
    try {
        const [updated] = await Paciente.update(data, {
            where: { id: id }
          });
        return updated;
    } catch (error) {
        throw new Error(`Error al encontrar el paciente: ${error.message}`);
    }
}

//Servicio para  eliminar un paciente
exports.deletePaciente = async (id) => {
    try {
        const pacienteEliminado = await Paciente.destroy({
            where: { id: id }
          });
        return  pacienteEliminado;
    } catch (error) {
        throw new Error(`Error al eliminar el paciente: ${error.message}`);
        
    }
}

