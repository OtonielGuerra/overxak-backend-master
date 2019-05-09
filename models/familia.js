'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FamiliaSchema = Schema ({
    name: String,
    padre: {
        id: {type: Schema.ObjectId, ref: "persona"},
        name: String
    },

    madre: {
        id: {type: Schema.ObjectId, ref: "persona"},
        name: String
    },

    encargado: {
        id: {type: Schema.ObjectId, ref: "persona"},
        name: String
    },
    hijos: [
        {
            idHijo: {type: Schema.ObjectId, ref: "persona"},
            name: String
        }
    ]

});

module.exports = mongoose.model('Familia', FamiliaSchema);