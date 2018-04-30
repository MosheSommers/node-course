console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;
var command = argv._[0];


if(command === 'add'){
    console.log(notes.addnote(argv.title, argv.body) ? `You'r note ${argv.title} was added!` : `Note ${argv.title} already exists`)
}else if(command === 'list'){
   notes.getAll();
}else if(command === 'read'){
    var note = notes.read(argv.title);
    console.log(note ? `You'r note ${argv.title} has this body ${note.body}` : `Note ${argv.title} was not found`)
}else if (command === 'remove'){
    var note = notes.remove(argv.title);
    console.log(notes ? `You'r note ${argv.title} was removed!` : `Note ${argv.title} was not found`)
}else{
    console.log('Command not recognized');
}
