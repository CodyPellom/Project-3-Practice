require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

//connnect to mongoose
mongoose.connect(process.env.MONGODB_URI) //process.env is wired into node itself  for handling the need to have mult environments. DB will be diff in the local setting than the global setting. It alo allows for data to be hidden from public
const connection = mongoose.connection
connection.on('connected', () => {
    console.log('connect successfully')
})


connection.on('error', () => {
    console.log('error connecting', err)
})


//apply middleware
app.use(bodyParser.json())
app.use(express.static(`${__dirname}/client/build`))
//set up our routes

app.get('/', (req, res) => {
    res.send('Hello, world')
})

app.listen(3001, () => {
    console.log('app is listening on port 3001')
})
