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

// Crear un nuevo Odontologo
exports.createOdontologo = async (req, res) => {
    try {
      const nuevoOdontologo = await Odontologo.create(req.body);
      res.status(201).json(nuevoOdontologo);
      console.log(nuevoOdontologo.toJSON())
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };