exports.ussd = ('/ussd', (req, res) => {
    const {sessionId, serviceCode, text} = req.body;
    let {phoneNumber} = req.body;
    phoneNumber = phoneNumber !== undefined ? phoneNumber : "0345648425";
    let response = "";

    switch(text){
        case "":
            response = `CON Bienvenue sur infoCovid19. Choisissez une option:
                        1. Nouvelle information 
                        2. Numeroako`;
            break;
        case "1":
            response = `CON Nouvelle information sur covid19. Choisissez une option:
                        1. Nombre de malade
                        2. Nombre de décès`;
            text = req.body.text;
            if(text === "1"){
                response = `END Le nombre de malade en ce moment est 128 000 personnes`;
            }else if(text === "2"){
                response = `END Le nombre de décès en ce moment est 24 000 personnes`;
            }
            break;
        case "2":
            response = `END Votre numéro téléphone est: ${phoneNumber}`;
            break;
        default:
            break;
    }

    res.set("Content-Type: text/plain");
    res.send(response);
});

exports.welcome = (req, res) => {
    res.set("Content-Type: text/plain");
    res.status(200).json({message: "Tongasoa eto amin'ny USSD an'i Zina!!"})
}