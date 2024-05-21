// fs:

// The fs (file system) object provides methods for interacting with the file system. It allows us to read, write, and modify files.

// readfile.js

const fs = require('fs'); 

// Read a file asynchronously
fs.readFile('sample.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log(data);  
  }
});

console.log("This message is displayed before the file is read.");
