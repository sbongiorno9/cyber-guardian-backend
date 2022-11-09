const dotenv = require('dotenv')
//configure .env file
dotenv.config()

//import packages
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');

//create app
const app = express()

//bring in variables from .env file
const PORT = process.env.PORT
const DEV_URI = process.env.DEV_DB

mongoose.connect(DEV_URI).then(() => {
    console.log('Connected to Development Database')
})
.catch(err => {
    console.error(err)
})

app.use(cors())

//set app to listen on port in .env file
app.listen(PORT, () => {
    console.log(`Server Running`)
})



