const administradorRepository = require('@repository/administradorRepository');

// Obtener  un administrador por su id
exports.getAdministrador = async (id) =>{
    return await administradorRepository.getAdministrador(id);
}

//  Obtener todos los administradores
exports.getAllAdministradores = async () =>{
    return await administradorRepository.getAllAdministradores();
}

// Crear  un administrador
exports.createAdministrador = async (data) =>{
    return await administradorRepository.createAdministrador(data);
}