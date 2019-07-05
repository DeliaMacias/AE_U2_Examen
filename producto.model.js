var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    
    nombre:{
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    minimo: {
        type: Number,
        required: true
    },
    maximo:{
        type: Number,
        required: true
    },
    preciocompra: {
        type: Number,
        required: true
    },
    precioventa: {
        type: Number,
        required: true
    },
    utilidad: {
        type: Number,
        required: true
    }
});