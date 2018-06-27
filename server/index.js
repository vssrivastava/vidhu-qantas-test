const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');

const PORT = 5000;

const app = express();
const router = express.Router();

const responses = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../src/data/responses.json'), 'utf8'))

app.use(bodyParser.json());

// start the app
app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }
    console.log("listening on " + PORT + "...");
});

app.get('/car-of-the-week', (req, res) => {
    res.send(responses.carOfTheWeek);
});

app.get('/car-makes', (req, res) => {
    res.send(responses.carOfTheWeek);
});

app.post('/fetch-api', (req, res) => {
    fetch('/api', {
        method: 'POST',
        body: JSON.stringify({})
    }).then(resp => resp.json())
    .then(resp => {
        res.send({ ...resp });
    });
});
app.use(router);
