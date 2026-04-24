// Load HTTP module to create web server
var http = require('http');

// Load File System module to read files
var fs = require('fs');

// Get port number from first command line argument
var portNumber = process.argv[2];

// Get file path from second command line argument
var fileToRead = process.argv[3];

// Create HTTP server
// The callback runs every time a request comes in
var server = http.createServer(function(request, response) {
    // Create a readable stream from the file
    // Reads file in chunks instead of loading entire file into memory
    var stream = fs.createReadStream(fileToRead);
    
    // Pipe the file stream directly to the HTTP response
    // This sends file contents to the client
    stream.pipe(response);
});

// Start server listening on specified port
server.listen(portNumber);