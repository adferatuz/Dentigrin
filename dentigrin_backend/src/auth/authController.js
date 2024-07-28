const User = require('@models/usuario/user');

exports.createUser = async(req, res) => {
    try {

      
        res.status(201).json({user: 'esta respondiendo correctamente registrando'});
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

exports.initLoguin = async(req, res) => {
    try {
        res.status(201).json({user: 'esta respondiendo correctamente iniciando'});
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

exports.logout = async(req, res) => {
    try {
        res.status(201).json({user: 'esta respondiendo correctamente saliendo de la sesion'});
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

exports.protected = async(req, res) => {
    try {
        res.status(201).json({user: 'esta respondiendo correctamente protegiendo'});
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}