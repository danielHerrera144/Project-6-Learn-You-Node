// Import the File System module for file/directory operations
var fs = require('fs');

// Import the Path module for handling file paths and extensions
var path = require('path');

// Get the directory path from command line argument (index 2)
// Example: node script.js /myfolder txt -> directory = '/myfolder'
var directory = process.argv[2];

// Get the file extension from command line argument (index 3)
// Add a dot at the beginning so '.txt' instead of just 'txt'
var ext = '.' + process.argv[3];

// Asynchronously read the contents of the directory
fs.readdir(directory, function (err, files) {
    // If there's an error (e.g., directory doesn't exist, permission denied)
    if (err) {
        // Log the error to the console and exit the callback
        return console.log(err);
    }

    // Loop through each file in the directory
    files.forEach(function(file) {
        // Check if the file's extension matches the one we're looking for
        // path.extname(file) returns the extension including the dot (e.g., '.txt')
        if (path.extname(file) === ext) {
            // If it matches, print just the filename (not the full path)
            console.log(file);
        };
    });
});