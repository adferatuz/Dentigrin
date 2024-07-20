const Odontologo = require('@models/odontologo/odontologo');

//Obtener todos los odontologos
exports.getOdontologos = async(req, res)=>{
    try {
        const odontologos = Odontologo.findAll();
        res.json(odontologos);
        
    } catch (error) {
        res.status(500).json({ message: error.message});
    }

}