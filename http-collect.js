// Load HTTP module to make web requests
var http = require('http');

// Get URL from first command line argument
var url = process.argv[2];

// Make HTTP GET request
http.get(url, function(response) {
    // Create empty array to store data chunks
    var chunks = [];
    
    // Listen for each chunk of data as it arrives
    response.on('data', function(chunk) {
        // Add chunk to array (keeps them as buffers)
        chunks.push(chunk);
    });
    
    // Listen for end of response (all data received)
    response.on('end', function() {
        // Combine all chunks into a single buffer
        var data = Buffer.concat(chunks);
        
        // Print total number of bytes/characters
        console.log(data.length);
        
        // Print complete response as string
        console.log(data.toString());
    });
});