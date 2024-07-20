const { DataTypes } = require('sequelize');
const sequelize = require('@config/db');

const Administrador = sequelize.define('Administrador', {
    id_administrador: {
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
    numero_contacto: {
        type: DataTypes.STRING,
        allowNull: false
    }    

},{
    tableName: 'administradores'
})

module.exports = Administrador;