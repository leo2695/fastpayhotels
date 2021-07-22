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
    try {
         const login= await new Login(token);
         await login.save();

         //console.log(login);

     } catch (error) {
         console.log(error);

     }

    //////////////

    ///Catalogo
    const catalogo = await busquedas.obtenerCatalogo(token.access_token, token.token_type);
    //fs.writeFileSync(`files/catalogue.txt`, JSON.stringify(catalogo));
    //console.log(catalogo.serviceTypes);

    //insertar en BD
    try {
        const catalogoserviceTypes = await Catalogo.bulkCreate(catalogo.serviceTypes);
        const catalogoimageTypes = await Catalogo.bulkCreate(catalogo.imageTypes);
        const catalogohotelCategoryTypes = await Catalogo.bulkCreate(catalogo.hotelCategoryTypes);
        const catalogohotelTypes = await Catalogo.bulkCreate(catalogo.hotelTypes);
        const catalogoserviceCategoryTypes = await Catalogo.bulkCreate(catalogo.serviceCategoryTypes);
        const catalogomealPlanTypes = await Catalogo.bulkCreate(catalogo.mealPlanTypes);
        const catalogobedTypes = await Catalogo.bulkCreate(catalogo.bedTypes);
        const catalogohostSegment = await Catalogo.bulkCreate(catalogo.hostSegment);
        const catalogocountries = await Catalogo.bulkCreate(catalogo.countries);
        const catalogotags = await Catalogo.bulkCreate(catalogo.tags);
        const catalogoroomTypes = await Catalogo.bulkCreate(catalogo.roomTypes);
        const catalogoserviceGroups = await Catalogo.bulkCreate(catalogo.serviceGroups);
        const catalogoturisticAreas = await Catalogo.bulkCreate(catalogo.turisticAreas);
            
        //await catalogoServicio.save();

        console.log(catalogoturisticAreas.length);

    } catch (error) {
        console.log(error);
    }

    ////////////

}

main();