const axios = require('axios');
const qs = require('qs');

class Busquedas {

    constructor() {
        //TODO leer DB si existe

    }

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

    get numberRandom() {
        let numberRandom = Math.random();

        return numberRandom;
    }

    async obtenerToken() {


        try {
            //peticion http
            const instancia = axios({
                timeout: 30000,
                method: 'post',
                baseURL: 'https://avail.fastpayhotels.net/security/token',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: this.dataToken
            });

            const respuesta = await instancia;
            //console.log(respuesta.data);
            const {
                access_token,
                token_type,
                expires_in
            } = respuesta.data //destructuracion

            return {
                access_token: access_token,
                token_type: token_type,
                expires_in: expires_in
            }
        } catch (error) {
            console.log('error');
        }
    }

    async obtenerCatalogo(access_token, token_type) {

        //let numberRandom= Math.random();
        const data = JSON.stringify({
            "messageID": `Vamosdeviajetest-${this.numberRandom}`,
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
                    'Authorization': `Bearer FGfDDzdvXo4Q2lCXN9rQkuIKxUD4vO2Z4ENPrFiS6iYEwMZIgyx9qD9oW0CJOREWw_2qc9X9Bmr4CJTax-j-q9W9SF7FYrkG9FHPnQqEYXQVw_Lzyt2GkXtT39zA33CN8nMrP_5JkhFZXxFKUXKP9hqR-0O7j1JMi6vF4psCEl-NZ4kxeDjQQqxE8PYLWV9n1l_jSp9MjAgBt1nq_5waIE8H9pwq3o_B8LrGHjGEENiaOkKKHoJBQoYC4QRciwQarPVxtIvPhV9ROdjPsm6PMT1mOJAjzFeSi-Hwf-dJyeQMeoHrh9vXs3alIOItJCzEAkropiUbyh-pkFNJwAbLN9AI-gGRQMjAEfzr2TehlRg9tVmZDZ8yacyQ9yjrzx3ZuCRP7u4BbhD_tmhwhR0lou3mlDWnKp_TTUzz8dYEZweN1mJRc0K7WycXTwgTRjHV6HpzWcMeOmC7d0V39VBE6egMM7Crq7pjopZpn8V3R5haCJ0DdjAmNIENVfodgo6ZjwlqPvGPatLcmBKJAGj74ozg22P9MCnvycyvXC12_VvyNxBNg7e4R4_r6bREsXWLkNPUXxrGteeVDUuhOqS-L4oehow`,
                    //'Authorization': `${token_type} ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: data

            });

            const respuesta = await instancia;
            //console.log(respuesta.data);

            const serviceTypes = respuesta.data.serviceTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct => {
                    name = ct.content;
                })

                name = (name === undefined) ? element.name : name;

                const objetoCatalogo = {
                    idCatalogoNombre: 1,
                    code: code,
                    name: name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const imageTypes = respuesta.data.imageTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct => {
                    name = ct.content;
                })

                name = (name === undefined) ? element.name : name;

                const objetoCatalogo = {
                    idCatalogoNombre: 2,
                    code: code,
                    name: name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const hotelCategoryTypes = respuesta.data.hotelCategoryTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct => {
                    name = ct.content;
                })

                name = (name === undefined) ? element.name : name;

                const objetoCatalogo = {
                    idCatalogoNombre: 3,
                    code: code,
                    name: name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const hotelTypes = respuesta.data.hotelTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct => {
                    name = ct.content;
                })

                name = (name === undefined) ? element.name : name;

                const objetoCatalogo = {
                    idCatalogoNombre: 4,
                    code: code,
                    name: name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const serviceCategoryTypes = respuesta.data.serviceCategoryTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct => {
                    name = ct.content;
                })

                name = (name === undefined) ? element.name : name;

                const objetoCatalogo = {
                    idCatalogoNombre: 5,
                    code: code,
                    name: name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const mealPlanTypes = respuesta.data.mealPlanTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct => {
                    name = ct.content;
                })

                name = (name === undefined) ? element.name : name;

                const objetoCatalogo = {
                    idCatalogoNombre: 6,
                    code: code,
                    name: name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const bedTypes = respuesta.data.bedTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct => {
                    name = ct.content;
                })

                name = (name === undefined) ? element.name : name;

                const objetoCatalogo = {
                    idCatalogoNombre: 7,
                    code: code,
                    name: name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const hostSegment = respuesta.data.hostSegment.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct => {
                    name = ct.content;
                })

                name = (name === undefined) ? element.name : name;

                const objetoCatalogo = {
                    idCatalogoNombre: 8,
                    code: code,
                    name: name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const countries = respuesta.data.countries.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct => {
                    name = ct.content;
                })

                name = (name === undefined) ? element.name : name;

                const objetoCatalogo = {
                    idCatalogoNombre: 9,
                    code: code,
                    name: name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const tags = respuesta.data.tags.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct => {
                    name = ct.content;
                })

                name = (name === undefined) ? element.name : name;

                const objetoCatalogo = {
                    idCatalogoNombre: 10,
                    code: code,
                    name: name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const roomTypes = respuesta.data.roomTypes.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct => {
                    name = ct.content;
                })

                name = (name === undefined) ? element.name : name;

                const objetoCatalogo = {
                    idCatalogoNombre: 11,
                    code: code,
                    name: name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const serviceGroups = respuesta.data.serviceGroups.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct => {
                    name = ct.content;
                })

                name = (name === undefined) ? element.name : name;

                const objetoCatalogo = {
                    idCatalogoNombre: 12,
                    code: code,
                    name: name
                }

                //console.log(name);
                return objetoCatalogo;
            })
            const turisticAreas = respuesta.data.turisticAreas.map(element => {
                const code = element.code;
                let name;
                element.captions.map(ct => {
                    name = ct.content;
                })

                name = (name === undefined) ? element.name : name;

                const objetoCatalogo = {
                    idCatalogoNombre: 13,
                    code: code,
                    name: name
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

    async obtenerListaHoteles(access_token, token_type, fechaActual) {

        //let numberRandom= Math.random();
        const data = JSON.stringify({
            'messageID': `Vamosdeviajetest-${this.numberRandom}`,
            'fromLastUpdateDate': '2012-01-01T10:10:10.770Z',
            'toLastUpdateDate': fechaActual
        });

        try {
            //peticion http
            const instancia = axios({
                timeout: 30000,
                method: 'post',
                baseURL: 'https://catalogue.fastpayhotels.net/api/hotel/list',
                headers: {
                    'Authorization': `Bearer FGfDDzdvXo4Q2lCXN9rQkuIKxUD4vO2Z4ENPrFiS6iYEwMZIgyx9qD9oW0CJOREWw_2qc9X9Bmr4CJTax-j-q9W9SF7FYrkG9FHPnQqEYXQVw_Lzyt2GkXtT39zA33CN8nMrP_5JkhFZXxFKUXKP9hqR-0O7j1JMi6vF4psCEl-NZ4kxeDjQQqxE8PYLWV9n1l_jSp9MjAgBt1nq_5waIE8H9pwq3o_B8LrGHjGEENiaOkKKHoJBQoYC4QRciwQarPVxtIvPhV9ROdjPsm6PMT1mOJAjzFeSi-Hwf-dJyeQMeoHrh9vXs3alIOItJCzEAkropiUbyh-pkFNJwAbLN9AI-gGRQMjAEfzr2TehlRg9tVmZDZ8yacyQ9yjrzx3ZuCRP7u4BbhD_tmhwhR0lou3mlDWnKp_TTUzz8dYEZweN1mJRc0K7WycXTwgTRjHV6HpzWcMeOmC7d0V39VBE6egMM7Crq7pjopZpn8V3R5haCJ0DdjAmNIENVfodgo6ZjwlqPvGPatLcmBKJAGj74ozg22P9MCnvycyvXC12_VvyNxBNg7e4R4_r6bREsXWLkNPUXxrGteeVDUuhOqS-L4oehow`,
                    //'Authorization': `${token_type} ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: data

            });

            const respuesta = await instancia;
            //console.log(respuesta.data.hotelSummary.length);

            return respuesta.data.hotelSummary.map(hotel => ({
                name: hotel.name,
                code: hotel.code
            }))

        } catch (error) {
            console.log('error');
        }



    }

    async obtenerDetalleHotel(access_token, token_type, code) {

        const codeFPH = code;
        //let numberRandom= Math.random();
        const data = JSON.stringify({
            'messageID': `Vamosdeviajetest-${this.numberRandom}`,
            'code': code
        });

        try {
            //peticion http
            const instancia = axios({
                //timeout: 100000,
                method: 'post',
                baseURL: 'https://catalogue.fastpayhotels.net/api/hotel/details',
                headers: {
                    'Authorization': `Bearer FGfDDzdvXo4Q2lCXN9rQkuIKxUD4vO2Z4ENPrFiS6iYEwMZIgyx9qD9oW0CJOREWw_2qc9X9Bmr4CJTax-j-q9W9SF7FYrkG9FHPnQqEYXQVw_Lzyt2GkXtT39zA33CN8nMrP_5JkhFZXxFKUXKP9hqR-0O7j1JMi6vF4psCEl-NZ4kxeDjQQqxE8PYLWV9n1l_jSp9MjAgBt1nq_5waIE8H9pwq3o_B8LrGHjGEENiaOkKKHoJBQoYC4QRciwQarPVxtIvPhV9ROdjPsm6PMT1mOJAjzFeSi-Hwf-dJyeQMeoHrh9vXs3alIOItJCzEAkropiUbyh-pkFNJwAbLN9AI-gGRQMjAEfzr2TehlRg9tVmZDZ8yacyQ9yjrzx3ZuCRP7u4BbhD_tmhwhR0lou3mlDWnKp_TTUzz8dYEZweN1mJRc0K7WycXTwgTRjHV6HpzWcMeOmC7d0V39VBE6egMM7Crq7pjopZpn8V3R5haCJ0DdjAmNIENVfodgo6ZjwlqPvGPatLcmBKJAGj74ozg22P9MCnvycyvXC12_VvyNxBNg7e4R4_r6bREsXWLkNPUXxrGteeVDUuhOqS-L4oehow`,
                    //'Authorization': `${token_type} ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: data

            });

            const respuesta = await instancia;
            //console.log(respuesta.data.hotelDetail.name);
            const hotelName = respuesta.data.hotelDetail.name;
            const hotelType = (respuesta.data.hotelDetail.hotelType['code']) ? (respuesta.data.hotelDetail.hotelType['code']) : 'N/A';
            const hotelCategory = (respuesta.data.hotelDetail.hotelCategory['code']) ? (respuesta.data.hotelDetail.hotelCategory['code']) : 'N/A';
            const zone = (respuesta.data.hotelDetail.zone['code']) ? (respuesta.data.hotelDetail.zone['code']) : 'N/A';
            const plusCode = (respuesta.data.hotelDetail.location['pluscode']) ? (respuesta.data.hotelDetail.location['pluscode']) : 'N/A';
            const lat = (respuesta.data.hotelDetail.location['lat']) ? (respuesta.data.hotelDetail.location['lat']) : 'N/A';
            const long = (respuesta.data.hotelDetail.location['long']) ? (respuesta.data.hotelDetail.location['long']) : 'N/A';
            const address = (respuesta.data.hotelDetail.location['address']) ? (respuesta.data.hotelDetail.location['address']) : 'N/A';
            const ubicacion_eng = (respuesta.data.hotelDetail.location['city']) ? (respuesta.data.hotelDetail.location['city'] + ', ' + respuesta.data.hotelDetail.location['country']) : 'N/A';
            const checkin = (respuesta.data.hotelDetail.checkinHour) ? (respuesta.data.hotelDetail.checkinHour) : '00:00';
            const checkout = (respuesta.data.hotelDetail.checkoutHour) ? (respuesta.data.hotelDetail.checkoutHour) : '00:00';
            const descriptions_short = (respuesta.data.hotelDetail.descriptions[0].content) ? (respuesta.data.hotelDetail.descriptions[0].content) : 'N/A';
            const descriptions_long = (respuesta.data.hotelDetail.descriptions[1].content) ? (respuesta.data.hotelDetail.descriptions[1].content) : 'N/A';
            const response = (respuesta.data.messageID) ? (respuesta.data.messageID) : 'N/A';
            //console.log(ubicacion_eng);
            let hostSegments = (!respuesta.data.hotelDetail.hostSegments || respuesta.data.hotelDetail.hostSegments === null) ? [] : respuesta.data.hotelDetail.hostSegments;
            let mealPlans = (!respuesta.data.hotelDetail.mealPlans || respuesta.data.hotelDetail.mealPlans === null) ? [] : respuesta.data.hotelDetail.mealPlans;
            let services = (!respuesta.data.hotelDetail.services || respuesta.data.hotelDetail.services === null) ? [] : respuesta.data.hotelDetail.services;

            hostSegments = hostSegments.map(element => {
                const codeHS = element.code; //string
                return codeHS;
            });

            mealPlans = mealPlans.map(element => {
                const codeMP = (element.code === '' || element.code === undefined) ? element.name : element.code;
                return codeMP
            });

            services = services.map(element => {
                const codeServices = (element.code === '' || element.code === undefined) ? element.name : element.code;
                return codeServices
            });
            //console.log(services);


            /*
            const rooms=respuesta.data.hotelDetail.rooms.map(element =>{
                const codeRooms=element.code;
                const roomsServices=element.services;

                //console.log(roomsServices);
        
                //console.log(codeRooms);
            });*/

            const objetoDetalles = await {
                code: codeFPH,
                name: hotelName,
                hotelType,
                hotelCategory,
                zone,
                plusCode,
                ubicacion_eng,
                latitud: lat,
                longitud: long,
                direccion: address,
                hostSegments: hostSegments.join(', '), //une todos los elementos del array con comas
                mealPlans: mealPlans.join(', '),
                services: services.join(', '),
                descriptions_short,
                descriptions_long,
                checkinHour: checkin,
                checkoutHour: checkout
            }

            return objetoDetalles;

        } catch (error) {
            console.log(`error al obtener los detalles del hotel ${codeFPH} por ${error}`);
        }
    }

    /*async obtenerImageHotel(access_token, token_type, code) {

        const codeFPH= code;
        //let numberRandom= Math.random();
        const data = JSON.stringify({
            'messageID': `Vamosdeviajetest-${this.numberRandom}`,
            'code' : code
        });

        try {
            //peticion http
            const instancia = axios({
                timeout: 30000,
                method: 'post',
                baseURL: 'https://catalogue.fastpayhotels.net/api/hotel/details',
                headers: {
                    'Authorization': `Bearer FGfDDzdvXo4Q2lCXN9rQkuIKxUD4vO2Z4ENPrFiS6iYEwMZIgyx9qD9oW0CJOREWw_2qc9X9Bmr4CJTax-j-q9W9SF7FYrkG9FHPnQqEYXQVw_Lzyt2GkXtT39zA33CN8nMrP_5JkhFZXxFKUXKP9hqR-0O7j1JMi6vF4psCEl-NZ4kxeDjQQqxE8PYLWV9n1l_jSp9MjAgBt1nq_5waIE8H9pwq3o_B8LrGHjGEENiaOkKKHoJBQoYC4QRciwQarPVxtIvPhV9ROdjPsm6PMT1mOJAjzFeSi-Hwf-dJyeQMeoHrh9vXs3alIOItJCzEAkropiUbyh-pkFNJwAbLN9AI-gGRQMjAEfzr2TehlRg9tVmZDZ8yacyQ9yjrzx3ZuCRP7u4BbhD_tmhwhR0lou3mlDWnKp_TTUzz8dYEZweN1mJRc0K7WycXTwgTRjHV6HpzWcMeOmC7d0V39VBE6egMM7Crq7pjopZpn8V3R5haCJ0DdjAmNIENVfodgo6ZjwlqPvGPatLcmBKJAGj74ozg22P9MCnvycyvXC12_VvyNxBNg7e4R4_r6bREsXWLkNPUXxrGteeVDUuhOqS-L4oehow`,
                    //'Authorization': `${token_type} ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: data

            });

            const respuesta = await instancia;

            return respuesta.data.hotelDetail.images.map(element =>({
                code : element.type['code'],
                name : element.name,
                url : element.url,
                codeHotel : codeFPH
            }));

        } catch (error) {
            console.log(`error al obtener los detalles del hotel ${codeFPH}`);
        }



    }*/
}

module.exports = Busquedas;