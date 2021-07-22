const { response, request } = require('express');
const Login = require('../models/login');

const getToken = async (request = request, response = response) => {

    const login= await Login.findAll();
    //response.send('GET Controller');
    response.json({login});
}

const postToken = async (request = request, response = response) => {

    const { body }=request;

    try {
        const login= await new Login(body);
        await login.save();

        response.json(login);

    } catch (error) {
        console.log(error);
        response.status(500).json({
            msg: 'Hable con el desarrollador backend'
        })
    }

}

module.exports={
    getToken,
    postToken
}