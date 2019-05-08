'use strict'

var express = require('express');
var PersonaController = require('../controllers/persona');

var api = express.Router();

api.get('/prueba-controlador', PersonaController.pruebaPersona);
api.get('/personas', PersonaController.getPersonas);
api.post('/savePersona', PersonaController.crearPersona);
api.post('/saveFamilia', PersonaController.crearFamilia);
api.get('/getPersona/:id', PersonaController.getPersona);
api.put('/updatePersona/:id', PersonaController.updatePersona);
api.put('/deletePersona/:id', PersonaController.deletePersona)
api.get('/getPadres', PersonaController.getPadres)
api.get('/getMadres', PersonaController.getMadres)
api.get('/getEncargados', PersonaController.getEncargados)
api.get('/getHijos', PersonaController.getHijos)

module.exports = api;