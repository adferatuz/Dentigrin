const { DataTypes } = require('sequelize');
const sequelize = require('@config/db');
const Paciente = require('@models/paciente/paciente')
const Odontologo = require('@models/odontologo/odontologo')

const Cita = sequelize.define('citas', 
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue:  DataTypes.UUIDV4,
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

Paciente.belongsToMany(Odontologo, { through: Cita, foreignKey: 'id_paciente', allowNull: false, });
Odontologo.belongsToMany(Paciente, { through: Cita, foreignKey: 'id_odontologo', allowNull: false,});
module.exports = Cita;