// Declared path variable
const path = require("path")

// Module export to link the HTML pages of our applicaion to url's in the browser
module.exports = function(app){
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../notes.html"))
    });
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../index.html"))
    });
}