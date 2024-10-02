const Paciente = require('@models/paciente/paciente');

exports.createPaciente = async (data) => {
    try {
        const nuevoPaciente = await Paciente.create(data);
        return nuevoPaciente;
    } catch (error) {
        throw new Error(`Error al crear el paciente: ${error.message}`);       
    }
};