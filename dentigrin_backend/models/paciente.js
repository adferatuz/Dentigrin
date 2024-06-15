const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Paciente = sequelize.define('Paciente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type:DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'pacientes'
})

module.exports = Paciente;