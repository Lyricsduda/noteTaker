// Delaered require's
const express = require("express");
const fs = require("fs");

// Express variable and local port
var app = express();
var PORT = process.env.PORT || 8080;

// Data parsing and assets
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./public/assets"));

// Requier's for the index and ip routes
require("./public/routes/indexRoutes")(app);
require("./public/routes/apiRoutes")(app);

// app listen and function
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});