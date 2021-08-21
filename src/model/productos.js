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
        // validate(value){
        //     if(value == URL) {
        //         const formData = URL
        //         const body = Object.fromEntries(formData)
        //         const stringJson = JSON.stringify(body)
        //         throw new Error ('No se pueden ingresar nombres con mas de 10 caracateres')
        //     }
        // }
    }
})

module.exports = Producto;