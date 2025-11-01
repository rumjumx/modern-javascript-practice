// Create an array of objects called library. Add 3 objects with a property of title, author, status.

// Step 1
const library = [
  {
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The Magicians',
    author: 'Lev Grossman',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Othello',
    author: 'William Shakespeare',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
// set the read value for all of them to true

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
// Destructure the title from the fist book and rename the variable to firstBook
const { title: firstBook } = library[0];

// Step 4
// Turn the library object into a JSON string
const libraryJSON = JSON.stringify(library);
