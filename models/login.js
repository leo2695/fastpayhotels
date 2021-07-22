const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Login=db.define('Login', {
    idLogin: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    access_token: {
        type: DataTypes.STRING
    },
    token_type: {
        type: DataTypes.STRING
    },
    expires_in: {
        type: DataTypes.INTEGER
    },
    createdAt: {
        type: DataTypes.DATE,
        //field: 'fecha_creacion',

    },
    updatedAt: {
        type: DataTypes.DATE,
        //field: 'fecha_modificacion'
    }
},
{
    freezeTableName: true //para que no le agregue s al query buscando la tabla loginS en vez de login o darle directamente el nombre de la tabla tableName: 'Employees'
}

);

module.exports = Login;