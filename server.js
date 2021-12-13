var express = require('express');
var https = require('https');
var http = require('http');
const path = require("path");
var fs = require('fs');
var app = express();

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };

app.use(express.static(path.join(__dirname,"public")))

app.get('/version.json', function(req, res){
      res.status(200).sendFile(path.join(__dirname,"public/firmware.json"))
});


https.createServer(options, app).listen(8000);