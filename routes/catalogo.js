const { Router } = require('express'); //esto permite llamar la funcion Router()
const { catalogoGet, catalogoPut, catalogoPost, catalogoDelete, catalogoPatch } = require('../controllers/catalogo');

const router= Router();

router.get('/',catalogoGet );

router.post('/', catalogoPost);

router.put('/', catalogoPut);

router.patch('/', catalogoPatch);

router.delete('/', catalogoDelete);

module.exports=router;