const { config } = require('../config');

const axios = require('axios');

const sendSMS = async (message) => {
    
    try {
        
        let data = JSON.stringify({
            "celular": config.numberPhone,
            "mensaje": message,
            "senderId": "123",
            "usuario": "TripleyWS",
            "password": "t13Nr1P%$20"
        });  

        const configAxios = {
            method: 'POST',
            url: `${config.smsEndpoint}/rest/webresources/envioSMS/smsv2`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
        };

        const response = await axios(configAxios);
        const responseSMS = await JSON.stringify(response.data);
        console.log(responseSMS)
        console.log('ENVIADO CON EXITO SMS');

    } catch (error) {
        console.log('ERROR AL INTENTAR ENVIAR SMS', error)
    }
}

module.exports = {
    sendSMS
}