const { startRegisterIT, endRegisterIT, startBreakIT, endBreakIT } = require('./services/register');
const { timeNowPeru } = require('./utils/date');

const startRegister = async () => {
    try {
        console.log('INIT SCRIPT - ASISTENCIA');
        await startRegisterIT();
    } catch (error) {
        console.log(error);
    } finally {
        console.log('END SCRIPT - ASISTENCIA');
    }
}

const startBreak = async () => {
    try {
        console.log('INIT SCRIPT - ASISTENCIA');
        await startBreakIT();
    } catch (error) {
        console.log(error);
    } finally {
        console.log('END SCRIPT - ASISTENCIA');
    }
}

const endBreak = async () => {
    try {
        console.log('INIT SCRIPT - ASISTENCIA');
        await endBreakIT();
    } catch (error) {
        console.log(error);
    } finally {
        console.log('END SCRIPT - ASISTENCIA');
    }
}

const endRegister = async () => {
    try {
        console.log('INIT SCRIPT - ASISTENCIA');
        await endRegisterIT();
    } catch (error) {
        console.log(error);
    } finally {
        console.log('END SCRIPT - ASISTENCIA');
    }
}

const initStart = async () => {
    try {
        const time = timeNowPeru();

        switch(time) {
            case 8:
                await startRegister();
                break;
            case 13:
                await startBreak();
                break;
            case 14:
                await endBreak();
                break;
            case 19:
                await endRegister();
                break;
            default:
                console.log('NO ENTRO A NINGUNA OPCION');
                break;
        }

    } catch (error) {
        console.log(error);
    }
}

initStart();