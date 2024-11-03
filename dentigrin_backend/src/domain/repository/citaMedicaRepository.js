const Cita = require('@models/cita-medica/citaMedica');
const Odontologo =  require('@models/odontologo/odontologo');

class CitaMedicaRepository {

    //metodo para obtener todas las citas medicas que hay en la base de datos.
    static  async getAllCitas() {

        // se utiliza el modelo de cita medica para obtener todas las citas medicas.
        return await Cita.findAll();

    }

    //Metodo para crear un registro de cita odontologica en  la base de datos.
    static async createCita(cita) {

        // destructuracion de los datos para buscar el id del odontologo
        const nombreApellido = cita["odontologo"].split(" "); 
        

        //busqueda del odontologo para obtener  su id.
        const idOdontologo = await Odontologo.findOne({
            where: {
                nombre: nombreApellido[0],
                apellido: nombreApellido[1]
            }
        });
        
        console.log(idOdontologo)

        //  se utiliza el modelo de cita medica para crear un registro de cita odontologica.
        const nuevaCita = await Cita.create({
            horaConsulta : cita.horaConsulta,
            fechaConsulta : cita.fechaConsulta,
            motivo : "",
            estado : true,
            id_paciente : "",
            id_odontologo : idOdontologo.id
        });

        //  se devuelve el id de la nueva cita odontologica.
        if(nuevaCita){
            return nuevaCita.id;
        }else{
            throw new Error("Error al registrar la cita en la base de datos");            
        }

    }

}

module.exports = CitaMedicaRepository;