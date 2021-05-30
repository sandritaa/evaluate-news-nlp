// Add package for access environment variables. This is used to access the API KEY stored in .env
const dotenv = require('dotenv');
dotenv.config();

// Use express for our server side app and body-parser as middleware
const express = require('express')
const bodyParser = require('body-parser')

// Node-fetch enables us to use the fetch() function in NodeJS 
const fetch = require('node-fetch');

// Start up an instance of app
const app = express()

// Cors allows the browser and server to communicate without any security interruptions
const cors = require('cors');

// Enable our app to use the middleware in the app
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('dist'))

// Enable connection between server and client
const port = 3000;
app.listen(port, function () {
    console.log(`Server running on port: ${port}`)
})

// Set up API url and key
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY

// GET Route - we use this route to send the html to the server
app.get('/getRoute', function (req, res) {
    res.sendFile('dist/index.html')
})

// Initialize userInput variable
let userInput;

// POST Route - we use this route to send data to and fro the server
app.post('/postRoute', async function(req, res) {
    // Save the user input from the client side locally
    userInput = req.body.articleURL;
    console.log('Analyzing mood through API for: ' + userInput);

    // Call meaning cloud API
    const sentimentJSON = await fetch(baseURL + 'key=' + apiKey + '&url=' + userInput + '&lang=en')
    const sentiment = await sentimentJSON.json()

    console.log(baseURL + 'key=' + apiKey + '&url=' + userInput + '&lang=en')

    // Now the result from the API to the post route so that the client side can fetch it
    console.log('Sending data back to client');
    res.send(sentiment)
    console.log('Data sent to client')
})