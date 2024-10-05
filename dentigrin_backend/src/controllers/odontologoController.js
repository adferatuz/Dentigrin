const {validateOdontologo, validateOdontologoId} = require('@validations/odontologoValidation')
const odontologoService = require('@services/odontologoService');

//Obtener todos los odontologos
exports.getOdontologos = async(req, res)=>{
    try {

      //Servicio  para obtener todos los odontologos
      const odontologos = await  odontologoService.getOdontologos();

      if(odontologos){
        res.status(200).json(odontologos);
      } else{
        // Lanza una respuesta http 204 que significa no-content
        res.status(204).json({ message: 'Aun no ahi Odontologos' });
      }
        
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
}

// Crear un nuevo Odontologo
exports.createOdontologo = async (req, res) => {
    try {

      //Llamado a la validacion de datos que llegan desde el servidor.
      const { error } = validateOdontologo(req.body);
      if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }

      //Llamado al servicio  para crear un nuevo odontologo
      const nuevoOdontologo = await odontologoService.createOdontologo(req.body);
      if(nuevoOdontologo){
        res.status(201).json(nuevoOdontologo);
      }

    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

//Obtener  un odontologo por id
exports.getOdontologoById = async (req, res) => {
  try {
    //Llamado a la validacion de datos que llegan desde el servidor.
    const { error } = validateOdontologoId(req.params.id);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
      }

    //Llamado  al servicio  para obtener un odontologo por id
    const odontologo = await odontologoService.getOdontologoById(req.params.id);
    if(odontologo){
      res.status(200).json(odontologo);
    } else{
      // Lanza una respuesta http 204 que significa no-content
      res.status(204).json({ message: 'Aun no ahi Odontologos'});
    }
    
  } catch (error) {
    res.status(400).json({ message: error.message });    
  }
}

//Actualizar  un odontologo
exports.updateOdontologo  = async (req, res) => {
  try {

    //Llamado a la validacion de datos que llegan desde el servidor.
    const { error } = validateOdontologoId(req.params.id);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    //Llamado al servicio para actualizar un odontologo
    const actualizado = await odontologoService.updateOdontologo( req.body,req.params.id);
    if(actualizado){
      const odontologoActualizado =  await odontologoService.getOdontologoById(req.params.id);
      res.status(200).json(odontologoActualizado);
    }
    
  } catch (error) {
    res.status(400).json({ message: error.message });    
  }
}

//Eliminar un odontologo
exports.deleteOdontologo = async (req, res) => {
  try {
    //Llamado a la validacion de datos que llegan desde el servidor.
    const { error } = validateOdontologoId(req.params.id);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    //Llamado al servicio para eliminar un odontologo
    const odontologoElimindado =  await odontologoService.deleteOdontologo(req.params.id);
    if(odontologoElimindado){
      res.status(200).json({ message: 'Odontologo eliminado con exito' });
    }  else{
      res.status(204).json({ message: 'No se encontro el odontologo' });
    }
    
  } catch (error) {
    res.status(400).json({ message: error.message });
    
  }
}


