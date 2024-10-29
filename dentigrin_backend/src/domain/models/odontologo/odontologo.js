const { DataTypes } = require('sequelize');
const sequelize = require('@config/db');
const Usuario = require('@models/usuario/user');

const Odontologo = sequelize.define('odontologos', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue:  DataTypes.UUIDV4,
            comment: 'Este es un nombre de columna que contiene la llave primaria'
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'nombres',
            comment: 'Este es un nombre de columna que contiene los nombres'
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'apellidos',
            comment: 'Este es un nombre de columna que contiene los apellidos'
        },
        direccionResidencia: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'direccion_residencia',
            comment: 'Este es un nombre de columna que contiene la dirección de residencia'
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'genero',
            comment: 'Este es un nombre de columna que contiene el genéro'
        },
        especializacion: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'especializacion',
            comment: 'Este es un nombre de columna que contiene la especialización'
        }    

    },
    {
        timestamps: true,
        createdAt: 'fecha_creacion',
        updatedAt: 'fecha_actualizacion',
    }
);
Usuario.hasOne(Odontologo, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    foreignKey: 'id_usuario',
    sourceKey: 'id'
});

Odontologo.belongsTo(Usuario, { foreignKey: 'id_usuario', targetId: 'id'});

module.exports = Odontologo;