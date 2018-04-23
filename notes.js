console.log('Starting notes.js');
module.exports.age = 30;

var addnote = (title, body) => {
    console.log('Adding note', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var read = (title) => {
    console.log(`Reading from ${title}`);
};

var remove = (title) => {
    console.log(`Removing ${title} from notes`);
};

module.exports = {
    addnote,
    getAll,
    read,
    remove
}