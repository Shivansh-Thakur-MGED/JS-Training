const name = '<test_module_0>'
console.log(name, 'has been loaded...')//This gets printed everytime, even without module.export

module.exports = name //allows name vaiable to be used by test_load_mod.js, i.e. increases scope of variable
//without module.export <test_load_mod_0> can't access 'name'