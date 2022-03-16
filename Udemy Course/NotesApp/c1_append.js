const fs =  require('fs')
fs.appendFileSync('notes.txt', '\nI just used ES6 importing function \\\"O"/')//Appends file at EOF

/**
const fs = require('fs')
fs.writeFileSync('notes.txt', 'This file was created by Node.js')
*/