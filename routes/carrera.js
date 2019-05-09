'use strict'

var express = require('express');
var CarreraController = require('../controllers/carrera');

var api = express.Router();

api.get('/prueba-controlador', CarreraController.pruebaCarrera);
api.get('/carreras', CarreraController.getCarreras);
api.post('/saveCarrera', CarreraController.crearCarrera);
api.get('/getCarrera/:id', CarreraController.getCarrera);
api.put('/updateCarrera/:id', CarreraController.updateCarrera);
api.put('/deleteCarrera/:id', CarreraController.deleteCarrera);

module.exports = api;