console.log('Starting notes.js');
const fs = require('fs');

var addnote = (title, body) => {
    var notes = [];
   
    var note = {
        title,
        body
    }
    try{
        var file = fs.readFileSync('notes.json');
        notes = JSON.parse(file);
    } catch(e){}
    
    notes.push(note);
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

var getAll = () => {
    var fileContents = JSON.parse(fs.readFileSync('notes.json'));
    fileContents.forEach(element => {
        console.log(element.title);
    });
};

var read = (title) => {
    var notes = JSON.parse(fs.readFileSync('notes.json'));
    notes.forEach(element => {
        if(element.title === title){
            console.log(`Reading from ${title} , ${element.body}`);
        }
    });
    
};

var remove = (title) => {
    var notes = JSON.parse(fs.readFileSync('notes.json'));
    notes.forEach(function(element,index ) {
        if(element.title === title){
            notes.splice(index);
        }
    });
    notesString = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesString);
    console.log(`Removing ${title} from notes`);
};

module.exports = {
    addnote,
    getAll,
    read,
    remove
}