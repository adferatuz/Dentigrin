const citaMedicaRepository = require('@repository/citaMedicaRepository');

// Obtener todas las citas agendadas en la base de datos
exports.getAllCitas  = async () => {

    // Llamado al repositorio  para obtener todas las citas
    return await citaMedicaRepository.getAllCitas();

}

// Crear un nuevo registro de citas en la base de datos
exports.createCita = async (data) => {

    // Conversion de datos para enviar al repositorio; posicion [0] = nombre medico,
    // posicion [1] = hora consulta y posicion [2] = fecha consulta.    
    const citaString = data["nueva-cita"];
    const citaArray = citaString.split(",");

    // Serializacion de datos
    const cita = {
        "odontologo": citaArray[0],
        "horaConsulta": citaArray[1],
        "fechaConsulta": citaArray[2],
        "motivo": "",
        "id_paciente": "",
        "id_odontologo":  "",        
    }

    //  Llamado al repositorio para crear un nuevo registro de citas
    return await citaMedicaRepository.createCita(cita);

}
