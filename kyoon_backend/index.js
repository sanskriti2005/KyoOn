// npm init: pacakge.json ----This is a node project
// npm i express: installed expressJS package ----Project uses express

const express = require("express");
const app = express();
const port = 8000;

// API: GET : / : return text "hello world!"
app.get("/",(req, res) =>{
    // req = contains all data from request
    // res = contains all data from respond
    res.send("Hello World!");
});

// Now we tell express our server will run on port 8000
app.listen(port, () => {
    console.log("App is running on port " + port);
});
