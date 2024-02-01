const express = require('express');
const router = express.Router()

const {mostrar, lista, editar, añadir} = require('../controller/menuController')

router.get('/lista_menu', mostrar)
router.get('/lista_menu', lista)
router.get('/editar_menu', editar)
router.get('/añadir_menu', añadir)

module.exports = router