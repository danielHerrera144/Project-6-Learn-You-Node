// Load HTTP module to make web requests
var http = require('http');

// Get URL from first command line argument
var url = process.argv[2];

// Make HTTP GET request to the URL
http.get(url, function(response) {
    // Set response encoding to UTF-8 (returns string instead of buffer)
    response.setEncoding('utf8');
    
    // Listen for errors (like network issues)
    response.on('error', function(err) {
       console.error(err);
    });
    
    // Listen for data chunks and print them as they arrive
    response.on('data', function(data) {
        console.log(data);
    });
});