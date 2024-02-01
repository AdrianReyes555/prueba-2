//const express = require('express');
//const router = express.Router()

//const { mostrar }= require ('../controller/registroController')

//router.get('/registro', mostrar)

//module.exports = router

const express = require('express');
const router = express.Router()

const {mostrar, lista, editar, añadir} = require('../controller/registroController')

router.get('/lista_registro', mostrar)
router.get('/lista_registro', lista)
router.get('/editar_registro', editar)
router.get('/añadir_registro', añadir)

module.exports = router