// Load file system module to read directory
var fs = require('fs');

// Load path module to get file extensions
var path = require('path');

// Export function that takes directory, extension, and callback
module.exports = function(directory, ext, callback) {
    // Add dot to extension (example: 'md' becomes '.md')
    ext = '.' + ext;
    
    // Read directory asynchronously
    fs.readdir(directory, function (err, files) {  
        // If error, call callback with error and stop
        if (err) {
            return callback(err)
        };
    
        // Create empty array for filtered results
        var filteredList = [];
        
        // Loop through each file in directory
        files.forEach(function(file) {
            // If file extension matches requested extension
            if (path.extname(file) === ext) {
                // Add file to filtered list
                filteredList.push(file);
            };
        });
    
        // Call callback with null error and filtered list
        return callback(null, filteredList);
    });
};