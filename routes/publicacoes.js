const express = require('express');
const router = express.Router();
const api = require('../api');
const controller =require('../controllers/publicacoes')

router.get('/categoria/:categoria',controller.list)

router.get('/nova',controller.novaForm)

router.post('/nova',controller.nova)

router.get('/excluir/:categoria/:id',controller.excluir);

router.get('/editar/:categoria/:id',controller.editarForm)

router.post('/editar/:categoria/:id',controller.editar)

module.exports = router
