const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Hotel_images = db.define('Hotel_images', {
        idHotel_images: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        codeHotel: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING
        },
        code: {
            type: DataTypes.STRING
        },
        url: {
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
    }, {
        tableName: 'hotel_images'
    }

);

module.exports = Hotel_images;