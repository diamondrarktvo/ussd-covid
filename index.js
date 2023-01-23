const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/ussd', (req, res) => {
    const {sessionId, serviceCode, phoneNumber, text} = req.body;
    let response = "";

    if(text === ""){
        response = `CON Bienvenue sur infoCovid19. Choisissez une option:
        1. Nouvelle information 
        2. Numeroako`;
    }else if(text === "1"){
        response = `CON Nouvelle information sur covid19. Choisissez une option:
        1. Nombre de malade
        2. Nombre de décès`;
    }else if(text === "2"){
        response = `END Votre numéro téléphone est: ${phoneNumber}`;
    }

    res.set("Content-Type: text/plain");
    res.send(response);
});
module.exports = app;