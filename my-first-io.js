// Load file system module
var fs = require('fs');

// Read file synchronously, returns buffer
var buf = fs.readFileSync(process.argv[2]);

// Convert buffer to string
var str = buf.toString();

// Split string by newlines into array
var strArray = str.split('\n');

// Print number of newlines (array length - 1)
console.log(strArray.length - 1);