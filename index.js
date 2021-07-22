//console.log('Hola FPH');
const fs = require('fs');
require('dotenv').config();
const Server = require('./models/server');

const Busquedas = require("./models/busquedas");

const server = new Server();

server.listen();

/*const main = async () => {

    const busquedas = new Busquedas();;

    ///Token///
    const token = await busquedas.obtenerToken();
    //console.log(token);

    //guardar token BD

    ///Catalogo
    const catalogo = await busquedas.obtenerCatalogo(token.access_token, token.token_type);
    fs.writeFileSync(`files/catalogue.txt`, JSON.stringify(catalogo));
    console.log(catalogo);

    //insertar en BD

    ////////////

}

main();*/