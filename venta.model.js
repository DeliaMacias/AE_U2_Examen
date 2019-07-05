var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    
    folio:{
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    productos: [
        {
            productoId:{ 
                type: mongoose.Schema.Types.ObjectId, ref: 'Producto',
                required: true
            },
            costoventa: {
                type: mongoose.Schema.Types.ObjectId, ref: 'Producto',
                required: true
            }
        }
        
    ],
    cantidad: {
        type: Number,
        required: true
    },
    subtotal: {
        type: Number,
        required: true
    },
    iva:{
        type: Number,
        required: true

    },
    total:{
        type: Number,
        required: true

    }
});