const User = require('@models/usuario/user');

exports.createUser = async (data) => {
    try {

        //validar si ya  existe un usuario con el mismo username
        const user = await User.findOne({where: { username: data.username }});
        if (user) {
            throw new Error('El usuario ya existe');
        }

        //crear un nuevo usuario
        const nuevoUsuario = await User.create(data);
        return nuevoUsuario;

    } catch (error) {

        //  Manejar la excepción
        throw new Error(`Error al crear el usuario: ${error.message}`);          
    }
}