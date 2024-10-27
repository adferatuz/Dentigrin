const {validateUser, validateUserId, validateUsername, validatePassword} = require('./userValidation')
const User = require('@models/usuario/user');

class UserRepository {
    static async create (data){

        //Validacion de datos que llegan desde el lado del cliente.
        const { error } = validateUser(data);
        if (error) {
            return res.status(400).json({message: error.details[0].message});
        }

        //validar si ya  existe un usuario con el mismo username
        const user = await User.findOne({where: { username: data.username }});
        if (user) {
            throw new Error('El usuario ya existe');
        } 

        //crear un nuevo usuario
        const nuevoUsuario = await User.create(data);

        // devolver el id del usuario creado
        return nuevoUsuario.id;

    }
    static login ( user){

    }
}
module.exports = UserRepository;
