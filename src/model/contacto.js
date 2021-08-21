const mongoose = require('mongoose');

const Contacto = mongoose.model('Contacto',{
  nombre:{
      type:String,
      required: true
  },
  correo:{
      type:String,
      required:true
  },
  telefono:{
      type: Number,
      required:true
  },
  mensaje:{
      type:String,
      required: true  
    }
})

module.exports = Contacto;