exports.ussd =
  ("/ussd",
  (req, res) => {
    const { sessionId, serviceCode } = req.body;
    let { text, phoneNumber } = req.body;
    phoneNumber = phoneNumber !== undefined ? phoneNumber : "0345648425";
    let response = "";
    let region_part_one = `1-Analamanga
      2-Vakinankaratra
      3-Bongolava
      4-SAVA
      5-DIANA
      6-Amoron'i Mania
      7-Haute Matsiatra
      8-Vatovavy-Fitovinany
      9-Atsimo-Atsinanana
      10-Ihorombe
      11-Sofia
      `;
      let region_part_two = `
      12-Boeny
      13-Betsiboka
      14-Melaky
      15-Alaotra-Mangoro
      16-Atsinanana
      17-Analanjirofo
      18-Menabe
      19-Atsimo-Andrefana
      20-Androy
      21-Anosy
      22-Itasy`;

    switch (text) {
      /*Menu principale*/
      case "":
        response = `CON Bienvenue sur infoCovid19. Choisissez une option:
                        1. Statisique covid19 
                        2. Centre de vaccination
                        3. Centre des hopitaux`;
        break;
      case "1": //Nouvelle information
        response = `CON Statistique sur le covid19 :
                        1. Nombre de malade par région
                        2. Nombre de décès par région
                        3. Nombre total des guéris
                        4. Nombre total des cas`;
        break;
      case "2": //Centre de vaccination
        response = `CON Centre de vaccination par région: 
        ${region_part_one}
        0-suivant`;
        break;
      case "3": //Centre des hopitaux
        response = `CON Centre des hopitaux par région: 
        ${region_part_one}
        0-suivant`;
        break;

      /*First level menu 1 dans nouvelle information*/
      case "1*1": //Nombre de malade
        response = `CON Nombre de malade par région: 
        ${region_part_one}`;
        break;
      case "1*2": //Nombre de décès
        response = `CON Nombre de décès par région: 
        ${region_part_one}`;
        break;
      case "1*3": //Nombre total des guéris
        response = `END Nombre total des guéris: 200`;
        break;
      case "1*4": //Nombre total des cas
        response = `END Nombre total des cas: 910`;
        break;

      /*==================================================*/
      /*Second level menu 1*1 dans nombre de malade par région*/
      case "1*1*1": //Analamanga
        response = `END Nombre de malade à Analamanga: 500`;
        break;
      case "1*1*2": //Vakinankaratra
        response = `END Nombre de malade à Vakinankaratra: 90`;
        break;
      case "1*1*3": //Bongolava
        response = `END Nombre de malade à Bongolava: 5`;
        break;
      case "1*1*7": //Haute Matsiatra
        response = `END Nombre de malade à Haute Matsiatra: 10`;
        break;
      case "1*1*18": //Menabe
        response = `END Nombre de malade à Menabe: 20`;
        break;

      /*Second level menu 2*1 dans nombre de décès par région*/
      case "1*2*1": //Analamanga
        response = `END Nombre de décès à Analamanga: 20`;
        break;
      case "1*2*2": //Vakinankaratra
        response = `END Nombre de décès à Vakinankaratra: 10`;
        break;
      case "1*2*6": //Amoron'i Mania
        response = `END Nombre de décès à Amorin'i Mania: 0`;
        break;
      case "1*2*15": //Alaotra-Mangoro
        response = `END Nombre de décès à Alaotra-Mangoro: 25`;
        break;
      case "1*2*21": //Anosy
        response = `END Nombre de décès à Anosy: 5`;
        break;
      case "1*2*22": //Itasy
        response = `END Nombre de décès à Itasy: 2`;
        break;

      /*==================================================*/

      /*First level menu 2 dans centre de vaccination*/
      case "2*1": //Analamanga
        response = `END Les centres de vaccination à Analamanga:
            1. Centre de vaccination de  Mahamasina.
            2. Centre de vaccination de Ankatso.
            3. Centre de vaccination de Analamahitsy.`;
        break;
      case "2*2": //Vakinankaratra
        response = `END Centre de vaccination à Vakinankaratra:
            1. Centre de vaccination d'andranomafana.
            2. Centre de vaccination d'andranomadio.`;
        break;
      case "2*8": //Vatovavy-Fitovinany
        response = `END Les centres de vaccination à Vatovavy-Fitovinany:
            1. Hopital d'andovosira.`;
        break;
      case"2*0": //suivant
        response = `CON Centre de vaccination par région:
        ${region_part_two}`;

      /*First level menu 3 dans centre des hopitaux*/
      case "3*1": //Analamanga
        response = `END Les centres des hopitaux à Analamanga:
                1. Hopital Manarapenitra andotapenaka.
                2. HJRA.
                3. Hopital Soavinandrina.`;
        break;
      case "3*2": //Vakinankaratra
        response = `END Les centres des hopitaux à Vakinankaratra:
                1. Hopital d'Andranomadio.
                2. Centre de traitement thermal d'Andranomafana.
                3. Hopital Atsimo`;
        break;
      case "3*12": //Boeny
        response = `END Les centres des hopitaux à Boeny:
                1. Hopital d'Androvo.
                2. Hopital Manarapenitra.`;
        break;
      default:
        break;
    }

    res.set("Content-Type: text/plain");
    res.send(response);
  });

exports.welcome = (req, res) => {
  res.set("Content-Type: text/plain");
  res.status(200).json({ message: "Tongasoa eto amin'ny USSD an'i Zina!!" });
};
