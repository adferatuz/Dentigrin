const Administrador = require('@models/administrador/administrador');

//Obtener todos los odontologos
exports.getAdministradorById = async(req, res)=>{
    try {
        const administrador = Administrador.findByPk(req.params.id);
        res.json(administrador);

        if (administrador) {
            res.json(administrador);
        } else {
            res.status(404).json({ message: 'Administrador no encontrado' });
        }
        
    } catch (error) {
        res.status(500).json({ message: error.message});
    }

}

//Obtener todos los administradores
exports.getAdministradores = async (req, res) => {
    try {
        const administrador = await Administrador.findAll();
        res.json(administrador);

    } catch (error){
        res.status(500).json({ message: error.message});
    }
};