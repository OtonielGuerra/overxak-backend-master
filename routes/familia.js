'use strict'

var express = require('express');
var FamiliaController = require('../controllers/familia');

var api = express.Router();

api.get('/prueba-controlador-familia', FamiliaController.pruebaFamilia);
api.get('/familias', FamiliaController.getFamilias);
api.post('/saveFamilia', FamiliaController.crearFamilia);
api.get('/familia/:id', FamiliaController.getFamilia);
api.put('updateFamilia/:id', FamiliaController.updateFamilia);

module.exports = api;