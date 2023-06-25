const express = require("express");
const port = 9000;

const app = express();
const db = require('./config/mongoose');

app.use('/',require('./routes/home'));

app.listen(port, (err) => {
    if (err) {
      console.log("Error in Listening the server", err);
    }

    console.log(`Server is running on port ${port}`);
});
