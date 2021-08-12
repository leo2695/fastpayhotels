const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const turisticAreas=db.define('turisticAreas', {
    code: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,

    },
    updatedAt: {
        type: DataTypes.DATE,
    }
},
{
    freezeTableName: true //para que no le agregue s al query buscando la tabla loginS en vez de login o darle directamente el nombre de la tabla tableName: 'Employees'
}

);

module.exports = turisticAreas;