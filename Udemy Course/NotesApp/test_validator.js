const v = require('validator')

console.log(v.isEmail('abc@example.com'))
console.log(v.isEmail('abc@example.co.in'))
console.log(v.isEmail('example.com'))

console.log(v.isURL('https://www.google.com'))
console.log(v.isURL('www.abc.com'))
