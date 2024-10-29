const administradorService = require('@services/administradorService');

//Obtener un administrador
exports.getAdministradorById = async(req, res)=>{
    try {
        
        // Llamado al  servicio  para obtener el administrador
        const administrador =  await administradorService.getAdministrador(req.params.id);

        if(administrador){
            // Respuesta Https del lado del cliente 
            res.status(200).json(administrador);
        }else{
            // Respuesta Https del lado del cliente
            res.status(404).json({message: 'Administrador no encontrado'});
        }        

    } catch (error) {
        res.status(500).json({ message: error.message});
    }

}

//Obtener todos los administradores
exports.getAdministradores = async (req, res) => {
    try {

        //Llamado  al servicio para obtener todos los administradores
        const administradores = await administradorService.getAllAdministradores();

        // Respuesta Https del lado del cliente
        res.status(200).json(administradores);

    } catch (error){
        res.status(500).json({ message: error.message});
    }
};

// Crear un administrador
exports.createAdministrador = async (req, res) => {
    try {

        // Llamado al servicio para crear un administrador
        const administrador = await administradorService.createAdministrador(req.body);

        // Respuesta  Https del lado del cliente
        res.status(201).json(administrador);
        
    } catch (error) {
        res.status(500).json({ message: error.message});        
    }
}