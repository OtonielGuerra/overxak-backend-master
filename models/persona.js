'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonaSchema = Schema({
    primer_nombre: String,
    segundo_nombre: String,
    primer_apellido: String,
    segundo_apellido: String,
    apellido_conyugal : String,
    fecha_nacimiento: Date,
    religion : String,
    correos: Array,
    genero: String,
    direccion : 
        {
            departamento: String,
            municipio: String,
            zona: Number,
            colonia: String,
            avenida: String,
            calle: String,
            manzana: String,
            noCasa : String,
            sector: String,
            cuadra: String,
            edificio: String,
            piso: String,
            apto: String
        }
    
    ,
    telefonos : Array
    
});

module.exports = mongoose.model('Persona', PersonaSchema);