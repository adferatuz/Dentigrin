const { DataTypes } = require('sequelize');
const sequelize = require('@config/db');

const Odontologo = sequelize.define('Odontologo', {
    id_odontologo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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