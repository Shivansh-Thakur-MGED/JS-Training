const express = require('express')
const router = express.Router()
const Alien = require('../models/alien.js')

router.get('/', async(req, res) => {
    try{
        const query = await Alien.find()
        //res.send('List of all aliens...')//results in error - cannot set headers after request sent to client
        res.json(query) //response to be in json format or else res.send(query)
    }catch(err){
        res.send('Error ' + err)
    }
    //console.log('Get request')// shows in terminal
    //res.send('Got request')//sends this to client ie. displayed on postman
})

router.get('/:id', async(req, res) => {
    try{
        const query = await Alien.findById(req.params.id) //params - cuz id in url
        res.json(query) //response to be in json format or else res.send(query)
    }catch(err){
        res.send('Error ' + err)
    }
    //console.log('Get request')// shows in terminal
    //res.send('Got request')//sends this to client ie. displayed on postman
})

router.post('/', async(req, res) => { //for adding data to server
    const alien = new Alien({//data from client's side, format of that  based on schema, tells where to pick data from
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

try{
    const a1 = await alien.save()
    res.json(a1)//to see what was added to server
}catch(err){
    res.send('Error')
}
})

router.patch('/:id', async(req, res) =>{
    try{
            const alien = await Alien.findById(req.params.id)
            alien.sub = req.body.sub
            const a1 = await alien.save()
            res.json(a1)//returns the result / patch
    }catch(err){
        res.send('Error') 
    }
})

router.delete('/:id', async(req, res)=>{
    try{
            const alien = await Alien.findById(req.params.id)
            const a1 = await alien.delete()
            res.json(a1)
    }catch(err){
        res.send("Error")
    }
})

module.exports = router //accessible in the app.js file