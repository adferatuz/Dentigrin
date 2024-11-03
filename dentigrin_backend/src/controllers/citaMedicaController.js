const citaMedicaService = require('@services/citaMedicaService');

//Obtener todas las citas agendadas
exports.getAllCitas = async (req, res) => {
    try {

        // Llamada al servicio  para obtener todas las citas
        const citas = await citaMedicaService.getAllCitas();

        // Validar que los datos lleguen correctamente
        if(citas){
            // Respuesta HTTP al lado del cliente
            res.status(200).json(citas);
        }else{
            // Respuesta HTTP al lado del cliente
            res.status(404).json({message: 'No hay citas agendadas'});
        }


    } catch (error){
        res.status(500).json({ message: error.message});
    }
};

// Crear un nuevo registro de cita en la base de datos.
exports.createCita = async (req, res) => {
    try {
        // Llamada al servicio para crear un nuevo registro de cita
        const nuevaCita = await citaMedicaService.createCita(req.body);

        if(nuevacita){
            //  Respuesta HTTP al lado del cliente
        res.status(201).json(nuevaCita);
        }else{
            //  Respuesta HTTP al lado del cliente
            res.status(400).json({message: 'No se pudo crear la cita'});
        }
        

        //console.log(nuevaCita.toJSON())
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}