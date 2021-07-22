//console.log('Hola FPH');
const fs = require('fs');
require('dotenv').config();
const Server = require('./models/server');
const Login = require('./models/login');
const Catalogo = require('./models/catalogo');
const Busquedas = require("./models/busquedas");

const server = new Server();

server.listen();

const main = async () => {

    const busquedas = new Busquedas();;

    ///Token///
    const token = await busquedas.obtenerToken();
    //console.log(token);

    //guardar token BD
    /* try {
         const login= await new Login(token);
         await login.save();

         //console.log(login);

     } catch (error) {
         console.log(error);

     }*/

    //////////////

    ///Catalogo
    const catalogo = await busquedas.obtenerCatalogo(token.access_token, token.token_type);
    //fs.writeFileSync(`files/catalogue.txt`, JSON.stringify(catalogo));
    //console.log(catalogo.serviceTypes);

    //insertar en BD
    try {
        const catalogoServicio = await Catalogo.bulkCreate(catalogo.serviceTypes);
        //await catalogoServicio.save();

        console.log(catalogoServicio.length);

    } catch (error) {
        console.log(error);
    }

    ////////////

}

main();