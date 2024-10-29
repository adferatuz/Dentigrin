const Administrador = require('@models/administrador/administrador');
const { validateAdministrador, validateAdministradorId } = require('@validations/administradorValidation');

class AdministradorRepository {

    //Metodo para obtener un  administrador por id
    static async getAdministrador (id){
        
        //Validaciones de entrada de datos
        const {error} = validateAdministradorId(id);
        if(error){
            return res.status(400).json({ message: error.details[0].message });
        }

        // Se devuelve un administrador de la base de datos
        return await Administrador.findByPk(id);

    }

    //Metodo  para obtener todos los administradores
    static async getAllAdministradores (){

        // Se devuelve todos los administradores de la base de datos
        return await Administrador.findAll();

    }

    //Metodo  para crear un administrador
    static async createAdministrador (data) {

        // Validaciones de entrada de datos
        const { error } = validateAdministrador(data);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }

        //  Se crea un administrador en la base de datos
        const administrador = await Administrador.create(data);

        //  Se devuelve el id del administrador creado
        return  administrador.id;

    }

}

module.exports = AdministradorRepository;