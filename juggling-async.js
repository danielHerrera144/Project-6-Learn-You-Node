// Load HTTP module to make web requests
var http = require('http');

// Get all URLs from command line (skip first 2 arguments)
// Example: node program.js url1 url2 url3
var urls = process.argv.slice(2);

// Array to store results in original order
var output = [];

// Counter to track how many requests have completed
// This is better than checking output.length because output can have gaps
var completed = 0;

// Function to print all results in order
function printData(output) {
    // Loop through output array from index 0 to end
    for (var i = 0; i < output.length; i++) {
        // Print each URL's response
        console.log(output[i]);
    }
}

// Function to make HTTP request for a specific URL
function makeRequest(url, index) {
    // Create array to store data chunks for THIS request
    var chunks = [];
    
    // Make HTTP GET request to the URL
    http.get(url, function(response) {
        // Set encoding to UTF-8 so we get strings instead of buffers
        response.setEncoding('utf8');
        
        // Listen for each chunk of data as it arrives
        response.on('data', function(chunk) {
            // Add chunk to our chunks array
            chunks.push(chunk);
        });
        
        // Listen for the end of the response (all data received)
        response.on('end', function() {
            // Combine all chunks into one complete string
            var data = chunks.join('');
            
            // Store data at its correct index (preserves original order)
            output[index] = data;
            
            // Increment counter of completed requests
            completed++;
            
            // IMPORTANT: Check counter, NOT output.length
            // output.length can lie if requests finish out of order
            // Example: if request 2 finishes first, output.length becomes 3
            // but indices 0 and 1 are still empty!
            if (completed === urls.length) {
                // All requests finished, print results in order
                printData(output);
            }
        });
        
        // Handle any errors during the response
        response.on('error', console.error);
    }).on('error', console.error);  // Handle errors during the request
}

// Loop through all URLs from command line
for (var i = 0; i < urls.length; i++) {
    // Start a request for each URL, passing its index position
    makeRequest(urls[i], i);
}