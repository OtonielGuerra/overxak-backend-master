'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FamiliaSchema = Schema ({
    padre: {
        id: {type: Schema.ObjectId, ref: "persona"},
        name: String
    },

    madre: {
        id:{type: Schema.ObjectId, ref: "persona"},
        name: String
    },

    encargado: {
        id: {type: Schema.ObjectId, ref: "persona"},
        name: String
    },
    hijos: {
        id: {type: Schema.ObjectId, ref: "persona"},
        name: String
    }
});

module.exports = mongoose.model('Familia', FamiliaSchema);