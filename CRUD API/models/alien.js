//schema for the database ie how data will be stored in db, structure of data
const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({//connect to database
    name: {
        type: String,
        required: true
    },
    tech:{
        type: String,
        required: true
    },
    sub:{
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('Alien', alienSchema)