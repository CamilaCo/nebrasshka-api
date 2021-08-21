const mongoose = require('mongoose');

const Producto = mongoose.model('Producto',{
    nombre:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required:true
    },
    categoria:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    img:{
        type: String,
        required: true,
    }
})

module.exports = Producto;