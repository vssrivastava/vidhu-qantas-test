const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

/**
 * API to parse CSV and return images
 */
app.get('/make/model/:id', (req, res) => {
    
});

app.post('/fetch-token', (req, res) => {
    fetch('https://api.imageintelligence.com/v2/oauth/token', {
        method: 'POST',
        body: JSON.stringify({
            "clientId": CLIENT_ID,
            "clientSecret": CLIENT_SECRET
        })
    }).then(resp => resp.json())
    .then(resp => {
        ACCESS_TOKEN = resp.accessToken;
        res.send({
            accessToken: resp.accessToken,
            expiresAt: resp.expiresAt
        });
    });
});
