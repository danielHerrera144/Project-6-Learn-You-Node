// Store sum starting at 0
var result = 0

// Loop through all command line arguments (skip first 2 since 2 is where arguments start)
for (var i = 2; i < process.argv.length; i++)
  // Convert string to number and add to sum
  result += Number(process.argv[i])

// Print the result
console.log(result)