const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Catalogo=db.define('Catalogo', {
    idCatalogo: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    code: {
        type: DataTypes.STRING,
        //primaryKey: true
    },
    idCatalogoNombre: {
        type: DataTypes.INTEGER
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
    tableName: 'catalogos'
}

);

module.exports = Catalogo;