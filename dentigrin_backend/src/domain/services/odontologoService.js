const Odontologo = require('@models/odontologo/odontologo');

//Servicio para  obtener los odontólogos
exports.getOdontologos  = async () => {
    try {
        const odontologos = await Odontologo.findAll();
        return odontologos;
        
    } catch (error) {
        throw new Error("Error al obtener los odontólogos");        
    }
}

exports.createOdontologo  = async (data) => {
    try {
        const nuevoOdontologo = await Odontologo.create(data);
        return nuevoOdontologo;

    } catch (error) {
        throw new Error("Error al crear el odontólogo");        
    }
}

exports.getOdontologoById   = async (id) => {
    try {
        const odontologo = await Odontologo.findByPk(id);
        return odontologo;
        
    } catch (error) {
        throw new Error("Error al obtener el odontólogo");        
    }
}

exports.updateOdontologo   = async (data,id ) => {
    try {
        const [updated] = await Odontologo.update(data, {
            where: { id: id }
          });
        return updated;
        
    } catch (error) {
        throw new Error("Error al actualizar el odontólogo");        
    }
}

exports.deleteOdontologo = async (id) => {
    try {
        const odontologo = await Odontologo.destroy({
            where: { id: id }
        });
        return odontologo;
        
    } catch (error) {
        throw new Error("Error al eliminar el odontólogo");        
    }
}





