'use strict'

var Familia = require('../models/familia');

function pruebaFamilia(req, res){
    res.status(200).send({message: 'Familia está corriendo'});
}

function getFamilias(req, res){
    Familia.find({}, (err, todasLasFamilias)=>{
        if(err){
            res.status(500).send({message: 'Error al traer los datos'});
        }else{
            res.status(200).send({todasLasFamilias})
        }
    });
}

function getFamilia(req, res){
    Familia.findOne({_id: req.params.id}, (err, familia) => {
        if(err){
            res.status(500).send({message: 'Error al buscar la familia'});
        }else{
            res.status(200).send({familia})
        }
    });
}

function updateFamilia(req, res){
    Familia.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true}, (err, updated)=>{
        if(err){
            res.status(404).send({message: 'Error al actualizar la familia'});
        }else{
            res.status(200).send({updated});
        }
    });
}

function crearFamilia(req, res){
    var familia = new Familia();
    var params = req.body;

    if(params.encargado ){
        familia.padre = params.padre;
        familia.madre = params.madre;
        familia.encargado = params.encargado;
        familia.hijos = [];
       

        familia.save((err, familiaSave)=>{
            if(err){
                
                res.status(500).send({message: 'Familia no guardada'})
            }else{
                console.log(params)
                res.status(200).send({familiaSave})
            }
        })
    }else{
        console.log(params);
        res.status(500).send({message: 'Ingrese todos los campos requeridos'})
    }
}

module.exports = {
    pruebaFamilia,
    getFamilias,
    getFamilia,
    crearFamilia,
    updateFamilia,
}