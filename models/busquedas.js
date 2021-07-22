const axios = require('axios');
const qs = require('qs');

class Busquedas {

    constructor() {
        //TODO leer DB si existe

    }

    //get paramsMapBox() {
    //    return {
    //        'access_token': process.env.MAP_TOKEN,
    //        'limit': 5,
    //        'language': 'es'
    //    }
    //}

    get dataToken() {
        const token = qs.stringify({
            'grant_type': process.env.GRANT_TYPE,
            'client_id': process.env.CLIENT_ID,
            'client_secret': process.env.CLIENT_SECRET,
            'username': 'APIVamosdeviaje',
            'password': process.env.PASSWORD,
            'version': process.env.VERSION
        });

        return token;
    }

    async obtenerToken(){


        try {
            //peticion http
              const instancia = axios({
                timeout: 30000,
                method: 'post',
                baseURL: 'https://avail.fastpayhotels.net/security/token',
                headers: { 
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data : this.dataToken
              });

              const respuesta = await instancia;
              //console.log(respuesta.data);
              const {access_token, token_type, expires_in} = respuesta.data //destructuracion

              return{
                  access_token: access_token,
                  token_type: token_type,
                  expires_in: expires_in
              }
        } catch (error) {
            console.log('error');
        }
    }

    async obtenerCatalogo(access_token, token_type) {

        let numberRandom= Math.random();
        const data = JSON.stringify({
            "messageID": `Vamosdeviajetest-${numberRandom}`,
            "languages": [
                "es"
            ]
        });

        try {
            //peticion http
            const instancia = axios({
                timeout: 30000,
                method: 'post',
                baseURL: 'https://catalogue.fastpayhotels.net/api/hotel/catalogue',
                headers: {
                    'Authorization': `${token_type} ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: data

            });

            const respuesta = await instancia;

            //console.log(respuesta.data);

            const serviceTypes = respuesta.data.serviceTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct=>{
                    name= ct.content;
                })

                name= (name === undefined) ? element.name : name; 
                
                const objetoCatalogo= {
                    idCatalogoNombre : 1,
                    code : code,
                    name : name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const imageTypes = respuesta.data.imageTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct=>{
                    name= ct.content;
                })

                name= (name === undefined) ? element.name : name; 
                
                const objetoCatalogo= {
                    idCatalogoNombre : 2,
                    code : code,
                    name : name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const hotelCategoryTypes = respuesta.data.hotelCategoryTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct=>{
                    name= ct.content;
                })

                name= (name === undefined) ? element.name : name; 
                
                const objetoCatalogo= {
                    idCatalogoNombre : 3,
                    code : code,
                    name : name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const hotelTypes = respuesta.data.hotelTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct=>{
                    name= ct.content;
                })

                name= (name === undefined) ? element.name : name; 
                
                const objetoCatalogo= {
                    idCatalogoNombre : 4,
                    code : code,
                    name : name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const serviceCategoryTypes = respuesta.data.serviceCategoryTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct=>{
                    name= ct.content;
                })

                name= (name === undefined) ? element.name : name; 
                
                const objetoCatalogo= {
                    idCatalogoNombre : 5,
                    code : code,
                    name : name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const mealPlanTypes = respuesta.data.mealPlanTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct=>{
                    name= ct.content;
                })

                name= (name === undefined) ? element.name : name; 
                
                const objetoCatalogo= {
                    idCatalogoNombre : 6,
                    code : code,
                    name : name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const bedTypes = respuesta.data.bedTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct=>{
                    name= ct.content;
                })

                name= (name === undefined) ? element.name : name; 
                
                const objetoCatalogo= {
                    idCatalogoNombre : 7,
                    code : code,
                    name : name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const hostSegment = respuesta.data.hostSegment.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct=>{
                    name= ct.content;
                })

                name= (name === undefined) ? element.name : name; 
                
                const objetoCatalogo= {
                    idCatalogoNombre : 8,
                    code : code,
                    name : name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const countries = respuesta.data.countries.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct=>{
                    name= ct.content;
                })

                name= (name === undefined) ? element.name : name; 
                
                const objetoCatalogo= {
                    idCatalogoNombre : 9,
                    code : code,
                    name : name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const tags = respuesta.data.tags.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct=>{
                    name= ct.content;
                })

                name= (name === undefined) ? element.name : name; 
                
                const objetoCatalogo= {
                    idCatalogoNombre : 10,
                    code : code,
                    name : name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const roomTypes = respuesta.data.roomTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct=>{
                    name= ct.content;
                })

                name= (name === undefined) ? element.name : name; 
                
                const objetoCatalogo= {
                    idCatalogoNombre : 11,
                    code : code,
                    name : name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const serviceGroups = respuesta.data.serviceGroups.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct=>{
                    name= ct.content;
                })

                name= (name === undefined) ? element.name : name; 
                
                const objetoCatalogo= {
                    idCatalogoNombre : 12,
                    code : code,
                    name : name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const turisticAreas = respuesta.data.turisticAreas.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct=>{
                    name= ct.content;
                })

                name= (name === undefined) ? element.name : name; 
                
                const objetoCatalogo= {
                    idCatalogoNombre : 13,
                    code : code,
                    name : name
                }

                //console.log(name);
                return objetoCatalogo;
            })

            const catalogue = {
                'serviceTypes': serviceTypes,
                'imageTypes': imageTypes,
                'hotelCategoryTypes': hotelCategoryTypes,
                'hotelTypes': hotelTypes,
                'serviceCategoryTypes': serviceCategoryTypes,
                'mealPlanTypes': mealPlanTypes,
                'bedTypes': bedTypes,
                'hostSegment': hostSegment,
                'countries': countries,
                'tags': tags,
                'roomTypes': roomTypes,
                'serviceGroups': serviceGroups,
                'turisticAreas': turisticAreas
            }

            return catalogue;

        } catch (error) {
            console.log('error');
        }



    }
}

module.exports = Busquedas;