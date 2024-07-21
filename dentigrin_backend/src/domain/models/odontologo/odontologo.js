const { DataTypes } = require('sequelize');
const sequelize = require('@config/db');
const Usuario = require('@models/usuario/user');

const Odontologo = sequelize.define('Odontologo', {
    id_odontologo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion_residencia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    especializacion: {
        type: DataTypes.STRING,
        allowNull: false
    }    

},{
    tableName: 'odontologos'
})

module.exports = Odontologo;