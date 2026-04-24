// Load HTTP module to create web server
var http = require('http');

// Load URL module to parse request URLs
var url = require('url');

// Get port number from command line argument
var portNumber = process.argv[2];

// Function to format date as hour/minute/second object
function formatDate(date) {
    return {
        hour: date.getHours(),    // Get hour (0-23)
        minute: date.getMinutes(), // Get minutes (0-59)
        second: date.getSeconds()  // Get seconds (0-59)
    };
}

// Function to format date as Unix timestamp (milliseconds since 1970)
function formateUnix(date) {
    return {
        unixtime: date.getTime()  // Get milliseconds since Jan 1, 1970
    };
}

// Create HTTP server
var server = http.createServer(function(req, res) {
    // Set response header to indicate JSON content
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    // Parse the request URL
    // The 'true' flag makes query parameters become an object
    // Example: /api/parsetime?iso=2026-04-24T14:30:00
    var urlObj = url.parse(req.url, true);
    
    // Get the route path (like /api/parsetime or /api/unixtime)
    var route = urlObj.pathname;
    
    // Create Date object from ISO query parameter
    // Example: ?iso=2026-04-24T14:30:00
    var date = new Date(urlObj.query.iso);
    
    // Declare variable to store response data
    var data;
    
    // Route handling: choose which format to return
    if (route == '/api/parsetime') {
        // Return hour/minute/second format
        var data = formatDate(date);
    } else if(route == '/api/unixtime') {
        // Return Unix timestamp format
        var data = formateUnix(date);
    }
    
    // Convert data object to JSON string and send response
    res.end(JSON.stringify(data));
});

// Start server listening on specified port
server.listen(portNumber);