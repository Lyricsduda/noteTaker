// Delaered require's
const express = require("express");

// Express variable and local port
var app = express();
var PORT = process.env/PORT || 8080;

// Data parsing and assets
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));


// app listen and function
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});