// Load Node.js built-in 'fs' (file system) module to work with files
var fs = require('fs');

// Asynchronously read the entire file at the path provided as first command-line argument
// process.argv[2] = first argument after the script name (the file path)
fs.readFile(process.argv[2], function(err, data) {
    // Check if there was NO error reading the file
    // If err exists, skip the counting logic
    if (!err) {
        // data is a Buffer object (raw binary data)
        // Convert it to a regular string using UTF-8 encoding
        var str = data.toString();
        
        // Split the string by newline character '\n' to create an array
        // Example: "a\nb\nc" becomes ['a', 'b', 'c']
        var strArray = str.split('\n');
        
        // Number of newlines = (number of array elements) - 1
        // Example: 3 lines = 2 newlines, so length-1 = 2
        // Print result to console (stdout)
        console.log(strArray.length - 1);
    };
});