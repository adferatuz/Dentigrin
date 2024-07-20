const { DataTypes } = require('sequelize');
const sequelize = require('@config/db');
const Paciente = require('@models/paciente/paciente');

const HistoriaClinica = sequelize.define('HistoriaClinica', {
    id_historia_clinica: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_paciente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Paciente,
            key: 'id_paciente'
        }
    },
    fecha_consulta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    diagnostico: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tratamientos: {
        type: DataTypes.STRING,
        allowNull: false
    }   

},{
    tableName: 'historias_clinicas'
});

module.exports = HistoriaClinica;