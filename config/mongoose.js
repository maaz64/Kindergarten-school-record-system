const mongoose = require('mongoose');

require('dotenv').config();
// console.log(process.env);
const Mongo = process.env.MONGOURL;

mongoose.connect(Mongo).then(()=>{
    console.log('Connected to the Database Successfully');
}).catch((err)=>{
    console.log('Error in connecting to database',err); 
});