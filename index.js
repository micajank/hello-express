const express = require('express');
// imports express

const app = express()
// creates an instance of an express app for us to be able to call express methods on

// home route
// first arg is url pattern
// second arg is callback: what do we want to do with the request and response object?
app.get('/', (req, res) => {
    // send a string to the client who made the request
    res.send("You've reached the home route!")
})


app.get('/querystring', (req, res) => {
    let printOut = ''
    for (let key in req.query) {
        printOut += `${key}: ${req.query[key]} <br />`
    }
    res.send(`Here's what they sent: ${printOut}`);
})

app.get('/about', (req, res) => {
    res.send('This is a practice app to learn about express routes.')
})

app.get('/:input', (req, res) => {
    console.log(req.params)
})

app.get('/greet/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}!`)
})

app.get('/greet/:first/:last', (req, res) => {
    res.send(`HowdyHoh ${req.params.first} ${req.params.last}! `)
})

app.get('/multiply/:x/:y', (req, res) => {
    res.send(`The answer is ${req.params.x*req.params.y}.`)
})

app.get('/add/:x/:y', (req, res) => {
    res.send(`The answer is ${+req.params.x + +req.params.y}.`)
})

app.get('/add/*', (req, res) => {
    let myParams = req.params[0].split("/");
    let result = myParams.reduce((total, num) => {
        return total + parseInt(num)
    }, 0)
    res.send(`The answer is ${result}.`);
})

// listen for incoming requests on port 8000
app.listen(8000, () => {
    console.log("Listening to the sweet sounds of port 8000");
})