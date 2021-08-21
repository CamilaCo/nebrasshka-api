// Levantar el server con nodemon index.js, para asi poder usar la API

require('./db/mongoose'); //Acá requiero la conexion hecha en mongooase
const express = require ('express');
const app = express ();
const port = process.env.PORT || 3001;
const Producto = require ('./model/productos');
const Contacto = require ('./model/contacto');
const cors = require('cors')

app.use(express.json());
app.use(cors())


/*------------Acá empieza para productos-----*/

// Para mostrar los productos utilizo el metodo 'get
app.get('/productos', (req,res) => {
  
    Producto.find(
        
    )
    .then((result) => {
        res.send(result)
    })
    .catch(err => res.status(404).send(err));
})

// Para buscar productos por categoria.
app.get('/productos/:categoria', (req,res) => {
    const categoria = req.params.categoria
    Producto.find(
        {categoria: categoria}
    )
    .then((result) => {
        res.send(result)
    })
    .catch(err => res.status(404).send(err));
})

// Para crear los productos utilizo el metodo 'post'
app.post('/productos', (req,res) =>{
    const producto = new Producto(req.body)
    producto.save()
    .then(() => {
        res.status(201).send(dish);
    })
    .catch((err) => {
        res.status(400).send(err);
    });
});
// Para buscar un producto en particular:
app.get('/productos/:id',(req,res) =>{
    const _id = req.params.id    
    Producto.findById(_id)
    .then((producto) => {
        if(!producto){
            return res.status(404).send("Product not found")
        }
        res.status(200).send(producto)
    })
    .catch(err => res.status(500).send(err))
})

// Para actualizar un producto utilizo el metodo 'patch'
app.patch('/productos/:id', (req,res) => {
    const _id = req.params.id;
    Producto.findByIdAndUpdate(_id, req.body, {new:true, runValidators:true}).then((producto) => {
        if(!producto){
            return res.status(404).send();
        }
        res.send(producto);
    }).catch(err => {
        res.status(404).send(err);
    })
})

/*---------Acá empieza para contacto--------*/

app.get('/contacto', (req,res) => {
    Contacto.find()
    .then((result) => {
        res.send(result)
    })
    .catch(err => res.status(404).send(err));
})

// Para crear los productos utilizo el metodo 'post'
app.post('/contacto', (req,res) =>{
    const contacto = new Contacto(req.body)
    contacto.save()
    .then(() => {
        res.status(201).send(contacto);
    })
    .catch((err) => {
        res.status(400).send(err);
    });
});
// Para buscar un producto en particular:
app.get('/contacto/:id',(req,res) =>{
    const _id = req.params.id    
    Contacto.findById(_id)
    .then((contacto) => {
        if(!contacto){
            return res.status(404).send("Product not found")
        }
        res.status(200).send(contacto)
    })
    .catch(err => res.status(500).send(err))
})

// Para actualizar un producto utilizo el metodo 'patch'
app.patch('/contacto/:id', (req,res) => {
    const _id = req.params.id;
    Contacto.findByIdAndUpdate(_id, req.body, {new:true, runValidators:true}).then((contacto) => {
        if(!contacto){
            return res.status(404).send();
        }
        res.send(contacto);
    }).catch(err => {
        res.status(404).send(err);
    })
})

app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});