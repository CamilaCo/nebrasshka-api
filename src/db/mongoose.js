const mongoose = require ('mongoose');
// const uri = "mongodb+srv://camilacortes:vaso123@cluster0.qrvlr.mongodb.net/ne?retryWrites=true&w=majority";

mongoose.connect('mongodb://127.0.0.1:27017/nebrasshka',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})