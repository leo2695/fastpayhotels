const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Catalogo=db.define('Catalogo', {
    idCatalogo: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    idCatalogoNombre: {
        type: DataTypes.STRING
    },
    code: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
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
    tableName: 'catalogos'
}

);

module.exports = Catalogo;