const { SECRET_JWT_KEY } = require('@config/config.js');
const userService = require('./userService');
const jwt = require('jsonwebtoken');

exports.createUser = async(req, res) => {
  try {

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

        //Llamado al servicio para  iniciar sesion
        const user = await userService.initLoguin(req.body);

        //Generando el token de inicio de sesion con jwt
        const token = jwt.sign(
          { id: user.id, email: user.email }, 
          SECRET_JWT_KEY,
          {expiresIn: '1h'});

        //Respuesta http  con el usuario logueado
        res
          .cookie('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 *  60, // 1 hour
          })
          .status(200)
          .json({user, token});
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

exports.logout = async(req, res) => {
    try {
        res
        .clearCookie('access_token')
        .status(200)
        .json({ message: 'Se cerro la sesión exitosamente' });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}

exports.protected = async(req, res) => {
    try {
        //const {user} = req.session
        const token = req.cookies['access_token'];
        if(!token) return res.status(403).send('Acceso no autorizado');
        
        const data = jwt.verify(token, SECRET_JWT_KEY);

        res.status(200).json({message: 'Acceso autorizado', data});
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
}