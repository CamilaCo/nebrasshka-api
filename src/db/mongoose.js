const mongoose = require ('mongoose');
const uri = "mongodb+srv://camilacortes:vaso123@cluster0.qrvlr.mongodb.net/nebrasshka?retryWrites=true&w=majority";

mongoose.connect(uri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
})