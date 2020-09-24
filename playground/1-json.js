const fs = require('fs');

//----------------------------------------------------------------
// const book = {
//   title: 'Rabbit and Turtle',
//   author: 'Hailey'
// }

// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)
// // CONSOLE : {"title":"Rabbit and Turtle","author":"Hailey"}

// // const parseBook = JSON.parse(bookJSON);
// // console.log(parseBook.author)
// // CONSOLE : Hailey

// fs.writeFileSync('1-json.json', bookJSON)

//----------------------------------------------------------------

// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer)
// // CONSOLE : <Buffer 7b 22 74 69 74 6c 65 22 3a 22 52 61 62 62 69 74 20 61 6e 64 20 54 75 72 74 6c 65 22 2c 22 61 75 74 68 6f 72 22 3a 22 48 61 69 6c 65 79 22 7d>
// console.log(dataBuffer.toString())
// // CONSOLE : {"title":"Rabbit and Turtle","author":"Hailey"}

// const dataBuffer = fs.readFileSync('1-json.json').toString();
// const data = JSON.parse(dataBuffer)
// console.log(data.title)

//----------------------------------------------------------------

const dataJSON = fs.readFileSync('1-json.json').toString();
const data = JSON.parse(dataJSON)
data.name = 'Hailey';
data.age = 28;

const updateJson = JSON.stringify(data);
fs.writeFileSync('1-json.json', updateJson)