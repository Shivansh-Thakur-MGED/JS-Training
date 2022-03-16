const fs = require('fs')

/* book = {
    title : 'Ego is the enemy',
    author : 'Ryan holiday'
}

const bookJSON = JSON.stringify(book) //Object to JSON string rep
console.log(bookJSON)
const parsedData = JSON.parse(bookJSON) //JSON string rep. back to object
console.log(parsedData.author)

fs.writeFileSync('1-json.json', bookJSON) */

const BufferedData = fs.readFileSync('1-json.json')
console.log(BufferedData)
const BookJSON = BufferedData.toString()
console.log(BookJSON)