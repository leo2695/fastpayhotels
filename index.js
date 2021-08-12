//console.log('Hola FPH');
const fs = require('fs');
const Promise = require("bluebird");
require('dotenv').config();
const Server = require('./models/server');
const Login = require('./models/login');
//Catalogo
const Catalogo = require('./models/catalogo');
const ServiceTypes = require('./models/serviceTypes');
const ImageTypes = require('./models/imageTypes');
const HotelCategoryTypes = require('./models/hotelCategoryTypes');
const BedTypes = require('./models/bedTypes');
const Countries = require('./models/countries');
const HostSegment = require('./models/hostSegment');
const HotelTypes = require('./models/hotelTypes');
const MealPlanTypes = require('./models/mealPlanTypes');
const RoomTypes = require('./models/roomTypes');
const ServiceCategoryTypes = require('./models/serviceCategoryTypes');
const Tags = require('./models/tags');
const TuristicAreas = require('./models/turisticAreas');
//End Catalogo
const Hotel_List = require('./models/hotel_list');
const Busquedas = require("./models/busquedas");
const {
    diferenciaFechas
} = require('./helpers/fechas');

const server = new Server();

server.listen();

const main = async () => {

    const busquedas = new Busquedas();


    ///Token///
    const diferenciaDias = await diferenciaFechas();
    const tokenBD = await Login.findOne({
        order: [
            ['createdAt', 'DESC']
        ]
    });

    let token;
    if (diferenciaDias <= 7) {
        //console.log('Menos de 7 días o 7');
        token = tokenBD;
    } else {
        //console.log('8 días o más');
        token = await busquedas.obtenerToken();

        //guardar token BD
        try {
            const login = await new Login(token);
            await login.save();

        } catch (error) {
            console.log(error);
        }

    }

    //////////////

    ///Catalogo
    const catalogo = await busquedas.obtenerCatalogo(token.access_token, token.token_type);
    //fs.writeFileSync(`files/catalogue.txt`, JSON.stringify(catalogo));
    //console.log(catalogo);

    //INSERT DB//
    try {


        if (catalogo.serviceTypes || catalogo.serviceTypes !== undefined) {
            //const catalogoserviceTypes = await ServiceTypes.bulkCreate(catalogo.serviceTypes);
            await Promise.each(catalogo.serviceTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                //console.log(catalogo.serviceTypes);
                try {
                    const catalogoBD = await new ServiceTypes(detalle);
                    await catalogoBD.save();
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.imageTypes || catalogo.imageTypes !== undefined) {
            //const catalogoimageTypes = await ImageTypes.bulkCreate(catalogo.imageTypes);
            await Promise.each(catalogo.imageTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await new ImageTypes(detalle);
                    await catalogoBD.save();
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.hotelCategoryTypes || catalogo.hotelCategoryTypes !== undefined) {
            //const catalogohotelCategoryTypes = await HotelCategoryTypes.bulkCreate(catalogo.hotelCategoryTypes);
            await Promise.each(catalogo.hotelCategoryTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await new HotelCategoryTypes(detalle);
                    await catalogoBD.save();
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        /*if (catalogo.hotelTypes || catalogo.hotelTypes !== undefined) {
            //const catalogohotelTypes = await HotelTypes.bulkCreate(catalogo.hotelTypes);
            await Promise.each(catalogo.hotelTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await new HotelTypes(detalle);
                    await catalogoBD.save();
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.serviceCategoryTypes || catalogo.serviceCategoryTypes !== undefined) {
            //const catalogoserviceCategoryTypes = await ServiceCategoryTypes.bulkCreate(catalogo.serviceCategoryTypes);
            await Promise.each(catalogo.serviceCategoryTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await new ServiceCategoryTypes(detalle);
                    await catalogoBD.save();
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.mealPlanTypes || catalogo.mealPlanTypes !== undefined) {
            //const catalogomealPlanTypes = await MealPlanTypes.bulkCreate(catalogo.mealPlanTypes);
            await Promise.each(catalogo.mealPlanTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await new MealPlanTypes(detalle);
                    await catalogoBD.save();
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.bedTypes || catalogo.bedTypes !== undefined) {
            //const catalogobedTypes = await BedTypes.bulkCreate(catalogo.bedTypes);
            await Promise.each(catalogo.bedTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await new BedTypes(detalle);
                    await catalogoBD.save();
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.hostSegment || catalogo.hostSegment !== undefined) {
            //const catalogohostSegment = await HostSegment.bulkCreate(catalogo.hostSegment);
            await Promise.each(catalogo.hostSegment, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await new HostSegment(detalle);
                    await catalogoBD.save();
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.countries || catalogo.countries !== undefined) {
            //const catalogocountries = await Countries.bulkCreate(catalogo.countries);
            await Promise.each(catalogo.countries, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await new Countries(detalle);
                    await catalogoBD.save();
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.tags || catalogo.tags !== undefined) {
            //const catalogotags = await Tags.bulkCreate(catalogo.tags);
            await Promise.each(catalogo.tags, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await new Tags(detalle);
                    await catalogoBD.save();
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.roomTypes || catalogo.roomTypes !== undefined) {
            //const catalogoroomTypes = await RoomTypes.bulkCreate(catalogo.roomTypes);
            await Promise.each(catalogo.roomTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await new RoomTypes(detalle);
                    await catalogoBD.save();
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.turisticAreas || catalogo.turisticAreas !== undefined) {
            //const catalogoturisticAreas = await TuristicAreas.bulkCreate(catalogo.turisticAreas);
            await Promise.each(catalogo.turisticAreas, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await new TuristicAreas(detalle);
                    await catalogoBD.save();
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }*/

    } catch (error) {
        console.log(error);
    }
    ////////////

    //UPDATE DB//
    try {


        if (catalogo.serviceTypes || catalogo.serviceTypes !== undefined) {
            //const catalogoserviceTypes = await ServiceTypes.bulkCreate(catalogo.serviceTypes);
            await Promise.each(catalogo.serviceTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                //console.log(catalogo.serviceTypes);
                try {
                    const catalogoBD = await ServiceTypes.update(detalle,{
                        where:{
                            code: detalle.code
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.imageTypes || catalogo.cimageTypes !== undefined) {
            //const catalogoimageTypes = await ImageTypes.bulkCreate(catalogo.imageTypes);
            await Promise.each(catalogo.imageTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await ImageTypes.update(detalle,{
                        where:{
                            code: detalle.code
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.hotelCategoryTypes || catalogo.hotelCategoryTypes !== undefined) {
            //const catalogohotelCategoryTypes = await HotelCategoryTypes.bulkCreate(catalogo.hotelCategoryTypes);
            await Promise.each(catalogo.hotelCategoryTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await HotelCategoryTypes.update(detalle,{
                        where:{
                            code: detalle.code
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        /*if (catalogo.hotelTypes || catalogo.hotelTypes !== undefined) {
            //const catalogohotelTypes = await HotelTypes.bulkCreate(catalogo.hotelTypes);
            await Promise.each(catalogo.hotelTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await HotelTypes.update(detalle,{
                        where:{
                            code: detalle.code
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.serviceCategoryTypes || catalogo.serviceCategoryTypes !== undefined) {
            //const catalogoserviceCategoryTypes = await ServiceCategoryTypes.bulkCreate(catalogo.serviceCategoryTypes);
            await Promise.each(catalogo.serviceCategoryTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await ServiceCategoryTypes.update(detalle,{
                        where:{
                            code: detalle.code
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.mealPlanTypes || catalogo.mealPlanTypes !== undefined) {
            //const catalogomealPlanTypes = await MealPlanTypes.bulkCreate(catalogo.mealPlanTypes);
            await Promise.each(catalogo.mealPlanTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await MealPlanTypes.update(detalle,{
                        where:{
                            code: detalle.code
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.bedTypes || catalogo.bedTypes !== undefined) {
            //const catalogobedTypes = await BedTypes.bulkCreate(catalogo.bedTypes);
            await Promise.each(catalogo.bedTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await BedTypes.update(detalle,{
                        where:{
                            code: detalle.code
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.hostSegment || catalogo.hostSegment !== undefined) {
            //const catalogohostSegment = await HostSegment.bulkCreate(catalogo.hostSegment);
            await Promise.each(catalogo.hostSegment, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await HostSegment.update(detalle,{
                        where:{
                            code: detalle.code
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.countries || catalogo.countries !== undefined) {
            //const catalogocountries = await Countries.bulkCreate(catalogo.countries);
            await Promise.each(catalogo.countries, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await Countries.update(detalle,{
                        where:{
                            code: detalle.code
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.tags || catalogo.tags !== undefined) {
            //const catalogotags = await Tags.bulkCreate(catalogo.tags);
            await Promise.each(catalogo.tags, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await Tags.update(detalle,{
                        where:{
                            code: detalle.code
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.roomTypes || catalogo.roomTypes !== undefined) {
            //const catalogoroomTypes = await RoomTypes.bulkCreate(catalogo.roomTypes);
            await Promise.each(catalogo.roomTypes, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await RoomTypes.update(detalle,{
                        where:{
                            code: detalle.code
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }
        if (catalogo.turisticAreas || catalogo.turisticAreas !== undefined) {
            //const catalogoturisticAreas = await TuristicAreas.bulkCreate(catalogo.turisticAreas);
            await Promise.each(catalogo.turisticAreas, async element => {
                const detalle = {
                    code: element.code,
                    name: element.name
                }
                try {
                    const catalogoBD = await TuristicAreas.update(detalle,{
                        where:{
                            code: detalle.code
                        }
                    });
                } catch (error) {
                    console.log(error);
                }
                return;
            });
        }*/

    } catch (error) {
        console.log(error);
    }
    ////////////


    ///////LISTA HOTELES///////
    const listaHoteles = await busquedas.obtenerListaHoteles(token.access_token, token.token_type);
    //console.log(listaHoteles.length);
    // INSERTAR Detalles Hotel//
    /*await Promise.each(listaHoteles, async element => {
        const listaCodes = element.code;
        const detalle = await busquedas.obtenerDetalleHotel(token.access_token, token.token_type, listaCodes);
        //console.log(detalle);

        //guardar en BD
        try {
            const hotel_list = await new Hotel_List(detalle);
            await hotel_list.save();

        } catch (error) {
            console.log(error);
        }

        return;
    });*/


    ////UPDATE BD////
     await Promise.each(listaHoteles, async element => {
         const listaCodes = element.code;
         const detalle = await busquedas.obtenerDetalleHotel(token.access_token, token.token_type, listaCodes);
         //console.log(detalle.code);

         //guardar en BD
         try {
             const hotel_list = await Hotel_List.update(detalle,{
                where:{
                    code: detalle.code
                }
            });
         } catch (error) {
             console.log(error);
         }

         return;
     });

    //////////////
}

main();