const express = require('express');
const router = express.Router();
const api = require('../api');
const controller =require('../controllers/categorias');

router.get('',controller.list)

router.get('/nova',controller.novaForm)

router.post('/nova',controller.nova)

router.get('/excluir/:id',controller.excluir);

router.get('/editar/:id',controller.editarForm)

router.post('/editar/:id',controller.editar)

module.exports = router
