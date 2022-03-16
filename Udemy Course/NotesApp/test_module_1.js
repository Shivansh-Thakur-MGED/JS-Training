//Exporting function through this module
console.log('<test_module_1> has been loaded...')

const add = function(a, b){
    return a+b
}

module.exports = add