//Makes use of multiple files

//require('./test_module.js') //loads test_module.js
const exp = require('./test_module_0.js') //exported/loaded variable gets stored inside 'exp'
const name = '<test_load_mod_0>'
console.log('Accessing', exp, 'from', name, '...')