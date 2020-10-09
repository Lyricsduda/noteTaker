// Declared variables
const fs = require("fs");
var data = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));

module.exports = fuction(app) {

    // Receive JSON data from notes
    app.get("/api/notes", function(req, res){
        res.json(data);
    });

    // Shows the JSON data when you go to the url localhost:port/api/notes/:id
    app.get("/api/notes/:id", function(req, res){
        res.json(Data[Number(req.params.id)]);
    });

}