const HistoriaClinica = require('@models/historia-clinica/historiaClinica');

//Obtener todos los odontologos
exports.getHistoriaClinica = async(req, res)=>{
    try {
        const historiaClinica = HistoriaClinica.findAll();
        res.json(historiaClinica);
        
    } catch (error) {
        res.status(500).json({ message: error.message});
    }

}