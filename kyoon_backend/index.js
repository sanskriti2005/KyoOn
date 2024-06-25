// npm init: pacakge.json ----This is a node project
// npm i express: installed expressJS package ----Project uses express

const express = require("express");
const app = express();
const port = 8000;

// API: GET : / : return text "hello world!"
app.get("/",(req, res) =>{
    // req = request
    // res = respond
    res.send("Hello World!");
});

// Now we tell express our server port
