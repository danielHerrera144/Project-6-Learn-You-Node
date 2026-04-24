// Load HTTP module to create web server
var http = require('http');

// Load through2-map module to transform stream data
// This module processes data chunks and returns modified chunks
var map = require('through2-map');

// Get port number from first command line argument
// Example: node program.js 8000  → portNumber = 8000
var portNumber = process.argv[2];

// Create HTTP server
// The callback runs for every incoming request
var server = http.createServer(function(request, response) {
    // Take the incoming request body (a readable stream)
    // Pipe it through 'map' which transforms each chunk
    // Then pipe the transformed data to the response (writable stream)
    
    request.pipe(map(function(chunk) {
        // 'chunk' is a buffer containing a piece of the request body
        // Convert buffer to string and convert to uppercase
        // This transformed chunk gets sent to the response
        return chunk.toString().toUpperCase();
    })).pipe(response);
    // The response automatically ends when all chunks are sent
});

// Start the server listening on the specified port
// Server will continue running until manually stopped
server.listen(portNumber);