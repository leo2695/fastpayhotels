const { response, request } = require('express');

const catalogoGet = (request = request, response = response) => {

    const{q, nombre, token}=request.query;
    //response.send('GET Controller');
    response.json({
        msg:'get API Controlador',
        q,
        nombre,
        token
    });
}
const catalogoPost = (request, response = response) => {
    response.send('POST Controller');
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