const express = require('express');
const path = require('path');
//const cors = require("cors");
const app = express(),
bodyParser = require("body-parser");
port =3080;
/*
const allowedOrigins = ["http://localhost:3000","http://localhost:3080"];

    app.use(
        cors({
            origin: function(origin, callback) {
                if (!origin) return callback(null, true);
                if (allowedOrigins.indexOf(origin) === -1) {
                    var msg =
                        "The CORS policy for this site does not " +
                        "allow access from the specified Origin.";
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            }
        })
    ); 
*/
var cose = ["uno","due","tre"];

app.use(bodyParser.json());
//app.use(express.static(process.cwd()+"/tobuy/dist/angular-nodejs-example/"));
app.use(express.static(path.join(__dirname, '../tobuy/build')));

app.get('/api/cose', (req,res) => {
    console.log('api/cose called!')
    res.json(cose);
});

app.post('/api/cosa', (req,res) => {
    const cosa = req.body.cosa;
    console.log('Aggiungendo:::::',cosa);
    cose.push(cosa);
    res.json(cose);
});

app.post('/api/del/i', (req,res) => {
    const i =req.body.i;
    console.log('Eliminando:::::',i);
    cose.splice(i,1);
    res.json(cose);
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../tobuy/build/index.html'));
  });
  
  app.listen(port, () => {
      console.log(`Server listening on the port::${port}`);
  });