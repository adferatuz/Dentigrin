const { DataTypes } = require('sequelize');
const sequelize = require('@config/db');
const Usuario = require('@models/usuario/user');

const Paciente = sequelize.define('Paciente', {
    id_paciente: {
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
    edad: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    fecha_nacimiento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    eps: {
        type: DataTypes.STRING,
        allowNull: false
    },
    direccion_residencia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero_contacto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ocupacion: {
        type: DataTypes.STRING,
        allowNull: false
    }    

},{
    tableName: 'pacientes'
})

module.exports = Paciente;