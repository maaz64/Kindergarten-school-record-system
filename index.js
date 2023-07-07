const express = require("express");
const port = 9000;

const app = express();
const db = require('./config/mongoose');


// Middleware to reads forms data 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',require('./routes/studentRoutes'));

app.listen(port, (err) => {
    if (err) {
      console.log("Error in Listening the server", err);
    }

    console.log(`Server is running on port ${port}`);
});
