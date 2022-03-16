let person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
person.color = {
    color : "red"
}
let person1 = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
person.color = {
    color : "red"
}

//let person2 = {...person};
let person2 = JSON.parse(JSON.stringify(person))

person.firstName = 'hardik'
person.color.color= 'blue'

console.log(person)
console.log(person2)