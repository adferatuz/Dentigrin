const {validateUser, validateUserId, validateUsername, validatePassword} = require('./userValidation')
const userService = require('./userService');

exports.createUser = async(req, res) => {
  try {

      //Validacion de datos que llegan desde el lado del cliente.
      const { error } = validateUser(req.body);
      if (error) {
        return res.status(400).json({message: error.details[0].message});
      }

      //Llamada al servicio para crear un nuevo usuario
      const nuevoUsuario = await userService.createUser(req.body)

      //Si el usuario se creo correctamente, se devuelve un mensaje de exito
      res.status(201).json(nuevoUsuario);

    } catch (error) {
      //Si hay un error en la creacion del usuario, se devuelve un mensaje de error
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