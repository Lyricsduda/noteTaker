// Declared variables
const fs = require("fs");
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function(app) {

    // Receive JSON data from notes
    app.get("/api/notes", function(req, res){
        res.json(data);
    });

    // Shows the JSON data when you go to the url localhost:port/api/notes/:id
    app.get("/api/notes/:id", function(req, res){
        res.json(Data[Number(req.params.id)]);
    });

    // Post's the user created note into the JSON file
    app.post("/api/notes", function(req, res) {

        let newNote = req.body;
        let uniqueId = (data.length).toString();
        console.log(uniqueId);
        newNote.id = uniqueId;
        data.push(newNote);
        
        fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
            if (err) throw (err);        
        }); 

        res.json(data);    

    });
    // Removes the file from the JSON DB file
    app.delete("/api/notes/:id", function(req, res) {

        let noteId = req.params.id;
        let newId = 0;
        console.log(`Deleting note with id ${noteId}`);
        data = data.filter(currentNote => {
           return currentNote.id != noteId;
        });
        for (currentNote of data) {
            currentNote.id = newId.toString();
            newId++;
        }
        fs.writeFileSync("./db/db.json", JSON.stringify(data));
        res.json(data);
    }); 
}