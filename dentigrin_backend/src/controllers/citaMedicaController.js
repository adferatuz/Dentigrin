const Cita = require('@models/cita-medica/citaMedica')

//Obtener todas las citas
exports.getCitas = async (req, res) => {
    try {
        const citas = await Cita.findAll();
        res.json(citas);

    } catch (error){
        res.status(500).json({ message: error.message});
    }
};

exports.createCita = async (req, res) => {
    try {
        const nuevaCita = await Cita.create(req.body)
        res.status(201).json(nuevaCita);
        console.log(nuevaCita.toJSON())
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}