const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
const data = dataBuffer.toString()
const dataParsed = JSON.parse(data)

//console.log(dataBuffer)
//console.log(data.name) - undefined (String type)

dataParsed.name = "Shivansh"
dataParsed.age = 21

//console.log(dataParsed)

const dataJSON = JSON.stringify(dataParsed)
fs.writeFileSync('1-json.json', dataJSON)