const moment = require('moment-timezone');

const dateNowPeru = () => {
    try {
        const datePeru = moment().tz('America/Lima').format('DD-MM-YYYY HH:mm:ss');
        return datePeru;
    } catch (error) {
        console.log(error);
    }
}

const timeNowPeru = () => {
    try {
        const datePeru = moment().tz('America/Lima').format('HH');
        return datePeru;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    dateNowPeru,
    timeNowPeru
}