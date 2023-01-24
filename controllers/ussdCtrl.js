exports.ussd = ('/ussd', (req, res) => {
    const {sessionId, serviceCode} = req.body;
    let {text,phoneNumber} = req.body;
    phoneNumber = phoneNumber !== undefined ? phoneNumber : "0345648425";
    let response = "";

    switch(text){
        /*Menu principale*/
        case "":
            response = `CON Bienvenue sur infoCovid19. Choisissez une option:
                        1. Nouvelle information 
                        2. Numeroako`;
            break;
        case "1": //Nouvelle information
            response = `CON Nouvelle information sur covid19. Choisissez une option:
                        1. Nombre de malade
                        2. Nombre de décès`;
            break;
        case "2": //Numeroako
            response = `END Votre numéro téléphone est: ${phoneNumber}`;
            break;

        /*First level menu 1*/
        case "1*1": //Nombre de malade
            response = `END Nombre de malade: 100`;
            break;
        case "1*2": //Nombre de décès
            response = `END Nombre de décès: 10`;
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