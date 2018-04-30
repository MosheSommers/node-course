console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
    try{
       return JSON.parse(fs.readFileSync('notes.json'));
    } catch(e){
        return [];
    }
};
var saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};
var addnote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    
};

var getAll = () => {
    var fileContents = fetchNotes();
    fileContents.forEach(element => {
        console.log(element.title);
    });
};

var read = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) =>  note.title === title)
    return filteredNotes[0];
    
};

var remove = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) =>  note.title != title)
    saveNotes(filteredNotes)

    return notes.length > filteredNotes.length;
};

module.exports = {
    addnote,
    getAll,
    read,
    remove
}