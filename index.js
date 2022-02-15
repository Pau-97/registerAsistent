const { startRegisterIT, endRegisterIT, startBreakIT, endBreakIT } = require('./services/register');
const { timeNowPeru, dateNowPeru } = require('./utils/date');

const startRegister = async () => {
    try {
        console.log('INIT SCRIPT - INICIO ASISTENCIA', dateNowPeru());
        await startRegisterIT();
    } catch (error) {
        console.log(error);
    } finally {
        console.log('END SCRIPT - REGISTRO ASISTENCIA',dateNowPeru());
    }
}

const startBreak = async () => {
    try {
        console.log('INIT SCRIPT - INICIO BREAK',dateNowPeru());
        await startBreakIT();
    } catch (error) {
        console.log(error);
    } finally {
        console.log('END SCRIPT - REGISTRO BREAK',dateNowPeru());
    }
}

const endBreak = async () => {
    try {
        console.log('INIT SCRIPT - FIN BREAK', dateNowPeru());
        await endBreakIT();
    } catch (error) {
        console.log(error);
    } finally {
        console.log('END SCRIPT - REGISTRO FIN BREAK', dateNowPeru());
    }
}

const endRegister = async () => {
    try {
        console.log('INIT SCRIPT - FINAL ASISTENCIA', dateNowPeru());
        await endRegisterIT();
    } catch (error) {
        console.log(error);
    } finally {
        console.log('END SCRIPT - REGISTRO FINAL ASISTENCIA', dateNowPeru());
    }
}

const sleep = () => new Promise((resolve) => {
    let delay = parseInt(Math.random() * 15)
    setTimeout(resolve, delay)
});

const initStart = async () => {
    try {
        const time = timeNowPeru();
        console.log(time);
        switch(time) {
            case '08':
                await sleep();
                await startRegister();
                break;
            case '13':
                await sleep();
                await startBreak();
                break;
            case '14':
                await sleep();
                await endBreak();
                break;
            case '19':
                await sleep();
                await endRegister();
                break;
            default:
                await sleep();
                console.log('NO ENTRO A NINGUNA OPCION', dateNowPeru());
                break;
        }

    } catch (error) {
        console.log(error);
    }
}

initStart();