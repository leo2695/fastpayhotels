const { Router } = require('express'); //esto permite llamar la funcion Router()
const { catalogoGet, catalogoPut, catalogoPost, catalogoDelete, catalogoPatch } = require('../controllers/catalogo');
const { getToken, postToken } = require('../controllers/login');

const router= Router();

router.get('/',catalogoGet );

router.post('/', catalogoPost);

router.put('/', catalogoPut);

router.patch('/', catalogoPatch);

router.delete('/', catalogoDelete);

//////TOKEN////////
router.get('/token',getToken );

router.post('/token', postToken);

module.exports=router;