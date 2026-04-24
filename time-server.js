// Load TCP networking module (creates TCP servers and clients)
var net = require('net');

// Get port number from first command line argument
var portNumber = process.argv[2];

// Function to add leading zero to single-digit numbers
function zeroPad(number) {
    // If number is less than 10 (like 5 instead of 05)
    if (number < 10) {
        // Add a '0' in front
        return '0' + number;
    }
    // Return number as-is if it's already two digits
    return number;
}

// Create a TCP server
// The callback runs every time a client connects
var server = net.createServer(function (socket) {
    // Get current date and time
    var date = new Date();
    
    // Extract each component of the date/time
    var year   = date.getFullYear();      // 2026
    var month  = zeroPad(date.getMonth() + 1);  // Month is 0-11, so add 1
    var day    = zeroPad(date.getDate());       // Day of month
    var hour   = zeroPad(date.getHours());      // Hour (0-23)
    var minute = zeroPad(date.getMinutes());    // Minutes
    
    // Build the date part: YYYY-MM-DD
    var dateString = year + '-' + month + '-' + day;
    // Add the time part: HH:MM
    dateString = dateString + ' ' + hour + ':' + minute;
    
    // Send the formatted date/time to client and close connection
    // Adding newline at the end (required by learnyounode)
    socket.end(dateString + '\n');
});

// Start listening for connections on the specified port
server.listen(portNumber);