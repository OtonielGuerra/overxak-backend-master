'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarreraSchema = Schema({
    nombre: String,
    codigo: String,
    descripcion: String,
});

module.exports = mongoose.model('Carrera', CarreraSchema);