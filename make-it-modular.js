// Load custom module from same directory
var mymodule = require('./my-module');

// Get directory path from first command line argument
var directory = process.argv[2]  

// Get file extension from second command line argument
var ext = process.argv[3];

// Call module function with directory, extension, and callback
mymodule(directory, ext, function(err, files) {
    // If error exists, print it and exit
    if (err) {
        return console.error('error:', err);
    }
    
    // Loop through filtered files array
    files.forEach(function(file) {
        // Print each file name
        console.log(file);
    });
});