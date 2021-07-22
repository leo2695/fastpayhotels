const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.catalogosRoutePath = '/api/catalogo';

        //Métodos iniciales, Rutas de mi aplicacion
        //Middlewares
        this.middlewares();

        //this.dbConnection();
        this.routes();
    }

    //Conectar Base de datos
    async dbConnection() {

        try {

            await db.authenticate();
            console.log('Database online');


        } catch (error) {
            throw new Error(error);
        }
    }

    //funciones que se ejecutan antes de otros procedimientos
    middlewares() {

        //cors
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //carpeta publica servir contenido estático
        this.app.use(express.static('public'));
    }

    routes() {
        
        //this.app.use('/api/catalogos',require('../routes/catalogos'));
        this.app.use(this.catalogosRoutePath,require('../routes/catalogo'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);

        })
    }

}

module.exports = Server;