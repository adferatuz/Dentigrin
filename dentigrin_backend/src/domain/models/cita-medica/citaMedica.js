const { DataTypes } = require('sequelize');
const sequelize = require('@config/db');

const Cita = sequelize.define('citas', 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: 'Este es un nombre de columna que contiene la llave primaria'
        },
        horaConsulta: {
            type:DataTypes.STRING,
            allowNull: false,
            field: 'hora_consulta',
            comment: 'Este es un nombre de columna que contiene la hora de consulta'
        },
        fechaConsulta: {
            type:DataTypes.STRING,
            allowNull: false,
            field: 'fecha_consulta',
            comment: 'Este es un nombre de columna que contiene la fecha de consulta'
        },
        motivo: {
            type:DataTypes.TEXT,
            allowNull: false,
            field: 'motivo',
            comment: 'Este es un nombre de columna que contiene el motivo'
        },
        estado: {
            type:DataTypes.BOOLEAN,
            allowNull: false,
            field: 'estado',
            comment: 'Este es un nombre de columna que contiene el estado'
        }
    },
    {
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
    }
);
module.exports = Cita;