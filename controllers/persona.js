'use strict'

//var mongoose = require('mongoose');
var Persona = require('../models/persona');
var Familia = require('../models/familia');

function pruebaPersona(req, res){
     res.status(200).send({message: 'Persona está corriendo'});
}

function getPersonas(req, res){
    Persona.find({}, (err, todasLasPersonas)=>{
        if(err){
            res.status(500).send({message: 'Error al traer los datos'});
        }else{
            res.status(200).send({todasLasPersonas});
        }
    });
}

function getPadres(req, res){
    Persona.find({genero: "MASCULINO"}, (err, padres) => {
        if(err){
            res.status(404).send({message: 'Error al obtener los padres'});
        }else{
            res.status(200).send({padres});
        }
    })
}

function getMadres(req, res){
    Persona.find({genero: "FEMENINO"}, (err, madres) => {
        if(err){
            res.status(404).send({message: 'Error al obtener las madres'});
        }else{
            res.status(200).send({madres});
        }
    })
}

function getEncargados(req, res){
    Persona.find({$or: [{genero: "MASCULINO"}, {genero: "FEMENINO"}]}, (err, encargados) => {
        if(err){
            res.status(404).send({message: 'Error al obtener las madres'});
        }else{
            res.status(200).send({encargados});
        }
    })
}

function getHijos(req ,res){
    Persona.find({}, (err, hijos) => {
        if(err){
            res.status(404).send({message: 'Error al obtener los hijos'});
        }else{
            res.status(200).send({hijos});
        }
    })
}

function getPersona(req, res){
    Persona.findOne({_id: req.params.id}, (err, person) => {
        if(err){
            res.status(500).send({message: 'Error al buscar la persona'});
        }else{
            res.status(200).send({person})
        }
    })
}

function updatePersona(req, res){
    Persona.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, (err, updated) => {
        if(err){
            res.status(404).send({message: 'Error al actualizar la persona'});
        }else{
            res.status(200).send({updated});
        }
    })
}



function crearPersona(req, res){
    var persona = new Persona();
    var params = req.body;
    
    if(params.primer_nombre && params.primer_apellido &&
        params.fecha_nacimiento && params.religion && params.correos && params.genero &&
        params.departamento && params.municipio && params.zona && params.avenida && params.calle && params.noCasa &&
        params.celular && params.casa){
        
            persona.primer_nombre = params.primer_nombre.toUpperCase();
            persona.segundo_nombre = params.segundo_nombre.toUpperCase();
            persona.primer_apellido = params.primer_apellido.toUpperCase();
            persona.segundo_apellido = params.segundo_apellido.toUpperCase();
            persona.apellido_conyugal = params.apellido_conyugal.toUpperCase();
            persona.fecha_nacimiento = params.fecha_nacimiento.toUpperCase();
            persona.religion = params.religion.toUpperCase();
            persona.correos = params.correos;
            persona.genero = params.genero.toUpperCase();
            persona.rol = params.role.toUpperCase();

            
                persona.direccion.departamento = params.departamento.toUpperCase(),
                persona.direccion.municipio = params.municipio.toUpperCase(),
                persona.direccion.zona = params.zona.toUpperCase(),
                persona.direccion.avenida = params.avenida.toUpperCase(),
                persona.direccion.calle = params.calle.toUpperCase(),
                persona.direccion.noCasa = params.noCasa.toUpperCase()
            
            

                persona.telefonos.celular = params.celular,
                persona.telefonos.casa = params.casa,
                persona.telefonos.otro = params.otro
            

        persona.save((err, personaSave)=>{
            if(err){
                console.log(err);
                res.status(500).send({message: 'Usuario no guardado'})
            }else{
                res.status(200).send({personaSave});
            }
        })
    }else{
        console.log(params);
        res.status(500).send({message: 'Ingrese todos los campos requeridos'});

    }
}

function crearFamilia(req, res){
    var familia = new Familia();
    var params = req.body;
    if(params.padre && params.madre && params.encargado){
        familia.padre.id = params.padre._id;
        familia.madre.id = params.madre._id;
        familia.encargado.id = params.encargado._id;
        familia.encargado.name = params.encargado.primer_nombre + " " + params.encargado.primer_apellido;
        console.log('Hijo:' + params.hijos[0].primer_nombre)

        familia.padre.name = params.padre.primer_nombre + " " + params.padre.primer_apellido;
        familia.madre.name = params.madre.primer_nombre + " " + params.madre.primer_apellido;
        params.hijos.forEach(function(v) {
            familia.hijos.id = v._id;
            familia.hijos.name = v.primer_nombre + " " + v.primer_apellido;
        })

        

        familia.save((err, familiaSave) => {
            if(err){
                res.status(404).send({message: 'Error al guardar la familia'});
            }else{
                Familia.findByIdAndUpdate({_id: familiaSave._id}, {$push: {hijos: {$each: params.hijos}}}, (err, ok) => {
                    if(err){
                        console.log(err)
                    }else{
                        console.log(ok)
                    }
                })
                res.status(200).send({familiaSave});
            }
        })
    }else{
        res.status(404).send({message: 'Ingrese los datos solicitados'})
    }
    
}

function deletePersona(req, res){
    var id = req.params.id;
    Persona.findByIdAndDelete({_id: id}, (err, deleted) => {
        if(err){
            res.status(500).send({message: 'Error al eliminar la persona'});
        }else{
            res.status(200).send({deleted})
        }
    })
}

module.exports = {
    pruebaPersona,
    getPersonas,
    crearPersona,
    getPersona,
    updatePersona,
    deletePersona,
    getPadres,
    getMadres,
    getEncargados,
    getHijos,
    crearFamilia
}