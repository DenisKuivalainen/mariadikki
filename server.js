const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const url = require('./urlSet.js');
const port = process.env.PORT || 8080;

require('heroku-self-ping').default("https://mariadikki.herokuapp.com/");
 
const app = express();
 
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
 
app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/int', function (req, res){
    fetch(url.link(req.query.opt))
    .then(responce => responce.json())
    .then((json) => {
        res.send(json);
        console.log("Sent " + json.response.count + " objects to " + req.connection.remoteAddress + ".")
    }).catch(e => console.log(e));
})

app.get('/bgn', function(req, res){
    
})
 
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);