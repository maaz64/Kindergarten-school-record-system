const mongoose = require('mongoose');

const Mongo = "mongodb+srv://mohdmaaz64:Abumaaz64@socialmediaapp.r5csei1.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(Mongo).then(()=>{
    console.log('Connected to the Database Successfully');
}).catch((err)=>{
    console.log('Error in connecting to database',err); 
});