//--------------------fs------------------------
// const fs = require('fs');

// NOTE fs.writeFileSync : text 파일 생성!
// text 내용을 덮어쓸 수 있다.
// fs.writeFileSync('notes.txt', 'This is created by Node.js!');
// fs.writeFileSync('notes.txt', 'My name is Hailey.');

// ----challenge-----
// NOTE append하는 첫 문장에 띄어쓰기 필요 
// fs.appendFileSync('notes.txt', ' this is appended to the original notes.txt file.');

// console.log(name)

//---------------------module.exports-----------------------
// NOTE own scope (module.exports가 있어야 선언된 변수를 불러올 수 있다.)
// require('./utils.js') --> name is not defined
// const name = require('./utils.js')
// const add = require('./utils.js')
// const sum = add(4, -2);
// console.log(sum)

// ----challenge-------
// const getNotes = require('./notes.js')
// let msg = getNotes();
// console.log(msg)


//------------------------validator.js--------------------------------
// const validator = require('validator');

// console.log(validator.isEmail('hailey@gmail.com')) // true
// console.log(validator.isEmail('gmail.com')) // false
// console.log(validator.isURL('https://www.naver.com')) // true
// console.log(validator.isURL('navercom')) // false

//----------------------------chalk.js-----------------------
const chalk = require('chalk');

// console.log(chalk.green('Hello world!'));
// console.log(chalk.green.inverse('Hello world!'));
// console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
// console.log(chalk.blue.bgRed.bold('Hello world!'));
// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// const greenMsg = (msg) => { 
//   console.log(chalk.green(msg));
// }
// greenMsg("That's it!")

//----------------------------nodemon.js-----------------------------------
// NOTE : no require for global installization
// NOTE exit : ctrl + c
// console.log('auto')
// console.log('save')

//-------------------------------process.argv---------------------------------
// arguments vector?
// console.log(process.argv)
// console.log(process.argv[2])
// node app.js hailey -> result : 
// [
//   '/usr/local/bin/node', // node path
//   '/Users/dongoc/personal/udemy-node/note-app/app.js', // file path
//   'hailey' // 
// ]

// const command = process.argv[2]

// if (command === 'add') {
//   console.log('Adding note')
// } else if (command === 'remove') {
//   console.log('Removing note')
// }

// node app.js --title="this is my title"

//-------------------------------yargs------------------------------------------
const notes = require('./notes.js')
const yargs = require('yargs');
// console.log(process.argv)
// console.log(yargs.argv)
// [
//   '/usr/local/bin/node',
//   '/Users/dongoc/personal/udemy-node/note-app/app.js'
// ]
// { 
//  _: [], 
//  '$0': 'app.js' 
// }

// node app.js --title="this is my title"
// { _: [], title: 'this is my title', '$0': 'app.js' }

// SECTION customize yargs version
yargs.version('1.1.0')

// node.js --help

// SECTION : Create add command
// node app.js add 
// { _: [ 'add' ], '$0': 'app.js' }
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // 필수 인자를 받지 못했습니다: title
      type: 'string', // 설정을 하지 않으면 title이 없을 때 불리언으로 들어간다
    },
    body: {
      describe: 'Note body',
      demandOption: true, // 필수 인자를 받지 못했습니다: title
      type: 'string', // 설정을 하지 않으면 title이 없을 때 불리언으로 들어간다
    }
  },
  handler(argv) {
    // console.log('title: ', argv.title)
    // console.log('body: ', argv.body)
    notes.addNote(argv.title, argv.body)
  }
})
// node app.js add --title="shopping"
// Adding a new note! { _: [ 'add' ], title: 'shopping', '$0': 'app.js' }
// { _: [ 'add' ], title: 'shopping', '$0': 'app.js' }


// TERMINAL : node app.js add --title="my title" --body="this is body"

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // 필수 인자를 받지 못했습니다: title
      type: 'string', // 설정을 하지 않으면 title이 없을 때 불리언으로 들어간다
    },
  },
  handler(argv) {
    console.log('Removing a new note!')
    notes.removeNote(argv.title)
  }
})

// create list command
yargs.command({
  command: 'list',
  describe: 'List a new note',
  handler() {
    console.log('Listing out all notes!')
    notes.listNotes();
  }
})

// create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // 필수 인자를 받지 못했습니다: title
      type: 'string', // 설정을 하지 않으면 title이 없을 때 불리언으로 들어간다
    },
  },
  handler(argv) {
    console.log('Reading a note!')
    notes.readNote(argv.title);
  }
})
// add, remove, read, list
// console.log(yargs.argv)

yargs.parse(); // init같은 느낌?