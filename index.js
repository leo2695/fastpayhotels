//console.log('Hola FPH');
const fs = require('fs');
const Promise = require("bluebird");
require('dotenv').config();
const Server = require('./models/server');
const Login = require('./models/login');
const Catalogo = require('./models/catalogo');
const Hotel_List = require('./models/hotel_list');
const Busquedas = require("./models/busquedas");

const server = new Server();

server.listen();

const main = async () => {

    const busquedas = new Busquedas();

    //DATE Formato ISO 8601
    const fechaActual = new Date();
    fechaActual.toISOString();

    ///Token///
    /*const token = await busquedas.obtenerToken();

    //guardar token BD
    try {
          const login= await new Login(token);
          await login.save();

      } catch (error) {
          console.log(error);

      }*/
    //////////////

    ///Catalogo
    //const catalogo = await busquedas.obtenerCatalogo(token.access_token, token.token_type);
    //const catalogo = await busquedas.obtenerCatalogo('', '');
    //fs.writeFileSync(`files/catalogue.txt`, JSON.stringify(catalogo));
    //console.log(catalogo.serviceTypes);

    //insertar en BD
    /*try {

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
        //console.log(catalogoturisticAreas.length);

    } catch (error) {
        console.log(error);
    }*/
    ////////////


    ////Lista Hoteles
    const listaHoteles = await busquedas.obtenerListaHoteles('', '', fechaActual);

    //Detalle Hotel
    await Promise.each(listaHoteles, async element => {
        const listaCodes = element.code;
        const detalle= await busquedas.obtenerDetalleHotel('', '', 'HUS-94C79C86+W9-E00');
        //console.log(detalle);

        //guardar en BD
        /*try {
              const hotel_list = await new Hotel_List(detalle);
              await hotel_list.save();

          } catch (error) {

              console.log(error);
          }*/
       
        return;
    });

    //const imagesHotel= await busquedas.obtenerImageHotel('','','HDE-9F4MCGW7+JX-E00');
    //console.log(imagesHotel);
}

main();