const { DataTypes, NOW } = require('sequelize');
const sequelize = require('@config/db');
const { toDefaultValue } = require('sequelize/lib/utils');

const Usuario = sequelize.define('Usuario', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_creacion: {
        type:  DataTypes.DATE,
        defaultValue: NOW
        
    },
    fecha_actualizacion: {
        type:  DataTypes.DATE,
        defaultValue: NOW
        
    }   

},{
    tableName: 'usuarios',
    timestamps: true,
    createdAt: 'fecha_creacion',
    updatedAt: 'fecha_actualizacion',
    hooks: {
        beforeCreate: (usuario) => {
            usuario.fecha_creacion = new Date();
            usuario.fecha_actualizacion = new Date();
        },
        beforeUpdate: (usuario) => {
            usuario.fecha_actualizacion = new Date();
        }
    }
});

module.exports = Usuario;