const express = require('express');
const router = express.Router()

const { mostrar }= require ('../controller/registroController')

router.get('/registro', mostrar)

module.exports = router