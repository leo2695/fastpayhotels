const { response, request } = require('express');
const Catalogo = require('../models/catalogo');

const catalogoGet = async (request = request, response = response) => {

    const catalogos= await Catalogo.findAll();
    //response.send('GET Controller');
    response.json({catalogos});
}

const catalogoPost = async (request = request, response = response) => {

    const { body }=request;

    try {
        const catalogo= await new Catalogo(body);
        await catalogo.save();

        response.json(catalogo);

    } catch (error) {
        console.log(error);
        response.status(500).json({
            msg: 'Hable con el desarrollador backend'
        })
    }

}
const catalogoPut = (request, response = response) => {
    response.send('PUT Controller');
}
const catalogoPatch = (request, response = response) => {
    response.send('PATCH Controller');
}
const catalogoDelete = (request, response = response) => {
    response.send('DELETE Controller');
}

module.exports={
    catalogoGet,
    catalogoPost,
    catalogoPut,
    catalogoPatch,
    catalogoDelete
}