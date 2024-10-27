const userRepository = require('./userRepository');

exports.createUser = async (data) => {
    try {
       
        //validar si ya  existe un usuario con el mismo username
        const user = await userRepository.create(data);

        // devolver el  usuario creado
        return user;

    } catch (error) {

        //  Manejar la excepción
        throw new Error(`Error al crear el usuario: ${error.message}`);          
    }
}