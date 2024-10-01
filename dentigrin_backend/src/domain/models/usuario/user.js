const { DataTypes} = require('sequelize');
const sequelize = require('@config/db');

const Usuario = sequelize.define('usuarios', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_usuario',
            comment: 'Este es un nombre de columna que contiene la llave primaria'
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'username',
            comment: 'Este es un nombre de columna que contiene los alias'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            field : 'email',
            unique : true,
            comment: 'Este es un nombre de columna que contiene el correo electronico'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            field : 'contraseña',
            comment: 'Este es un nombre de columna que contiene la contraseña'
        },
        rol: {
            type: DataTypes.STRING,
            allowNull: false,
            field : 'rol',
            comment: 'Este es un nombre de columna que contiene los roles'
        }
    }, 
    {
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
    }
);

module.exports = Usuario;