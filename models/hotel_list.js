const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Hotel_List=db.define('Hotel_List', {
   /*idHotel_list: {
        type: DataTypes.INTEGER,
        //primaryKey: true
    },*/
    code: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    hotelType: {
        type: DataTypes.STRING
    },
    hotelCategory: {
        type: DataTypes.STRING,
    },
    zone: {
        type: DataTypes.STRING,
    },
    plusCode: {
        type: DataTypes.STRING,
    },
    ubicacio_esp: {
        type: DataTypes.STRING,
    },
    ubicacion_eng: {
        type: DataTypes.STRING,
    },
    latitud: {
        type: DataTypes.STRING,
    },
    longitud: {
        type: DataTypes.STRING,
    },
    direccion: {
        type: DataTypes.STRING,
    },
    images: {
        type: DataTypes.TEXT,
    },
    hostSegments: {
        type: DataTypes.STRING,
    },
    mealPlans: {
        type: DataTypes.STRING,
    },
    services: {
        type: DataTypes.STRING,
    },
    rooms: {
        type: DataTypes.TEXT,
    },
    descriptions_short: {
        type: DataTypes.STRING,
    },
    descriptions_long: {
        type: DataTypes.STRING,
    },
    checkinHour: {
        type: DataTypes.STRING,
    },
    checkoutHour: {
        type: DataTypes.STRING,
    },
    destinationTaxes: {
        type: DataTypes.TEXT,
    },
    createdAt: {
        type: DataTypes.DATE,
        //field: 'fecha_modificacion'
    },
    updatedAt: {
        type: DataTypes.DATE,
        //field: 'fecha_modificacion'
    },
},
{
    freezeTableName: true //para que no le agregue s al query buscando la tabla loginS en vez de login o darle directamente el nombre de la tabla tableName: 'Employees'
}

);

module.exports = Hotel_List;