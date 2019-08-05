const express = require('express')
const app = express()
const http = require('http').createServer(app)
const port = process.env.PORT || 3000
const path = require('path')
const io = require('socket.io')(http)
const logger = require('./middleware/logger')
var routes = require('./routes')(io)

// body parser to parse request
app.use(express.json());
app.use(express.urlencoded({extended: false}))


// app.get('/',routes.index)
app.post('/notification/:organization',routes.index)

http.listen(port,function(){
    console.log('server running on port '+ port)
})