const express = require('express')
const mongoose = require('mongoose')

const app = express() //start express framework
const url = 'mongodb://localhost/AlienDBex' // blink of DB

mongoose.connect(url, {useNewUrlParser : true})//to avoid warning
const con = mongoose.connection//handle

con.on('open', function(){//connected to DB fires this open event ie once mongoDB opened print Connected...
    console.log('Connected...')
})
 
app.use(express.json()) //to use the express framework

const alienRouter = require('./routes/aliens.js')//helps server to accept client requests, when req is received it is passed on to routes/aliens
app.use('/aliens', alienRouter) //for all aliens requests send req through this router

app.listen(9000, function(){ //listen to the server
    console.log('Server started listening to port 9000')
})