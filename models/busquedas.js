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

    get fechaActual() {
        //DATE Formato ISO 8601
        const fechaActual = new Date();
        fechaActual.toISOString();

        return fechaActual;
    }

    get fechaAnterior() {
        //DATE Formato ISO 8601
        const fechaAnterior = new Date();
        fechaAnterior.setDate(fechaAnterior.getDate() - 7);
        fechaAnterior.toISOString();

        return fechaAnterior;
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
            "messageID": `Vamosdeviaje-${this.numberRandom}`,
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
                    //'Authorization': `Bearer FGfDDzdvXo4Q2lCXN9rQkuIKxUD4vO2Z4ENPrFiS6iYEwMZIgyx9qD9oW0CJOREWw_2qc9X9Bmr4CJTax-j-q9W9SF7FYrkG9FHPnQqEYXQVw_Lzyt2GkXtT39zA33CN8nMrP_5JkhFZXxFKUXKP9hqR-0O7j1JMi6vF4psCEl-NZ4kxeDjQQqxE8PYLWV9n1l_jSp9MjAgBt1nq_5waIE8H9pwq3o_B8LrGHjGEENiaOkKKHoJBQoYC4QRciwQarPVxtIvPhV9ROdjPsm6PMT1mOJAjzFeSi-Hwf-dJyeQMeoHrh9vXs3alIOItJCzEAkropiUbyh-pkFNJwAbLN9AI-gGRQMjAEfzr2TehlRg9tVmZDZ8yacyQ9yjrzx3ZuCRP7u4BbhD_tmhwhR0lou3mlDWnKp_TTUzz8dYEZweN1mJRc0K7WycXTwgTRjHV6HpzWcMeOmC7d0V39VBE6egMM7Crq7pjopZpn8V3R5haCJ0DdjAmNIENVfodgo6ZjwlqPvGPatLcmBKJAGj74ozg22P9MCnvycyvXC12_VvyNxBNg7e4R4_r6bREsXWLkNPUXxrGteeVDUuhOqS-L4oehow`,
                    'Authorization': `${token_type} ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: data

            });

            const respuesta = await instancia;
            //console.log(respuesta.data.serviceGroups);

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
            const serviceGroups = (respuesta.data.serviceGroups === undefined) ? [] : respuesta.data.serviceGroups.map(element => {
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
            return [];
        }

    }

    async obtenerListaHoteles(access_token, token_type) {

        //let numberRandom= Math.random();
        const data = JSON.stringify({
            'messageID': `Vamosdeviajetest-${this.numberRandom}`,
            //'fromLastUpdateDate': this.fechaAnterior,
            'fromLastUpdateDate': "2011-01-01T10:10:10.770Z",
            'toLastUpdateDate': this.fechaActual
        });

        try {
            //peticion http
            const instancia = axios({
                timeout: 30000,
                method: 'post',
                baseURL: 'https://catalogue.fastpayhotels.net/api/hotel/list',
                headers: {
                    //'Authorization': `Bearer FGfDDzdvXo4Q2lCXN9rQkuIKxUD4vO2Z4ENPrFiS6iYEwMZIgyx9qD9oW0CJOREWw_2qc9X9Bmr4CJTax-j-q9W9SF7FYrkG9FHPnQqEYXQVw_Lzyt2GkXtT39zA33CN8nMrP_5JkhFZXxFKUXKP9hqR-0O7j1JMi6vF4psCEl-NZ4kxeDjQQqxE8PYLWV9n1l_jSp9MjAgBt1nq_5waIE8H9pwq3o_B8LrGHjGEENiaOkKKHoJBQoYC4QRciwQarPVxtIvPhV9ROdjPsm6PMT1mOJAjzFeSi-Hwf-dJyeQMeoHrh9vXs3alIOItJCzEAkropiUbyh-pkFNJwAbLN9AI-gGRQMjAEfzr2TehlRg9tVmZDZ8yacyQ9yjrzx3ZuCRP7u4BbhD_tmhwhR0lou3mlDWnKp_TTUzz8dYEZweN1mJRc0K7WycXTwgTRjHV6HpzWcMeOmC7d0V39VBE6egMM7Crq7pjopZpn8V3R5haCJ0DdjAmNIENVfodgo6ZjwlqPvGPatLcmBKJAGj74ozg22P9MCnvycyvXC12_VvyNxBNg7e4R4_r6bREsXWLkNPUXxrGteeVDUuhOqS-L4oehow`,
                    'Authorization': `${token_type} ${access_token}`,
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
                    //'Authorization': `Bearer FGfDDzdvXo4Q2lCXN9rQkuIKxUD4vO2Z4ENPrFiS6iYEwMZIgyx9qD9oW0CJOREWw_2qc9X9Bmr4CJTax-j-q9W9SF7FYrkG9FHPnQqEYXQVw_Lzyt2GkXtT39zA33CN8nMrP_5JkhFZXxFKUXKP9hqR-0O7j1JMi6vF4psCEl-NZ4kxeDjQQqxE8PYLWV9n1l_jSp9MjAgBt1nq_5waIE8H9pwq3o_B8LrGHjGEENiaOkKKHoJBQoYC4QRciwQarPVxtIvPhV9ROdjPsm6PMT1mOJAjzFeSi-Hwf-dJyeQMeoHrh9vXs3alIOItJCzEAkropiUbyh-pkFNJwAbLN9AI-gGRQMjAEfzr2TehlRg9tVmZDZ8yacyQ9yjrzx3ZuCRP7u4BbhD_tmhwhR0lou3mlDWnKp_TTUzz8dYEZweN1mJRc0K7WycXTwgTRjHV6HpzWcMeOmC7d0V39VBE6egMM7Crq7pjopZpn8V3R5haCJ0DdjAmNIENVfodgo6ZjwlqPvGPatLcmBKJAGj74ozg22P9MCnvycyvXC12_VvyNxBNg7e4R4_r6bREsXWLkNPUXxrGteeVDUuhOqS-L4oehow`,
                    'Authorization': `${token_type} ${access_token}`,
                    'Content-Type': 'application/json'
                },
                data: data

            });

            const respuesta = await instancia;
            //
            const detallesHotel = (respuesta.data.hotelDetail === null) ? '' : respuesta.data.hotelDetail;
            //console.log(detallesHotel);
            const hotelName = (!detallesHotel.name || detallesHotel.name === undefined) ? 'S/D' : detallesHotel.name;
            const hotelType = (!detallesHotel.hotelType || !detallesHotel.hotelType['code'] || detallesHotel.hotelType['code'] === undefined) ? 'S/D' : (detallesHotel.hotelType['code']);
            const hotelCategory = (!detallesHotel.hotelCategory || !detallesHotel.hotelCategory['code'] || detallesHotel.hotelCategory['code'] === undefined) ? 'S/D' : (detallesHotel.hotelCategory['code']);
            const zone = (!detallesHotel.zone || !detallesHotel.zone['code'] || detallesHotel.zone['code'] === undefined) ? 'S/D' : (detallesHotel.zone['code']);
            const plusCode = (!detallesHotel.location || !detallesHotel.location['pluscode'] || detallesHotel.location['pluscode'] === undefined) ? 'S/D' : (detallesHotel.location['pluscode']);
            const lat = (!detallesHotel.location || !detallesHotel.location['lat'] || detallesHotel.location['lat'] === undefined) ? 'S/D' : (detallesHotel.location['lat']);
            const long = (!detallesHotel.location || !detallesHotel.location['long'] || detallesHotel.location['long'] === undefined) ? 'S/D' : (detallesHotel.location['long']);
            const address = (!detallesHotel.location || !detallesHotel.location['address'] || detallesHotel.location['address'] === undefined) ? 'S/D' : (detallesHotel.location['address']);
            const ubicacion_eng = (!detallesHotel.location || !detallesHotel.location['city'] || detallesHotel.location['city'] === undefined) ? 'S/D' : (detallesHotel.location['city'] + ', ' + detallesHotel.location['country']);
            const checkin = (!detallesHotel.checkinHour || detallesHotel.checkinHour === undefined) ? 'S/D' : (detallesHotel.checkinHour);
            const checkout = (!detallesHotel.checkoutHour || detallesHotel.checkoutHour === undefined) ? 'S/D' : (detallesHotel.checkoutHour);
            const descriptions_short = (!detallesHotel.descriptions || !detallesHotel.descriptions[0].content || detallesHotel.descriptions[0].content === undefined) ? 'S/D' : (detallesHotel.descriptions[0].content);
            const descriptions_long = (!detallesHotel.descriptions || !detallesHotel.descriptions[1].content || detallesHotel.descriptions[1].content === undefined) ? 'S/D' : (detallesHotel.descriptions[1].content);
            const response = (!respuesta.data.messageID) ? 'S/D' : (respuesta.data.messageID);
            //console.log(ubicacion_eng);
            let hostSegments = (!detallesHotel.hostSegments || detallesHotel.hostSegments === null || detallesHotel.hostSegments === undefined) ? [] : detallesHotel.hostSegments;
            let mealPlans = (!detallesHotel.mealPlans || detallesHotel.mealPlans === null || detallesHotel.mealPlans === undefined) ? [] : detallesHotel.mealPlans;
            let services = (!detallesHotel.services || detallesHotel.services === null || detallesHotel.services === undefined) ? [] : detallesHotel.services;
            let images = (!detallesHotel.images || detallesHotel.images === null || detallesHotel.images === undefined) ? [] : detallesHotel.images;
            let rooms = (!detallesHotel.rooms || detallesHotel.rooms === null || detallesHotel.rooms === undefined) ? [] : detallesHotel.rooms;
            let destinationTaxes = (!detallesHotel.destinationTaxes || detallesHotel.destinationTaxes === null || detallesHotel.destinationTaxes === undefined) ? [] : detallesHotel.destinationTaxes;

            hostSegments = hostSegments.map(element => {
                const codeHS = element.code; //string
                return codeHS;
            });

            mealPlans = mealPlans.map(element => {
                const codeMP = (element.code === undefined) ? element.name : element.code;
                return codeMP
            });

            services = services.map(element => {
                const codeServices = (element.code === '' || element.code === undefined) ? element.name : element.code;
                return codeServices
            });
            //console.log(services);

            images = images.map(element => ({
                //codeHotel: codeFPH,
                code: (!element.type || element.type['code'] === undefined) ? 'S/D' : element.type['code'],
                name: (!element.name || element.name === undefined) ? 'S/D' : element.name,
                url: (!element.url || element.url === undefined) ? 'S/D' : element.url
            }));

            rooms = rooms.map(element => ({
                descriptions: (!element.descriptions || element.descriptions === undefined) ? 'S/D' : element.descriptions,
                services: (!element.services || element.services === undefined) ? 'S/D' : element.services,
                images: (!element.images || element.images === undefined || element.images === '') ? 'S/D' : element.images,
                code: (!element.code || element.code === undefined) ? 'S/D' : element.code,
                name: (!element.name || element.name === undefined) ? 'S/D' : element.name
            }));

            destinationTaxes = destinationTaxes.map(element => ({
                description: (!element.description || element.description === undefined || element.description === '') ? 'S/D' : element.description,
                amount: (!element.amount || element.amount === undefined || element.amount === '') ? 'S/D' : element.service,
                currency: (!element.currency || element.currency === undefined || element.currency === '') ? 'S/D' : element.currency,
                guestScope: (!element.guestScope || element.guestScope === undefined || element.guestScope === '') ? 'S/D' : element.guestScope,
                destinationScope: (!element.destinationScope || element.destinationScope === undefined || element.destinationScope === '') ? 'S/D' : element.destinationScope
            }));

            //console.log(rooms);

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
                images: JSON.stringify(images),
                hostSegments: hostSegments.join(', '), //une todos los elementos del array con comas
                mealPlans: mealPlans.join(', '),
                services: services.join(', '),
                rooms: JSON.stringify(rooms),
                descriptions_short,
                descriptions_long,
                checkinHour: checkin,
                checkoutHour: checkout,
                destinationTaxes: JSON.stringify(destinationTaxes)
            }

            return objetoDetalles;

        } catch (error) {
            console.log(`error al obtener los detalles del hotel ${codeFPH} por ${error}`);
        }
    }
}

module.exports = Busquedas;