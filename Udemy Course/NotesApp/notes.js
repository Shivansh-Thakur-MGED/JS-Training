const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    //console.log(duplicateNotes.length)
    if(duplicateNotes.length === 0)
    {
        notes.push({
            title: title, 
            body: body
        })
        console.log(chalk.bgYellow.black('Adding note!'), chalk.yellow(title))
        console.log(body)
        saveNotes(notes)
    }
    else
    {
        console.log('Title already taken!')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title //if matchup need to remove it, therefore return if we want to remove it
    })
    saveNotes(notesToKeep)
    console.log(chalk.bgYellow.black('Removing a note!'), chalk.yellow(title))
}

const loadNotes = () => {
    try{
        const BufferedData = fs.readFileSync('notes.json')
        const arrayString = BufferedData.toString()
        return JSON.parse(arrayString)//returns array of JSON objects
    }
    catch(e){//if file already not created return empty array
        return []
    }
}

const saveNotes = (notes) => {
    const arrayJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', arrayJSON)
}

module.exports = {//returns objects with properties
    addNote : addNote, 
    loadNotes : loadNotes,
    removeNote : removeNote
}