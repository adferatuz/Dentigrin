const Contacto = require('@models/contacto/contacto')

//Obtener todas las citas
exports.getContactos = async (req, res) => {
    try {
        const contactos = await Contacto.findAll();
        res.json(contactos);

    } catch (error){
        res.status(500).json({ message: error.message});
    }
};