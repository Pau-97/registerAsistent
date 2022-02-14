const axios = require('axios');
const qs = require('qs');
const { config } = require('../config');
const { dateNowPeru } = require('../utils/date');
const { sendSMS } = require('./sendSMS');

const getTokenIT = async () => {
    try {

        let userData = qs.stringify({
            'email': 'pcarbajal@itdata.com.pe',
            'password': '@Pau1997' 
        });

        const loginConfig = {
            method: 'POST',
            url: `${config.assistance}/api/Token`,
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : userData
        };

        const response = await axios(loginConfig);
        const responseTOKEN = await JSON.stringify(response.data);
        const token = await JSON.parse(responseTOKEN)
        await sendSMS(`TOKEN OBTENIDO ITDATA ${dateNowPeru()}`);
        return token.data.token;
    } catch (error) {
        console.log('ERROR AL OBTENER TOKEN', error);
    }
}

const startRegisterIT = async () => {
    try {
        const data = await getTokenIT();
        const registerData = JSON.stringify({
            "tipo": 0,
            "latitud": -11.9173509,
            "longitud": -77.0218907
          });

        const startConfig = {
            method: 'POST',
            url: `${config.assistance}/api/Trabajador/marcar`,
            headers: { 
                'Authorization': `Bearer ${data}`,
                'Content-Type': 'application/json'
            },
            data : registerData
        };

        const response = await axios(startConfig);
        const responseData = await JSON.stringify(response.data);
        console.log(responseData);
        await sendSMS(`INICIO ACTIVIDADES ITDATA ${dateNowPeru()}`);
        return responseData;
    } catch (error) {
        console.log(error);
    }

}

const startBreakIT = async () => {
    try {
        const data = await getTokenIT();
        const registerData = JSON.stringify({
            "tipo": 1,
            "latitud": -11.9173509,
            "longitud": -77.0218907
          });

        const breakConfig = {
            method: 'POST',
            url: `${config.assistance}/api/Trabajador/marcar`,
            headers: { 
                'Authorization': `Bearer ${data}`,
                'Content-Type': 'application/json'
            },
            data : registerData
        };

        const response = await axios(breakConfig);
        const responseData = await JSON.stringify(response.data);
        console.log(responseData);
        await sendSMS(`INICIO BREAK ITDATA ${dateNowPeru()}`);
        return responseData;
    } catch (error) {
        console.log(error);
    }
}

const endBreakIT = async () => {
    try {
        const data = await getTokenIT();
        const registerData = JSON.stringify({
            "tipo": 2,
            "latitud": -11.9173509,
            "longitud": -77.0218907
          });

        const breakConfig = {
            method: 'POST',
            url: `${config.assistance}/api/Trabajador/marcar`,
            headers: { 
                'Authorization': `Bearer ${data}`,
                'Content-Type': 'application/json'
            },
            data : registerData
        };

        const response = await axios(breakConfig);
        const responseData = await JSON.stringify(response.data);
        console.log(responseData);
        await sendSMS(`FIN BREAK ITDATA ${dateNowPeru()}`);
        return responseData;
    } catch (error) {
        console.log(error);
    }
}

const endRegisterIT = async () => {
    try {
        const data = await getTokenIT();
        const registerData = JSON.stringify({
            "tipo": 3,
            "latitud": -11.9173509,
            "longitud": -77.0218907
          });

        const endConfig = {
            method: 'POST',
            url: `${config.assistance}/api/Trabajador/marcar`,
            headers: { 
                'Authorization': `Bearer ${data}`,
                'Content-Type': 'application/json'
            },
            data : registerData
        };

        const response = await axios(endConfig);
        const responseData = await JSON.stringify(response.data);
        await sendSMS(`FIN ACTIVIDADES ITDATA ${dateNowPeru()}`);
        console.log(responseData);
        return responseData;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getTokenIT,
    startRegisterIT,
    startBreakIT,
    endBreakIT,
    endRegisterIT,
}