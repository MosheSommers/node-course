console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;
var command = argv._[1];

console.log('Command: ', command);
console.log('Yarg: ', argv);

if(command === 'add'){
    notes.addnote(argv.title, argv.body);
}else if(command === 'list'){
   notes.getAll();
}else if(command === 'read'){
    notes.read(argv.title)
}else if (command === 'remove'){
    notes.remove(argv.title);
}else{
    console.log('Command not recognized');
}
