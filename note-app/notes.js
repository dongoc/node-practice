const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...';
}

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter(note => note.title === title); 모든 배열 요소를 돌기 때문에 비효율적
  const duplicateNote = notes.find(note => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    })
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'))
  } else {
    console.log(chalk.red.inverse('This title is duplicated!'))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {xc
    return [];
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  // const newNotes = notes.filter(note => note.title !== title);
  const newNotes = notes.find(note => note.title === title);

  if (!newNotes) {
    console.log(chalk.red.inverse('No note found!'))
  } else {
    console.log(chalk.green.inverse('Note Removed!'))
    saveNotes(newNotes);
  }
}

const listNotes = () => {
  const notes = loadNotes();
  const header = '  This is my BookShelf!  ';
  console.log(chalk.red.inverse(header));
  notes.forEach(note => console.log(note.title))
}

const readNote = (title) => {
  const notes = loadNotes();
  const foundedNote = notes.find(note => note.title === title);
  if (foundedNote) {
    console.log(chalk.green.inverse(foundedNote.title))
    console.log(foundedNote.body);
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
}