const Login = require("../models/login");

const diferenciaFechas= async()=>{

     //DATE Formato ISO 8601
     const fechaActual = new Date();
     fechaActual.toISOString();
     const fechaAnterior = new Date();
     fechaAnterior.setDate(fechaAnterior.getDate() - 7);
     fechaAnterior.toISOString();
     //console.log(fechaAnterior);
     const unDia = 86400000 //milisegundos
 
     const tokenBD = await Login.findOne({
         order: [
             ['createdAt', 'DESC']
         ]
     });
     const tokenCreacion = tokenBD.createdAt;
     const diferenciaSegundos = fechaActual - tokenCreacion
     const diferenciaDias = Math.round(diferenciaSegundos / unDia);

     return diferenciaDias;

}

module.exports={
    diferenciaFechas
}